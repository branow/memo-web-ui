import { useState } from "react";
import SearchBar from "../constant/SearchBar";
import DeleteCircleButton from "../constant/Buttons/DeleteCircleButton";

const WebSearchWrapper = ({ Content, defaultQuery, choose, close }) => {
  const [query, setQuery] = useState(defaultQuery);

  return (
    <div className="relative w-[60vw] min-w-[850px] max-w[1200px] flex flex-col justify-center bg-tealish-blue">
      <div className="absolute right-0 top-0">
        <DeleteCircleButton size="30px" color="white" onClickAction={close} />
      </div>
      <div className="p-[20px] flex flex-col justify-center border-b-[3px] border-charcoal">
        <div className="w-[80%] m-auto p-[5px]">
          <SearchBar query={query} search={setQuery} />
        </div>
        <div className="h-[10px]"></div>
        <div className="text-center font-thin text-base text-white ">
          do double click to choose
        </div>
      </div>
      <div className="p-[20px] h-[70vh] overflow-y-auto">
        <Content query={query} choose={choose}/>
      </div>
    </div>
  );
};

export default WebSearchWrapper;
