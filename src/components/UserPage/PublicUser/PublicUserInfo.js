import { RxAvatar } from "react-icons/rx";
import { modules } from "../ModuleDto";
import { Link } from "react-router-dom";
import SearchBar from "../../constant/SearchBar";
import TabButton from "./TabButton";
import ModuleList from "./Module/ModuleList";
import EmptyModules from "./Module/EmptyModules";


const PublicUserInfo = ({ user, tab }) => {
  let thisUser = true;
  user = {
    name: "Billy",
    description: "I'm only a lab rat",
  };
  return (
    <div className="relative w-screen h-fit pb-[50px] bg-form-background-grey text-white">
      <div className="flex h-[vh] w-screen">
        <div className="text-3xl font-medium ml-[12vw] pt-[5vh] w-fit h-fit flex">
          <Link to={"/profile/info"}>
            <RxAvatar className="mx-auto" color="white" size="100px" />
          </Link>
          <div className="flex flex-col ml-[2vw] my-auto">
            <span>{user.name}</span>
            <span className="mt-[1vh] text-lg">{user.description}</span>
          </div>
        </div>
        <div className="ml-[40vw] pt-[8vh] w-fit h-fit flex flex-col"></div>
      </div>
      <div className="w-screen h-fit flex flex-row text-xl font-normal pt-[5vh]">
        <TabButton
          destination={"modules"}
          name={"Modules"}
          active={tab === "modules" && true}
        />
        <TabButton
          destination={"achievements"}
          name={"Achievements"}
          active={tab === "achievements" && true}
        />
      </div>
      {modules && (
        <div className="w-[30vw] h-[10vh] pt-[5vh] ml-[12vw]">
          <SearchBar />
        </div>
      )}
      <div>
        {tab === "modules" ? (
          modules !== null ? (
            <ModuleList thisUser={thisUser} modules={modules} />
          ) : (
            <EmptyModules thisUser={thisUser} />
          )
        ) : (
          "There are no achievements yet("
        )}
      </div>
    </div>
  );
};

export default PublicUserInfo;
