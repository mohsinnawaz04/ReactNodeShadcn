import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Home from "./Pages/Home.jsx";
import { Authentication } from "./Components/Authentication/Authentication.jsx";
import AccountComponent from "./Components/Authentication/UserAccount/AccountComponent.jsx";

const App = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route>
        <Route path="/" element={<Home />} />
        <Route path="/auth" element={<Authentication />} />
        <Route path="/account" element={<AccountComponent />} />
        {/* <Route path="/auth/login" element={<Login />} /> */}
        {/* <Route path="/auth/signup" element={<Signup />} /> */}
        {/* <Route path="/profile" element={<Profile />}></Route> */}
      </Route>
    )
  );
  return <RouterProvider router={router} />;
};

export default App;
