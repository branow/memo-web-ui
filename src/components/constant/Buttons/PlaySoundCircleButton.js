import { LuVolume2 } from "react-icons/lu";
import { memo } from "react";

const PlaySoundCircleButton = memo(({ size, color, onClickAction }) => {
    return (
      <>
        <button
          className="p-[3px] hover:bg-soft-green w-fit rounded-full cursor-pointer active:bg-bold-green"
          onClick={onClickAction}
        >
          <LuVolume2 size={size} color={color} />
        </button>
      </>
    );
  });
 
export default PlaySoundCircleButton;