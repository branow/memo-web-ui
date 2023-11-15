import { useParams } from "react-router-dom/cjs/react-router-dom";
import ModuleInfo from "./ModuleInfo";

const ModulePage = ({ module }) => {
    const { id } = useParams();

    return ( 
        <div className="relative w-screen h-fit pb-[50px] bg-form-background-grey text-white">
            {/* <ModuleInfo module={module}/> */}
            id
        </div>
     );
}
 
export default ModulePage;