import { Link } from "react-router-dom";
import { MdOutlineTypeSpecimen } from "react-icons/md";
import { RiDraftLine } from "react-icons/ri";

const StudyTypeDescription = ({ memoDestination, writingDestination, buttonsClassname }) => {
    return (
      <div className="w-full h-[8vh] flex flex-row p-[10px]">
        <div className={"peer/memo ml-[4vw] h-fit p-[5px] rounded-xl hover:bg-soft-green hover:text-main-green " + buttonsClassname}>
          <Link to={memoDestination}>
            <MdOutlineTypeSpecimen size="45px" />
          </Link>
        </div>
        <div className={"peer/write mx-[3vw] h-fit p-[5px] rounded-xl hover:bg-soft-green hover:text-main-green " + buttonsClassname}>
          <Link to={writingDestination}>
            <RiDraftLine size="45px" />
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