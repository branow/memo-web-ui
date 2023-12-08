import ModuleSearchInfo from "./ModuleSearchInfo";
import UserSearchInfo from "./UserSearchInfo";
import SearchBar from "../constant/SearchBar";
import ToggleSwitch from "../LearningPage/Setting/ToggleSwitch";
import Navigation from "./Navigation";
import GoUpCircleButton from "../constant/Buttons/GoUpCircleButton";
import UserBlock from "./UserBlock";

const SearchPage = ({ searchType }) => {
    return (
      <div className="absolute w-full min-h-[100vh] bg-dark-grey text-white">
        <div className="fixed bottom-[5vh] right-[2vw]"><GoUpCircleButton size="100px" /></div>
        <div className="flex flex-row pr-[15vw] mt-[3vh] w-fit m-auto  gap-20">
          <div className="flex flex-col  items-center m-auto">
            <div className="text-xl text-main-green">Search type</div>
            <div className="flex flex-row mt-[2vh] gap-6 text-base">
              <div>User search</div>
              <ToggleSwitch searchSwitch={true} />
              <div>Module search</div>
            </div>
          </div>
          <div className="w-[25vw] h-[5vh]  m-auto">
            <SearchBar />
          </div>
          
        </div>
        <div className="w-fit m-auto"><Navigation /></div>
        <UserBlock />

        {searchType === "USER" && <UserSearchInfo />}
        {searchType === "USER" && <ModuleSearchInfo />}
      </div>
    );
}
 
export default SearchPage;