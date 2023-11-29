import ModuleCollection from "./ModuleCollection";
import AddModuleButton from "../UserPage/PublicUser/Module/AddModuleButton";
import { Link } from "react-router-dom";

const ModuleCollectionList = ({ collections, thisUser }) => {
    return (
      <>
        {collections.map((curCollection) => (
          <div key={curCollection.collectionId}>
            <ModuleCollection thisUser={thisUser} collection={curCollection} />
          </div>
        ))}
        {thisUser && (
          <div className="absolute w-fit h-fit right-0 mt-[-8vh] mr-[-3vw] z-10">
            <Link to={"#"}>
              <AddModuleButton />
            </Link>
          </div>
        )}
      </>
    );
}
 
export default ModuleCollectionList;