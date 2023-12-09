import { MdOutlinePeopleAlt } from "react-icons/md";
import { RiGitRepositoryPrivateLine } from "react-icons/ri";

const ModuleAccess = ({ access, size }) => {
  return (
    <>
      {access === "PUBLIC" && (
        <div className="flex text-main-green text-lg justify-center items-center">
          <MdOutlinePeopleAlt className="" size={size} />
          <span className="pl-[7px] ">PUBLIC</span>
        </div>
      )}
      {access === "PRIVATE" && (
        <div className="flex text-red-400 text-lg justify-center items-center">
          <RiGitRepositoryPrivateLine size={size} />
          <span className="pl-[7px] text-lg text-red-400">PRIVATE</span>
        </div>
      )}
    </>
  );
};

export default ModuleAccess;
