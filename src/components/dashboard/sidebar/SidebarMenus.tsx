"use client";
import { useRouter } from "next/navigation";
import SidebarDashboardMenu from "./Menus/SidebarDashboardMenu";
import SidebarRequestBloodMenu from "./Menus/SidebarRequestBloodMenu";

export default function SidebarMenus({ closeSidebar }: { closeSidebar: () => void }) {
  const router = useRouter();

  const handleNavigation = (path: string) => {
    router.push(path);
    closeSidebar();
  };

  return (
    <div className="flex flex-col items-start md:items-center space-y-5 w-full px-2">
      <button onClick={() => handleNavigation('/dashboard')} className="p-2 hover:bg-gray-100 rounded-full flex items-center gap-3 w-full">
        <SidebarDashboardMenu />
        <span className="text-sm md:hidden">Dashboard</span>
      </button>
      
      <button onClick={() => handleNavigation('/dashboard/request/blood')} className="p-2 hover:bg-gray-100 rounded-full flex items-center gap-3 w-full">
        <SidebarRequestBloodMenu />
        <span className="text-sm md:hidden">Request Blood</span>
      </button>
    </div>
  );
}