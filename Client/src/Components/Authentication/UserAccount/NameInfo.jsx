import { Button } from "@/Components/ui/button";
import EditAccountDetails from "./EditAccountDetails";
import { Pencil } from "lucide-react";

const NameInfo = ({ user }) => {
  return (
    <>
      {/* USER OR ADMIN ? */}
      <div className="flex items-center justify-between">
        <div className="role text-[11px] bg-black text-white font-semibold w-fit py-1 px-3 rounded-full hover:bg-zinc-800 cursor-default">
          {user?.role ?? "User"}
        </div>
        <EditAccountDetails user={user} />
      </div>
      {/* IMAGE */}
      <div className="info-image relative w-fit mx-auto">
        <img
          src={
            user?.profilePic ??
            "https://res.cloudinary.com/dux6spy1i/image/upload/v1734650249/profile_images/default.png"
          }
          alt="Profile Picture"
          id="profile-picture"
          className="size-24 object-cover object-center rounded-full mx-auto text-center"
        />

        {/* <Button
          id="edit-btn"
          className="absolute w-full h-full top-0 left-0 rounded-full opacity-50"
        >
          <Pencil />
        </Button> */}
      </div>
      {/* IMAGE */}
      <div className="info text-center my-4 font-bold text-[16px]">
        <span className="name">
          {user?.fName} {user?.lName}
        </span>
      </div>
    </>
  );
};

export default NameInfo;
