import AudioPlayer from "../constant/AudioPlayer";
import SoundWaves from "../constant/Icons/SoundWaves";

const SearchedAudio = ({ audio, onDoubleClick }) => {
  return (
    <div
      className="relative h-fit w-[370px] m-[7px] p-[10px] overflow-hidden rounded-lg bg-charcoal [&:hover>div.hidden]:block "
      onDoubleClick={onDoubleClick}
    >
      <div className="hidden absolute z-[20] top-0 right-0 px-[10px] rounded-xl font-sans text-sm font-bold text-main-green bg-glassy-grey">
        {audio.site}
      </div>
      <div className="flex items-center justify-between">
        <div className="flex items-center">
        <AudioPlayer src={audio.data} size="30px" color="white"/>
        <div className="w-[5px]"></div>
        <SoundWaves size="30px" color="white"/>
        
        </div>
        <div className="font-sans text-white text-base">
          {audio.name}
        </div>
        
      </div>
    </div>
  );
};

export default SearchedAudio;
