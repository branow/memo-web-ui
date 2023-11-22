import { RxAvatar } from "react-icons/rx";
import { modules } from "../ModuleDto";
import { Link } from "react-router-dom";
import SearchBar from "../../constant/SearchBar";
import PublicTabButton from "./PublicTabButton";
import ModuleList from "./ModuleList";
import { useContext } from "react";
import { UserContext } from "../../App";

const PublicUserInfo = ({ tab }) => {
  const userState = useContext(UserContext);
  const user = {
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
        <PublicTabButton
          destination={"modules"}
          name={"Modules"}
          active={tab === "modules" && true}
        />
        <PublicTabButton
          destination={"achievements"}
          name={"Achievements"}
          active={tab === "achievements" && true}
        />
      </div>
      <div className="w-[30vw] h-[10vh] pt-[5vh] ml-[12vw]">
        <SearchBar />
      </div>
      {tab === "modules" ? (
        <ModuleList modules={modules} />
      ) : (
        "There are no achievements yet("
      )}
    </div>
  );
};

export default PublicUserInfo;
