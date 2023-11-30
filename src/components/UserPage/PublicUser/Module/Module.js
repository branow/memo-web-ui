import { MdOutlinePeopleAlt } from "react-icons/md";
import { RiGitRepositoryPrivateLine } from "react-icons/ri";
import { IoDownloadOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
import StudyTypeDescription from "./StudyTypeDescription";
import CollectionList from "../Collection/CollectionList";
import ScoreWrapper from "../ScoreWrapper";
import DeleteCircleButton from "../../../constant/Buttons/DeleteCircleButton";

const Module = ({ module, thisUser }) => {
  let accesIcon;
  let accessName;
  let removeIcon = thisUser ? <DeleteCircleButton size={"20px"}/> :  <IoDownloadOutline size={"20px"} />;
  if (module.access === "public") {
    accesIcon = <MdOutlinePeopleAlt className="text-main-green" size={"25px"} />;
    accessName = <span className="pl-[7px] text-lg text-main-green">PUBLIC</span>;
  } else {
    accesIcon = <RiGitRepositoryPrivateLine className="text-red-700" size={"25px"}/>;
    accessName = <span className="pl-[7px] text-lg text-red-700">PRIVATE</span>;
  }
  return (
    <div
      className="relative w-[80vw] h-fit bg-tealish-blue mx-auto mt-[5vh] rounded-sm  border-[2px] 
      border-tealish-blue hover:border-solid 
      hover:border-regent-grey"
    >
      <Link to={"/profile/modules/" + module.moduleId}>
        <div className="absolute w-full h-full z-[1]"></div>
      </Link>
      <div className="relative float-right p-[0.5vh] z-10">
        <Link to={"#"}> {removeIcon}</Link>
      </div>
      <div className="flex flex-row my-[2vh] mx-[4vw] z-10">
        <div className="w-[40vw] flex flex-col">
          <div className="flex flex-row">
            {accesIcon}
            {accessName}
          </div>
          <div className="flex flex-col">
            <div className="text-3xl ">
              <span className="font-normal">{module.moduleName}</span>
              <span className="pr-[1vw] font-semibold text-main-green float-right border-r-[3px] border-solid border-white">
                {module.collections.length}
              </span>
            </div>

            <span className="mt-[1vh] text-lg text-gray-300">
              {module.shortDescription}
            </span>
          </div>
        </div>

        <div className="ml-[7vw] mt-[3vh] z-10">
          <ScoreWrapper scores={module.scores} />
        </div>
      </div>
      <div className="relative z-10 border-y-[3px] border-solid border-white">
        {thisUser && (
          <StudyTypeDescription
            memoDestination={"#"}
            writingDestination={"#"}
          />
        )}
      </div>

      <div className="flex flex-row flex-wrap justify-between mt-[2vh] z-10">
        <CollectionList thisUser={thisUser} collections={module.collections} />
      </div>
    </div>
  );
};

export default Module;
