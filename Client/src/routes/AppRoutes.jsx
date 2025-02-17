import { Authentication } from "@/Components/Authentication/Authentication";
import AccountComponent from "@/Components/Authentication/UserAccount/AccountComponent";
import ErrorPage from "@/Components/Defaults/ErrorPage/ErrorPage";
import RootLayout from "@/Components/Defaults/Layouts/RootLayout";
import ProductDetails from "@/Components/Products/ProductDetails";
import Home from "@/Pages/Home";
import ProtectedRoute from "@/utils/ProtectedRoute";
import { Routes, Route } from "react-router-dom";
import CartPage from "../Pages/CartPage";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<RootLayout />}>
        <Route index element={<Home />} />
        <Route path="/account" element={<AccountComponent />} />
        <Route path="/product-detail" element={<ProductDetails />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="*" element={<ErrorPage />} />
      </Route>

      <Route path="/" element={<ProtectedRoute />}>
        <Route path="auth" element={<Authentication />} />
      </Route>
    </Routes>
  );
};

export default AppRoutes;
