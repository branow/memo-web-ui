import { RxAvatar } from "react-icons/rx";
import { modules } from "../ModuleDto";
import { Link } from "react-router-dom";
import PublicTabButton from "./PublicTabButton";
import ModuleList from "./ModuleList";


const PublicUserInfo = ({ user, tab }) => {
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
          <span className="m-auto ml-[2vw]">{user.name}</span>
        </div>
        <div className="ml-[40vw] pt-[8vh] w-fit h-fit flex flex-col">
          <span className="text-3xl font-medium">Description</span>
          <span className="text-lg">{user.description}</span>
        </div>
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
      {tab === "modules" ? (
        <ModuleList modules={modules} />
      ) : (
        "There are no achievements yet("
      )}
    </div>
  );
};

export default PublicUserInfo;
