import { Link } from "react-router-dom/cjs/react-router-dom";
import Module from "./Module";

const ModuleList = ({ modules }) => {
    return (
      <>
        {modules.map((curModule) => (
          <div key={curModule.moduleId}>
            <Link to={`/modules/${curModule.moduleId}`}>
              <Module module={curModule} />
            </Link>
          </div>
        ))}
      </>
    );
}
 
export default ModuleList;