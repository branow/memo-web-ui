import { memo } from "react";

const FormInputWrapper = memo(({ childrenInput, inputName, icon }) => {
  return (
    <div className="relative w-[100%] h-[50px] border-b-2 border-solid border-white my-[30px]">
      {icon && (
        <span className="absolute right-[8px] text-[1.2em] text-white leading-[57px]">
          {icon}
        </span>
      )}
      {childrenInput}
      <label
        className="absolute peer-placeholder-shown:top-[50%] top-[-5px] left-[5px] translate-y-[-50%] text-[1em] text-white font-medium 
            duration-[.5s] peer-focus:top-[-5px] pointer-events-none"
      >
        {inputName}
      </label>
    </div>
  );
});

export default FormInputWrapper;
