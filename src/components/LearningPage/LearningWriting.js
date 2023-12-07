import { useContext, useEffect, useState } from "react";
import { LearningContext } from "./LearningPage";
import FlashcardContent from "./FlashcardContent";
import NextCircleButton from "../constant/Buttons/NextCircleButton";
import { useSetScoreToFlashcard } from "../../hooks/request/learning";

const LearningWriting = () => {
  const { typeId, toLearnState, circleState } = useContext(LearningContext);
  const [position, setPosition] = useState(null);
  const flashcardId = toLearnState.toLearn[position];
  const [isChecked, setIsChecked] = useState(false);
  const isCheckedState = { isChecked, setIsChecked };
  const [curScore, setCurScore] = useState(null);
  const curScoreState = { curScore, setCurScore };

  useEffect(() => {
    setPosition(0);
  }, [toLearnState.toLearn])

  const useSetScore = useSetScoreToFlashcard((argScore) => {});
  const setScore = (score) => {
    const studyTypeId = typeId;
    useSetScore.state.run({ flashcardId, studyTypeId, score });
    next();
  };

  const next = () => {
    if (curScore != null) {
      setScore(curScore);
      setCurScore(null);
    } else {
      const toLearn = toLearnState.toLearn;
      if (position < toLearn.length - 1) {
        setPosition(position + 1);
        setIsChecked(false);
      } else {
        circleState.setIsCircle(true);
      }
    }
  };

  return (
    <>
      <FlashcardContent
        flashcardId={flashcardId}
        isCheckedState={isCheckedState}
        useSetScore={useSetScore}
        setScore={setScore}
        curScoreState={curScoreState}
      />
      <div className="absolute h-fit right-0 top-0 bottom-0 mr-[-8vw] mt-[20vh] text-main-green ">
        <NextCircleButton size="60px" onClickAction={next} />
      </div>
    </>
  );
};

export default LearningWriting;
