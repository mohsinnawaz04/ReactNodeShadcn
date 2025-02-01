import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Login from "./Login";
import Signup from "./Signup";

export function Authentication() {
<<<<<<< HEAD
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

=======
>>>>>>> e5520507322412f746fb3fbb0e0cb9c09e175c52
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
