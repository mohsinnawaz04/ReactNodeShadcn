import { Sheet, SheetTrigger, SheetContent } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import MenuIcon from "./MenuIcon";
import MountainIcon from "./MountainIcon";

const Sidebar = () => {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline" size="icon" className="lg:hidden">
          <MenuIcon className="h-6 w-6" />
          <span className="sr-only">Toggle navigation menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="left">
        <Link to="#" className="mr-6 hidden lg:flex" prefetch={false}>
          <MountainIcon className="h-6 w-6" />
          <span className="sr-only">Acme Inc</span>
        </Link>
        <div className="grid gap-2 py-6">
          <Link
            to="#"
            className="flex w-full items-center py-2 text-lg font-semibold"
            prefetch={false}
          >
            Home
          </Link>
          <Link
            to="#"
            className="flex w-full items-center py-2 text-lg font-semibold"
            prefetch={false}
          >
            About
          </Link>
          <Link
            to="#"
            className="flex w-full items-center py-2 text-lg font-semibold"
            prefetch={false}
          >
            Services
          </Link>
          <Link
            to="#"
            className="flex w-full items-center py-2 text-lg font-semibold"
            prefetch={false}
          >
            Contact
          </Link>
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default Sidebar;
