import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Home from "./Pages/Home.jsx";
import { Authentication } from "./Components/Authentication/Authentication.jsx";
import AccountComponent from "./Components/Authentication/UserAccount/AccountComponent.jsx";
import ErrorPage from "./Components/Defaults/ErrorPage/ErrorPage.jsx";
import ProtectedRoute from "./utils/ProtectedRoute.jsx";
import ProductDetails from "./Components/Products/ProductDetails.jsx";
import RootLayout from "./Components/Defaults/Layouts/RootLayout.jsx";

const App = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route>
        <Route path="" element={<RootLayout />}>
          <Route index element={<Home />} />
          <Route path="/account" element={<AccountComponent />} />
          <Route path="/product-detail" element={<ProductDetails />} />
          <Route path="*" element={<ErrorPage />} />
        </Route>

        <Route path="" element={<ProtectedRoute />}>
          <Route path="/auth" element={<Authentication />} />
        </Route>
        {/* <Route path="/auth/login" element={<Login />} /> */}
        {/* <Route path="/auth/signup" element={<Signup />} /> */}
        {/* <Route path="/profile" element={<Profile />}></Route> */}
      </Route>
    )
  );
  return <RouterProvider router={router} />;
};

export default App;
