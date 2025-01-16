import Modal from "@/Components/Defaults/Modal/Modal";
import { Button } from "@/Components/ui/button";
import { Pencil } from "lucide-react";
import { useState } from "react";

const EditAccountDetails = ({ user }) => {
  const [open, setOpen] = useState(false);

  const handleModalOpen = () => {
    setOpen(true);
  };
  return (
    <>
      <Button
        onClick={handleModalOpen}
        className="w-fit h-min p-1 px-3 hover:bg-zinc-800 cursor-pointer"
      >
        <Pencil />
      </Button>
      <Modal open={open} setOpen={setOpen} user={user} />
    </>
  );
};

export default EditAccountDetails;
