import Nav from "./nav.jsx";
import { Separator } from "@/Components/ui/separator.jsx";
import MiniHeader from "./MiniHeader.jsx";
import { Input } from "@/Components/ui/input.jsx";
import Dropdown from "./Dropdown.jsx";
import { Link } from "react-router-dom";
import { MountainIcon } from "lucide-react";

export default function Component() {
  return (
    <>
      {/* Mini Header */}
      <MiniHeader />
      <Separator className="opacity-20" />
      {/* Main Header */}
      <header className="container mx-auto flex justify-between items-center py-3 flex-1 px-10 sm:px-0">
        <Link to={"/"} className="block sm:hidden">
          <div className="flex items-center">
            <MountainIcon className="size-5" />
            <span className="ms-2">Acme Inc</span>
          </div>
        </Link>
        <div className="search-bar flex-grow-[1] hidden md:block">
          <Input
            type="search"
            className="max-w-max border-none bg-white bg-opacity-15 placeholder:text-white placeholder:opacity-70 focus:ring-0 focus-visible:ring-0 focus-visible:shadow-none"
            placeholder="Search..."
          />
        </div>
        <Nav />
        <Dropdown />
      </header>
      <Separator className="mb-4 opacity-20" />
    </>
  );
}
