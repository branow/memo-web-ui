import { IoDownloadOutline } from "react-icons/io5";
import { memo } from "react";

const DownloadCircleButton = memo(({ size, color, onClickAction }) => {
    return (
      <>
        <button
          className="p-[3px] hover:bg-soft-green w-fit rounded-full cursor-pointer active:bg-bold-green"
          onClick={onClickAction}
        >
          <IoDownloadOutline size={size} color={color} />
        </button>
      </>
    );
  });
 
export default DownloadCircleButton;