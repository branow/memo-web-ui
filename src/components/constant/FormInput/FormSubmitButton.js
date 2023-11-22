import { memo } from "react";

const FormSubmitButton = memo(({ actionName, onClickAction }) => {
  return (
    <div className="w-fit">
      <button
        type="submit"
        className="w-fit h-fit bg-main-green cursor-pointer text-[1.5em] text-white font-medium px-[2vw] py-[0.5vh] duration-500
                hover:bg-green-700 active:bg-green-900"
        onClick={onClickAction}
      >
        {actionName}
      </button>
    </div>
  );
});

export default FormSubmitButton;
