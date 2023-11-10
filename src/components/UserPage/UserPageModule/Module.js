import Collection from "./Collection";

const Module = ({ module }) => {
  return (
    <div
      className="w-[80vw] h-fit px-[3vw] py-[2vh] bg-body-background-grey mx-auto mt-[5vh] rounded-sm flex flex-col border-[2px] 
      border-body-background-grey cursor-pointer hover:border-solid 
      hover:border-collection-underline-grey"
    >
      <div className="flex justify-between h-[5vh] text-2xl font-normal">
        <div className="w-fit flex">
          <span>{module.moduleName}</span>
          <span className="w-fit h-fit mx-[10px] pl-[10px] border-l-2 border-solid border-white">
            {module.collections.length + " "} collections
          </span>
        </div>
        <div className="w-[30vw] float-right text-xl text-right">
          <span>{module.shortDescription}</span>
        </div>
      </div>
      {module.collections.map((curCollection) => {
        return (
          <Collection
            collection={curCollection}
            key={curCollection.collectionId}
          />
        );
      })}
    </div>
  );
};

export default Module;
