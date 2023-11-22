import { Link } from "react-router-dom/cjs/react-router-dom";
import Module from "./Module";
import AddModuleButton from "./AddModuleButton";

const ModuleList = ({ modules, thisUser }) => {
    return (
      <>
        {modules.map((curModule) => (
          <div key={curModule.moduleId}>
            <Module thisUser={thisUser} module={curModule} />
          </div>
        ))}
        {thisUser && (
          <div className="mt-[-3vh]">
            <div className="w-fit h-fit m-auto mr-[5vw] pb-[4vh]">
              <Link to={"#"}>
                <AddModuleButton />
              </Link>
            </div>
          </div>
        )}
      </>
    );
}
 
export default ModuleList;