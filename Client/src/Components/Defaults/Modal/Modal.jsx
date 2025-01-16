import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useUser } from "@/lib/Context/UserContext";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";

const Modal = ({ open, setOpen, user }) => {
  const [fName, setfName] = useState(user?.fName);
  const [lName, setlName] = useState(user?.lName);
  // const [email, setEmail] = useState(user?.email);
  const { updateProfile } = useUser();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    console.log(data);

    await updateProfile(data);

    setOpen((prev) => !prev);
  };

  useEffect(() => {
    if (user) {
      setfName(user.fName);
      setlName(user.lName);
    }
  }, [user]);

  return (
    <>
      <Dialog open={open}>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Edit profile</DialogTitle>
            <DialogDescription>
              Make changes to your profile here. Click save when you're done.
            </DialogDescription>
          </DialogHeader>
          <form onSubmit={handleSubmit(onSubmit)} className="grid gap-4 py-4">
            {/* First Name */}
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="fName" className="text-right">
                First Name
              </Label>
              <Input
                id="fName"
                type="text"
                defaultValue={fName}
                onChange={(e) => setfName(e.target.value)}
                className="col-span-3"
                {...register("fName", {
                  required: {
                    value: true,
                    message: "First Name is required.",
                  },
                })}
              />
              {errors.fName && (
                <span className="text-red-500 text-sm italic">
                  {errors.fName.message}
                </span>
              )}
            </div>
            {/* Last Name */}
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="lName" className="text-right">
                Last Name
              </Label>
              <Input
                id="lName"
                type="text"
                defaultValue={lName}
                onChange={(e) => setlName(e.target.value)}
                className="col-span-3"
                {...register("lName", {
                  required: {
                    value: true,
                    message: "Last Name is required.",
                  },
                })}
              />
              {errors.lName && (
                <span className="text-red-500 text-sm italic">
                  {errors.lName.message}
                </span>
              )}
            </div>
            {/* Email */}
            {/* <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="email" className="text-right">
                Email
              </Label>
              <Input
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="col-span-3"
              />
            </div> */}
            <DialogFooter>
              <Button type="submit">Save changes</Button>
            </DialogFooter>
          </form>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default Modal;
