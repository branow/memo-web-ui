import EditorHeader from "./EditorHeader";
import SubmitButton from "../constant/Buttons/SubmitButton";
import FlashcardSideEditView from "./FlashcardSideEditView";
import { useState } from "react";
import DeleteCircleButton from "../constant/Buttons/DeleteCircleButton";
import { useSaveFlashcard } from "../../hooks/request/flashcard";
import ErrorBox from "../constant/ErrorBox";
import LoadingScreen from "../constant/LoadingScreen";

const FlashcardEditor = ({ flashcard, collectionId, setFlashcard, close }) => {
  const [frontSide, setFrontSide] = useState(flashcard.frontSide);
  const [backSide, setBackSide] = useState(flashcard.backSide);
  const { state } = useSaveFlashcard(setFlashcard, close);
  const query = backSide.text;

  const onSaveAction = () => {
    flashcard = {
      flashcardId: flashcard.flashcardId,
      frontSide: frontSide,
      backSide: backSide,
    };
    state.run({ flashcard, collectionId });
  };

  return (
    <>
      <div className="relative w-[1000px] bg-tealish-blue">
        {state.pending && <LoadingScreen />}
        {state.error && <ErrorBox title="Flashcard saving error" message={state.error}/>}

        <div className="absolute right-0">
          <DeleteCircleButton color="white" size="25px" onClickAction={close} />
        </div>
        <EditorHeader
          defaultQuery={query}
          setFront={setFrontSide}
          setBack={setBackSide}
        />
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
            <SubmitButton actionName="Save" onClickAction={onSaveAction} />
          </div>
        </div>
      </div>
    </>
  );
};

export default FlashcardEditor;
