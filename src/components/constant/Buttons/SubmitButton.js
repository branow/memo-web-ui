import { memo } from "react";

const SubmitButton = memo(({ actionName, onClickAction }) => {
  return (
    <button
      type="submit"
      className="w-fit h-fit bg-main-green cursor-pointer text-[1.4em] text-white font-medium px-[2vw] py-[1vh] duration-500
            hover:bg-green-700 active:bg-green-900"
      onClick={onClickAction}
    >
      {actionName}
    </button>
  );
});

export default SubmitButton;
