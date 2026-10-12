import useWindowStore from "#store/window";
import { Maximize2, Minus, X } from "lucide-react";

const WindowControls = ({ target }) => {
  const { closeWindow } = useWindowStore();

  return (
    <div id="window-controls" data-clickable="true">
      <button
        type="button"
        className="window-control close"
        aria-label="Close window"
        title="Close window"
        onClick={() => closeWindow(target)}
      >
        <span className="control-dot" aria-hidden="true">
          <X size={10} strokeWidth={2.5} />
        </span>
      </button>
      <span className="window-control minimize" title="Minimize" aria-hidden="true">
        <span className="control-dot">
          <Minus size={10} strokeWidth={2.5} />
        </span>
      </span>
      <span className="window-control maximize" title="Zoom" aria-hidden="true">
        <span className="control-dot">
          <Maximize2 size={9} strokeWidth={2.5} />
        </span>
      </span>
    </div>
  );
};

export default WindowControls;
