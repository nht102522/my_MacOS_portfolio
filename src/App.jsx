import { Draggable } from "gsap/all";
import gsap from "gsap";
import { useEffect } from "react";
import { Navbar, Welcome, Dock, Home } from "#components";
import useWindowStore from "#store/window";
import {
  Terminal,
  Safari,
  Resume,
  Finder,
  Text,
  Image,
  Contact,
  Photos,
} from "#windows";

gsap.registerPlugin(Draggable);
const App = () => {
  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key !== "Escape" || event.repeat || event.isComposing) {
        return;
      }

      const { windows, closeWindow } = useWindowStore.getState();
      const [topWindow, nextWindow] = Object.entries(windows)
        .filter(([, win]) => win.isOpen)
        .sort(([, a], [, b]) => b.zIndex - a.zIndex);

      if (topWindow) {
        event.preventDefault();
        event.stopPropagation();
        closeWindow(topWindow[0]);
        if (nextWindow) {
          document.getElementById(nextWindow[0])?.focus({ preventScroll: true });
        }
      }
    };

    // Handle Escape before child controls can consume the key event.
    window.addEventListener("keydown", handleKeyDown, true);
    return () => window.removeEventListener("keydown", handleKeyDown, true);
  }, []);

  return (
    <main>
      <Navbar />
      <Welcome />
      <Dock />
      <Terminal />
      <Safari />
      <Resume />
      <Finder />
      <Text />
      <Image />
      <Contact />
      <Home />
      <Photos />
    </main>
  );
};

export default App;
