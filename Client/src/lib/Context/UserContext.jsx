import { jwtDecode } from "jwt-decode";
import { createContext, useContext, useEffect, useState } from "react";
import { instance } from "../axios";
import { storeTokenLS } from "@/utils/storeTokenLS";
import { useToast } from "@/hooks/use-toast";

const UserContext = createContext();

export const useUser = () => {
  return useContext(UserContext);
};

export function UserProvider({ children }) {
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(null);
  const { toast } = useToast();

  async function login(userDetails) {
    const { email, password } = userDetails;
    console.log("EMAIL", email, "Password", password);

    // Check for empty fields
    if (email.trim() === "" || password.trim() === "") {
      console.log("Email or password Empty!");
      return;
    }

    try {
      const { data } = await instance.post("/users/login", userDetails, {
        withCredentials: true,
      }); //Ensure Cookies are sent/received

      if (data) {
        const token = data.data;
        console.log("TOKEN", token);

        if (token) {
          storeTokenLS(token);
          init(token);
        }
      }
    } catch (err) {
      console.log("Error parsing fields to backend", err);
      console.log("ERROR MESSAGE: ", err.response.data.message);
      setTimeout(() => {
        return toast({
          title: `${err.response.data.message}`,
        });
      }, 1000);
    }
  }

  async function signup(userDetails) {
    const { fName, lName, email, password } = userDetails;

    if ([fName, lName, email, password].some((field) => field.trim() === "")) {
      console.log("Name, Email or password empty!");
      return;
    }

    try {
      const { data } = await instance.post("/users/signup", userDetails, {
        withCredentials: true,
      }); //Ensure Cookies are sent/received

      if (data.success) {
        console.log(data);
        await login(userDetails);

        // localStorage.setItem("token", data.token);
        // window.location.href = "/";
      }
    } catch (err) {
      console.log("ERROR OCCURED WHILE REGISTERING::: ", err);
    }
  }

  function logout() {
    localStorage.removeItem("token");
    window.location.reload();
  }

  function init(token) {
    if (token === null || token === "null") {
      setUser(null);
    } else {
      const userObject = jwtDecode(token);
      setUser(userObject);
    }
  }

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token && token !== null) {
      init(token);
    }
  }, []);

  return (
    <UserContext.Provider value={{ currentUser: user, login, signup, logout }}>
      {children}
    </UserContext.Provider>
  );
}
