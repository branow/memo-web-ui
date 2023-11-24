import { MdOutlinePeopleAlt } from "react-icons/md";
import { RiGitRepositoryPrivateLine } from "react-icons/ri";
import ChangeCircleButton from "../constant/Buttons/ChangeCircleButton";
import ScoreWrapper from "../UserPage/PublicUser/ScoreWrapper";
import StudyTypeDescription from "../UserPage/PublicUser/Module/StudyTypeDescription";
import { RxAvatar } from "react-icons/rx";
import { Link } from "react-router-dom";

const ModuleInfo = ({module, thisUser}) => {
  let accesIcon;
  let accessName;
  if (module.access === "public") {
    accesIcon = <MdOutlinePeopleAlt className="text-main-green" size={"25px"} />;
    accessName = <span className="pl-[7px] text-xl text-main-green">PUBLIC</span>;
  } else {
    accesIcon = <RiGitRepositoryPrivateLine className="text-red-700" size={"25px"}/>;
    accessName = <span className="pl-[7px] text-xl text-red-700">PRIVATE</span>;
  }
    return (
      <div
        className="relative flex h-[30vh] w-[80vw] bg-body-background-grey mx-auto border-[2px] 
      border-body-background-grey hover:border-solid 
      hover:border-collection-underline-grey"
      >
        <div className="flex flex-row my-[6vh] mx-[4vw] z-10">
          <div className="w-[45vw] flex flex-col">
            <div className="flex flex-col">
              <div className="text-4xl">
                <span className="font-normal">{module.moduleName}</span>
                <span className="ml-[0.5vw]">
                  <ChangeCircleButton size={"25px"} />
                </span>

                <span className="pr-[1vw] font-semibold text-main-green float-right border-r-[3px] border-solid border-white">
                  {module.collections.length}
                </span>
              </div>
              <div className="flex flex-row mt-[1vh]">
                {accesIcon}
                {accessName}
                <span className="ml-[0.5vw]">
                  <ChangeCircleButton size={"20px"} />
                </span>
              </div>
            </div>
            <div className="mt-[2vh] w-[70vw] flex flex-row">
              <div className="text-xl text-gray-300 mr-[1vw]">
                {module.shortDescription}
              </div>
              <div className="absolute right-[1vw]">
                <ChangeCircleButton size={"20px"} />
              </div>
            </div>
          </div>

          <div className="mt-[-2vh] ml-[5vw] z-10">
            <ScoreWrapper scores={module.scores} />
          </div>
          <div className="absolute top-0 right-0 mt-[2vh] mr-[2vw]">
            <RxAvatar size={"75px"}></RxAvatar>
            <div className="w-fit m-auto text-lg">Author</div>
          </div>

          <div className="relative z-10">
            {thisUser && (
              <StudyTypeDescription
                memoDestination={"#"}
                writingDestination={"#"}
              />
            )}
          </div>
        </div>
      </div>
    );
}
 
export default ModuleInfo;