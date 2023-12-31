import { useParams } from "react-router-dom";
import { useGetCollectionDetails } from "../../hooks/request/collection";
import { createContext, useContext, useState } from "react";
import { UserContext } from "../App";
import SearchBar from "../constant/SearchBar";
import CardList from "./CardList";
import StudyTypeDescription from "../UserPage/PublicUser/Module/StudyTypeDescription";
import CollectionInfo from "./CollectionInfo";
import LoadingAnimation from "../constant/LoadingAnimation";
import ErrorBox from "../constant/ErrorBox";

export const CollectionContext = createContext();
export const SearchingContext = createContext();

const CollectionPage = () => {
  const { collectionId } = useParams();
  const { collectionState, state } = useGetCollectionDetails(collectionId);
  const [query, setQuery] = useState("");
  const appUserContext = useContext(UserContext);
  const collection = collectionState.collection;

  const isAuthenticated = appUserContext.userState.user;
  const isOwner =
    isAuthenticated &&
    collectionState.collection &&
    appUserContext.userState.user.userId ===
      collectionState.collection.owner.userId;

  if (collection && collection.module.access === "PRIVATE" && !isOwner) {
    return (
      <>
        <ErrorBox
          title="Illegal Access"
          message="You cannot see this collection"
        />
      </>
    );
  }

  return (
    <>
      {state.pending && <LoadingAnimation />}
      {state.error && (
        <ErrorBox
          title="Collection Loading Error"
          message={state.error}
          close={state.cleanError}
        />
      )}
      <CollectionContext.Provider
        value={{ collectionState, isOwner, isAuthenticated }}
      >
        <div className="relative w-full min-h-[100vh] bg-dark-grey text-white">
          <div
            className="relative h-fit w-[70vw] pb-[5vh] bg-tealish-blue mx-auto border-[2px] 
        border-tealish-blue hover:border-solid 
        hover:border-regent-grey"
          >
            {collection && <CollectionInfo />}

            {isOwner && (
              <div className="relative border-solid border-white border-y-[3px]">
                <StudyTypeDescription collections={[collection.collectionId]} />
              </div>
            )}

            {collection && (
              <SearchingContext.Provider value={{ query }}>
                {collection.flashcardIds.length !== 0 && (
                  <div className="w-[30vw] h-[5vh] mt-[5vh] ml-[6.2vw]">
                    <SearchBar
                      query={query}
                      search={setQuery}
                      borderColor={"charcoal"}
                    />
                  </div>
                )}
                <div className="my-[5vh]">
                  <CardList />
                </div>
              </SearchingContext.Provider>
            )}
          </div>
        </div>
      </CollectionContext.Provider>
    </>
  );
};

export default CollectionPage;
