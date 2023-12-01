import AudioPlayer from "../constant/AudioPlayer";
import SearchCircleButton from "../constant/Buttons/SearchCircleButton";
import DeleteCircleButton from "../constant/Buttons/DeleteCircleButton";
import AudioSearchContent from "../WebSearch/AudioSearchContent";
import WindowWrapper from "../constant/WindowWrapper";
import WebSearchWrapper from "../WebSearch/WebSearchWrapper";

import { useState } from "react";
import SoundWaves from "../constant/Icons/SoundWaves";

const AudioEditView = ({ query, audio, setAudio }) => {
  const [isSearching, setIsSearching] = useState(false);

  const handleDeleteSubmit = (e) => {
    setAudio(null);
  };

  const handleOnDrop = (e) => {
    const audioSrc = e.dataTransfer.getData("audioSrc");
    if (audioSrc && audioSrc !== audio) {
      setAudio(audioSrc);
    }
  };

  const handleOnDragStart = (e) => {
    e.dataTransfer.setData("audioSrc", audio);
  };

  const handleOnDragOver = (e) => {
    e.preventDefault();
  };

  const handeOnSearch = (e) => {
    setIsSearching(true);
  };

  const close = () => {
    setIsSearching(false);
  };

  const choose = (newAudio) => {
    setAudio(newAudio);
    close();
  };

  return (
    <>
      {isSearching && (
        <WindowWrapper close={close}>
          <WebSearchWrapper
            Content={AudioSearchContent}
            defaultQuery={query}
            choose={choose}
            close={close}
          />
        </WindowWrapper>
      )}

      <div className="relative w-full">
        <div
          className="flex w-full"
          onDragOver={handleOnDragOver}
          onDrop={handleOnDrop}
        >
          <div className="w-full  border-b-4 border-charcoal border-solid">
            {audio && (
              <div className="flex w-full">
                <div className="absolute">
                  <AudioPlayer src={audio} size="25px" color="white" />
                </div>
                <div
                  className="m-auto"
                  draggable="true"
                  onDragStart={handleOnDragStart}
                >
                  <SoundWaves size="35px" color="white" />
                </div>
              </div>
            )}
            {!audio && (
              <div className="flex justify-center">
                <SoundWaves size="35px" color="grey" />
              </div>
            )}
          </div>
          <div className="realtive">
            <div className="absolute flex right-0">
              <div className="h-fit">
                <SearchCircleButton
                  size="25px"
                  color="white"
                  onClickAction={handeOnSearch}
                />
              </div>
              {audio && (
                <DeleteCircleButton
                  size="15px"
                  color="white"
                  onClickAction={handleDeleteSubmit}
                />
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AudioEditView;
