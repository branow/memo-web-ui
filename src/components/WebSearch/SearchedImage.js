const SearchedImage = ({ image, onDoubleClick }) => {
  return (
    <div>
      <div
        className="relative h-[230px] w-[230px] m-[7px] overflow-hidden rounded-lg [&:hover>div.hidden]:block "
        onDoubleClick={onDoubleClick}
      >
        <div className="hidden absolute z-[20] right-1 px-[10px] rounded-xl font-sans text-sm font-bold text-main-green bg-glassy-grey">
          {image.site}
        </div>
        <div className="hidden absolute z-[20] bottom-1 px-[10px] text-center text-white text-base font-sans bg-glassy-grey">
          {image.name}
        </div>
        <img
          className="relative h-full w-full object-cover"
          src={image.data}
          draggable="false"
        />
      </div>
    </div>
  );
};

export default SearchedImage;
