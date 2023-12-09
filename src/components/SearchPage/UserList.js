import { useContext, useEffect } from "react";
import { useSearchUsers } from "../../hooks/request/search";
import ErrorPage from "../constant/ErrorPage";
import LoadingAnimation from "../constant/LoadingAnimation";
import UserBlock from "./UserBlock";
import { SearchContext } from "./SearchPage";

const UserList = () => {
  const { search, pageNumber, totalPagesState } = useContext(SearchContext);
  const { usersPageState, state } = useSearchUsers(search, pageNumber);
  const usersPage = usersPageState.usersPage;

  useEffect(() => {
    if (usersPage) {
      totalPagesState.setTotalPages(usersPage.totalPages);
    }
  }, [usersPage]);

  return (
    <>
      {usersPage && (
        <div className="relative flex flex-col">
          {state.pending && (
            <LoadingAnimation message={"Searching..."} transparent={true} />
          )}
          {state.error && (
            <ErrorPage mesage="Users Searhing Error" message={state.error} />
          )}
          {usersPage.content.map((user) => (
            <div key={user.userId}>
              <UserBlock user={user} />
            </div>
          ))}
        </div>
      )}
    </>
  );
};

export default UserList;
