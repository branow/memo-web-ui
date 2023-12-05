import PlaySoundCircleButton from "../constant/Buttons/PlaySoundCircleButton";
import TurnoverCircleButton from "../constant/Buttons/TurnoverCircleButton";
import WritingAnswer from "./WritingAnswer";
import Image from "../CollectionPage/Image";

const FlashcardSide = ({ flashcardSide, turnover, learnModeMemo, checked, check }) => {
    return (
      <div className="flex flex-col">
        <div className="flex flex-row">
          <div className="flex flex-col">
            <div className="relative w-[25vw] min-h-[25vh] h-fit bg-charcoal rounded-xl my-[2vh] mx-[2vw]">
              {flashcardSide.audio && (
                <div className="absolute top-0 right-0 m-[5px]">
                  <PlaySoundCircleButton size="25px" />
                </div>
              )}

              <div className="mt-[4vh] mb-[5vh] mx-[2vw] text-lg">
                {flashcardSide.text}
              </div>
              {learnModeMemo && (
                <div className="absolute bottom-0 right-0">
                  <TurnoverCircleButton size="25px" onClickAction={turnover} />
                </div>
              )}
              {!learnModeMemo && checked && (
                <div className="absolute bottom-0 right-0">
                  <TurnoverCircleButton size="25px" onClickAction={turnover} />
                </div>
              )}
            </div>
          </div>

          <div className="m-auto w-[18vw] h-[25vh] px-[1vw]">
            {flashcardSide.image && (
              <Image src={flashcardSide.image.mediaUrl} />
            )}
          </div>
        </div>
        {!learnModeMemo &&
        <WritingAnswer checked={checked} check={check}/>
        }
      </div>
    );
}
 
export default FlashcardSide;