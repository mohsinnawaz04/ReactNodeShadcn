import React from "react";

const CropImage = () => {
  return (
    <div className={`w-full ${isCropDone && "hidden"}`}>
      <input className="mb-5" type="file" onChange={onChange} />
      <Separator />
      <Cropper
        className="mt-5"
        ref={cropperRef}
        style={{ height: 400, width: "100%" }}
        zoomTo={0.5}
        initialAspectRatio={1}
        preview=".img-peview"
        src={image}
        viewMode={1}
        minCropBoxHeight={10}
        minCropBoxWidth={10}
        modal={true}
        background={true}
        responsive={true}
        checkOrientation={false} // https://github.com/fengyuanchen/cropperjs/issues/671
        guides={true}
        center={true}
      />
      <Button className="w-full mt-5" onClick={getCropData}>
        Crop Image
      </Button>
    </div>
  );
};

export default CropImage;
