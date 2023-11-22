import { memo } from "react";

const EmailInput = memo(({ onChangeAction, value }) => {
  return (
    <input
      className="peer w-[100%] h-[100%] bg-transparent text-[1em] text-white font-semibold pl-[5px] pr-[35px] border-none outline-none"
      type="email"
      required
      title="Must be in specified format: someemail@mail.ma"
      onChange={onChangeAction}
      placeholder=""
      defaultValue={value}
    />
  );
});

export default EmailInput;
