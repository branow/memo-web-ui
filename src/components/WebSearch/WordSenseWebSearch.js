import SubmitButton from "../constant/Buttons/SubmitButton";
import FlashcardSide from "../constant/FlashcardSide";
import CleanCircleButton from "../constant/Buttons/CleanCircleButton";
import { useState } from "react";
import {
  toFormatDto,
  toTextFormatter,
} from "../../utils/text-format/text-formatter-converter";
import TextFormatter from "../../utils/text-format/text-formatter";
import SenseSearch from "./SenseSearch";
import DeleteCircleButton from "../constant/Buttons/DeleteCircleButton";

const WordSenseWebSearch = ({ query, text, format, setText, setFormat, close }) => {
  const [formatter, setFormatter] = useState(toTextFormatter(text, format));

  const handleOnDragOver = (e) => {
    e.preventDefault();
  };

  const handleOnDrop = (e) => {
    const text = e.dataTransfer.getData("text");
    const format = e.dataTransfer.getData("format");
    if (text && format) {
      setFormatter((pr) => {
        if (pr.text) {
          pr.append("\n\n");
        }
        pr.merge(toTextFormatter(text, format));
        return new TextFormatter(pr.text, pr.root);
      });
    }
  };

  const handleOnClean = (e) => {
    setFormatter(new TextFormatter(""));
  };

  const handleOnSave = () => {
    setText(formatter.text);
    setFormat(toFormatDto(formatter));
    close();
  };

  return (
    <div className="relative flex flex-row w-[70vw] min-w-[850px] max-w-[1500px] h-[80vh]">
      <div className="absolute right-0">
        <DeleteCircleButton size="30px" color="white" onClickAction={close}/>
      </div>
      <div className="flex flex-col w-[40%] justify-between items-center p-[20px] bg-tealish-blue">
        <div className="w-full h-full ">
          <div className="text-soft-green p-[10px] text-center text-2xl font-sans font-bold">
            Title Side (Question)
          </div>
          <div className="text-white text-center text-sx font-sans font-light">
            drag the chosen definition to this box
          </div>
          <div className="p-[20px]">
            <div
              className="relative w-full h-[57vh] min-h-[300px] [&:hover>div.hidden]:block"
              onDrop={handleOnDrop}
              onDragOver={handleOnDragOver}
            >
              <div className="hidden absolute top-0 right-0">
                <CleanCircleButton
                  size="25px"
                  color="white"
                  onClickAction={handleOnClean}
                />
              </div>
              <FlashcardSide formatter={formatter} />
            </div>
          </div>
        </div>
        <div>
          <SubmitButton actionName="save" onClickAction={handleOnSave} />
        </div>
      </div>
      <div className="w-[60%] p-[20px] bg-dark-grey">
        <SenseSearch defaultQuery={query} />
      </div>
    </div>
  );
};

export default WordSenseWebSearch;
