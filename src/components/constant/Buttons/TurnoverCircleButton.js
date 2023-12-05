import { LuUndo2 } from "react-icons/lu";
import { memo } from "react";

const TurnoverCircleButton = memo(({ size, color, onClickAction }) => {
  return (
    <>
      <button
        className=" p-[5px] h-fit rounded-full cursor-pointer hover:bg-soft-green w-fit active:bg-bold-green"
        onClick={onClickAction}
      >
        <LuUndo2 size={size} color={color} />
      </button>
    </>
  );
});
 
export default TurnoverCircleButton;