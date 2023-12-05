import { FaCircle } from "react-icons/fa";

const UserScoreButton = ({ color, label, onClickAction }) => {
    return (
      <button
        className="flex flex-col items-center rounded-2xl p-[5px] hover:bg-soft-green active:bg-bold-green cursor-pointer"
        onClick={onClickAction}
      >
        <FaCircle color={color} size="60px" />
        <div className="text-sm text-gray-300 mt-[1vh]">
          <span>{label}</span>
        </div>
      </button>
    );
}
 
export default UserScoreButton;