import { useState } from "react";
import SearchBar from "../constant/SearchBar";

const WebSearch = ({ defaultQuery, Content, choose }) => {
  const [query, setQuery] = useState(defaultQuery);

  return (
    <div className="w-[60%] min-w-[850px] max-w[1200px] flex flex-col justify-center bg-tealish-blue">
      <div className="p-[20px] flex flex-col justify-center border-b-[3px] border-charcoal">
        <div className="w-[80%] m-auto p-[5px] border-[3px] border-charcoal rounded-xl">
          <SearchBar search={setQuery} />
        </div>
        <div className="h-[10px]"></div>
        <div className="text-center font-thin text-base text-white ">
          do double click to choose
        </div>
      </div>
      <div className="p-[20px]">
        <Content phrase={query} choose={choose} />
      </div>
    </div>
  );
};

export default WebSearch;
