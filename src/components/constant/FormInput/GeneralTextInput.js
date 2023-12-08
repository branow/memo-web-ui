import { memo } from "react";

const GeneralTextInput = memo(({onChangeAction, value}) => {
    return (
      <input
        className="peer w-[100%] h-[100%] bg-transparent text-[1em] text-white font-semibold pl-[5px] pr-[35px] border-none outline-none"
        type="text"
        onChange={onChangeAction}
        defaultValue={value}
      />
    );
});
 
export default GeneralTextInput;