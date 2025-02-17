import { cn } from "../../../lib/utils.js";
import { Home, Settings, User } from "lucide-react";

const Sidebar = () => {
  return (
    <aside className="w-64 h-screen bg-gray-900 text-white p-5">
      <h1 className="text-2xl font-bold mb-5">Dashboard</h1>
      <nav className="space-y-3">
        <SidebarItem icon={<Home />} text="Home" />
        <SidebarItem icon={<User />} text="Profile" />
        <SidebarItem icon={<Settings />} text="Settings" />
      </nav>
    </aside>
  );
};

const SidebarItem = ({
  icon,
  text,
}: {
  icon: React.ReactNode,
  text: string,
}) => {
  return (
    <div className="flex items-center gap-3 p-3 rounded-md cursor-pointer hover:bg-gray-800">
      {icon}
      <span>{text}</span>
    </div>
  );
};

export default Sidebar;
