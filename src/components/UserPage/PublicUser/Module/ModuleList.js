import { Link } from "react-router-dom";
import Module from "./Module";
import AddButton from "../../../constant/Buttons/AddButton";

const ModuleList = ({ moduleIds, thisUser, setModuleIds }) => {

  const onDelete = (moduleId) => {
    setModuleIds((moduleIds) => moduleIds.filter(id => id !== moduleId));
  }

  return (
    <>
      {moduleIds.map((moduleId) => (
        <div key={moduleId}>
          <Module thisUser={thisUser} moduleId={moduleId} onDelete={onDelete}/>
        </div>
      ))}
      {thisUser && (
        <div className="mt-[-3vh]">
          <div className="relative w-fit h-fit m-auto mr-[5vw] pb-[4vh] z-10">
            <Link to={"#"}>
              <AddButton />
            </Link>
          </div>
        </div>
      )}
    </>
  );
};

export default ModuleList;
