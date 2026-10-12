import WindowWrapper from "#hoc/WindowWrapper";
import { WindowControls } from "#components";
import { Download } from "lucide-react";
import { useEffect, useState } from "react";
import { getPreloadedFile } from "../utils/preloadAssets";

import { pdfjs, Document, Page } from "react-pdf";
import "react-pdf/dist/Page/TextLayer.css";
import "react-pdf/dist/Page/AnnotationLayer.css";

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  "pdfjs-dist/build/pdf.worker.min.mjs",
  import.meta.url,
).toString();

const resumeUrl = `${import.meta.env.BASE_URL}files/resume.pdf`;

const Resume = () => {
  const [file, setFile] = useState(null);

  useEffect(() => {
    let active = true;
    getPreloadedFile(resumeUrl).then(
      (url) => {
        if (active) setFile(url);
      },
      () => {
        if (active) setFile(resumeUrl);
      },
    );

    return () => {
      active = false;
    };
  }, []);

  return (
    <>
      <div id="window-header">
        <WindowControls target="resume" />
        <h2>Resume.pdf</h2>
        <a
          href={file || resumeUrl}
          download="resume.pdf"
          className="cursor-pointer"
          title="Download resume"
        >
          <Download className="icon" />
        </a>
      </div>
      {file && (
        <Document file={file}>
          <Page pageNumber={1} rederTextLayer renderAnnotationLayer />
        </Document>
      )}
    </>
  );
};
const ResumeWindow = WindowWrapper(Resume, "resume");
export default ResumeWindow;
