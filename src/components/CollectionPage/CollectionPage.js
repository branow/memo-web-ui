import { useParams } from "react-router-dom/cjs/react-router-dom";
import CollectionInfo from "./CollectionInfo";
import { collection } from "./collection-dto";

const CollectionPage = ({ currentCollection }) => {
    const { id } = useParams();
    currentCollection = collection;
    return (
      <div>
        <div className="relative w-screen h-fit bg-dark-grey text-white">
          <CollectionInfo collection={currentCollection} />
          {console.log(id)}
        </div>
      </div>
    );
}
 
export default CollectionPage;