import { useEffect, useState } from "react";
import { periodToShortString } from "../../../utils/date-utils";
import ScoreBar from "../../constant/ScoreBar";
import { MdOutlineTypeSpecimen } from "react-icons/md";
import { RiDraftLine } from "react-icons/ri";

const Score = ({ score }) => {
  const [time, setTime] = useState(calcTime(score.resetTime));
  const [agrScore, setAgrScore] = useState(score.score);
  const [period, setPeriod] = useState((new Date(score.resetTime) - new Date().getTime()) / 1000);

  useEffect(() => {
    setAgrScore(score.score);
  }, [score]);

  useEffect(() => {
    setTimeout(() => {
      setPeriod((new Date(score.resetTime) - new Date().getTime()) / 1000);
    }, 1000);
  }, [period]);

  useEffect(() => {
    const secondValue = agrScore > 0 && period > 0 ? agrScore / period : 0;
    setTime(calcTime(score.resetTime));
    const newArg = Math.min(agrScore - secondValue, agrScore);
    setAgrScore(newArg);
  }, [period]);


  return (
    <div className="relative h-fit [&:hover>div.hidden]:block rounded-full">
      <div className="hidden absolute top-0 w-full h-full">
        <div className="flex flex-col justify-center items-center w-full h-full">
          <div className="text-center text-3xl text-white font-sans font-bold drop-shadow-lg">
            {Math.ceil(agrScore)}
          </div>
        </div>
      </div>

      <div className="relative opacity-[0.9] hover:opacity-[0.3] transition duration-300">
        <div>
          <ScoreBar score={agrScore} />
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

const calcTime = (resetTime) => {
  const reset = new Date(resetTime);
  return reset > new Date() ? periodToShortString(reset, new Date()) : "";
};

export default Score;
