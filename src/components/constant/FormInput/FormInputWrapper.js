import { HiOutlineMail } from "react-icons/hi";
import { RiLockPasswordLine } from "react-icons/ri";
import { AiOutlineUser } from "react-icons/ai";

const FormInputWrapper = ({ childrenInput, inputName }) => {
  let inputIcon;
  if (inputName === "Username")
    inputIcon = <AiOutlineUser className="mt-[7px]" size="20px" />;
  else if (inputName === "Email")
    inputIcon = <HiOutlineMail className="mt-[7px]" size="20px" />;
  else inputIcon = <RiLockPasswordLine className="mt-[7px]" size="20px" />;
  return (
    <div className="relative w-[100%] h-[50px] border-b-2 border-solid border-white my-[30px]">
      <span className="absolute right-[8px] text-[1.2em] text-white leading-[57px]">
        {inputIcon}
      </span>
      {childrenInput}
      <label
        className="absolute peer-placeholder-shown:top-[50%] top-[-5px] left-[5px] translate-y-[-50%] text-[1em] text-white font-medium 
            duration-[.5s] peer-focus:top-[-5px] pointer-events-none"
      >
        {inputName}
      </label>
    </div>
  );
};

export default FormInputWrapper;
