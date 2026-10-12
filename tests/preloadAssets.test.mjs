import assert from "node:assert/strict";
import { readdir } from "node:fs/promises";
import { tmpdir } from "node:os";
import { join, relative, sep } from "node:path";
import test from "node:test";
import { createContext, SourceTextModule } from "node:vm";
import { createServer } from "vite";

async function compilePreloader(base = "/") {
  const server = await createServer({
    configFile: false,
    cacheDir: join(tmpdir(), "my-portfolio-preloader-tests"),
    base,
    appType: "custom",
    server: { middlewareMode: true, hmr: false, ws: false },
    optimizeDeps: { noDiscovery: true, include: [] },
  });
  try {
    return (await server.transformRequest("/src/utils/preloadAssets.js")).code;
  } finally {
    await server.close();
  }
}

async function publicFiles(directory = join(process.cwd(), "public")) {
  const paths = [];
  for (const entry of await readdir(directory, { withFileTypes: true })) {
    if (entry.name.startsWith(".")) continue;
    const path = join(directory, entry.name);
    if (entry.isDirectory()) paths.push(...await publicFiles(path));
    else paths.push(relative(join(process.cwd(), "public"), path).split(sep).join("/"));
  }
  return paths;
}

const code = await compilePreloader();

async function loadPreloader({ source = code, failedImage, failFirstFile = false } = {}) {
  const images = [];
  const fetches = [];
  const objectUrls = [];
  const context = createContext({
    Image: class {
      set src(url) {
        images.push({ url, priority: this.fetchPriority });
        queueMicrotask(() => url === failedImage ? this.onerror() : this.onload());
      }
    },
    fetch: async (url) => {
      fetches.push(url);
      return {
        ok: !(failFirstFile && fetches.length === 1),
        status: failFirstFile && fetches.length === 1 ? 503 : 200,
        blob: async () => ({ url }),
      };
    },
    URL: {
      createObjectURL(blob) {
        objectUrls.push(blob);
        return `blob:cached-${objectUrls.length}`;
      },
    },
  });
  const module = new SourceTextModule(source, { context });
  await module.link(() => { throw new Error("Preloader should not import assets as modules"); });
  await module.evaluate();
  return { api: module.namespace, images, fetches, objectUrls };
}

test("downloads every public asset at startup, without opening windows", async () => {
  const { api, images, fetches } = await loadPreloader();
  const ready = api.preloadAssets();
  const requested = [...images.map(({ url }) => url), ...fetches].sort();
  const expected = (await publicFiles()).map((path) => `/${path}`).sort();
  assert.deepEqual(requested, expected);
  assert.ok(images.some(({ url }) => url === "/images/codeu_dashboard.png"));
  assert.ok(images.every(({ priority }) => priority === "low"));
  assert.ok((await ready).every(({ status }) => status === "fulfilled"));
});

test("shares startup work and reuses the PDF for early opens and reopens", async () => {
  const { api, images, fetches, objectUrls } = await loadPreloader();
  const ready = api.preloadAssets();
  const count = images.length;
  assert.equal(api.preloadAssets(), ready);
  const firstOpen = api.getPreloadedFile("/files/resume.pdf");
  assert.equal(api.getPreloadedFile("/files/resume.pdf"), firstOpen);
  await ready;
  assert.equal(await firstOpen, "blob:cached-1");
  assert.equal(await api.getPreloadedFile("/files/resume.pdf"), "blob:cached-1");
  assert.equal(images.length, count);
  assert.deepEqual(fetches, ["/files/resume.pdf"]);
  assert.equal(objectUrls.length, 1);
});

test("one failed asset does not block others, and failed files can retry", async () => {
  const { api, fetches } = await loadPreloader({
    failedImage: "/images/codeu_dashboard.png",
    failFirstFile: true,
  });
  const results = await api.preloadAssets();
  assert.equal(results.filter(({ status }) => status === "rejected").length, 2);
  assert.ok(results.some(({ status }) => status === "fulfilled"));
  assert.equal(await api.getPreloadedFile("/files/resume.pdf"), "blob:cached-1");
  assert.deepEqual(fetches, ["/files/resume.pdf", "/files/resume.pdf"]);
});

test("uses the deployment base for both images and files", async () => {
  const source = await compilePreloader("/portfolio/");
  const { api, images, fetches } = await loadPreloader({ source });
  await api.preloadAssets();
  assert.ok(images.every(({ url }) => url.startsWith("/portfolio/")));
  assert.deepEqual(fetches, ["/portfolio/files/resume.pdf"]);
  assert.equal(await api.getPreloadedFile("/portfolio/files/resume.pdf"), "blob:cached-1");
});
