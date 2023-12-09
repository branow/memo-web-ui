import UserBlock from "./UserBlock";
import ModuleBlock from "./ModuleBlock";

const BlockList = ({ userBlockList, users, modules }) => {
    return (
      <>
        {userBlockList &&
          users.map((user) => (
            <div key={user.userId}>
              <UserBlock user={user} />
            </div>
          ))}
        {!userBlockList &&
          modules.map((module) => (
            <div key={module.moduleId}>
              <ModuleBlock module={module} />
            </div>
          ))}
      </>
    );
}
 
export default BlockList;