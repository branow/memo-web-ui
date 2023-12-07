import LoadingAnimation from "../constant/LoadingAnimation";
import ErrorBox from "../constant/ErrorBox";
import UserScoreList from "./UserScoreList";
import { useState } from "react";
import { useContext } from "react";
import Flashcard from "./Flashcard";
import AnswerInput from "./AnswerInput";
import { FlashcardLearnContext } from "./FlashcardContent";

const WritingPanel = () => {
  const { useSetScore, setScore } = useContext(FlashcardLearnContext);
  const [isScoreEdit, setIsScoreEdit] = useState(false); 

  return (
    <>
      <div className="relative w-fit h-fit flex flex-col justify-center items-center">
        <Flashcard />
        <AnswerInput setIsScoreEdit={setIsScoreEdit}/>
        <div className="h-[20px]"></div>
        <div
          className={isScoreEdit ? "visible" : "invisible"}
        >
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


        
}
 
export default WritingPanel;