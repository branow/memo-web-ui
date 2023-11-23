import FlashcardSideEditView from "./FlashcardSideEditView";

const FlashcardEditView = ({ flashcard }) => {
  return (
    <>
      <div className="flex flex-col items-center justify-center w-full">
        <FlashcardSideEditView side={flashcard.frontSide} title="Title Side (Question)"/>
        <FlashcardSideEditView side={flashcard.backSide} title="Back Side (Answer)"/>
      </div>
    </>
  );
};

export default FlashcardEditView;
