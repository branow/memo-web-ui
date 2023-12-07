import { memo } from "react";
import { FiSettings } from "react-icons/fi";

const SettingsCircleButton = memo(({ size, color, onClickAction }) => {
  return (
    <>
      <button
        className="p-[10px] hover:bg-soft-green w-fit rounded-full cursor-pointer active:bg-bold-green"
        onClick={onClickAction}
      >
        <FiSettings size={size} color={color} />
      </button>
    </>
  );
});

export default SettingsCircleButton;
