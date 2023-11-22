import { MdOutlinePeopleAlt } from "react-icons/md";
import { RiGitRepositoryPrivateLine } from "react-icons/ri";
import { RxCross1 } from "react-icons/rx";
import StudyTypeDescription from "./StudyTypeDescription";
import LearnList from "./LearnList";
import Score from "./Score";
import CollectionList from "./CollectionList";
import ScoreWrapper from "./ScoreWrapper";

const Module = ({ module }) => {
  let accesIcon;
  let accessName;
  if (module.access === "public") {
    accesIcon = <MdOutlinePeopleAlt className="text-main-green" size={"25px"} />;
    accessName = <span className="pl-[7px] text-lg text-main-green">PUBLIC</span>;
  } else {
    accesIcon = <RiGitRepositoryPrivateLine className="text-red-700" size={"25px"}/>;
    accessName = <span className="pl-[7px] text-lg text-red-700">PRIVATE</span>;
  }
  return (
    <div
      className="w-[80vw] h-fit bg-body-background-grey mx-auto mt-[5vh] rounded-sm  border-[2px] 
      border-body-background-grey cursor-pointer hover:border-solid 
      hover:border-collection-underline-grey"
    >
      <div className="float-right p-[0.5vh] cursor-pointer">
        <RxCross1 size={"20px"} />
      </div>
      <div className="flex flex-row my-[2vh] mx-[4vw]">
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

        <div className="ml-[7vw] mt-[3vh]">
          <ScoreWrapper scores={module.scores} />
        </div>
      </div>
      <StudyTypeDescription/>

      <div className="flex flex-row flex-wrap justify-between mt-[2vh]">
       

        <CollectionList collections={module.collections} />
        
      </div>
    </div>
  );
};

export default Module;
