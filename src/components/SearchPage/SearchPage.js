import React, { createContext, useEffect, useRef } from "react";
import SearchBar from "../constant/SearchBar";
import ToggleSwitch from "../LearningPage/Setting/ToggleSwitch";
import Navigation from "./Navigation";
import GoUpCircleButton from "../constant/Buttons/GoUpCircleButton";
import { useState } from "react";
import UserList from "./UserList";
import { useHistory, useLocation, useParams } from "react-router-dom";
import ModuleList from "./ModuleList";
import { PiCardsBold } from "react-icons/pi";
import { RxAvatar } from "react-icons/rx";

export const SearchContext = createContext();

const SearchPage = ({ searchType }) => {
  const locaiton = useLocation();
  const page = new URLSearchParams(locaiton.search).get("page")
  const pageNumber = page ? page - 1 : 0;
  const search = new URLSearchParams(locaiton.search).get("search");
  const history = useHistory();
  const [totalPages, setTotalPages] = useState(0);
  const ref = useRef();

  const onSwitch = (checked) => {
    if (checked) {
      history.push("/search/module");
    } else {
      history.push("/search/user");
    }
  };
  const onSearch = (input) => {
    history.push(`/search/${searchType}?search=${input}&page=${1}`);
  }
  const checked = searchType === "module";
  const totalPagesState = { totalPages, setTotalPages };
  return (
    <div className="w-full bg-dark-grey text-white font-sans">
      <SearchContext.Provider
        value={{ searchType, search, pageNumber, totalPagesState }}
      >
        <div className="p-[50px] flex flex-col justify-center items-center">
          <div className=" w-[80vw] min-w-[800px] max-w-[1500px]">
            <div className="flex flex-col justify-center items-center">
              <div className="flex flex-row justify-center items-center gap-20">
                <div className="flex flex-col gap-[10px] items-center">
                  <div className="text-xl text-main-green">Search</div>
                  <div className="flex flex-row justify-center items-center gap-[10px] text-lg">
                    <RxAvatar color="white" size="40px" />
                    <ToggleSwitch
                      checked={checked}
                      onChangeAction={(e) => onSwitch(e.target.checked)}
                      size={"lg"}
                    />
                    <PiCardsBold color="white" size="40px" />
                  </div>
                </div>
                <div className="w-[30vw] min-w-[300px] max-w-[600px]" ref={ref}>
                  <SearchBar
                    query={search}
                    search={onSearch}
                  />
                </div>
              </div>
              <div className="p-[10px]">
                <Navigation />
              </div>
              <div className="p-[10px] flex flex-col justify-center">
                {search && (
                  <>
                    {searchType === "user" && <UserList />}
                    {searchType === "module" && <ModuleList />}
                  </>
                )}
                {!search && (
                  <div className="text-center text-white text-3xl">
                    Type something into the search input field and push the
                    button
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </SearchContext.Provider>
    </div>
  );
};

export default SearchPage;
