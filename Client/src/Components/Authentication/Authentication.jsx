import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Login from "./Login";
import Signup from "./Signup";

export function Authentication() {
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
