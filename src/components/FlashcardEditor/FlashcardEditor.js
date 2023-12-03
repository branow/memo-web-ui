import flashcardDto from "./flash-card-dto";
import EditorHeader from "./EditorHeader";
import SubmitButton from "../constant/Buttons/SubmitButton";
import FlashcardSideEditView from "./FlashcardSideEditView";
import { useState } from "react";

const FlashcardEditor = () => {
  const flashcard = flashcardDto;
  const [frontSide, setFrontSide] = useState(flashcard.frontSide);
  const [backSide, setBackSide] = useState(flashcard.backSide);
  const query = backSide.text;

  const onSaveAction = () => {

  }

  return (
    <>
      <div className="relative w-[1000px] bg-tealish-blue">
        <EditorHeader defaultQuery={query} setFront={setFrontSide} setBack={setBackSide}/>
        <div className="p-[20px] pl-[40px] w-full">
          <div className="flex flex-col items-center">
            <div className="flex flex-col items-center justify-center w-full">
              <FlashcardSideEditView
                side={frontSide}
                setSide={setFrontSide}
                title="Title Side (Question)"
                query={query}
              />
              <FlashcardSideEditView
                side={backSide}
                setSide={setBackSide}
                title="Back Side (Answer)"
                query={query}
              />
            </div>
            <SubmitButton actionName="Save" onClickAction={onSaveAction}/>
          </div>
        </div>
      </div>
    </>
  );
};

export default FlashcardEditor;
