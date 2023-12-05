import SubmitButton from "../constant/Buttons/SubmitButton";
import AnswerScore from "./AnswerScore";
import ChangeCircleButton from "../constant/Buttons/ChangeCircleButton";

const WritingAnswer = ({ checked, check }) => {
    return (
      <div className="flex flex-row w-fit mt-[2vh]">
        <div className="w-[30vw] h-[3vh] mt-[2vh]">
          <input
            className="w-full h-full bg-transparent text-xl text-gray-300 pl-[5px] pr-[35px] border-solid border-b-4 border-charcoal outline-none"
            type="text"
            required
            placeholder={!checked && "Answer"}
          />
        </div>
        {checked && (
          <div className="ml-[3vw] mt-[-1.5vh] flex flex-row">
            <div>
              <AnswerScore size="60px" score="90" />
            </div>
            <div className="float-right">
              <ChangeCircleButton size="18px" />
            </div>
          </div>
        )}

        {!checked && (
          <div className="ml-[3vw]">
            <SubmitButton actionName="Check" onClickAction={check} />
          </div>
        )}
      </div>
    );
}
 
export default WritingAnswer;