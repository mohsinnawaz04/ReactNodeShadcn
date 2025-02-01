import AccountInfo from "./AccountInfo";
import { useUser } from "@/lib/Context/UserContext";
import UserInterests from "./UserInterests";

const AccountComponent = () => {
  const { currentUser } = useUser();
  return (
    <>
      <div className="px-10">
        <h1 className="text-2xl font-bold">Account Profile</h1>
      </div>
      {/* Account Info Modal */}
      <AccountInfo user={currentUser} />

      {/* User Interests */}
      <UserInterests />
    </>
  );
};

export default AccountComponent;
