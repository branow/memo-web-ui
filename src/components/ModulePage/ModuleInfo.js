import { VscFileSubmodule } from "react-icons/vsc";
import { Link } from "react-router-dom";

const ModuleInfo = ({module}) => {
    return (
      <div className="flex h-[vh] w-screen">
        <div className="text-3xl font-medium ml-[12vw] pt-[5vh] w-fit h-fit flex">
          <Link to={"/profile/info"}>
            <VscFileSubmodule className="mx-auto" color="white" size="100px" />
          </Link>
          <span className="m-auto ml-[2vw]">{module.name}</span>
        </div>
        <div className="ml-[40vw] pt-[8vh] w-fit h-fit flex flex-col">
          <span className="text-3xl font-medium">Description</span>
          <span className="text-xl font-normal">{module.description}</span>
        </div>
      </div>
    );
}
 
export default ModuleInfo;