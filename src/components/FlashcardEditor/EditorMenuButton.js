const EditorMenuButton = ({ label, onClickAction }) => {
  return (
    <>
      <button className="border-none font-sans text-sm text-white bg-form-background-grey 
      hover:bg-collection-grey active:text-main-green px-[20px] py-[5px]" onClick={onClickAction}>
        {label}
      </button>
    </>
  );
};

export default EditorMenuButton;
