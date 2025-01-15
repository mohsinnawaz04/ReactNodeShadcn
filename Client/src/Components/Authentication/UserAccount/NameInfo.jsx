const NameInfo = ({ user }) => {
  return (
    <>
      {/* USER OR ADMIN ? */}
      <div className="role text-[11px] bg-black text-white font-semibold w-fit p-1 px-3 rounded-full hover:bg-zinc-800 cursor-default">
        {user?.role ?? "User"}
      </div>
      <img
        src={
          user?.profilePic ??
          "https://res.cloudinary.com/dux6spy1i/image/upload/v1734650249/profile_images/default.png"
        }
        alt="Profile Picture"
        className="size-16 object-cover object-center rounded-full mx-auto text-center"
      />
      <div className="info text-center my-4 font-bold text-[16px]">
        <span className="name">
          {user?.fName} {user?.lName}
        </span>
      </div>
    </>
  );
};

export default NameInfo;
