import { useParams } from "react-router-dom/cjs/react-router-dom";
import { modules } from "../UserPage/ModuleDto";
import ModuleInfo from "./ModuleInfo";



const ModulePage = ({ module }) => {
    module = modules[0];
    const { id } = useParams();

    return ( 
        <div className="relative w-screen h-fit pb-[50px] bg-form-background-grey text-white">
            <ModuleInfo module={module}/>
            {console.log(id)}
        </div>
     );
}
 
export default ModulePage;