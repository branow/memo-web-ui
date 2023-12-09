import UserSidebar from "./UserSidebar";

const ModuleBlock = ( {module} ) => {
    return (
      <div className="relative flex flex-row w-[50vw] h-[30vh] my-[4vh] bg-tealish-blue m-auto rounded-md">
        <UserSidebar user={module.user} />
        <div className="w-full h-full p-[15px]">
          <div className="flex flex-col items-center px-[3vw]">
            <div className="w-full flex flex-row my-[5vh] text-3xl justify-between">
              <div className=" text-main-green">{module.moduleName}</div>
              <div className="text-2xl ">{module.collectionsCount}</div>
            </div>
            <div className="w-full max-h-[10vh] overflow-y-auto text-xl break-words ">
              {module.shortDescription}
            </div>
          </div>
        </div>
      </div>
    );
}
 
export default ModuleBlock;