import Collection from "./Collection";

const CollectionList = ({ collections, thisUser }) => {
    return (
      <>
        {collections.map((curCollection) => (
          <div key={curCollection.collectionId}>
              <Collection thisUser={thisUser} collection={curCollection} />
          </div>
        ))}
      </>
    );
}
 
export default CollectionList;