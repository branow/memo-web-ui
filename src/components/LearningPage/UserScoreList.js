import UserScoreButton from "./UserScoreButton";

const UserScoreList = () => {
    return (
      <div className="flex flex-col w-fit h-fit items-center ml-[40vw] mt-[3vh]">
        <div className="text-xl">
          <span>How well did you know this card?</span>
        </div>
        <div className="flex flex-row mt-[2vh] gap-10">
          <UserScoreButton color="red" label="not at all" />
          <UserScoreButton color="orange" label="badly" />
          <UserScoreButton color="yellow" label="normally" />
          <UserScoreButton color="green" label="perfectly" />
        </div>
      </div>
    );
}
 
export default UserScoreList;