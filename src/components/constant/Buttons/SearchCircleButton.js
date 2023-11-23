import { MdSearch } from "react-icons/md";
import { memo } from "react";

const SearchCircleButton = memo(({ size, color, onClickAction }) => {
  return (
    <>
      <button
        className="p-[3px] hover:bg-soft-green w-fit rounded-full cursor-pointer active:bg-bold-green"
        onClick={onClickAction}
      >
        <MdSearch size={size} color={color} />
      </button>
    </>
  );
});

export default SearchCircleButton;
