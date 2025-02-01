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
  const [isLoading, setIsLoading] = useState(true);
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

  async function updateProfile(userDetails) {
    console.log(userDetails);

    const { fName, lName } = userDetails;

    if ([fName, lName].some((field) => field.trim() === "")) {
      console.log("All Fields are required.");
      return;
    }
    const headers = userDetails.profilePic
      ? { "Content-Type": "multipart/form-data" }
      : {};

    try {
      const { data } = await instance.post(
        "/users/update-profile",
        userDetails,
        {
          withCredentials: true,
          headers: headers, // Conditionally add headers
        }
      );

      if (data) {
        console.log("UPDATE PROFILE DATA AT USER CONTEXT ==>", data);

        const token = data.data;
        storeTokenLS(token);
        init(token);
      }
    } catch (err) {
      console.log("Error Occured while updating profile details", err);
    }
  }

  function logout() {
    localStorage.removeItem("token");
    window.location.href = "/";
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
    } else {
      setIsLoading(false);
    }
  }, []);

  return (
    <UserContext.Provider
      value={{
        currentUser: user,
        isLoading,
        login,
        signup,
        updateProfile,
        logout,
      }}
    >
      {children}
    </UserContext.Provider>
  );
}
