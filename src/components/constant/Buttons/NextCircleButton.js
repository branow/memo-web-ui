import { memo } from "react";
import { FaRegArrowAltCircleRight } from "react-icons/fa";

const NextCircleButton = memo(({ size, color, onClickAction }) => {
    return (
      <>
        <button
          className="p-[3px] hover:bg-soft-green w-fit rounded-full cursor-pointer active:bg-bold-green"
          onClick={onClickAction}
        >
          <FaRegArrowAltCircleRight size={size} color={color} />
        </button>
      </>
    );
  });
 
export default NextCircleButton;