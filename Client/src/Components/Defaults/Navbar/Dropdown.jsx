import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useUser } from "@/lib/Context/UserContext";
import {
  Bell,
  CircleUserRound,
  CreditCard,
  LogIn,
  LogOut,
  ShoppingCart,
} from "lucide-react";
import { Link } from "react-router-dom";
import AlertDialogComponent from "../Alert/AlertDialogComponent";
import { useState } from "react";

const Dropdown = () => {
  const [open, setOpen] = useState(false);
  const { currentUser, logout } = useUser();

  const handleOpenChange = (e) => {
    console.log(e);
    setOpen((prev) => !prev);

    // This Proceed comes from AlertDialogComponet.jsx AlertDialogAction Component text.
    if (e.target.innerHTML === "Proceed") {
      logout();
    }
  };

  return (
    <>
      <DropdownMenu>
        <DropdownMenuTrigger
          className="group inline-flex w-12 h-12 rounded-full overflow-hidden items-center justify-center bg-white text-sm font-medium transition-colors hover:bg-gray-100 hover:text-gray-900  focus:text-gray-900 focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-gray-100/50 data-[state=open]:bg-gray-100/50 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus:bg-gray-800 dark:focus:text-gray-50 dark:data-[active]:bg-gray-800/50 dark:data-[state=open]:bg-gray-800/50 selection:bg-none outline-none"
          prefetch={"false"}
        >
          <img
            src={
              currentUser?.profilePic ??
              "https://res.cloudinary.com/dux6spy1i/image/upload/v1734650249/profile_images/default.png"
            }
            alt="Default Profile Image"
            className="object-cover object-center h-full"
          />
        </DropdownMenuTrigger>
        <DropdownMenuContent className="min-w-[160px] mt-2">
          <DropdownMenuLabel>
            {!currentUser ? (
              "My Account"
            ) : (
              <div className="flex gap-3 items-center">
                <img
                  src={
                    currentUser?.profilePic ??
                    "https://res.cloudinary.com/dux6spy1i/image/upload/v1734650249/profile_images/default.png"
                  }
                  alt="Profile Pic"
                  className="w-8 h-8 rounded-full object-cover object-center"
                />
                <div className="info flex flex-col">
                  <span className="name font-bold text-[13px] leading-3 text-zinc-800">{`${currentUser?.fName} ${currentUser?.lName}`}</span>
                  <span className="email text-xs text-zinc-700">
                    {currentUser?.email}
                  </span>
                </div>
              </div>
            )}
          </DropdownMenuLabel>
          <DropdownMenuSeparator />
          <Link to={currentUser ? "/account" : "/auth"}>
            <DropdownMenuItem className="cursor-pointer">
              <span>
                <CircleUserRound size={17} strokeWidth={2} />
              </span>
              Account
            </DropdownMenuItem>
          </Link>
          <DropdownMenuItem className="cursor-pointer">
            <span>
              <Bell size={17} strokeWidth={2} />
            </span>
            Notifications
          </DropdownMenuItem>
          <DropdownMenuItem className="cursor-pointer">
            <span>
              <ShoppingCart size={17} strokeWidth={2} />
            </span>
            Cart
          </DropdownMenuItem>
          <DropdownMenuItem className="cursor-pointer">
            <span>
              <CreditCard size={17} strokeWidth={2} />
            </span>
            Billing
          </DropdownMenuItem>
          <DropdownMenuSeparator />
          {currentUser ? (
            <div onClick={() => handleOpenChange()}>
              <DropdownMenuItem className="cursor-pointer">
                <span>
                  <LogOut size={17} strokeWidth={2} />
                </span>
                Logout
              </DropdownMenuItem>
            </div>
          ) : (
            <Link to={"/auth"}>
              <DropdownMenuItem className="cursor-pointer">
                <span>
                  <LogIn size={17} strokeWidth={2} />
                </span>
                Login
              </DropdownMenuItem>
            </Link>
          )}
        </DropdownMenuContent>
      </DropdownMenu>
      <AlertDialogComponent open={open} close={handleOpenChange} />
    </>
  );
};

export default Dropdown;
