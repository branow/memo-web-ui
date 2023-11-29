import { MdOutlineClose } from "react-icons/md";
import { memo } from "react";

const DeleteCircleButton = memo(({ size, color, onClickAction }) => {
  return (
    <>
      <button
        className=" p-[5px] h-fit rounded-full cursor-pointer hover:bg-soft-red w-fit active:bg-bold-red"
        onClick={onClickAction}
      >
        <MdOutlineClose size={size} color={color} />
      </button>
    </>
  );
});

export default DeleteCircleButton;
