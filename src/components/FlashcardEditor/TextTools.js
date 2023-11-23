import TextToolItemWrapper from "./TextToolItemWrapper";
import { MdTextIncrease, MdTextDecrease, MdFormatBold, MdFormatItalic, MdFormatUnderlined } from "react-icons/md";
import ColorIcon from "./ColorIcon";

const TextTools = () => {
  return (
    <>
      <div className="bg-form-background-grey rounded-full p-[5px] h-fit">
        <div className="flex flex-col">
          <TextToolItemWrapper Icon={MdTextIncrease}/>
          <TextToolItemWrapper Icon={MdTextDecrease}/>
          <TextToolItemWrapper Icon={MdFormatBold}/>
          <TextToolItemWrapper Icon={MdFormatItalic}/>
          <TextToolItemWrapper Icon={MdFormatUnderlined}/>
          <TextToolItemWrapper Icon={({ size }) => ColorIcon({ size:size, color: "black"})}/>
          <TextToolItemWrapper Icon={({ size }) => ColorIcon({ size:size, color: "white"})}/>
          <TextToolItemWrapper Icon={({ size }) => ColorIcon({ size:size, color: "blue"})}/>
          <TextToolItemWrapper Icon={({ size }) => ColorIcon({ size:size, color: "green"})}/>
          <TextToolItemWrapper Icon={({ size }) => ColorIcon({ size:size, color: "yellow"})}/>
          <TextToolItemWrapper Icon={({ size }) => ColorIcon({ size:size, color: "red"})}/>
        </div>
      </div>
    </>
  );
};

export default TextTools;
