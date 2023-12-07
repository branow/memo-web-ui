import { Link } from "react-router-dom";
import StudyButton from "./StudyButton";

const StudyTypeDescription = ({ memoDestination, writingDestination }) => {
    return (
      <div className="w-full h-[8vh] flex flex-row p-[10px]">
        <div className={"peer/memo ml-[4vw] h-fit p-[5px] rounded-xl"}>
          <Link to={memoDestination}>
            <StudyButton studyTypeName="ORALLY" size="45px" />
          </Link>
        </div>
        <div className={"peer/write mx-[3vw] h-fit p-[5px] rounded-xl"}>
          <Link to={writingDestination}>
            <StudyButton studyTypeName="WRITING" size="45px" />
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