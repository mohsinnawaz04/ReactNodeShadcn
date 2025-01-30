import React from "react";

const UserInterests = () => {
  return (
    <div className="interests px-5 py-4 m-10 border rounded-md shadow-sm max-w-[500px]">
      <h2 className="font-bold text-xl">Interests</h2>
      <div className="tags flex flex-wrap gap-5 mt-4">
        <span className="tag text-[12px] bg-zinc-800 px-5 py-1 rounded-full">
          Technology
        </span>
        <span className="tag text-[12px] bg-zinc-800 px-5 py-1 rounded-full">
          Jewellery
        </span>
        <span className="tag text-[12px] bg-zinc-800 px-5 py-1 rounded-full">
          Fashion
        </span>
        <span className="tag text-[12px] bg-zinc-800 px-5 py-1 rounded-full">
          Essentials
        </span>
      </div>
    </div>
  );
};

export default UserInterests;
