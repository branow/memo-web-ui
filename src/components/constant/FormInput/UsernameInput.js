import { memo } from "react";

const UserNameInput = memo(({ onChangeAction, value }) => {
  return (
    <input
      className="peer w-[100%] h-[100%] bg-transparent text-[1em] text-white font-semibold pl-[5px] pr-[35px] border-none outline-none"
      type="text"
      required
      minLength="2"
      maxLength="99"
      title="Minimal length is 2 symbols"
      onChange={onChangeAction}
      placeholder=""
      defaultValue={value}
    />
  );
});

export default UserNameInput;
