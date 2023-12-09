import React, { createContext, useEffect } from "react";
import SearchBar from "../constant/SearchBar";
import ToggleSwitch from "../LearningPage/Setting/ToggleSwitch";
import Navigation from "./Navigation";
import GoUpCircleButton from "../constant/Buttons/GoUpCircleButton";
import { useState } from "react";
import UserList from "./UserList";
import { useHistory, useParams } from "react-router-dom";
import ModuleList from "./ModuleList";

export const SearchContext = createContext();

const SearchPage = ({ searchType }) => {
  const history = useHistory();
  const [query, setQuery] = useState("");
  const [pageNumber, setPageNumber] = useState(0);
  const [totalPages, setTotalPages] = useState(0);

  const scrollUp = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const onSwitch = (checked) => {
    if (checked) {
      history.push("/search/module");
    } else {
      history.push("/search/user");
    }
  };
  const checked = searchType === "MODULE";
  const pageNumberState = { pageNumber, setPageNumber };
  const totalPagesState = { totalPages, setTotalPages };
  return (
    <div className="absolute w-full min-h-[100vh] bg-dark-grey pb-[4vh] text-white font-sans">
      <SearchContext.Provider
        value={{ query, pageNumberState, totalPagesState }}
      >
        <div className="fixed z-10 bottom-[5vh] right-[2vw]">
          <GoUpCircleButton size="100px" onClickAction={scrollUp} />
        </div>
        <div className="flex flex-row pr-[15vw] mt-[3vh] w-fit m-auto  gap-20">
          <div className="flex flex-col  items-center m-auto">
            <div className="text-xl text-main-green">Search type</div>
            <div className="flex flex-row mt-[2vh] pl-[1.2vw] gap-6 text-lg">
              <div>User</div>
              <ToggleSwitch
                checked={checked}
                onChangeAction={(e) => onSwitch(e.target.checked)}
              />
              <div>Module</div>
            </div>
          </div>
          <div className="w-[25vw] h-[5vh] m-auto">
            <SearchBar
              query={query}
              search={(searchQuery) => setQuery(searchQuery)}
            />
          </div>
        </div>
        <div className="w-fit mx-auto my-[2vh]">
          <Navigation />
        </div>
        <div className="flex flex-col justify-center">
          {query && (
            <>
              {searchType === "USER" && <UserList />}
              {searchType === "MODULE" && <ModuleList />}
            </>
          )}
          {!query && (
            <div className="text-center text-white text-3xl">
              Type something into the search input field and push the button
            </div>
          )}
        </div>
      </SearchContext.Provider>
    </div>
  );
};

export default SearchPage;
