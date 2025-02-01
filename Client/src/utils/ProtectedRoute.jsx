import LoaderComponent from "@/Components/Defaults/Loaders/LoaderComponent";
import { useUser } from "@/lib/Context/UserContext";
import { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";

const ProtectedRoute = () => {
  const { currentUser, isLoading } = useUser();
  const navigate = useNavigate();

  useEffect(() => {
    if (currentUser) {
      navigate("/");
    }
  }, [currentUser, navigate]);

  if (isLoading || currentUser) {
    return <LoaderComponent />;
  }

  return <Outlet />;
};

export default ProtectedRoute;
