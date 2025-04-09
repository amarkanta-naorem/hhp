import SidebarMenus from "@/components/dashboard/sidebar/SidebarMenus";
import React from "react";

export default function DashboardLayout({children}: { children: React.ReactNode; }) {
    return (
        <div className="text-[#000000]">
            <div className="w-full h-[8vh] border-b bg-white">
                Helping Hands for People
            </div>
            <div className="flex">
                {/* Sidebar */}
                <div className="w-[5rem] h-[92vh] bg-white border-r flex flex-col items-center justify-start py-5">
                    <SidebarMenus />
                </div>

                {/* Dynamic Page Content */}
                <div className="w-full h-[92vh] bg-gray-50 overflow-y-auto">
                    {children}
                </div>
            </div>
        </div>
    );
}