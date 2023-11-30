import { useParams } from "react-router-dom/cjs/react-router-dom";
import { module } from "./ModuleDto";
import ModuleInfo from "./ModuleInfo";

const ModulePage = ({ currentModule }) => {
    currentModule = module;
    const { id } = useParams();

    return (
      <div className="relative w-screen h-fit bg-dark-grey text-white">
        <ModuleInfo module={currentModule} />
        {console.log(id)}
      </div>
    );
}
 
export default ModulePage;