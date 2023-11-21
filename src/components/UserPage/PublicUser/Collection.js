import MemoStudyButton from "./MemoStudyButton";
import WritingStudyButton from "./WritingStudyButton";

const Collection = ({ collection }) => {
  return (
    <div className="w-[20vw] h-fit px-[2vw] py-[2vh] mx-[3vw] my-[2vh] bg-collection-grey mt-[2vh] rounded-xl border-b-[4px] 
    border-collection-grey hover:border-solid hover:border-collection-underline-grey cursor-pointer ">
      <div className="peer w-full">
      <span className="text-xl">{collection.collectionName}</span>
      <span className="float-right text-2xl text-main-green font-semibold">{collection.size}</span>
      </div>
      <div className="mt-[2vh] mx-[2vw] hidden peer-hover:flex hover:flex justify-between">
        <div><MemoStudyButton/></div>
        <div><WritingStudyButton/></div>
      </div>
    </div>
  );
};

export default Collection;
