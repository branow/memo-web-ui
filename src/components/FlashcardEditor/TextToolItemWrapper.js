const TextToolItemWrapper = ({ Icon, onClickAction }) => {
  return (
    <>
      <button
        className="text-tool-button bg-form-background-grey rounded-full cursor-pointer p-[5px] hover:bg-soft-green
      [&:hover>*]:fill-white active:bg-bold-green"
        onClick={onClickAction}
      >
        <Icon className="fill-slate-200 rounded-full" size="20px"/>
      </button>
    </>
  );
};

export default TextToolItemWrapper;
