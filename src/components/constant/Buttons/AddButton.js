import { GoPlus } from "react-icons/go";

const AddButton = ({ onClickAction }) => {
    return (
      <div className="p-[10px] bg-main-green hover:bg-orangy-yellow active:bg-orange-500 w-fit h-fit border-[3px] border-solid border-white rounded-full">
        <GoPlus className="" size={"90px"} color="white" onClick={onClickAction}/>
      </div>
    );
}
 
export default AddButton;