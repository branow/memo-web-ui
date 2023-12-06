import { Link } from "react-router-dom";
import SettingsCircleButton from "../constant/Buttons/SettingsCircleButton";
import Flashcard from "./Flashcard";
import NextCircleButton from "../constant/Buttons/NextCircleButton";
import { useState } from "react";
import UserScoreList from "./UserScoreList";

const LearningPage = ({ learnModeMemo }) => {
  learnModeMemo = true;
  const [flashcardSide, setFlashcardSide] = useState(true);
  const [turnedOver, setTurnedOver] = useState(false);
  const turnover = () => {
    if(!turnedOver) setTurnedOver(true);
    if (flashcardSide) setFlashcardSide(false);
    else setFlashcardSide(true);
  }
    return (
      <div className="absolute w-[100vw] h-[95vh] bg-dark-grey text-white">
        <div className="float-right mx-[5vw] my-[5vh]">
          <Link to={"learning/settings"}>
            <SettingsCircleButton size={"40px"} />
          </Link>
        </div>
        <div className="flex flex-col">
          <div className="relative flex flex-row w-fit h-fit mt-[15vh] ml-[22vw]">
            <Flashcard flashcardSideState={flashcardSide} turnover={turnover} learnModeMemo={learnModeMemo}/>
            <div className="absolute h-fit right-0 top-0 bottom-0 mr-[-8vw] mt-[20vh] text-main-green ">
              <NextCircleButton size="60px" />
            </div>
          </div>
          {learnModeMemo && turnedOver && <UserScoreList />}
        </div>
      </div>
    );
}
 
export default LearningPage;