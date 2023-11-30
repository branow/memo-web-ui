import flashcardDto from "./flash-card-dto";
import EditorHeader from "./EditorHeader";
import SubmitButton from "../constant/Buttons/SubmitButton";
import FlashcardSideEditView from "./FlashcardSideEditView";

const FlashcardEditor = () => {
  const flashcard = flashcardDto;
  return (
    <>
      <div className="relative w-[1000px]">
        <EditorHeader />
        <div className="flex border-form-background-grey border-4 p-[20px] pl-[40px]">
          <div className="flex flex-col items-center">
            <div className="flex flex-col items-center justify-center w-full">
              <FlashcardSideEditView
                side={flashcard.frontSide}
                title="Title Side (Question)"
              />
              <FlashcardSideEditView
                side={flashcard.backSide}
                title="Back Side (Answer)"
              />
            </div>
            <SubmitButton actionName="Save" />
          </div>
          <div>
            
          </div>
        </div>
      </div>
    </>
  );
};

export default FlashcardEditor;
