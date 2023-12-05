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
        <div className="w-[40%] min-w-[500px]">
          <SearchBar />
        </div>
      )}

      <ModuleList />
    </>
  );
};

export default PublicUserModules;
