import { memo } from "react";
import { FiSettings } from "react-icons/fi";

const SettingsCircleButton = memo(({ size, color }) => {
    return (
      <>
        <button className="p-[3px] hover:bg-soft-green w-fit rounded-full cursor-pointer active:bg-bold-green">
          <FiSettings size={size} color={color} />
        </button>
      </>
    );
  });
 
export default SettingsCircleButton;