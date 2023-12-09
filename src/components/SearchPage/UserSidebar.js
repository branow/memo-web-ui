import Avatar from "../constant/Icons/Avatar";

const UserSidebar = ({ user, onClickAction }) => {
    return (
      <div className="w-[40%] h-full bg-charcoal rounded-l-md">
        <button
          className="w-fit h-fit m-auto mt-[5vh] flex flex-col items-center p-[5px] hover:bg-soft-green rounded-xl"
          onClick={onClickAction}
        >
          <Avatar size="100px" />
          <div className="mt-[1vh] text-2xl text-center max-w-[8vw] max-h-[10vh] overflow-y-auto break-words">
           {user.userName}
          </div>
        </button>
      </div>
    );
}
 
export default UserSidebar;