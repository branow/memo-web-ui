import TextEditor from "./TextEditor";
import ImageEditView from "./ImageEditView";
import AudioEditView from "./AudioEditView";


const FlashcardSideEditView = ({ title, side }) => {
  return (
    <>
      <div className="w-full">
        <div className="text-soft-green text-center text-2xl font-sans font-bold">
          {title}
        </div>
        <div className="flex content-around p-[10px] max-h-[40vh] min-h-[25vh]">
          <div className="w-[70%] min-h-full">
            <TextEditor format={side.format} text={side.text}/>
          </div>
          <div className="w-[30%] flex flex-col content-around items-center p-[10px]">
            <AudioEditView audio={side.audio}/>
            <div className="h-[10px]"></div>
            <ImageEditView image={side.image} />   
          </div>
        </div>
      </div>
    </>
  );
};

export default FlashcardSideEditView;
