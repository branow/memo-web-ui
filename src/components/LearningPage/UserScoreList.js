import UserScoreButton from "./UserScoreButton";

const UserScoreList = ({ setScore }) => {  
  return (
    <div className="flex flex-col w-fit h-fit items-center">
      <div className="text-xl">
        <span>How well did you know this card?</span>
      </div>
      <div className="flex flex-row mt-[20px] gap-10">
        <UserScoreButton color="red" label="not at all" onClickAction={() => setScore(0)}/>
        <UserScoreButton color="orange" label="badly" onClickAction={() => setScore(50)}/>
        <UserScoreButton color="yellow" label="normally" onClickAction={() => setScore(85)}/>
        <UserScoreButton color="green" label="perfectly" onClickAction={() => setScore(100)}/>
      </div>
    </div>
  );
};

export default UserScoreList;
