import { RxAvatar } from "react-icons/rx";

const Collection = ({ collection }) => {
  return (
    <div className="w-[60vw] h-[10vh] flex flex-col px-[1vw] py-[1vh] bg-collection-grey mx-auto mt-[2vh] rounded-sm border-b-[4px] border-collection-grey hover:border-solid hover:border-collection-underline-grey cursor-pointer">
      <div className="flex justify-between h-[7vh] text-lg font-normal">
        <div className="w-fit flex">
          <span>{collection.size + " cards"}</span>
          <div className="w-fit h-fit flex mx-[10px] pl-[10px] border-l-2 border-solid border-white">
            <RxAvatar className="m-auto" color="white" size="20px" />
            <span className="ml-[5px]">Author</span>
          </div>
        </div>
      </div>
      <div className="text-xl mb-[10px]">
        <span>{collection.collectionName}</span>
      </div>
    </div>
  );
};

export default Collection;
