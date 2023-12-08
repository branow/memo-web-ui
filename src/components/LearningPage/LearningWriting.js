import { useContext, useEffect, useState } from "react";
import { LearningContext } from "./LearningPage";
import FlashcardContent from "./FlashcardContent";
import NextCircleButton from "../constant/Buttons/NextCircleButton";
import { useSetScoreToFlashcard } from "../../hooks/request/learning";

const LearningWriting = () => {
  const { typeId, toLearnState, circleState } = useContext(LearningContext);
  const [position, setPosition] = useState(null);
  const [flashcardId, setFlashcardId] = useState(null);
  const [isChecked, setIsChecked] = useState(false);
  const [curScore, setCurScore] = useState(null);
  const useSetScore = useSetScoreToFlashcard((argScore) => {});

  const isCheckedState = { isChecked, setIsChecked };
  const curScoreState = { curScore, setCurScore };

  useEffect(() => {
    setPosition(0);
  }, [toLearnState.toLearn]);

  useEffect(() => {
    setFlashcardId(toLearnState.toLearn[position]);
    console.log("learnign " + toLearnState.toLearn[position]);
  }, [toLearnState.toLearn, position]);

  useEffect(() => {
    setIsChecked(false);
  }, [position]);

  useEffect(() => {
    setCurScore(null);
  }, [position]);

  const setScore = (score) => {
    const studyTypeId = typeId;
    useSetScore.state.run({ flashcardId, studyTypeId, score });
    const toLearn = toLearnState.toLearn;
    if (position < toLearn.length - 1) {
      setPosition(position + 1);
      setIsChecked(false);
    } else {
      circleState.setIsCircle(true);
    }
  };

  const next = () => {
    if (isChecked) {
      setScore(curScore);
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
      <div className="relative">
        {flashcardId !== null && (
          <FlashcardContent
            flashcardId={flashcardId}
            isCheckedState={isCheckedState}
            useSetScore={useSetScore}
            setScore={setScore}
            curScoreState={curScoreState}
          />
        )}
        <div className="absolute h-full right-[-90px] top-0  flex flex-col justify-center text-main-green ">
          <NextCircleButton size="60px" onClickAction={next} />
        </div>
      </div>
    </>
  );
};

export default LearningWriting;
