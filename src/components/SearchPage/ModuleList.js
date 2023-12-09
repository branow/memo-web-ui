import { useContext, useEffect } from "react";
import { useSearchModules } from "../../hooks/request/search";
import ErrorPage from "../constant/ErrorPage";
import LoadingAnimation from "../constant/LoadingAnimation";
import ModuleBlock from "./ModuleBlock";
import { SearchContext } from "./SearchPage";

const ModuleList = () => {
  const { search, pageNumber, totalPagesState } = useContext(SearchContext);
  const { modulesPageState, state } = useSearchModules(search, pageNumber);
  const modulesPage = modulesPageState.modulesPage;

  useEffect(() => {
    if (modulesPage) {
      totalPagesState.setTotalPages(modulesPage.totalPages);
    }
  }, [modulesPage]);

  return (
    <>
      {modulesPage && (
        <div className="relative flex flex-col">
          {state.pending && (
            <LoadingAnimation message={"Searching..."} transparent={true} />
          )}
          {state.error && (
            <ErrorPage mesage="Modules Searhing Error" message={state.error} />
          )}
          {modulesPage.content.map((module) => (
            <div key={module.moduleId}>
              <ModuleBlock module={module} />
            </div>
          ))}
        </div>
      )}
    </>
  );
};

export default ModuleList;
