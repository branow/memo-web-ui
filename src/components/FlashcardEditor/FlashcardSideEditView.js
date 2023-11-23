import AudioPlayer from "../constant/AudioPlayer";
import DeleteCircleButton from "../constant/Buttons/DeleteCircleButton";
import SearchCircleButton from "../constant/Buttons/SearchCircleButton";
import { GiSoundWaves } from "react-icons/gi";
import { IoMdImages } from "react-icons/io";

const FlashcardSideEditView = ({ title, side }) => {
  return (
    <>
      <div className="w-full">
        <div className="text-soft-green text-center text-2xl font-sans font-bold">
          {title}
        </div>
        <div className="flex content-around p-[10px] max-h-[40vh] min-h-[25vh]">
          <div className="w-[70%] min-h-full p-[0px]">
            <div className="bg-collection-grey p-[15px] rounded-xl  overflow-y-auto text-gray-200 font-sans h-full">
              {side.text}
            </div>
          </div>
          <div className="w-[30%] flex flex-col content-around items-center p-[10px]">
            <div className="relative w-full">
              <div className="absolute w-full">
                {side.audio && (
                  <>
                    <div className="flex justify-between">
                      <div className="flex">
                        <AudioPlayer
                          src={side.audio.mediaUrl}
                          size="25px"
                          color="white"
                        />
                        <SearchCircleButton size="25px" color="white" />
                      </div>
                      <div className="float-right flex">
                        <DeleteCircleButton size="15px" color="white" />
                      </div>
                    </div>
                  </>
                )}
                {!side.audio && (
                  <div>
                    <SearchCircleButton size="25px" color="white" />
                  </div>
                )}
              </div>
              <div className="flex justify-center border-b-4 border-collection-grey border-solid">
                <GiSoundWaves size="35px" color="white" />
                <GiSoundWaves size="35px" color="white" />
                <GiSoundWaves size="35px" color="white" />
              </div>
            </div>

            <div className="h-[10px]"></div>

            <div className="relative w-full h-fit flex flex-col">
              <div className="absolute w-full p-[5px]">
                <div className="w-full flex justify-between">
                  <SearchCircleButton size="25px" color="white" />
                  {side.image && (
                    <DeleteCircleButton size="15px" color="white" />
                  )}
                </div>
              </div>

              <div className="flex flex-col items-center justify-center">
                {side.image && (
                  <div className="h-full overflow-hidden rounded-lg">
                    <img
                      className="z-[1] w-full h-full"
                      src={side.image.mediaUrl}
                    />
                  </div>
                )}
                {!side.image && (
                  <div>
                    <IoMdImages size="100px" color="white" />
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FlashcardSideEditView;
