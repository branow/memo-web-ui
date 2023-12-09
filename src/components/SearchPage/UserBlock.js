import ModuleAccess from "../constant/Flashcard/ModuleAccess";
import UserSidebar from "./UserSidebar";

const UserBlock = ({ user }) => {
  return (
    <div
      className="relative flex flex-row w-[40vw] min-w-[500px] max-w-[1200px] h-[20vh] min-h-[200px] max-h-[400px] my-[2vh]
       bg-tealish-blue m-auto rounded-md"
    >
      <UserSidebar user={user} />
      <div className="w-full h-full p-[15px] flex flex-col justify-between text-ellipsis overflow-hidden">
        <div className="flex flex-col w-full">
          <div className="flex flex-row w-full justify-between text-main-green">
            <ModuleAccess access="PUBLIC" size="25px" />
            <span className="pl-[5px] text-lg font-semibold">
              {user.publicModuleNumber}
            </span>
          </div>
          <div className="flex flex-row w-full justify-between text-red-400">
            <ModuleAccess access="PRIVATE" size="25px" />
            <span className="pl-[5px] text-lg font-semibold">
              {user.privateModuleNumber}
            </span>
          </div>
        </div>
        <div className="w-full w-max-full text-xl break-words font-light">
          {user.shortDescription ? user.shortDescription + "..." : ""}
        </div>
      </div>
    </div>
  );
};

export default UserBlock;
