import SearchBar from "../../constant/SearchBar";
import ModuleList from "./Module/ModuleList";
import { useContext } from "react";
import { PublicUserContext } from "./PublicUserInfo";

const PublicUserModules = () => {
  const { userState, isAuthenticated, isOwner } = useContext(PublicUserContext);
  const moduleIds = userState.user.moduleIds;
  return (
    <>
      {moduleIds.length !== 0 && (
        <div className="w-[30%] min-w-[300px] ml-[20vw] mt-[2vh]">
          <SearchBar />
        </div>
      )}
      <div className="h-[7vh]" />
      <ModuleList />
    </>
  );
};

export default PublicUserModules;
