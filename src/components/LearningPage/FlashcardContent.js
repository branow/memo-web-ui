import { useContext, useEffect } from "react";
import { LearningContext } from "./LearningPage";
import { createContext } from "react";
import { useGetFlashcardLearnContext } from "../../hooks/request/flashcard";
import { useState } from "react";
import WritingPanel from "./WritingPanel";
import MemorizePanel from "./MemorizePanel";
import ErrorBox from "../constant/ErrorBox";
import LoadingAnimation from "../constant/LoadingAnimation";

export const FlashcardLearnContext = createContext();

const FlashcardContent = ({ flashcardId, isCheckedState, useSetScore, setScore, curScoreState }) => {
  const { typeId } = useContext(LearningContext);
  const { flashcardState, state } = useGetFlashcardLearnContext(
    flashcardId,
    typeId
  );
  const [isFrontSide, setIsFrontSide] = useState(null);
  
  useEffect(() => {
    setIsFrontSide(true);
  }, [flashcardId])

  const frontSideState = { isFrontSide, setIsFrontSide };

  return (
    <>
      {state.pending && <LoadingAnimation message="Loading flashcard..." />}
      {state.error && (
        <ErrorBox title="Flashcard Loading Error" message={state.error} />
      )}

      {flashcardState.flashcard && (
        <FlashcardLearnContext.Provider
          value={{
            flashcardState,
            frontSideState,
            isCheckedState,
            useSetScore,
            curScoreState,
            setScore,
          }}
        > 
          <div className="relative flex flex-col">
            {typeId === "1" && <MemorizePanel />}
            {typeId === "2" && <WritingPanel />}
          </div>
        </FlashcardLearnContext.Provider>
      )}
    </>
  );
};

export default FlashcardContent;
