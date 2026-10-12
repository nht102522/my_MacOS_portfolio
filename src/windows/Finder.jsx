import { WindowControls } from "#components";
import WindowWrapper from "#hoc/WindowWrapper";
import useLocationStore from "#store/location";
import { locations } from "#constants";
import { Search } from "lucide-react";
import clsx from "clsx";
import useWindowStore from "#store/window";

const Finder = () => {
  const { openWindow } = useWindowStore();
  const { activeLocation, setActiveLocation } = useLocationStore();
  const openItem = (item) => {
    if (item.fileType === "pdf") return openWindow("resume");
    if (item.kind === "folder") return setActiveLocation(item);
    if (["fig", "url"].includes(item.fileType)) {
      if (item.href) window.open(item.href, "_blank", "noopener,noreferrer");
      return;
    }
    openWindow(`${item.fileType}${item.kind}`, item);
  };
  const renderList = (name, items) => (
    <div>
      <h3>{name}</h3>
      <ul>
        {items.map((item) => (
          <li
            key={item.id}
            onClick={() => setActiveLocation(item)}
            className={clsx(
              item.id === activeLocation.id ? "active" : "not-active",
            )}
          >
            <img src={item.icon} className="w-4" alt={item.name} />
            <p className="text-sm font-medium truncate">{item.name}</p>
          </li>
        ))}
      </ul>
    </div>
  );
  return (
    <>
      <div id="window-header">
        <WindowControls target="finder" />
        <Search className="icon" />
      </div>

      <div className="finder-body">
        <div className="sidebar">
          {renderList("Favorites", Object.values(locations))}
          {renderList("Projects", locations.work.children)}
        </div>
        <ul className="content">
          {activeLocation?.children.map((item) => {
            const missingLink =
              ["fig", "url"].includes(item.fileType) && !item.href;

            return (
              <li
                key={item.id}
                className={clsx(
                  "group",
                  missingLink && "opacity-50 cursor-not-allowed",
                )}
                aria-disabled={missingLink || undefined}
                title={missingLink ? "Link not configured" : item.name}
                onClick={() => openItem(item)}
              >
                <img src={item.icon} alt={item.name} />
                <p>{item.name}</p>
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
};
const FinderWindow = WindowWrapper(Finder, "finder");
export default FinderWindow;
