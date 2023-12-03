import ScoreBar from "../../constant/ScoreBar";
import { TbWriting } from "react-icons/tb";
import { BsPersonWorkspace } from "react-icons/bs";

const Score = ({ score }) => {
    let modeIcon;
    modeIcon = score.studyType.studyName === "memorization" ? modeIcon = <BsPersonWorkspace className="absolute inset-0 m-auto" size={"4vh"}/> 
    : <TbWriting className="absolute inset-0 m-auto" size={"4vh"}/>;
    return (
      <div className="relative h-fit">
        <div className="peer relative opacity-[0.9] hover:opacity-[0.3] z-20 transition duration-300">
          <div>
            <ScoreBar score={score.score} />
          </div>
          {modeIcon}
        </div>

        <div
          className="w-fit h-fit absolute inset-0 mx-auto my-[30%] z-10 hidden peer-hover:block text-2xl 
         hover:block"
        >
          {score.score}
        </div>

        {score.resetTime && (
          <div
            className="w-[100%] h-[30%] top-[100%] inset-0 mx-auto z-20 bg-gray-300 
        rounded-xl text-gray-800 text-xs font-semibold hidden items-center justify-center peer-hover:flex"
          >
            {score.resetTime}
          </div>
        )}
      </div>
    );
}
 
export default Score;