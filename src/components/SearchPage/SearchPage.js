import React from "react";
import SearchBar from "../constant/SearchBar";
import ToggleSwitch from "../LearningPage/Setting/ToggleSwitch";
import Navigation from "./Navigation";
import GoUpCircleButton from "../constant/Buttons/GoUpCircleButton";
import BlockList from "./BlockList";
import { modules } from "./modules-dto";
import { users } from "./users-dto";
import { useState } from "react";

const SearchPage = ({ searchType }) => {
  const [searchMode, setSearchMode] = useState(false);
  const changeSearchMode = () => {
    if (searchMode) setSearchMode(false);
    else setSearchMode(true);
  };
  const scrollUp = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <div className="absolute w-full min-h-[100vh] bg-dark-grey pb-[4vh] text-white">
      <div className="fixed bottom-[5vh] right-[2vw]">
        <GoUpCircleButton size="100px" onClickAction={scrollUp} />
      </div>
      <div className="flex flex-row pr-[15vw] mt-[3vh] w-fit m-auto  gap-20">
        <div className="flex flex-col  items-center m-auto">
          <div className="text-xl text-main-green">Search type</div>
          <div className="flex flex-row mt-[2vh] pl-[1.2vw] gap-6 text-lg">
            <div>User search</div>
            <ToggleSwitch
              searchSwitch={true}
              onChangeAction={changeSearchMode}
            />
            <div>Module search</div>
          </div>
        </div>
        <div className="w-[25vw] h-[5vh]  m-auto">
          <SearchBar />
        </div>
      </div>
      <div className="w-fit mx-auto my-[2vh]">
        <Navigation />
      </div>
      {searchMode && <BlockList userBlockList={true} users={users} />}
      {!searchMode && <BlockList modules={modules} />}
    </div>
  );
};

export default SearchPage;
