import SubmitButton from "../constant/Buttons/SubmitButton";
import AnswerScore from "./AnswerScore";
import ChangeCircleButton from "../constant/Buttons/ChangeCircleButton";
import { useContext, useState } from "react";
import { FlashcardLearnContext } from "./FlashcardContent";
import { estimate } from "../../utils/estimator";

const AnswerInput = ({ setIsScoreEdit }) => {
  const { flashcardState, frontSideState, isCheckedState, curScoreState } =
    useContext(FlashcardLearnContext);
  const [answer, setAnswer] = useState("");

  const check = () => {
    const correct = flashcardState.flashcard.backSide.text;
    const score = estimate(correct, answer);
    curScoreState.setCurScore(score);
    isCheckedState.setIsChecked(true);
    frontSideState.setIsFrontSide(false);
  };

  const onEnterUp = (e) => {
    if (e.key === "Enter") {
      check();
    }
  };

  const isChecked = isCheckedState.isChecked;
  return (
    <div className="flex flex-row w-fit mt-[2vh]">
      <div className="w-[30vw] h-[3vh] mt-[2vh]">
        {!isChecked && (
          <input
            className="w-full h-full bg-transparent text-xl text-gray-300 pl-[5px] pr-[35px] border-solid border-b-4 border-charcoal outline-none"
            type="text"
            required
            placeholder={!isChecked && "Answer"}
            onChange={(e) => setAnswer(e.target.value)}
            onKeyUp={onEnterUp}
          />
        )}
        {isChecked && (
          <div className="w-full h-full bg-transparent text-xl text-gray-300 pl-[5px] pr-[35px] border-solid border-b-4 border-charcoal outline-none">
            {answer}
          </div>
        )}
      </div>
      <div className="w-[30px]"></div>
      {isChecked && (
        <div className="relative flex flex-row group">
          <div>
            <AnswerScore size="70px" score={curScoreState.curScore + '%'} />
          </div>
          <div className="hidden absolute top-[-7px] right-[-7px] z-[10] group-hover:block">
            <ChangeCircleButton
              size="20px"
              onClickAction={() => setIsScoreEdit(true)}
            />
          </div>
        </div>
      )}
      {!isChecked && (
        <div className="">
          <SubmitButton actionName="Check" onClickAction={check} />
        </div>
      )}
    </div>
  );
};

export default AnswerInput;
