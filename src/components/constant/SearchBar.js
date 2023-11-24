import { useState } from "react";
import SearchCircleButton from "./Buttons/SearchCircleButton";

const SearchBar = () => {
    const [input, setInput] = useState("");

    return ( 
        <div className="flex h-full w-full  px-[1vw] items-center border-2 border-solid border-body-background-grey rounded-md text-main-green">
            <input className="bg-transparent border-none h-full w-full mr-[1vw] text-lg focus:outline-none placeholder:text-main-green" type="text" 
            placeholder="Search..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
            />
            <SearchCircleButton size={"35px"}/>
        </div>
     );
}
 
export default SearchBar;