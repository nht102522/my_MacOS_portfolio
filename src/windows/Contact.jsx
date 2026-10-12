import { WindowControls } from "#components";
import { socials } from "#constants";
import WindowWrapper from "#hoc/WindowWrapper";
import useWindowStore from "#store/window";

const Contact = () => {
  const openWindow = useWindowStore((state) => state.openWindow);

  return (
    <>
      <div id="window-header">
        <WindowControls target="contact" />
        <h2>Contact Me</h2>
      </div>
      <div className="p-5 space-y-5">
        <div className="flex items-center gap-4 ">
          <img
            src="/images/drexel.jpg"
            alt="Adrian"
            className="w-30 h-25 border-round gap-4 rounded-xl space-y-1 shrink-0"
          />
          <div className="space-y-1">
            <h3>Let's Connect</h3>
            <p className="text-gray-500">
              Computer Science Student @ Drexel University
            </p>
          </div>
        </div>
        <p className="font-semibold">
          Open to co-op opportunities, collaborations, and meaningful
          connections.
        </p>
        <p>
          Whether you're a recruiter, fellow developer, or someone with an
          exciting idea, I'd love to hear from you!
        </p>
        <p>📥 nht35@drexel.edu</p>
        <ul>
          {socials.map(({ id, bg, link, windowKey, icon, text }) => {
            const Tile = windowKey ? "button" : "a";
            const tileProps = windowKey
              ? { type: "button", onClick: () => openWindow(windowKey) }
              : { href: link, target: "_blank", rel: "noopener noreferrer" };

            return (
              <li key={id} style={{ backgroundColor: bg }}>
                <Tile {...tileProps} title={text}>
                  <img src={icon} alt="" className="size-5" />
                  <p>{text}</p>
                </Tile>
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
};
const ContactWindow = WindowWrapper(Contact, "contact");
export default ContactWindow;
