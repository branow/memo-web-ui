import { periodToShortString } from "../../../utils/date-utils";
import ScoreBar from "../../constant/ScoreBar";
import { MdOutlineTypeSpecimen } from "react-icons/md";
import { RiDraftLine } from "react-icons/ri";

const Score = ({ score }) => {

  const reset = new Date(score.resetTime);
  const time = reset > new Date() ? periodToShortString(reset, new Date()) : "";

  return (
    <div className="relative h-fit [&:hover>div.hidden]:block rounded-full">
      <div className="hidden absolute top-0 w-full h-full">
        <div className="flex flex-col justify-center items-center w-full h-full">
          <div className="text-center text-3xl text-white font-sans font-bold drop-shadow-lg">
            {score.score}
          </div>
        </div>
      </div>

      <div className="relative opacity-[0.9] hover:opacity-[0.3] transition duration-300">
        <div>
          <ScoreBar score={score.score} />
        </div>
        <div className="absolute top-0 w-full h-full flex flex-col justify-center items-center">
          <div className=" w-fit">
            <ScoreIcon
              color="white"
              size="40px"
              studyTypeName={score.studyType.studyName}
            />
          </div>
        </div>
      </div>

      {time && (
        <div className="absolute hidden bottom-[-20px] w-full">
          <div className="m-auto w-fit px-[5px] text-gray-800 text-xs font-semibold text-center rounded-full bg-gray-300">
            {time}
          </div>
        </div>
      )}
    </div>
  );
};

const ScoreIcon = ({ studyTypeName, color, size }) => {
  return (
    <>
      {studyTypeName === "ORALLY" && (
        <MdOutlineTypeSpecimen color={color} size={size} />
      )}
      {studyTypeName === "WRITING" && <RiDraftLine color={color} size={size} />}
    </>
  );
};

export default Score;

