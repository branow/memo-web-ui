import flashcardDto from "./flash-card-dto";
import EditorHeader from "./EditorHeader";
import SubmitButton from "../constant/Buttons/SubmitButton";
import FlashcardSideEditView from "./FlashcardSideEditView";
import { useState } from "react";

const FlashcardEditor = () => {
  const flashcard = flashcardDto;
  const [frontSide, setFrontSide] = useState(flashcard.frontSide);
  const [backSide, setBackSide] = useState(flashcard.backSide);
  
  return (
    <>
      <div className="relative w-[1000px] bg-tealish-blue">
        <EditorHeader />
        <div className="flex p-[20px] pl-[40px]">
          <div className="flex flex-col items-center">
            <div className="flex flex-col items-center justify-center w-full">
              <FlashcardSideEditView
                side={frontSide}
                setSide={setFrontSide}
                title="Title Side (Question)"
                query={backSide.text}
              />
              <FlashcardSideEditView
                side={backSide}
                setSide={setBackSide}
                title="Back Side (Answer)"
                query={backSide.text}
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
