"use client";
import Image from "next/image";
import React, { useState } from "react";
import SidebarMenus from "@/components/dashboard/sidebar/SidebarMenus";
import SettingMenu from "@/components/dashboard/sidebar/Menus/SettingMenu";
import HamburgerMenu from "@/components/dashboard/sidebar/Menus/HamburgerMenu";
import BloodRequestForm from "@/components/dashboard/BloodRequest/BloodRequestForm";
import {usePathname} from "next/navigation";

export default function DashboardLayout({ children }: { children: React.ReactNode }): React.ReactElement {
  const pathName = usePathname();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="text-[#000000]">
      <div className="w-full h-[8vh] border-b border-[#eae4e4] bg-white fixed top-0 left-0 z-50">
        <div className="flex items-center justify-between px-2 h-full">
          <Image src="/logo.svg" alt="HHP Logo" width={0} height={0} sizes="(max-width: 640px) 40px, (max-width: 1024px) 50px, 60px" className="h-auto w-13 md:w-14 lg:w-16 object-contain object-center p-0 sm:p-1" style={{ filter: 'contrast(1.1)' }} />
          <div className="flex items-center gap-4">
            <div className="hidden md:flex md:items-center md:space-x-5">
                { pathName === "/dashboard" && (
                    <button onClick={() => setIsModalOpen(true)} className="w-full md:w-auto flex justify-center items-center space-x-2 bg-[#c90606] px-3 py-1.5 rounded-md text-white text-xs cursor-pointer">
                        <span>
                            <svg xmlns="http://www.w3.org/2000/svg" width={17} height={17} viewBox="0 0 24 24"><path fill="none" stroke="currentColor" strokeLinecap="round" strokeWidth={1.5} d="M10 14h2m0 0h2m-2 0v2m0-2v-2m10-.202c0-2.632 0-3.949-.77-4.804a3 3 0 0 0-.224-.225C20.151 6 18.834 6 16.202 6h-.374c-1.153 0-1.73 0-2.268-.153a4 4 0 0 1-.848-.352C12.224 5.224 11.816 4.815 11 4l-.55-.55c-.274-.274-.41-.41-.554-.53a4 4 0 0 0-2.18-.903C7.53 2 7.336 2 6.95 2c-.883 0-1.324 0-1.692.07A4 4 0 0 0 2.07 5.257C2 5.626 2 6.068 2 6.95M21.991 16c-.036 2.48-.22 3.885-1.163 4.828C19.657 22 17.771 22 14 22h-4c-3.771 0-5.657 0-6.828-1.172S2 17.771 2 14v-3"></path></svg>
                        </span>
                        <span>New Request</span>
                    </button>
                )}
                <div className="p-1.5 rounded-xl bg-gray-200/40 group-hover:bg-gray-50/60 transition-colors shadow-inner cursor-pointer">
                    <SettingMenu />
                </div>

                <Image src="/images/user.png" alt="user profile" width={42} height={42} className="hidden md:block rounded-full bg-gray-200/40 group-hover:bg-gray-50/60 transition-colors shadow-inner cursor-pointer" />
            </div>
            <div className="md:hidden">
              <HamburgerMenu isOpen={isSidebarOpen} toggle={() => setIsSidebarOpen(!isSidebarOpen)} />
            </div>
          </div>
        </div>
      </div>

      {isSidebarOpen && (
        <div className="fixed inset-0 z-30 bg-black/25 md:hidden" onClick={() => setIsSidebarOpen(false)}/>
      )}

      <div className="flex pt-[8vh]">
        <div className={`fixed md:relative inset-y-0 top-[8vh] sm:top-0 left-0 z-40 w-1/2 md:w-[5rem] h-[92vh] bg-white border-r border-[#eae4e4] flex flex-col items-start md:items-center py-5 transform transition-transform duration-300 ease-in-out ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'} md:translate-x-0`}>
            <div className="flex items-center justify-center w-full px-3 mb-3">
                <button onClick={() => setIsModalOpen(true)} className="md:hidden md:w-auto w-full flex justify-center items-center space-x-2 bg-[#c90606] px-3 py-1.5 rounded-md text-white text-xs cursor-pointer">
                    <span>
                        <svg xmlns="http://www.w3.org/2000/svg" width={17} height={17} viewBox="0 0 24 24"><path fill="none" stroke="currentColor" strokeLinecap="round" strokeWidth={1.5} d="M10 14h2m0 0h2m-2 0v2m0-2v-2m10-.202c0-2.632 0-3.949-.77-4.804a3 3 0 0 0-.224-.225C20.151 6 18.834 6 16.202 6h-.374c-1.153 0-1.73 0-2.268-.153a4 4 0 0 1-.848-.352C12.224 5.224 11.816 4.815 11 4l-.55-.55c-.274-.274-.41-.41-.554-.53a4 4 0 0 0-2.18-.903C7.53 2 7.336 2 6.95 2c-.883 0-1.324 0-1.692.07A4 4 0 0 0 2.07 5.257C2 5.626 2 6.068 2 6.95M21.991 16c-.036 2.48-.22 3.885-1.163 4.828C19.657 22 17.771 22 14 22h-4c-3.771 0-5.657 0-6.828-1.172S2 17.771 2 14v-3"></path></svg>
                    </span>
                    <span>New Request</span>
                </button>
            </div>
            <SidebarMenus closeSidebar={() => setIsSidebarOpen(false)} />
            <div className="mt-auto md:hidden w-full">
                <button onClick={() => setIsSidebarOpen(false)} className="p-2 hover:bg-gray-100 rounded-full flex items-center gap-3 w-full px-4">
                    <Image src="/images/user.png" alt="user profile" width={33} height={33} className="block rounded-full bg-gray-200/40 group-hover:bg-gray-50/60 transition-colors shadow-inner cursor-pointer" />
                    <span className="text-sm">Profile</span>
                </button>
                <button onClick={() => setIsSidebarOpen(false)} className="p-2 hover:bg-gray-100 rounded-full flex items-center gap-3 w-full px-4">
                    <SettingMenu />
                    <span className="text-sm">Settings</span>
                </button>
            </div>
        </div>

        <div className="w-full h-[92vh] bg-[#f5f5f5] overflow-y-auto">
          {children}
        </div>
      </div>
        {isModalOpen && (<BloodRequestForm isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} />)}
    </div>
  );
}