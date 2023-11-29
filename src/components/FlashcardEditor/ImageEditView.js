import { useState } from "react";
import SearchCircleButton from "../constant/Buttons/SearchCircleButton";
import DeleteCircleButton from "../constant/Buttons/DeleteCircleButton";
import { IoMdImages } from "react-icons/io";

const ImageEditView = ({ image }) => {
  const [src, setSrc] = useState(image != null ? image.mediaUrl : null);

  const handleDeleteSubmit = (e) => {
    setSrc(null);
  };

  const handleOnDrop = (e) => {
    const imageSrc = e.dataTransfer.getData("imageSrc");
    if (imageSrc && imageSrc !== src) {
      setSrc(imageSrc);
    }
  };

  const handleOnDragStart = (e) => {
    e.dataTransfer.setData("imageSrc", src);
  };

  const handleOnDragOver = (e) => {
    e.preventDefault();
  };

  return (
    <>
      <div className="relative w-full h-fit flex flex-col">
        <div className="absolute w-full p-[5px]">
          <div className="w-full flex justify-between">
            <SearchCircleButton size="25px" color="white" />
            {src && (
              <DeleteCircleButton
                size="15px"
                color="white"
                onClickAction={handleDeleteSubmit}
              />
            )}
          </div>
        </div>
        <div
          className="flex flex-col items-center justify-center"
          onDragOver={handleOnDragOver}
          onDrop={handleOnDrop}
        >
          {src && (
            <div className="h-full overflow-hidden rounded-lg">
              <img
                className="z-[1] w-full h-full"
                src={src}
                draggable="true"
                onDragStart={handleOnDragStart}
              />
            </div>
          )}
          {!src && (
            <div>
              <IoMdImages size="100px" color="white" />
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default ImageEditView;
