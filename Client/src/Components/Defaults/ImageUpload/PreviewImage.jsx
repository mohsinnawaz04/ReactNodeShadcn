import React from "react";

const PreviewImage = () => {
  return (
    <div className={`box ${!isCropDone && "hidden"} w-full`}>
      <img
        className="w-24 h-24 aspect-square object-cover object-center mx-auto rounded-full"
        src={cropData}
        alt="cropped image"
      />
      <Button className="w-full mt-5">Done</Button>
    </div>
  );
};

export default PreviewImage;
