import { memo, useCallback, useEffect, useMemo, useState } from "react";
import { MdOutlinePlayCircle, MdOutlinePauseCircle } from "react-icons/md";

const AudioPlayer = memo(({ src, size, color, play }) => {
  const audio = useMemo(() => new Audio(src), [src]);

  const [isPlaying, setIsPlaying] = useState(false);

  const handleClick = useCallback(() => {
    if (isPlaying) {
      audio.pause();
    } else {
      audio.play();
    }
    setIsPlaying(!isPlaying);
  }, [audio]);

  useEffect(() => {
    if (play) {
      handleClick();
    }
  }, [play, handleClick]);

  audio.onended = () => {
    setIsPlaying(false);
  };

  return (
    <>
      <div
        className="cursor-pointer p-[3px] w-fit rounded-full hover:bg-soft-green active:bg-bold-green"
        onClick={handleClick}
      >
        {isPlaying && <MdOutlinePauseCircle size={size} color={color} />}
        {!isPlaying && <MdOutlinePlayCircle size={size} color={color} />}
      </div>
    </>
  );
});

export default AudioPlayer;
