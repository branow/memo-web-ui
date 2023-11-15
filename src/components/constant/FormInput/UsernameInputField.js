import { AiOutlineUser } from "react-icons/ai";
import FormInputWrapper from "./FormInputWrapper";
import UserNameInput from "./UsernameInput";
import { memo } from "react";

const UsernameInputField = memo(({ onChangeAction }) => {
    return (
      <FormInputWrapper
        childrenInput={
          <UserNameInput
            onChangeAction={onChangeAction}
          />
        }
        inputName={"Username"}
        icon={<AiOutlineUser className="mt-[7px]" size="20px" />}
      />
    );
});
 
export default UsernameInputField;