import { HiOutlineMail } from "react-icons/hi";
import FormInputWrapper from "./FormInputWrapper";
import EmailInput from "./EmailInput";
import { memo } from "react";

const EmailInputField = memo(({ onChangeAction, value }) => {
    return (
      <FormInputWrapper
        childrenInput={
          <EmailInput
            onChangeAction={onChangeAction}
            value={value}
          />
        }
        inputName={"Email"}
        icon={<HiOutlineMail className="mt-[7px]" size="20px" />}
      />
    );
});
 
export default EmailInputField;