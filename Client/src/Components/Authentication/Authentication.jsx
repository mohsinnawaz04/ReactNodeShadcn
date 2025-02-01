import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Login from "./Login";
import Signup from "./Signup";
import { useEffect, useState } from "react";
import { useUser } from "@/lib/Context/UserContext";
import { LoaderCircle } from "lucide-react";
import { useNavigate } from "react-router-dom";

export function Authentication() {
  const { currentUser, isLoading } = useUser();
  const navigate = useNavigate();

  console.log(currentUser);

  useEffect(() => {
    currentUser && navigate("/");
  }, [currentUser, navigate]);

  if (isLoading || currentUser) {
    return (
      <div className="h-screen flex justify-center items-center">
        <LoaderCircle size={80} className="animate-spin" />
      </div>
    );
  }

  return (
    <div className="flex justify-center items-center w-full h-screen bg-neutral-700">
      <Tabs defaultValue="login" className="w-[400px] shadow-md">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="login">Login</TabsTrigger>
          <TabsTrigger value="signup">Signup</TabsTrigger>
        </TabsList>

        <Login />

        <Signup />
      </Tabs>
    </div>
  );
}
