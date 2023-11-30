import TextEditor from "./TextEditor";
import ImageEditView from "./ImageEditView";
import AudioEditView from "./AudioEditView";
import { memo } from "react";

const FlashcardSideEditView = memo(({ query, title, side, setSide }) => {
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

  return (
    <>
      <div className="w-full">
        <div className="text-soft-green text-center text-2xl font-sans font-bold">
          {title}
        </div>
        <div className="flex content-around p-[20px] max-h-[40vh] min-h-[25vh]">
          <div className="w-[70%] min-h-full">
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
