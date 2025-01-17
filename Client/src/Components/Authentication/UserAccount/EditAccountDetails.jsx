import ImageUpload from "@/Components/Defaults/ImageUpload/ImageUpload";
import Modal from "@/Components/Defaults/Modal/Modal";
import PictureModal from "@/Components/Defaults/Modal/PictureModal";
import { Button } from "@/Components/ui/button";
import { Pencil } from "lucide-react";
import { useState } from "react";

const EditAccountDetails = ({ user }) => {
  const [open, setOpen] = useState(false);
  const [pictureModalOpen, setPictureModalOpen] = useState(false);
  const [croppedFile, setCroppedFile] = useState(null);
  // This is for main modal open
  const handleModalOpen = () => {
    setOpen(true);
  };
  // This is for picture modal open
  const handlePictureModalOpen = () => {
    setPictureModalOpen(true);
  };

  console.log(croppedFile);

  return (
    <>
      <Button
        onClick={handleModalOpen}
        className="w-fit h-min p-1 px-3 hover:bg-zinc-800 cursor-pointer"
      >
        <Pencil />
      </Button>
      <Modal
        open={open}
        setOpen={setOpen}
        user={user}
        handlePictureModalOpen={handlePictureModalOpen}
        croppedFile={croppedFile}
      />
      <PictureModal
        open={pictureModalOpen}
        setOpen={setPictureModalOpen}
        setCroppedFile={setCroppedFile}
        user={user}
      />
    </>
  );
};

export default EditAccountDetails;
