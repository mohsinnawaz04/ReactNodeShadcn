import LoaderComponent from "@/Components/Defaults/Loaders/LoaderComponent";
import { useUser } from "@/lib/Context/UserContext";
import { lazy, Suspense } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { ProductsProvider } from "@/lib/Context/ProductsContext";
import { SidebarProvider, SidebarTrigger } from "../Components/ui/sidebar";
import { AppSidebar } from "../Components/app-sidebar";
import TableOfProducts from "../Components/Admin/Products/TableOfProducts";
import { AdminBreadcrumb } from "../Components/Admin/AdminBreadcrumb";
import AddProduct from "../Pages/AddProduct";

const AdminDashboard = lazy(() => import("@/Components/Admin/AdminDashboard"));

const AdminRoutes = () => {
  const { currentUser, isLoading } = useUser();

  // Show a loader while authentication status is being checked
  if (isLoading) {
    return <LoaderComponent />;
  }

  // Redirect to login if not authenticated
  if (!currentUser) {
    return <Navigate to={"/auth"} replace />;
  }

  return (
    <ProductsProvider>
      <SidebarProvider>
        <div className="flex h-screen w-full">
          {/* Sidebar */}
          <AppSidebar />

          {/* Main Component */}
          <div className="w-full p-4">
            <div className="flex items-center gap-5">
              <SidebarTrigger />
              <AdminBreadcrumb />
            </div>
            <Suspense fallback={<LoaderComponent />}>
              <Routes>
                <Route path="/" element={<AdminDashboard />} />
                <Route path="/table" element={<TableOfProducts />} />
                <Route path="/products" element={<AddProduct />} />
              </Routes>
            </Suspense>
          </div>
        </div>
      </SidebarProvider>
    </ProductsProvider>
  );
};

export default AdminRoutes;
