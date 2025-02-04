import LoaderComponent from "@/Components/Defaults/Loaders/LoaderComponent";
import { useUser } from "@/lib/Context/UserContext";
import { Navigate, Outlet } from "react-router-dom";

const ProtectedRoute = () => {
  const { currentUser, isLoading } = useUser();

  // Show a loader while authentication status is being checked
  if (isLoading) {
    return <LoaderComponent />;
  }

  // Redirect to Home if authenticated
  if (currentUser) {
    return <Navigate to={"/"} />;
  }

  return <Outlet />;
};

export default ProtectedRoute;
