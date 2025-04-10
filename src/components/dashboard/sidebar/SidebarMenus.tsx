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
    <div className="flex flex-col items-center space-y-5">
      <button onClick={() => handleNavigation('/dashboard')}className="p-2 hover:bg-gray-100 rounded-full">
        <SidebarDashboardMenu />
      </button>
      <button onClick={() => handleNavigation('/dashboard/request/blood')} className="p-2 hover:bg-gray-100 rounded-full">
        <SidebarRequestBloodMenu />
      </button>
    </div>
  );
}