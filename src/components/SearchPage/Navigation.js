import { FaArrowLeft } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";

const Navigation = ({ pageCount }) => {
    return (
      <div className="w-[10vw] flex flex-row gap-4">
        <button
          className="p-[5px] hover:bg-soft-green w-fit rounded-full cursor-pointer active:bg-bold-green"
          
        >
          <FaArrowLeft size="30px" />
        </button>
        
        <div className="h-fit m-auto text-2xl font-medium">
            5/10
        </div>
        <button
          className="p-[5px] hover:bg-soft-green w-fit rounded-full cursor-pointer active:bg-bold-green"
         
        >
          <FaArrowRight size="30px" />
        </button>
      </div>
    );
}
 
export default Navigation;