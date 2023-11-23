const TextToolItemWrapper = ({ Icon, onClickAction }) => {
  return (
    <>
      <button
        className="bg-form-background-grey rounded-full cursor-pointer p-[10px] hover:bg-collection-grey 
      [&:hover>*]:fill-white active:bg-main-green"
        onClick={onClickAction}
      >
        <Icon className="fill-slate-200 rounded-full" size="25px" />
      </button>
    </>
  );
};

export default TextToolItemWrapper;
