import React from "react";
import NameInfo from "./NameInfo";
import CartInfo from "./CartInfo";
import UserDetails from "./UserDetails";

const AccountInfo = ({ user }) => {
  return (
    <div className="account-info px-10 m-10 py-5 border shadow-sm max-w-[500px]">
      <NameInfo user={user} />

      <CartInfo user={user} />

      <UserDetails user={user} />
    </div>
  );
};

export default AccountInfo;
