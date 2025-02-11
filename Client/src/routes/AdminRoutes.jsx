import LoaderComponent from "@/Components/Defaults/Loaders/LoaderComponent";
import { useUser } from "@/lib/Context/UserContext";
import { lazy, Suspense } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { ProductsProvider } from "@/lib/Context/ProductsContext";

const AdminDashboard = lazy(() => import("@/Components/Admin/AdminDashboard"));

const AdminRoutes = () => {
  const { currentUser, isLoading } = useUser();

  // Show a loader while authentication status is being checked
  if (isLoading) {
    return <LoaderComponent />;
  }

  // Redirect to login if not authenticated
  if (!currentUser) {
    return <Navigate to={"/auth"} />;
  }

  return (
    <ProductsProvider>
      <Suspense fallback={<LoaderComponent />}>
        <Routes>
          <Route path="/" element={<AdminDashboard />} />
        </Routes>
      </Suspense>
    </ProductsProvider>
  );
};

export default AdminRoutes;
