import Avatar from "../constant/Icons/Avatar";

const UserBlock = () => {
    return (
      <div className="relative w-[50vw] h-[30vh] bg-tealish-blue m-auto rounded-sm">
        <div className="absolute w-[15vw] h-full bg-charcoal ">
          <div className="w-fit h-fit m-auto mt-[5vh] flex flex-col items-center p-[5px] hover:bg-soft-green rounded-xl">
            <Avatar size="100px" />
            <div className="mt-[1vh] text-2xl max-w-[8vw] max-h-[10vh] overflow-y-auto break-words">User name</div>
          </div>
        </div>
        <div className="absolute p-[5px]">
            <div>
                <div></div>
                <div></div>
            </div>
        </div>
        <div></div>
      </div>
    );
}
 
export default UserBlock;