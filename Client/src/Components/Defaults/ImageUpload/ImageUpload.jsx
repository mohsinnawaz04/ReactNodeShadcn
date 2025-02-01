import { useEffect, useRef, useState } from "react";
import Cropper from "react-cropper";
import "cropperjs/dist/cropper.css";
import { Button } from "@/Components/ui/button";
import { Separator } from "@/Components/ui/separator";
import { ArrowLeft } from "lucide-react";
import { base64ToBlob } from "@/utils/base64ToBlob";

const ImageUpload = ({ defaultSrc, setCroppedFile, setOpen }) => {
  const [image, setImage] = useState(defaultSrc);
  const [imageName, setImageName] = useState(null);
  const [isCropDone, setIsCropDone] = useState(false);
  const [cropData, setCropData] = useState(defaultSrc);
  const cropperRef = useRef();

  const onChange = (e) => {
    e.preventDefault();
    let files;
    if (e.dataTransfer) {
      files = e.dataTransfer;
    } else if (e.target) {
      files = e.target.files;
    }
    setImageName(files[0].name);
    const reader = new FileReader();
    reader.onload = () => {
      setImage(reader.result);
    };
    reader.readAsDataURL(files[0]);
  };

  const getCropData = () => {
    if (typeof cropperRef.current?.cropper !== "undefined") {
      setCropData(cropperRef.current?.cropper.getCroppedCanvas().toDataURL());

      setIsCropDone((prev) => !prev);
    }
  };

  const handleSubmit = () => {
    // BASE64 to Blob
    const blob = base64ToBlob(cropData);
    // Blob to File
    const file = new File([blob], `${imageName ?? "cropped-image.jpg"}`, {
      type: "image/jpeg",
    }); // Convert to File
    setCroppedFile(file);
    setOpen((prev) => !prev);
  };

  const showPreviousTab = () => {
    setIsCropDone((prev) => !prev);
  };

  return (
    <>
      <div className={`w-full ${isCropDone && "hidden"}`}>
        <input className="mb-5" type="file" onChange={onChange} />
        <Separator />
        <Cropper
          className="mt-5"
          ref={cropperRef}
          style={{ height: "400px", width: "100%" }}
          initialAspectRatio={1 / 1}
          aspectRatio={1 / 1}
          preview=".img-peview"
          src={image}
          viewMode={1}
          modal={true}
          background={true}
          responsive={false}
          checkOrientation={false} // https://github.com/fengyuanchen/cropperjs/issues/671
          guides={true}
          center={true}
        />
        <Button className="w-full mt-5" onClick={getCropData}>
          Crop Image
        </Button>
      </div>
      <div className={`box ${!isCropDone && "hidden"} w-full`}>
        <img
          className="w-24 h-24 aspect-square object-cover object-center mx-auto rounded-full"
          src={cropData}
          alt="cropped image"
        />
        {/* DONE Button */}
        <Button className="w-full mt-5" onClick={handleSubmit}>
          Done
        </Button>
        {/* Back Arrow BTN */}
        <Button
          className="w-fit mt-5 absolute -top-5 left-0"
          onClick={showPreviousTab}
        >
          <ArrowLeft />
        </Button>
      </div>
    </>
  );
};

export default ImageUpload;
