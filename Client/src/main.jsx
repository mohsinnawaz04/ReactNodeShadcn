import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { UserProvider } from "./lib/Context/UserContext.jsx";
import { Toaster } from "./Components/ui/toaster";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <UserProvider>
      <App />
      <Toaster />
    </UserProvider>
  </StrictMode>
);
