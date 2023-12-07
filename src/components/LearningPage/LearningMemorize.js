import FlashcardContent from "./FlashcardContent";
import { useContext, useState } from "react";
import { LearningContext } from "./LearningPage";
import NextCircleButton from "../constant/Buttons/NextCircleButton";
import { useSetScoreToFlashcard } from "../../hooks/request/learning";
import { useEffect } from "react";

const LearningMemorize = () => {
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
    const toLearn = toLearnState.toLearn;
    if (position < toLearn.length - 1) {
      setPosition(position + 1);
      setIsChecked(false);
    } else {
      circleState.setIsCircle(true);
    }
  };

  return (
    <>
      <div className="relative">
        <FlashcardContent
          flashcardId={flashcardId}
          isCheckedState={isCheckedState}
          useSetScore={useSetScore}
          setScore={setScore}
          curScoreState={curScoreState}
        />
        <div className="absolute h-full right-[-90px] top-0  flex flex-col justify-center text-main-green ">
          <NextCircleButton size="60px" onClickAction={next} />
        </div>
      </div>
    </>
  );
};

export default LearningMemorize;
