import { Link } from "react-router-dom";
import MemoStudyButton from "./MemoStudyButton";
import WritingStudyButton from "./WritingStudyButton";
import DeleteCircleButton from "../../../constant/Buttons/DeleteCircleButton";
import SearchCircleButton from "../../../constant/Buttons/SearchCircleButton";

const StudyTypeDescription = ({ memoDestination, writingDestination }) => {
    return (
      <div className="w-full flex flex-row p-[10px] border-y-[3px] border-solid border-white">
        <div className="peer/memo ml-[4vw]">
          <Link  to={memoDestination}>
            <MemoStudyButton />
          </Link>
        </div>
        <div className="peer/write mx-[3vw]">
          <Link to={writingDestination}>
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