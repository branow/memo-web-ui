const EditorMenuButton = ({ icon, label, onClickAction }) => {
  return (
    <>
      <button className="flex border-none font-sans text-sm text-white bg-dark-grey 
      hover:bg-charcoal active:text-main-green px-[20px] py-[5px]" onClick={onClickAction}>
        {icon && (icon)}
        <div className="w-[5px]"></div>
        {label}
      </button>
    </>
  );
};

export default EditorMenuButton;
