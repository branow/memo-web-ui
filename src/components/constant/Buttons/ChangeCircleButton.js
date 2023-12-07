import { GoPencil } from "react-icons/go";
import { memo } from "react";

const ChangeCircleButton = memo(({ size, color, onClickAction }) => {
    return (
      <>
        <button
          className="p-[5px] hover:bg-soft-green w-fit rounded-full cursor-pointer active:bg-bold-green"
          onClick={onClickAction}
        >
          <GoPencil size={size} color={color} />
        </button>
      </>
    );
  });
 
export default ChangeCircleButton;