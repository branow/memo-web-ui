import Collection from "./Collection";
import { Link } from "react-router-dom";

const CollectionList = ({ collections }) => {
    return (
      <>
        {collections.map((curCollection) => (
          <div key={curCollection.collectionId}>
            <Link to={`/modules/${curCollection.moduleId}`}>
              <Collection collection={curCollection} />
            </Link>
          </div>
        ))}
      </>
    );
}
 
export default CollectionList;