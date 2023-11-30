const EditorMenuButton = ({ label, onClickAction }) => {
  return (
    <>
      <button className="border-none font-sans text-sm text-white bg-dark-grey 
      hover:bg-bright-grey active:text-main-green px-[20px] py-[5px]" onClick={onClickAction}>
        {label}
      </button>
    </>
  );
};

export default EditorMenuButton;
