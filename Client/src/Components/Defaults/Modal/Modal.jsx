import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { useUser } from "@/lib/Context/UserContext";
import { Loader2, Pencil } from "lucide-react";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import InputComponent from "../Input/InputComponent";

const Modal = ({
  open,
  setOpen,
  user,
  handlePictureModalOpen,
  croppedFile,
}) => {
  // const [email, setEmail] = useState(user?.email);
  const [fName, setfName] = useState(user?.fName);
  const [lName, setlName] = useState(user?.lName);
  const [isLoading, setIsLoading] = useState(false);
  const [imgURL, setImgURL] = useState(null);
  const { updateProfile } = useUser();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    setIsLoading(true);
    if (croppedFile) {
      data.profilePic = croppedFile;
    }
    setTimeout(async () => {
      await updateProfile(data);
      console.log("data", data);

      setOpen((prev) => !prev);
      setIsLoading(false);
    }, 1500);
  };

  useEffect(() => {
    if (user) {
      setfName(user.fName);
      setlName(user.lName);
    }
    if (croppedFile) {
      const fileURL = URL.createObjectURL(croppedFile);
      setImgURL(fileURL);

      // Cleanup the URL when the component unmounts or the file changes
      return () => URL.revokeObjectURL(fileURL);
    }
  }, [user, croppedFile]);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent className="sm:max-w-[425px] bg-foreground">
        <DialogHeader>
          <DialogTitle>Edit profile</DialogTitle>
          <DialogDescription>
            Make changes to your profile here. Click save when you're done.
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit(onSubmit)} className="grid gap-4 py-4">
          {/* Profile Image */}
          <div className="form-control w-fit mx-auto relative">
            <img
              src={
                imgURL
                  ? imgURL
                  : user?.profilePic
                  ? user.profilePic
                  : "https://res.cloudinary.com/dux6spy1i/image/upload/v1734650249/profile_images/default.png"
              }
              className="w-20 h-20 rounded-full object-cover mx-auto"
              alt="Profile Image"
            />
            <Button
              variant="ghost"
              type="button"
              onClick={handlePictureModalOpen}
              className="absolute w-full h-full top-0 right-0 rounded-full opacity-0 hover:opacity-50"
            >
              <Pencil />
            </Button>
          </div>

          {/* First Name */}
          <InputComponent
            id={"fName"}
            label={"First Name"}
            defaultValue={fName}
            onChange={(e) => setfName(e.target.value)}
            register={register}
            errors={errors}
          />
          {/* Last Name */}
          <InputComponent
            id={"lName"}
            label={"Last Name"}
            defaultValue={lName}
            onChange={(e) => setlName(e.target.value)}
            register={register}
            errors={errors}
          />
          <DialogFooter>
            {!isLoading ? (
              <Button type="submit">Save changes</Button>
            ) : (
              <Button disabled>
                <Loader2 className="animate-spin" />
                Submitting...
              </Button>
            )}
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default Modal;
