const ButtonWrapper = ({ children, onClickAction, disabled }) => {
  return (
    <>
      {!disabled && (
        <button
          className="p-[5px] w-fit rounded-full cursor-pointer hover:bg-soft-green active:bg-bold-green"
          onClick={onClickAction}
        >
          {children}
        </button>
      )}
      {disabled && (
        <button className="p-[5px] w-fit rounded-full opacity-50">
          {children}
        </button>
      )}
    </>
  );
};

export default ButtonWrapper;
