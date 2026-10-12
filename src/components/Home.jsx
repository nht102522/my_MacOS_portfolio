import { locations } from "#constants";
import useLocationStore from "#store/location";
import useWindowStore from "#store/window";
import { useGSAP } from "@gsap/react";
import clsx from "clsx";
import Draggable from "gsap/Draggable";
const folders = locations.work?.children ?? [];
const Home = () => {
  const { setActiveLocation } = useLocationStore();
  const { openWindow } = useWindowStore();
  const handleOpenFolder = (folder) => {
    setActiveLocation(folder);
    openWindow("finder");
  };
  useGSAP(() => {
    Draggable.create(".folder");
  }, []);
  return (
    <section id="home">
      <ul>
        {folders.map((folder) => (
          <li
            key={folder.id}
            className={clsx("group folder", folder.windowPosition)}
            onClick={() => handleOpenFolder(folder)}
          >
            <img src={folder.icon} alt={folder.name} />
            <p>{folder.name}</p>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Home;
