import { Link } from "react-router-dom";
import Sidebar from "./Sidebar.jsx";
import MountainIcon from "./MountainIcon.jsx";
import Nav from "./nav.jsx";
import { Separator } from "@/Components/ui/separator.jsx";

export default function Component() {
  return (
    <>
      <header className="flex h-20 w-full shrink-0 items-center px-10 md:px-6">
        <Sidebar />
        {/* Company Logo */}
        <Link to="/" className="mr-6 hidden lg:flex" prefetch={false}>
          <MountainIcon className="h-6 w-6" />
          <span className="ms-2">Acme Inc</span>
        </Link>
        {/* Nav Menu */}
        <Nav />
      </header>
      <Separator className="mb-4" />
    </>
  );
}
