import { MdOutlinePeopleAlt } from "react-icons/md";
import { RiGitRepositoryPrivateLine } from "react-icons/ri";
import LearnList from "./LearnList";
import Score from "./Score";
import CollectionList from "./CollectionList";

const Module = ({ module }) => {
  let accesIcon;
  let accessName;
  if (module.access === "public") {
    accesIcon = <MdOutlinePeopleAlt size={"25px"}/>;
    accessName = "public"
  } else {
    accesIcon = <RiGitRepositoryPrivateLine size={"25px"}/>;
    accessName = "private";
  }
  return (
    <div
      className="w-[80vw] h-fit bg-body-background-grey mx-auto mt-[5vh] rounded-sm  border-[2px] 
      border-body-background-grey cursor-pointer hover:border-solid 
      hover:border-collection-underline-grey"
    >
      <div className="pt-[1vh] pr-[1vh] flex float-right">
        <div>{accesIcon}</div>
        <div className="pl-[7px] text-lg">{accessName}</div>
      </div>
      <div className="flex flex-col px-[3vw] pb-[2vh]">
        <div className="flex justify-between h-fit text-2xl font-normal pl-[6vh] pt-[2vh] ">
          <div className="w-fit flex">
            <span>{module.moduleName}</span>
            <span className="w-fit h-fit mx-[10px] pl-[10px] border-l-2 border-solid border-white">
              {module.collections.length + " "} collections
            </span>
          </div>
          <div className="w-[30vw] float-right text-xl text-right">
            <span>{module.shortDescription}</span>
          </div>
        </div>
        <div className="flex h-fit py-[2vh] text-lg font-normal">
          <Score score={module.scores[0]} mode={1} />
          <Score score={module.scores[1]} mode={2} />
        </div>
        <CollectionList collections={module.collections} />
        <div className="mt-[2vw] mr-[6vh]">
          <LearnList />
        </div>
      </div>
    </div>
  );
};

export default Module;
