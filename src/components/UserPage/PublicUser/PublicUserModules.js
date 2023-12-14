import SearchBar from "../../constant/SearchBar";
import ModuleList from "./Module/ModuleList";
import { createContext, useContext, useState } from "react";
import { PublicUserContext } from "./PublicUserInfo";

export const SearchingContext = createContext();

const PublicUserModules = () => {
  const { userState } = useContext(PublicUserContext);
  const [query, setQuery] = useState("");

  const moduleIds = userState.user.moduleIds;
  return (
    <>
      <SearchingContext.Provider value={{query}}>
        {moduleIds.length !== 0 && (
          <div className="w-[30%] min-w-[300px] ml-[20vw] mt-[2vh]">
            <SearchBar query={query} search={setQuery}/>
          </div>
        )}
        <div className="h-[7vh]" />
        <ModuleList />
      </SearchingContext.Provider>
    </>
  );
};

export default PublicUserModules;
