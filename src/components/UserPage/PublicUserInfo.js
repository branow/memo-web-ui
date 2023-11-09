import { RxAvatar } from "react-icons/rx";

import PublicTabButton from "./PublicTabButton";

const PublicUserInfo = ({ user, tab }) => {
  user = {
    name: "Billy",
    description: "I'm only a lab rat",
  };
  return (
    <div className="relative w-screen h-screen bg-form-background-grey text-white flex flex-col">
      <div className="flex h-[25vh] w-screen">
        <div className="text-4xl font-medium ml-[12vw] mt-[5vh] w-fit h-fit flex">
          <RxAvatar className="mx-auto" color="white" size="100px" />
          <span className="m-auto ml-[2vw]">{user.name}</span>
        </div>
        <div className="ml-[40vw] mt-[8vh] w-fit h-fit flex flex-col">
          <span className="text-4xl font-medium">Description</span>
          <span className="text-xl font-normal">{user.description}</span>
        </div>
      </div>
      <div className="w-screen h-fit flex flex-row text-xl font-normal ">
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
    </div>
  );
};

export default PublicUserInfo;
