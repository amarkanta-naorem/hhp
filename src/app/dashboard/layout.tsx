import SidebarMenus from "@/components/dashboard/sidebar/SidebarMenus";
import React from "react";
import Image from "next/image";

export default function DashboardLayout({children}: { children: React.ReactNode; }) {
    return (
        <div className="text-[#000000]">
            <div className="w-full h-[8vh] border-b border-[#eae4e4] bg-white">
                <Image src="/logo.svg" alt="HHP Logo" width={60} height={40} className="object-contain object-center ml-4 p-1" style={{ filter: 'contrast(1.1)' }}/>
            </div>
            <div className="flex">
                {/* Sidebar */}
                <div className="w-[5rem] h-[92vh] bg-white border-r border-[#eae4e4] flex flex-col items-center justify-start py-5">
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