import React from "react";

const TimeButton = ({ time, timeUnit }) => {
  return (
    <div className="time-card flex flex-col items-center justify-center text-[#5DBDAC] bg-[#5DBDAC] bg-opacity-50 py-4 rounded-sm text-2xl font-semibold">
      {time} <br />
      <span className="text-xs uppercase">{timeUnit}</span>
    </div>
  );
};

export default TimeButton;
