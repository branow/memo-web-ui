import { memo } from "react";

const DeleteButton = memo(({ actionName, onClickAction }) => {
    return (
      <div>
        <button
          type="submit"
          className="w-fit h-fit bg-red-500 cursor-pointer text-[18px] text-white font-medium px-[2vw] py-[0.5vh] duration-500
                  hover:bg-red-700 active:bg-red-900"
          onClick={onClickAction}
        >
          {actionName}
        </button>
      </div>
    );
  });
  
  export default DeleteButton;