import { useHistory, useLocation } from "react-router-dom";
import SubmitButton from "../constant/Buttons/SubmitButton";
import { useContext } from "react";
import { LearningContext } from "./LearningPage";

const LearnCicleAlert = () => {
  const { typeId } = useContext(LearningContext);
  const location = useLocation();
  const history = useHistory();

  const onRepeat = () => {
    const type = typeId == 1 ? "memorize" : "writing";
    history.push(`/learning/${type}`, {
      collections: location.state.collections,
    });
  };

  const onEnd = () => {
    history.push("/");
  };

  return (
    <div className="flex flex-col justify-center items-center w-[400px] p-[20px] bg-tealish-blue ">
      <div className="text-center p-[20px] text-2xl font-sans font-bold">
        Congratulations!!!
      </div>
      <div className="text-center p-[20px] text-lg font-sans">
        Your have already learned all flashcard. Do you wnat to repeat them one
        more time?
      </div>
      <div className="flex p-[20px]">
        <SubmitButton actionName="Again" onClickAction={onRepeat} />
        <div className="w-[50px]"></div>
        <SubmitButton actionName="End" onClickAction={onEnd} />
      </div>
    </div>
  );
};

export default LearnCicleAlert;
