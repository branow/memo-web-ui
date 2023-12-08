import Callback from "../../utils/callback";
import useGetRequest from "./useGetRequest";
import SearchRequester from "../../request/search";

export {
  useSearchUsers,
  useSearchModules,
};

function useSearchUsers(input, pageNumber) {
  const { dataState, state } = useSearch(
    input,
    pageNumber,
    (query, pageNumber, callback, signal) =>
      new SearchRequester().searchUser(query, pageNumber, callback, signal)
  );
  return {
    usersPageState: { usersPage: dataState.data, setUsersPage: dataState.setData },
    state: state,
  };
}

function useSearchModules(input, pageNumber) {
  const { dataState, state } = useSearch(
    input,
    pageNumber,
    (query, pageNumber, callback, signal) =>
      new SearchRequester().searchModule(query, pageNumber, callback, signal)
  );
  return {
    modulesPageState: { modulesPage: dataState.data, setModulesPage: dataState.setData },
    state: state,
  };
}

function useSearch(input, pageNumber, searchFunction) {
  const request = ({ callback, signal }) => {
    if (!input) {
      throw new Error("Search field is empty");
    }
    searchFunction(input, pageNumber, callback, signal);
  };
  return useGetRequest(request, new Callback(), [input, pageNumber]);
}
