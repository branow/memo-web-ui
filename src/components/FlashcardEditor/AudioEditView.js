import AudioPlayer from "../constant/AudioPlayer";
import SearchCircleButton from "../constant/Buttons/SearchCircleButton";
import DeleteCircleButton from "../constant/Buttons/DeleteCircleButton";

import { useState } from "react";
import SoundWaves from "../constant/Icons/SoundWaves";

const AudioEditView = ({ audio }) => {
  const [src, setSrc] = useState(audio != null ? audio.mediaUrl : null);

  const handleDeleteSubmit = (e) => {
    setSrc(null);
  };

  const handleOnDrop = (e) => {
    const audioSrc = e.dataTransfer.getData("audioSrc");
    if (audioSrc && audioSrc != src) {
      setSrc(audioSrc);
    }
  };

  const handleOnDragStart = (e) => {
    e.dataTransfer.setData("audioSrc", src);
  };

  const handleOnDragOver = (e) => {
    e.preventDefault();
  };

  return (
    <>
      <div className="relative w-full">
        <div className="flex w-full" onDragOver={handleOnDragOver} onDrop={handleOnDrop}>
          <div className="w-full  border-b-4 border-collection-grey border-solid">
            {src && (
              <div className="flex w-full">
                <div className="absolute">
                  <AudioPlayer src={src} size="25px" color="white"/>
                </div>
                <div className="m-auto" draggable="true" onDragStart={handleOnDragStart}>
                  <SoundWaves size="35px" color="white" />
                </div>
              </div>
            )}
            {!src && (
              <div className="flex justify-center">
                <SoundWaves size="35px" color="grey" />
              </div>
            )}
          </div>
          <div className="realtive">
            <div className="absolute flex right-0">
              <div className="h-fit">
                <SearchCircleButton size="25px" color="white" />
              </div>
              {src && <DeleteCircleButton size="15px" color="white" onClickAction={handleDeleteSubmit}/>}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AudioEditView;
