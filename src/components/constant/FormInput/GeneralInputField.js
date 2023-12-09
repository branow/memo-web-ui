import FormInputWrapper from "./FormInputWrapper";
import UserNameInput from "./UsernameInput";
import { memo } from "react";

const GeneralInputField = memo(({ onChangeAction, value }) => {
    return (
      <FormInputWrapper
        childrenInput={
          <input
          className="peer w-[100%] h-[100%] bg-transparent text-[1em] text-white font-semibold px-[5px] border-none outline-none"
          type="text"
          required
          minLength="2"
          maxLength="99"
          title="Minimal length is 2 symbols"
          onChange={onChangeAction}
          placeholder=""
          defaultValue={value}
        />
        }
      />
    );
});
 
export default GeneralInputField;