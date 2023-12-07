import TurnoverCircleButton from "../constant/Buttons/TurnoverCircleButton";
import Image from "../CollectionPage/Image";
import AudioPlayer from "../constant/AudioPlayer";
import FlashcardTextSide from "../constant/FlashcardTextSide";
import { useContext } from "react";
import { LearningContext } from "./LearningPage";
import { FlashcardLearnContext } from "./FlashcardContent";

const FlashcardSide = () => {
  const { typeId, settingState } = useContext(LearningContext);
  const { flashcardState, frontSideState, isCheckedState } = useContext(FlashcardLearnContext);

  const side = frontSideState.isFrontSide
    ? flashcardState.flashcard.frontSide
    : flashcardState.flashcard.backSide;

  const turnover = () => {
    if (typeId === '1') {
      isCheckedState.setIsChecked(true);
    }
    frontSideState.setIsFrontSide(!frontSideState.isFrontSide);
  };

  return (
    <div className="flex flex-row p-[10px] items-center justify-center">
      <div className="flex flex-col m-[10px]">
        <div className="relative min-w-[500px] max-w-[1000px] w-[40vw] min-h-[300px] max-h-[600px] h-[30vh] p-[20px] bg-charcoal rounded-xl">
          {side.audio && (
            <div className="absolute top-0 right-0 z-10">
              <AudioPlayer
                size="30px"
                src={side.audio.mediaUrl}
                play={!frontSideState.isFrontSide && settingState.setting.audio}
              />
            </div>
          )}
          <FlashcardTextSide text={side.text} format={side.format} />
          {typeId === "2" && isCheckedState.isChecked && (
            <div className="absolute bottom-0 right-0 z-10">
              <TurnoverCircleButton size="25px" onClickAction={turnover} />
            </div>
          )}
          {typeId === "1" && (
            <div className="absolute bottom-0 right-0 z-10">
              <TurnoverCircleButton size="25px" onClickAction={turnover} />
            </div>
          )}
        </div>
      </div>
      <div className="m-[10px] w-[250px] h-[250px]">
        {side.image && <Image src={side.image.mediaUrl} />}
      </div>
    </div>
  );
};

export default FlashcardSide;
