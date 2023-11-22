import { useState } from "react";
import LearnLink from "./LearnLink";
import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowUp } from "react-icons/io";
import { TbWriting } from "react-icons/tb";
import { SiTestcafe } from "react-icons/si";

const LearnList = () => {
    const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="float-right w-[10vw]">
      <button
        className="text-white bg-main-green text-[1.2em] font-medium px-[2vw] py-[0.5vh] duration-500
        hover:bg-green-700 active:bg-green-900 flex flex-row static"
        onClick={() => setIsOpen((prev) => !prev)}
      >
        Learn
        {!isOpen ? (
          <IoIosArrowDown className="m-auto ml-[0.5vw]" size={"20px"} />
        ) : (
          <IoIosArrowUp className="m-auto ml-[0.5vw]" size={"20px"} />
        )}
      </button>

      {isOpen && (
        <div className="bg-main-green-light mt-[1vh] p-2">
          <ul>
            <LearnLink
              destination={"#"}
              name={"Test"}
              icon={<SiTestcafe className="m-auto ml-[5px]" size={"20px"} />}
            />
            <LearnLink
              destination={"#"}
              name={"Writing"}
              icon={<TbWriting className="m-auto ml-[5px]" size={"20px"} />}
            />
          </ul>
        </div>
      )}
    </div>
  );
};

export default LearnList;
