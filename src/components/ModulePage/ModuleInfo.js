import { MdOutlinePeopleAlt } from "react-icons/md";
import { RiGitRepositoryPrivateLine } from "react-icons/ri";
import ChangeCircleButton from "../constant/Buttons/ChangeCircleButton";
import DownloadCircleButton from "../constant/Buttons/DownloadCircleButton";
import ScoreWrapper from "../UserPage/PublicUser/ScoreWrapper";
import StudyTypeDescription from "../UserPage/PublicUser/Module/StudyTypeDescription";
import SearchBar from "../constant/SearchBar";
import ModuleCollectionList from "./ModuleCollectionList";
import Avatar from "../constant/Icons/Avatar";
import { Link } from "react-router-dom";

const ModuleInfo = ({ module, thisUser }) => {
  thisUser = true;
  let accesIcon;
  let accessName;
  if (module.access === "public") {
    accesIcon = <MdOutlinePeopleAlt className="text-main-green" size="25px" />;
    accessName = <span className="pl-[7px] text-xl text-main-green">PUBLIC</span>;
  } else {
    accesIcon = <RiGitRepositoryPrivateLine className="text-red-700" size="25px"/>;
    accessName = <span className="pl-[7px] text-xl text-red-700">PRIVATE</span>;
  }
    return (
      <div
        className="relative h-fit w-[80vw] pb-[15vh] bg-tealish-blue mx-auto border-[2px] 
      border-tealish-blue hover:border-solid 
      hover:border-regent-grey"
      >
        <div className="flex flex-row mt-[6vh] mb-[4vh] mx-[4vw] z-10">
          <div className="w-[45vw] flex flex-col">
            <div className="flex flex-col">
              <div className="text-4xl">
                <span className="font-normal">{module.moduleName}</span>
                {thisUser && (
                  <span className="ml-[0.5vw]">
                    <ChangeCircleButton size={"25px"} />
                  </span>
                )}
                <span className="pr-[1vw] font-semibold text-main-green float-right border-r-[4px] border-solid border-white">
                  {module.collections.length}
                </span>
              </div>
              <div className="flex flex-row mt-[1vh]">
                {accesIcon}
                {accessName}
                {thisUser && (
                  <span className="ml-[0.5vw]">
                    <ChangeCircleButton size={"20px"} />
                  </span>
                )}
              </div>
            </div>
            <div className="mt-[5vh]"></div>
            {thisUser && (
              <div className="w-[70vw]">
                <div className="w-fit float-right">
                  <ChangeCircleButton size={"20px"} />
                </div>
              </div>
            )}

            <div className="w-[70vw]">
              <div className="text-xl text-gray-300 mr-[1vw] w-full">
                {module.description}
              </div>
            </div>
          </div>

          <div className="mt-[-2vh] ml-[5vw] z-10">
            <ScoreWrapper scores={module.scores} />
          </div>
          <div className="absolute top-0 right-0 mt-[2vh] mr-[2vw]">
            <Avatar size={"75px"} />
            <div className="w-fit m-auto text-lg">Author</div>
            <div className="w-fit m-auto">{!thisUser && <DownloadCircleButton size={"50px"} />}</div>
          </div>
        </div>

        <div
          className={
            thisUser
              ? "relative z-10 border-solid border-white border-y-[3px]"
              : "relative z-10 border-solid border-white border-b-[3px]"
          }
        >
          {thisUser && (
            <StudyTypeDescription
              memoDestination={"#"}
              writingDestination={"#"}
            />
          )}
        </div>
        <div className="w-[30vw] h-[5vh] mt-[5vh] ml-[6.2vw]">
          <SearchBar borderColor={"charcoal"} />
        </div>

        <div className="flex-wrap justify-between mt-[7vh] z-10">
          <ModuleCollectionList
            thisUser={thisUser}
            collections={module.collections}
          />
        </div>
      </div>
    );
}
 
export default ModuleInfo;