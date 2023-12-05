import Collection from "./Collection";

const CollectionList = ({ collections, }) => {
  return (
    <>
      {collections.map((collection) => (
        <div key={collection.collectionId}>
            <Collection collection={collection} />
        </div>
      ))}
    </>
  );
}
 
export default CollectionList;