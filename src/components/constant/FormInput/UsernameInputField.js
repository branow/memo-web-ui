import { AiOutlineUser } from "react-icons/ai";
import FormInputWrapper from "./FormInputWrapper";
import UserNameInput from "./UsernameInput";
import { memo } from "react";

const UsernameInputField = memo(({ onChangeAction, value }) => {
    return (
      <FormInputWrapper
        childrenInput={
          <UserNameInput
            onChangeAction={onChangeAction}
            value={value}
          />
        }
        inputName={"Username"}
        icon={<AiOutlineUser className="mt-[7px]" size="20px" />}
      />
    );
});
 
export default UsernameInputField;