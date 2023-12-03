import { Link } from "react-router-dom/cjs/react-router-dom";
import Module from "./Module";
import AddButton from "../../../constant/Buttons/AddButton";

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
            <div className="relative w-fit h-fit m-auto mr-[5vw] pb-[4vh] z-10">
              <Link to={"#"}>
                <AddButton />
              </Link>
            </div>
          </div>
        )}
      </>
    );
}
 
export default ModuleList;