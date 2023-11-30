import ScoreWrapper from "../UserPage/PublicUser/ScoreWrapper";
import DeleteCircleButton from "../constant/Buttons/DeleteCircleButton";
import StudyTypeDescription from "../UserPage/PublicUser/Module/StudyTypeDescription";
import DownloadCircleButton from "../constant/Buttons/DownloadCircleButton";
import { Link } from "react-router-dom";

const ModuleCollection = ({ collection, thisUser }) => {
    let removeIcon = thisUser ? <DeleteCircleButton size={"25px"}/> :  <DownloadCircleButton size={"25px"} />;
    return (
      <div
        className="relative w-[62vw] h-fit  mx-auto my-[2vh] bg-bright-grey mt-[2vh] rounded-t-lg border-b-[4px] 
    border-bright-grey hover:border-solid hover:border-regent-grey cursor-pointer "
      >
        <div className="relative float-right p-[0.5vh] z-10">
          <Link to={"#"}> {removeIcon}</Link>
        </div>
        <div className="flex flex-row px-[3vw] py-[3vh]">
          <div className="w-[30vw]">
            <span className="text-3xl font-light">
              {collection.collectionName}
            </span>
            <span className="float-right text-2xl text-main-green font-semibold">
              {collection.size}
            </span>
          </div>
          <div className="mt-[-2vh] ml-[5vw] z-10">
            <ScoreWrapper scores={collection.scores} />
          </div>
        </div>
        {thisUser && (
          <div className="border-t-[4px] border-solid border-tealish-blue">
            <StudyTypeDescription
              memoDestination={"#"}
              writingDestination={"#"}
              buttonsClassname={"text-dim-grey"}
            />
          </div>
        )}
      </div>
    );
}
 
export default ModuleCollection;