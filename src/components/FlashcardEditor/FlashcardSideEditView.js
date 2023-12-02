import TextEditor from "./TextEditor";
import ImageEditView from "./ImageEditView";
import AudioEditView from "./AudioEditView";
import { memo, useState } from "react";
import WindowWrapper from "../constant/WindowWrapper";
import WordSenseWebSearch from "../WebSearch/WordSenseWebSearch";
import SearchCircleButton from "../constant/Buttons/SearchCircleButton";

const FlashcardSideEditView = memo(({ query, title, side, setSide }) => {
  const [isSearching, setIsSearching] = useState(false);
  const isFrontSide = query !== side.text;

  const setAudio = (audio) => {
    setSide((pr) => {
      pr.audio = {
        mediaUrl: audio,
      };
      return { ...pr };
    });
  };

  const setImage = (image) => {
    setSide((pr) => {
      pr.image = {
        mediaUrl: image,
      };
      return { ...pr };
    });
  };

  const setFormat = (format) => {
    setSide((pr) => {
      pr.format = format;
      return { ...pr };
    });
  };

  const setText = (text) => {
    setSide((pr) => {
      pr.text = text;
      return { ...pr };
    });
  };

  const close = () => {
    setIsSearching(false);
  };

  return (
    <>
      {isSearching && (
        <WindowWrapper close={close}>
          <WordSenseWebSearch
            close={close}
            query={query}
            format={side.format}
            setFormat={setFormat}
            text={side.text}
            setText={setText}
          />
        </WindowWrapper>
      )}

      <div className="w-full">
        <div className="text-soft-green text-center text-2xl font-sans font-bold">
          {title}
        </div>
        <div className="flex content-around p-[20px] max-h-[40vh] min-h-[25vh]">
          <div className="relative w-[70%] min-h-full [&:hover>div.hidden]:block">
            {isFrontSide && (
              <div className="hidden absolute right-0">
                <SearchCircleButton color="white" size="30px" onClickAction={() => setIsSearching(true)}/>
              </div>
            )}

            <TextEditor
              format={side.format}
              setFormat={setFormat}
              text={side.text}
              setText={setText}
            />
          </div>
          <div className="w-[30%] flex flex-col content-around items-center p-[20px]">
            <AudioEditView
              audio={side.audio ? side.audio.mediaUrl : null}
              setAudio={setAudio}
              query={query}
            />
            <div className="h-[20px]"></div>
            <ImageEditView
              image={side.image ? side.image.mediaUrl : null}
              setImage={setImage}
              query={query}
            />
          </div>
        </div>
      </div>
    </>
  );
});

export default FlashcardSideEditView;
