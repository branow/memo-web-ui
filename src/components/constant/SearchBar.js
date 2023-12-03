import { useState } from "react";
import SearchCircleButton from "./Buttons/SearchCircleButton";

const SearchBar = ({ query, search }) => {
    const [input, setInput] = useState(query);

    const handleOnClickAction = () => {
        search(input);
    }

    const handleOnKeyUp = (e) => {
        if (e.key === "Enter") {
          search(input);
        }
    }

    return (
      <div className="flex h-full w-full  px-[1vw] items-center text-main-green border-[2.5px] border-solid rounded-md shadow-xl border-charcoal">
        <input
          className="bg-transparent border-none h-full w-full mr-[1vw] text-lg focus:outline-none placeholder:text-main-green"
          type="text"
          placeholder="Search..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyUp={handleOnKeyUp}
        />
        <SearchCircleButton
          size="35px"
          color="white"
          onClickAction={handleOnClickAction}
        />
      </div>
    );
}
 
export default SearchBar;