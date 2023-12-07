import Flashcard from "./Flashcard";
import UserScoreList from "./UserScoreList";
import LoadingAnimation from "../constant/LoadingAnimation";
import ErrorBox from "../constant/ErrorBox";
import { useContext } from "react";
import { FlashcardLearnContext } from "./FlashcardContent";

const MemorizePanel = () => {
  const { useSetScore, setScore, isCheckedState } = useContext(
    FlashcardLearnContext
  );

  return (
    <>
      <div className="relative w-fit h-fit flex flex-col justify-center items-center">
        <Flashcard />
        <div className="h-[20px]"></div>
        <div className={isCheckedState.isChecked ? "visible" : "invisible"}>
          {useSetScore.state.pending && (
            <LoadingAnimation message="Setting score..." />
          )}
          {useSetScore.state.error && (
            <ErrorBox
              title="Setting Score Error"
              message={useSetScore.state.error}
              close={useSetScore.state.cleanError}
            />
          )}
          <UserScoreList setScore={setScore} />
        </div>
      </div>
    </>
  );
};

export default MemorizePanel;
