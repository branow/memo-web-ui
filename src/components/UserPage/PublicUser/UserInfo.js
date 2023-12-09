import { useContext } from "react";
import { PublicUserContext } from "./PublicUserInfo";
import Avatar from "../../constant/Icons/Avatar";
import { Link } from "react-router-dom";

const UserInfo = () => {
  const { userState, isAuthenticated, isOwner} = useContext(PublicUserContext)
  
  const user = userState.user;
  return (
    <>
      <div className="flex w-screen">
        <div className="text-3xl font-medium ml-[20vw] pt-[5vh] w-fit h-fit flex">
          {isOwner && (
            <div className="cursor-pointer p-[5px] h-fit rounded-full hover:bg-soft-green">
              <Link to={"/profile/info"}>
                <Avatar className="mx-auto" color="white" size="100px" />
              </Link>
            </div>
          )}
          {!isOwner && (
            <Avatar className="mx-auto" color="white" size="100px" />
          )}

          {user && (
            <div className="flex flex-col ml-[2vw] my-auto">
              <div>{user.username}</div>
              <div className="mt-[1vh] text-lg w-[50vw] break-words font-light text-gray-300">
                {user.description}
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default UserInfo;
