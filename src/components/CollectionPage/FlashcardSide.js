import FlashcardTextSide from "../constant/FlashcardTextSide";
import AudioPlayer from "../constant/AudioPlayer";

const FlashcardSide = ({ side }) => {
  const audio = side.audio,
    image = side.image,
    text = side.text,
    format = side.format;

  return (
    <div
      className="relative w-[25vw] min-h-[25vh] h-fit mx-[3vw] bg-charcoal rounded-xl border-b-[4px] 
        border-charcoal hover:border-solid hover:border-regent-grey cursor-pointer "
    >
      {audio && audio.mediaUrl && (
        <div className="absolute right-1 top-1 z-10">
          <AudioPlayer src={audio.mediaUrl} size="25px" color="white" />
        </div>
      )}
      <div className="relative h-fit p-[10px] pr-[40px]">
        <FlashcardTextSide text={text} format={format} />
      </div>
      <div className="w-[12vw] rounded-xl  ">
        {image && (
          <div className="absolute h-[100px] w-[100px] z-10 right-[-40px] bottom-[-20px] overflow-hidden rounded-lg duration-300 hover:scale-[3]">
            <img
              className="z-[1] h-full w-fit object-cover"
              src={image.mediaUrl}
              draggable="false"
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default FlashcardSide;
