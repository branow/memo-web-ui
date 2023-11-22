import { RiLockPasswordLine } from "react-icons/ri";
import FormInputWrapper from "./FormInputWrapper";
import PasswordInput from "./PasswordInput";
import { memo } from "react";

const PasswordInputField = memo(({ onChangeAction, label, value }) => {
    return (
      <FormInputWrapper
        childrenInput={
          <PasswordInput
            onChangeAction={onChangeAction}
            value={value}
          />
        }
        inputName={label}
        icon={<RiLockPasswordLine className="mt-[7px]" size="20px" />}
      />
    );
});
 
export default PasswordInputField;