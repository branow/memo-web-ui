import CollectionStudy from "./CollectionStudy";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { PublicUserContext } from "../PublicUserInfo";

const Collection = ({ collection }) => {
  const { userState, isAuthenticated, isOwner } = useContext(PublicUserContext);
  return (
    <div
      className="relative w-[20vw] h-fit px-[2vw] py-[2vh] mx-[3vw] my-[2vh] bg-charcoal mt-[2vh] rounded-t-xl  cursor-pointer [&:hover>div.hidden]:block"
    >
      <Link className="peer" to={"/collection/" + collection.collectionId}>
        <div className="absolute top-0 left-0 w-full h-full z-10"></div>
      </Link>
      <div>
        <span className="text-xl">{collection.collectionName}</span>
        <span className="float-right text-2xl text-main-green font-semibold">
          {collection.size}
        </span>
      </div>
      {isOwner && (
        <div className="hidden w-full absolute bg-charcoal left-0 top-[85%] p-[10px] rounded-xl border-b-[4px] 
        border-charcoal hover:border-solid hover:border-regent-grey">
          <CollectionStudy memoDestination={"#"} writingDestination={"#"} />
        </div>
      )}
    </div>
  );
};

export default Collection;
