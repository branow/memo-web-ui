import CollectionStudy from "./CollectionStudy";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { PublicUserContext } from "../PublicUserInfo";

const Collection = ({ collection }) => {
  const { isOwner } = useContext(PublicUserContext);
  return (
    <div
      className="relative w-full h-full p-[20px] bg-charcoal rounded-md cursor-pointer [&:hover>div.hidden]:block hover:rounded-b-none"
    >
      <Link className="peer" to={"/collection/" + collection.collectionId}>
        <div className="absolute top-0 left-0 w-full h-full z-10"></div>
      </Link>
      <div className="flex flex-row">
        <div className="text-lg w-[15vw]">
          <span>{collection.collectionName}</span>
          </div>
        <div className="float-right text-2xl text-main-green font-semibold">
          <span>{collection.size}</span>
        </div>
      </div>
      {isOwner && (
        <div className="hidden w-full absolute bg-charcoal left-0 top-[85%] p-[10px] rounded-xl border-b-[4px] 
        border-tealish-blue border-solid hover:border-solid z-10">
          <CollectionStudy collections={[collection.collectionId]} />
        </div>
      )}
    </div>
  );
};

export default Collection;
