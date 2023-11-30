import SearchCircleButton from "../constant/Buttons/SearchCircleButton";
import DeleteCircleButton from "../constant/Buttons/DeleteCircleButton";
import { IoMdImages } from "react-icons/io";
import { useState } from "react";
import WindowWrapper from "../constant/WindowWrapper";
import WebSearchWrapper from "../WebSearch/WebSearchWrapper";
import ImageSearchContent from "../WebSearch/ImageSearchContent";

const ImageEditView = ({ query, image, setImage }) => {
  const [isSearching, setIsSearching] = useState(false);

  const handleDeleteSubmit = (e) => {
    setImage(null);
  };

  const handleOnDrop = (e) => {
    const imageSrc = e.dataTransfer.getData("imageSrc");
    if (imageSrc && imageSrc !== image) {
      setImage(imageSrc);
    }
  };

  const handleOnDragStart = (e) => {
    e.dataTransfer.setData("imageSrc", image);
  };

  const handleOnDragOver = (e) => {
    e.preventDefault();
  };

  const handeOnSearch = (e) => {
    setIsSearching(true);
  };

  const choose = (newImage) => {
    setImage(newImage);
    setIsSearching(false);
  };

  const close = () => {
    setIsSearching(false)
  }

  return (
    <>
      {isSearching && (
        <WindowWrapper close={close}>
          <WebSearchWrapper Content={ImageSearchContent} defaultQuery={query} choose={choose} close={close}/>
        </WindowWrapper>
      )}

      <div className="relative h-[180px] w-[180px] flex flex-col">
        <div className="absolute w-full p-[5px]">
          <div className="w-full flex justify-between">
            <SearchCircleButton
              size="25px"
              color="white"
              onClickAction={handeOnSearch}
            />
            {image && (
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
          {image && (
            <div className="h-[180px] w-[180px] overflow-hidden rounded-lg">
              <img
                className="z-[1] h-full w-fit object-cover"
                src={image}
                draggable="true"
                onDragStart={handleOnDragStart}
              />
            </div>
          )}
          {!image && (
            <div>
              <IoMdImages size="150px" color="white" />
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default ImageEditView;
