import SenseSearchConentet from "./SenseSearchContent";
import SearchBar from "../constant/SearchBar";
import { useState } from "react";

const SenseSearch = ({ defaultQuery }) => {
  const [query, setQuery] = useState(defaultQuery);

  return (
    <>
      <div className="p-[20px]">
        <div className="w-[80%] m-auto p-[5px] text-base">
          <SearchBar query={query} search={setQuery} />
        </div>
      </div>
      <div className="p-[20px] h-[60vh] overflow-y-auto">
        <SenseSearchConentet query={query}/>
      </div>
    </>
  );
};

export default SenseSearch;
