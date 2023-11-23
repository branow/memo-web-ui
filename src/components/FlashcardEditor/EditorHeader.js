import EditorMenu from "./EditorMenu";

const EditorHeader = () => {
  return (
    <>
      <div className="bg-form-background-grey p-[5px]">
        <div className="text-white text-base ml-[10px] pt-[10px]">
          Flashcard Editor
        </div>
        <EditorMenu />
      </div>
    </>
  );
};

export default EditorHeader;
