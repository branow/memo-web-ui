import ChangeCircleButton from "../constant/Buttons/ChangeCircleButton";
import DeleteCircleButton from "../constant/Buttons/DeleteCircleButton";
import Score from "../UserPage/PublicUser/Score";
import FlashcardSide from "./FlashcardSide";
import { useState } from "react";
import flashcardDto from "./flash-card-dto";

const Flashcard = ({ flashcardSideState, turnover, learnModeMemo }) => {
  const [checked, setChecked] = useState(false);
  const check = () => {
    setChecked(true);
  }
    return (
      <div className=" min-w-[45vw] w-fit min-h-[40vh] h-fit py-[2vh] px-[2vw] bg-tealish-blue rounded-lg">
        <div className="relative">
          <div className="flex flex-row absolute top-0 right-0 mr-[1vw] gap-3">
            <ChangeCircleButton size="25px" />
            <DeleteCircleButton size="25px" />
          </div>
          <div className="relative flex flex-row my-[1vh] mx-[2vw] w-fit h-[10vh]">
            <div className="bg-charcoal p-[12px] rounded-full">
              <Score score={flashcardDto.scores[0]} />
            </div>
            <div className="w-fit h-fit m-auto ml-[2vw]">
              <div className="text-3xl text-main-green font-semibold">
                <span>Module name</span>
              </div>
              <div className="text-xl mt-[1vh]">
                <span>Collection name</span>
              </div>
            </div>
          </div>
          {flashcardSideState && (
            <FlashcardSide
              learnModeMemo={learnModeMemo}
              checked={checked}
              flashcardSide={flashcardDto.frontSide}
              turnover={turnover}
              check={check}
            />
          )}
          {!flashcardSideState && (
            <FlashcardSide
              learnModeMemo={learnModeMemo}
              checked={checked}
              flashcardSide={flashcardDto.backSide}
              turnover={turnover}
              check={check}
            />
          )}
        </div>
      </div>
    );
}
 
export default Flashcard;