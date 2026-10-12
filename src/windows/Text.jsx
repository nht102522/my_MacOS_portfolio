import { WindowControls } from "#components";
import WindowWrapper from "#hoc/WindowWrapper";
import useWindowStore from "#store/window";

const Text = () => {
  const data = useWindowStore((state) => state.windows.txtfile.data);

  if (!data) return null;

  const { name, image, subtitle, description = [] } = data;

  return (
    <>
      <div id="window-header">
        <WindowControls target="txtfile" />
        <h2>{name}</h2>
      </div>
      <article className="text-content">
        {image && <img src={image} alt={name} />}
        {subtitle && <h3>{subtitle}</h3>}
        {description.map((paragraph, index) => (
          <p key={index}>{paragraph}</p>
        ))}
      </article>
    </>
  );
};

const TextWindow = WindowWrapper(Text, "txtfile");
export default TextWindow;
//2:42
