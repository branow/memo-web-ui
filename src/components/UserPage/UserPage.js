import Sidebar from "./SideBar";
import ProfileInfo from "./ProfileInfo";
import ProfileSettings from "./ProfileSettings";

const UserPage = ({ user, activeTab }) => {
  let activePage;
  if (activeTab === "info") activePage = <ProfileInfo />;
  else if (activeTab === "settings") activePage = <ProfileSettings />;
  return (
    <div className="flex">
      <Sidebar tab={activeTab} />
      {activePage}
    </div>
  );
};

export default UserPage;
