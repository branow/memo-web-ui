import ScoreWrapper from "../UserPage/PublicUser/ScoreWrapper";
import DeleteCircleButton from "../constant/Buttons/DeleteCircleButton";
import StudyTypeDescription from "../UserPage/PublicUser/Module/StudyTypeDescription";
import { IoDownloadOutline } from "react-icons/io5";
import { Link } from "react-router-dom";

const ModuleCollection = ({ collection, thisUser }) => {
    thisUser = true;
    let removeIcon = thisUser ? <DeleteCircleButton size={"25px"}/> :  <IoDownloadOutline size={"25px"} />;
    return (
      <div
        className="relative w-[62vw] h-fit  mx-auto my-[2vh] bg-collection-grey mt-[2vh] rounded-t-lg border-b-[4px] 
    border-collection-grey hover:border-solid hover:border-collection-underline-grey cursor-pointer "
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
        <div className="border-t-[4px] border-solid border-body-background-grey">
          <StudyTypeDescription
            memoDestination={"#"}
            writingDestination={"#"}
            buttonsClassname={"text-dim-grey"}
          />
        </div>
      </div>
    );
}
 
export default ModuleCollection;