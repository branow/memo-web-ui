import EditorMenu from "./EditorMenu";

const EditorHeader = () => {
  return (
    <>
      <div className="bg-dark-grey">
        <div className="text-white text-base px-[20px] py-[5px]">
          Flashcard Editor
        </div>
        <EditorMenu />
      </div>
    </>
  );
};

export default EditorHeader;
