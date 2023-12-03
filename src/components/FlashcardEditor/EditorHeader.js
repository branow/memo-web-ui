import EditorMenu from "./EditorMenu";

const EditorHeader = ({ defaultQuery, setFront, setBack }) => {
  return (
    <>
      <div className="bg-dark-grey">
        <div className="text-white text-base px-[20px] py-[5px]">
          Flashcard Editor
        </div>
        <EditorMenu
          defaultQuery={defaultQuery}
          setFront={setFront}
          setBack={setBack}
        />
      </div>
    </>
  );
};

export default EditorHeader;
