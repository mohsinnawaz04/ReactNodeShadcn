import { Button } from "@/components/ui/button";
import { TabsContent } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useForm } from "react-hook-form";
import { useRef, useState } from "react";
import CardHeaderTab from "./CardHeaderTab";

const Signup = () => {
  const [index, setIndex] = useState(false);
  const [passwordType, setPasswordType] = useState("password");
  const [cPasswordType, setCPasswordType] = useState("password");
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const eyeIcon = useRef();
  const eyeIcon2 = useRef();

  function showHidePassword(e) {
    setIndex((prev) => !prev);

    if (index) {
      e.target.src = "eye-solid.svg";
      e.target.id === "eye-1"
        ? setPasswordType("password")
        : setCPasswordType("password");
    } else {
      e.target.src = "eye-slash-solid.svg";
      e.target.id === "eye-1"
        ? setPasswordType("text")
        : setCPasswordType("text");
    }
  }

  const onSubmit = async (data) => {
    console.log(data);

    const { fName, lName, email, password, cPassword } = data;

    if (
      [fName, lName, email, password, cPassword].some(
        (field) => field.trim() === ""
      )
    ) {
      console.log("Please fill all the input fields.");
      return;
    }

    if (password !== cPassword) {
      console.log("Passwords do not match.");
      return;
    }
    
  };

  return (
    <TabsContent value="signup">
      <Card>
        <CardHeaderTab />
        <CardContent className="space-y-2">
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="space-y-1">
              <Label htmlFor="fName">First Name</Label>
              <Input
                id="fName"
                placeholder="First Name"
                {...register("fName", {
                  required: { value: true, message: "First Name is required." },
                })}
              />
              {errors.fName && (
                <span className="text-red-500 text-sm italic">
                  {errors.fName.message}
                </span>
              )}
            </div>
            <div className="space-y-1">
              <Label htmlFor="lName">Last Name</Label>
              <Input
                id="lName"
                placeholder="Name"
                {...register("lName", {
                  required: { value: true, message: "Last Name is required." },
                })}
              />
              {errors.lName && (
                <span className="text-red-500 text-sm italic">
                  {errors.lName.message}
                </span>
              )}
            </div>
            <div className="space-y-1">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                placeholder="Email"
                {...register("email", {
                  required: { value: true, message: "Email is required." },
                  pattern: {
                    value:
                      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                    message: "Email is Invalid",
                  },
                })}
              />
              {errors.email && (
                <span className="text-red-500 text-sm italic">
                  {errors.email.message}
                </span>
              )}
            </div>
            <div className="space-y-1 relative">
              <Label htmlFor="password">Password</Label>
              <Input
                id="password"
                type={passwordType}
                placeholder="********"
                {...register("password", {
                  required: { value: true, message: "Password is required." },
                  minLength: {
                    value: 6,
                    message: "Password must be atleast 6 characters long.",
                  },
                })}
              />
              <img
                onClick={showHidePassword}
                ref={eyeIcon}
                id="eye-1"
                src="eye-solid.svg"
                alt="EYE LOGO"
                className="size-4 absolute bottom-[0.6rem] right-5 hover:cursor-pointer z-40"
              />
              <span className="text-red-500 text-sm italic">
                {errors.password && errors.password.message}
              </span>
            </div>
            <div className="space-y-1 relative">
              <Label htmlFor="cPassword">Password</Label>
              <Input
                id="cPassword"
                type={cPasswordType}
                placeholder="********"
                {...register("cPassword", {
                  required: {
                    value: true,
                    message: "Passwords do not match.",
                  },
                })}
              />
              <img
                onClick={showHidePassword}
                ref={eyeIcon2}
                id="eye-2"
                src="eye-solid.svg"
                alt="EYE LOGO"
                className="size-4 absolute bottom-[0.6rem] right-5 hover:cursor-pointer z-40"
              />
              <span className="text-red-500 text-sm italic">
                {errors.cPassword && errors.cPassword.message}
              </span>
            </div>

            <Button className="mt-4 w-full">Signup</Button>
          </form>
        </CardContent>
      </Card>
    </TabsContent>
  );
};

export default Signup;
