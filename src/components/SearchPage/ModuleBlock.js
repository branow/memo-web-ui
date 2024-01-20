import UserSidebar from "./UserSidebar";
import { Link } from "react-router-dom";

const ModuleBlock = ({ module }) => {
  return (
    <div
      className="relative flex flex-row w-[40vw] min-w-[500px] max-w-[1200px] h-[20vh] min-h-[200px] max-h-[400px] my-[2vh]
       bg-tealish-blue m-auto rounded-md"
    >
      <UserSidebar user={module} />
      <div className="w-full max-w-full h-full p-[15px] text-ellipsis overflow-hidden">
        <div className="h-full flex flex-col justify-between items-center">
          <div className="w-full flex flex-row text-3xl justify-between text-main-green">
            <Link to={"/module/" + module.moduleId}>
              <div>{module.moduleName}</div>
            </Link>
            <div>{module.collectionNumber}</div>
          </div>
          <div className="w-full text-ellipsis text-xl font-light break-words ">
            {module.shortDescription ? module.shortDescription + "..." : ""}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModuleBlock;
