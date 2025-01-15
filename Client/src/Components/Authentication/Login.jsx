import { Button } from "@/components/ui/button";
import { TabsContent } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useForm } from "react-hook-form";
import { useEffect, useRef, useState } from "react";
import CardHeaderTab from "./CardHeaderTab";
import { useUser } from "@/lib/Context/UserContext.jsx";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [index, setIndex] = useState(false);
  const [userDetails, setUserDetails] = useState([]);
  const [passwordType, setPasswordType] = useState("password");
  const { currentUser, login } = useUser();

  // React Router to navigate back to homepage if logged in
  const navigate = useNavigate();
  // React Router to navigate back to homepage if logged in END

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const eyeIcon = useRef();
  const passwordRef = useRef();
  function showHidePassword() {
    setIndex((prev) => !prev);

    if (index) {
      eyeIcon.current.src = "eye-solid.svg";
      setPasswordType("password");
    } else {
      eyeIcon.current.src = "eye-slash-solid.svg";
      setPasswordType("text");
    }
  }

  const onSubmit = async (data) => {
    console.log(data);

    await login(data);
  };

  useEffect(() => {
    if (currentUser) {
      console.log(currentUser);
      navigate("/");
    }
    setUserDetails(currentUser);
  }, [currentUser]);
  return (
    <TabsContent value="login">
      <Card>
        <CardHeaderTab
          title="Login"
          description="Enter your email and password to log in."
        />
        <CardContent className="space-y-2">
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="space-y-1">
              <Label htmlFor="email">Email</Label>
              {/* Email Input */}
              <Input
                id="email"
                placeholder="johndoe@example.com"
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
              {/* Email Input End */}
            </div>
            <div className="space-y-1 relative">
              {/* Password Input */}
              <Label htmlFor="password">Password</Label>
              <Input
                ref={passwordRef}
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
                ref={eyeIcon}
                onClick={showHidePassword}
                src="eye-solid.svg"
                alt="EYE ICON"
                className="size-4 absolute bottom-[0.6rem] right-5 hover:cursor-pointer z-40"
              />

              <span className="text-red-500 text-sm italic">
                {errors.password && errors.password.message}
              </span>
              {/* Password Input End */}
            </div>
            <Button className="mt-4 w-full">Login</Button>
          </form>
        </CardContent>
      </Card>
    </TabsContent>
  );
};

export default Login;
