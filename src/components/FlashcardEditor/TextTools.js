import TextToolItemWrapper from "./TextToolItemWrapper";
import {
  MdTextIncrease,
  MdTextDecrease,
  MdFormatBold,
  MdFormatItalic,
  MdFormatUnderlined,
  MdCleaningServices,
} from "react-icons/md";
import ColorIcon from "./ColorIcon";

const TextTools = ({ setFormat }) => {
  const format = (type, value) => {
    let formatting = () => {};
    if (type === "size") {
      formatting = (start, end, formatter) => formatter.setSize(start, end, value);
    } else if (type === "color") {
      formatting = (start, end, formatter) => formatter.setColor(start, end, value);
    } else if (type === "style") {
      formatting = (start, end, formatter) => formatter.setStyle(start, end, value);
    } else if (type === "clear") {
      formatting = (start, end, formatter) => formatter.clear(start, end);
    }
    setFormat(formatting);
  };
  const clear = () => {
    setFormat((start, end, formatter) => formatter.clear(start, end));
  }

  return (
    <>
      <div className="bg-form-background-grey rounded-full p-[5px] h-fit w-fit" >
        <div className="flex flex-col">
          <TextToolItemWrapper
            Icon={MdTextIncrease}
            onClickAction={() => format("size", "large")}
          />
          <TextToolItemWrapper
            Icon={MdTextDecrease}
            onClickAction={() => format("size", "small")}
          />

          <TextToolItemWrapper
            Icon={MdFormatBold}
            onClickAction={() => format("style", "bold")}
          />
          <TextToolItemWrapper
            Icon={MdFormatItalic}
            onClickAction={() => format("style", "italic")}
          />
          <TextToolItemWrapper
            Icon={MdFormatUnderlined}
            onClickAction={() => format("style", "underline")}
          />

          <TextToolItemWrapper
            Icon={({ size }) => ColorIcon({ size: size, color: "black" })}
            onClickAction={() => format("color", "black")}
          />
          <TextToolItemWrapper
            Icon={({ size }) => ColorIcon({ size: size, color: "white" })}
            onClickAction={() => format("color", "white")}
          />
          <TextToolItemWrapper
            Icon={({ size }) => ColorIcon({ size: size, color: "blue" })}
            onClickAction={() => format("color", "blue")}
          />
          <TextToolItemWrapper
            Icon={({ size }) => ColorIcon({ size: size, color: "green" })}
            onClickAction={() => format("color", "green")}
          />
          <TextToolItemWrapper
            Icon={({ size }) => ColorIcon({ size: size, color: "yellow" })}
            onClickAction={() => format("color", "yellow")}
          />
          <TextToolItemWrapper
            Icon={({ size }) => ColorIcon({ size: size, color: "red" })}
            onClickAction={() => format("color", "red")}
          />

          <TextToolItemWrapper
            Icon={MdCleaningServices}
            onClickAction={() => clear()}
          />
        </div>
      </div>
    </>
  );
};

export default TextTools;
