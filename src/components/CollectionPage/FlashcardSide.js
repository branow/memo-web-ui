import PlaySoundCircleButton from "../constant/Buttons/PlaySoundCircleButton";
import Image from "./Image";


const FlashcardSide = ({ text, audio, image, format }) => {
    return (
      <div
        className="relative w-[25vw] min-h-[25vh] h-fit mx-[3vw] bg-charcoal rounded-xl border-b-[4px] 
        border-charcoal hover:border-solid hover:border-regent-grey cursor-pointer "
      >
        {audio && (
          <div className="float-right p-[0.5vh] z-20">
            <PlaySoundCircleButton size={"22px"} />
          </div>
        )}
        <div className="relative h-fit mx-[2vw] py-[2vh] text-xl">
          <span>Title Side:</span>
          <span className="ml-[5px]">{text}</span>
        </div>
        <div className="w-[12vw] mb-[2vh] ml-[11vw] rounded-xl duration-300 hover:scale-[2]">
          {image && (
            <Image
              src={image.mediaUrl}
            />
          )}
        </div>
      </div>
    );
}
 
export default FlashcardSide;