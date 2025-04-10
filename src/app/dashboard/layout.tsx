"use client";
import React, { useState } from "react";
import SidebarMenus from "@/components/dashboard/sidebar/SidebarMenus";
import Image from "next/image";
import SettingMenu from "@/components/dashboard/sidebar/Menus/SettingMenu";
import HamburgerMenu from "@/components/dashboard/sidebar/Menus/HamburgerMenu";

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div className="text-[#000000]">
      <div className="w-full h-[8vh] border-b border-[#eae4e4] bg-white fixed top-0 left-0 z-50">
        <div className="flex items-center justify-between px-5 h-full">
          <Image src="/logo.svg" alt="HHP Logo" width={60} height={40} className="object-contain object-center p-1" style={{ filter: 'contrast(1.1)' }} />
          <div className="flex items-center gap-4">
            <div className="hidden md:block">
              <SettingMenu />
            </div>
            <div className="md:hidden">
              <HamburgerMenu isOpen={isSidebarOpen} toggle={() => setIsSidebarOpen(!isSidebarOpen)} />
            </div>
          </div>
        </div>
      </div>

      {isSidebarOpen && (
        <div className="fixed inset-0 z-30 bg-black/50 md:hidden" onClick={() => setIsSidebarOpen(false)}/>
      )}

      <div className="flex pt-[8vh]">
        <div className={`fixed md:relative inset-y-0 top-[8vh] sm:top-0 left-0 z-40 w-1/2 md:w-[5rem] h-[92vh] bg-white border-r border-[#eae4e4] flex flex-col items-start md:items-center py-5 transform transition-transform duration-300 ease-in-out ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'} md:translate-x-0`}>
            <SidebarMenus closeSidebar={() => setIsSidebarOpen(false)} />
            <div className="mt-auto md:hidden w-full">
                <button onClick={() => setIsSidebarOpen(false)} className="p-2 hover:bg-gray-100 rounded-full flex items-center gap-3 w-full px-4">
                    <SettingMenu includeLink={false} />
                    <span className="text-sm">Settings</span>
                </button>
            </div>
        </div>

        <div className="w-full h-[92vh] bg-gray-50 overflow-y-auto">
          {children}
        </div>
      </div>
    </div>
  );
}