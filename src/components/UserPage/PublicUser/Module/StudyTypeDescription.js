import { Link } from "react-router-dom";
import MemoStudyButton from "./MemoStudyButton";
import WritingStudyButton from "./WritingStudyButton";

const StudyTypeDescription = ({ collections, buttonsClassname }) => {
    return (
      <div className="w-full flex flex-row p-[10px]">
        <div className={"peer/memo ml-[4vw] " + buttonsClassname}>
          <Link to="/learning/memorize" state={collections}>
            <MemoStudyButton />
          </Link>
        </div>
        <div className={"peer/write mx-[3vw] " + buttonsClassname}>
          <Link to="/learning/writing" state={collections}>
            <WritingStudyButton />
          </Link>
        </div>

        <div className="border-r-[3px] border-solid border-main-green"></div>
        <div className="my-auto px-[3vw] text-lg text-main-green hidden peer-hover/memo:block">
          <span>
            Memorization study type, where you need memorize cards and answer
            how well do you know it
          </span>
        </div>
        <div className="my-auto px-[3vw] text-lg text-main-green hidden peer-hover/write:block">
          <span>
            Writing study type, where you need to write answer for needed card
            side.
          </span>
        </div>
      </div>
    );
}
 
export default StudyTypeDescription;