import FormInputWrapper from "./FormInputWrapper";
import UserNameInput from "./UsernameInput";
import { memo } from "react";

const GeneralInputField = memo(({ onChangeAction, value }) => {
    return (
      <FormInputWrapper
        childrenInput={
          <UserNameInput
            onChangeAction={onChangeAction}
            value={value}
          />
        }
      />
    );
});
 
export default GeneralInputField;