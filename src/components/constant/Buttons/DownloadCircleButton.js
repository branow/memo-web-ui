import { memo } from "react";
import { MdDownloading } from "react-icons/md";

const DownloadCircleButton = memo(({ size, color, onClickAction }) => {
    return (
      <>
        <button
          className="p-[5px] hover:bg-soft-green w-fit rounded-full cursor-pointer active:bg-bold-green"
          onClick={onClickAction}
        >
          <MdDownloading size={size} color={color} />
        </button>
      </>
    );
  });
 
export default DownloadCircleButton;