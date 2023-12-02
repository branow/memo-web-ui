import { MdCleaningServices } from "react-icons/md";
import { memo } from "react";

const CleanCircleButton = memo(({ size, color, onClickAction }) => {
  return (
    <>
      <button
        className=" p-[10px] h-fit rounded-full cursor-pointer hover:bg-soft-green w-fit active:bg-bold-green"
        onClick={onClickAction}
      >
        <MdCleaningServices size={size} color={color} />
      </button>
    </>
  );
});

export default CleanCircleButton;
