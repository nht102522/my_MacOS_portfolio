const assetUrls = Object.keys(import.meta.glob("/public/**/*"))
  .map((path) => `${import.meta.env.BASE_URL}${path.slice("/public/".length)}`);

const imageExtension = /\.(avif|gif|ico|jpe?g|png|svg|webp)$/i;
const files = new Map();
let preloadPromise;

export function getPreloadedFile(url) {
  if (!files.has(url)) {
    const download = fetch(url)
      .then((response) => {
        if (!response.ok) {
          throw new Error(`Could not load ${url}: ${response.status}`);
        }
        return response.blob();
      })
      .then((blob) => URL.createObjectURL(blob))
      .catch((error) => {
        // Allow opening the file to retry a failed background download.
        files.delete(url);
        throw error;
      });

    files.set(url, download);
  }

  return files.get(url);
}

function preloadImage(url) {
  return new Promise((resolve, reject) => {
    const image = new Image();
    image.fetchPriority = "low";
    image.onload = () => resolve(url);
    image.onerror = () => reject(new Error(`Could not load ${url}`));
    image.src = url;
  });
}

export function preloadAssets() {
  // Share one startup run, including React StrictMode's repeated effects.
  preloadPromise ??= Promise.allSettled(
    assetUrls.map((url) =>
      imageExtension.test(url) ? preloadImage(url) : getPreloadedFile(url),
    ),
  );

  return preloadPromise;
}
