import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import ImageUpload from "../ImageUpload/ImageUpload";

const PictureModal = ({ open, setOpen, setCroppedFile, user }) => {
  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader className="mt-5">
          <DialogTitle>Edit profile</DialogTitle>
          <DialogDescription>
            Make changes to your profile here. Click save when you're done.
          </DialogDescription>
        </DialogHeader>
        <ImageUpload
          defaultSrc={
            user?.profilePic ??
            "https://res.cloudinary.com/dux6spy1i/image/upload/v1734650249/profile_images/default.png"
          }
          setCroppedFile={setCroppedFile}
          setOpen={setOpen}
        />
        <DialogFooter></DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default PictureModal;
