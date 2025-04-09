import SidebarDashboardMenu from "@/components/dashboard/sidebar/Menus/SidebarDashboardMenu";
import SidebarRequestBloodMenu from "@/components/dashboard/sidebar/Menus/SidebarRequestBloodMenu";

export default function SidebarMenus() {
    return (
        <div className="flex flex-col items-center space-y-5">
           <SidebarDashboardMenu />
            <SidebarRequestBloodMenu />
        </div>
    );
}