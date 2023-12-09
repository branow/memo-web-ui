import ModuleAccess from "../constant/Flashcard/ModuleAccess";
import UserSidebar from "./UserSidebar";

const UserBlock = ({ user }) => {
    return (
      <div className="relative flex flex-row w-[50vw] h-[30vh] my-[4vh] bg-tealish-blue m-auto rounded-md">
        <UserSidebar user={user} />
        <div className="w-full h-full p-[15px]">
          <div className="flex flex-col items-center px-[2vw] float-right">
            <div className="flex flex-row text-lg text-main-green">
              <ModuleAccess access="PUBLIC" size="25px" />
              <span className="pl-[5px]">- {user.publicModulesCount}</span>
            </div>
            <div className="flex flex-row text-lg text-red-400">
              <ModuleAccess access="PRIVATE" size="25px" />
              <span className="pl-[5px]">- {user.privateModulesCount}</span>
            </div>
          </div>
          <div className="w-full px-[3vw] max-h-[15vh] overflow-y-auto mt-[10vh] text-xl break-words ">
            {user.shortDescription}
          </div>
        </div>

      </div>
    );
}
 
export default UserBlock;