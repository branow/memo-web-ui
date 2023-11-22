import Sidebar from "./SideBar";
import PrivateUserInfo from "./PrivateUserInfo";
import UserSettings from "./UserSettings";
import { useContext } from "react";
import { UserContext } from "../../App";
import ErrorBox from "../../constant/ErrorBox";

const UserPage = ({ activeTab }) => {
  const userState = useContext(UserContext);

  let activePage;
  if (activeTab === "info") activePage = <PrivateUserInfo />;
  else if (activeTab === "settings") activePage = <UserSettings />;
  return (
    <>
      {!userState.user && (
        <div className="h-screen bg-form-background-grey flex flex-col items-center">
          <div className="mt-[10vh] w-[50vw] min-w-500px">
            <ErrorBox
              title="Authentication error"
              message={
                "Please, wait a bit. If error alert does not disappear, login again"
              }
            />
          </div>
        </div>
      )}
      {userState.user && (
        <div className="flex">
          <Sidebar tab={activeTab} />
          {activePage}
        </div>
      )}
    </>
  );
};

export default UserPage;
