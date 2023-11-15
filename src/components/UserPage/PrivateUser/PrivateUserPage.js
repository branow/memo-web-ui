import Sidebar from "./SideBar";
import PrivateUserInfo from "./PrivateUserInfo";
import UserSettings from "./UserSettings";

const UserPage = ({ user, activeTab }) => {
  let activePage;
  if (activeTab === "info") activePage = <PrivateUserInfo />;
  else if (activeTab === "settings") activePage = <UserSettings />;
  return (
    <div className="flex">
      <Sidebar tab={activeTab} />
      {activePage}
    </div>
  );
};

export default UserPage;
