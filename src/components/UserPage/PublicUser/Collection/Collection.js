import CollectionStudy from "./CollectionStudy";
import { Link } from "react-router-dom";

const Collection = ({ collection, thisUser }) => {
  return (
    <div
      className="relative w-[20vw] h-fit px-[2vw] py-[2vh] mx-[3vw] my-[2vh] bg-collection-grey mt-[2vh] rounded-xl border-b-[4px] 
    border-collection-grey hover:border-solid hover:border-collection-underline-grey cursor-pointer "
    >
      <Link className="peer" to={"/profile/collections/" + collection.collectionId}>
        <div className="absolute top-0 left-0 w-full h-full z-10"></div>
      </Link>
      <div>
        <span className="text-xl">{collection.collectionName}</span>
        <span className="float-right text-2xl text-main-green font-semibold">
          {collection.size}
        </span>
      </div>
      {thisUser && (
        <CollectionStudy memoDestination={"#"} writingDestination={"#"} />
      )}
    </div>
  );
};

export default Collection;
