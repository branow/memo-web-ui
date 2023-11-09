const PasswordInput = ({ onChangeAction }) => {
  return (
    <input
      className="peer w-[100%] h-[100%] bg-transparent text-[1em] text-white font-semibold pl-[5px] pr-[35px] border-none outline-none"
      type="password"
      required
      onChange={onChangeAction}
      placeholder=""
    />
  );
};

export default PasswordInput;
