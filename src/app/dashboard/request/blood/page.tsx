"use client";
import React, { useState } from "react";
import { PatientData } from "@/utils/PatientData";
import { FormatDatetime, TimeAgo } from "@/utils/FormatDatetime";
import BloodRequestForm from "@/components/dashboard/BloodRequest/BloodRequestForm";

export default function RequestBloodPage(): React.ReactElement {
  const [inputValue, setInputValue] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);

  const isInputEmpty: boolean = inputValue.trim() === "";

  const handleKeyDown: any = (e: any): void => {
    if (e.key === "Enter" && !isInputEmpty) {
      alert(inputValue);
    }
  };

  return (
    <div className="bg-white border border-gray-200 shadow-xs rounded-md m-3 min-h-[calc(100vh-160px)]">
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 px-3 md:px-5 pt-3 md:pt-5">
        <h1 className="text-lg font-bold text-gray-800">Request Received</h1>

        <div className="w-full md:w-48 relative">
          <input id="search-blood-request" className="peer w-full bg-transparent text-slate-700 text-sm border border-slate-300 rounded-md px-3 py-1 pr-10 transition duration-300 ease-in-out focus:outline-none focus:border-blue-500 hover:border-slate-400 shadow-xs focus:shadow" placeholder=" " value={inputValue} onChange={(e) => { setInputValue(e.target.value); }} onKeyDown={handleKeyDown} />
          <label htmlFor="search-blood-request" className={`absolute pointer-events-none bg-white px-1 left-3 text-slate-400 text-sm transition-all duration-300 ${inputValue ? "-top-2 text-xs text-blue-600" : "top-1.5 peer-placeholder-shown:text-sm peer-placeholder-shown:text-slate-400"} peer-focus:-top-2 peer-focus:text-xs peer-focus:text-blue-600`}>Search</label>
        </div>
      </div>

      <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-2 mb-4 p-3">
        <button onClick={() => setIsModalOpen(true)} className="w-full md:w-auto flex justify-center items-center space-x-2 bg-[#c90606] px-3 py-1.5 rounded-md text-white text-xs">
          <span>
            <svg xmlns="http://www.w3.org/2000/svg" width={17} height={17} viewBox="0 0 24 24">
              <path fill="none" stroke="currentColor" strokeLinecap="round" strokeWidth={1.5} d="M10 14h2m0 0h2m-2 0v2m0-2v-2m10-.202c0-2.632 0-3.949-.77-4.804a3 3 0 0 0-.224-.225C20.151 6 18.834 6 16.202 6h-.374c-1.153 0-1.73 0-2.268-.153a4 4 0 0 1-.848-.352C12.224 5.224 11.816 4.815 11 4l-.55-.55c-.274-.274-.41-.41-.554-.53a4 4 0 0 0-2.18-.903C7.53 2 7.336 2 6.95 2c-.883 0-1.324 0-1.692.07A4 4 0 0 0 2.07 5.257C2 5.626 2 6.068 2 6.95M21.991 16c-.036 2.48-.22 3.885-1.163 4.828C19.657 22 17.771 22 14 22h-4c-3.771 0-5.657 0-6.828-1.172S2 17.771 2 14v-3"></path>
            </svg>
          </span>
          <span>New Request</span>
        </button>
        <div className="flex items-center flex-wrap gap-2 text-sm">
          <div className="flex items-center space-x-2">
            <button className="flex items-center space-x-1 border-none p-1 rounded-md text-sm cursor-pointer">
              <span>
                <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} viewBox="0 0 16 16">
                  <path fill="currentColor" d="M5.03 1.97a.75.75 0 0 1 0 1.06l-2 2a.75.75 0 0 1-1.06 0l-1-1a.75.75 0 0 1 1.06-1.06l.47.47l1.47-1.47a.75.75 0 0 1 1.06 0M6 3.75A.75.75 0 0 1 6.75 3h7.5a.75.75 0 0 1 0 1.5h-7.5A.75.75 0 0 1 6 3.75M6 8a.75.75 0 0 1 .75-.75h7.5a.75.75 0 0 1 0 1.5h-7.5A.75.75 0 0 1 6 8m-.97 2.97a.75.75 0 0 1 0 1.06l-2 2a.75.75 0 0 1-1.06 0l-1-1a.75.75 0 1 1 1.06-1.06l.47.47l1.47-1.47a.75.75 0 0 1 1.06 0M6 12.25a.75.75 0 0 1 .75-.75h7.5a.75.75 0 0 1 0 1.5h-7.5a.75.75 0 0 1-.75-.75"></path>
                </svg>
              </span>
              <span>Select Rows</span>
            </button>
            <span className="text-[#bdbdbd] cursor-default">/</span>
            <button className="flex items-center space-x-1 border-none p-1 rounded-md text-sm cursor-pointer">
              <span>
                <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} viewBox="0 0 16 16">
                  <path fill="currentColor" d="M6 1a3 3 0 0 0-2.83 2H0v2h3.17a3.001 3.001 0 0 0 5.66 0H16V3H8.83A3 3 0 0 0 6 1M5 4a1 1 0 1 1 2 0a1 1 0 0 1-2 0m5 5a3 3 0 0 0-2.83 2H0v2h7.17a3.001 3.001 0 0 0 5.66 0H16v-2h-3.17A3 3 0 0 0 10 9m-1 3a1 1 0 1 1 2 0a1 1 0 0 1-2 0"></path>
                </svg>
              </span>
              <span>View</span>
            </button>
            <span className="text-[#bdbdbd] cursor-default">/</span>
            <button className="flex items-center space-x-1 border-none p-1 rounded-md text-sm cursor-pointer">
              <span>
                <svg xmlns="http://www.w3.org/2000/svg" width={20} height={20} viewBox="0 0 24 24">
                  <path fill="currentColor" d="m12 16l-5-5l1.4-1.45l2.6 2.6V4h2v8.15l2.6-2.6L17 11zm-6 4q-.825 0-1.412-.587T4 18v-3h2v3h12v-3h2v3q0 .825-.587 1.413T18 20z"></path>
                </svg>
              </span>
              <span>Export</span>
            </button>
          </div>
        </div>
      </div>

      <div className="relative">
        <div className="h-[60vh] md:h-[72vh] overflow-x-auto overflow-y-auto no-scrollbar">
          <table className="w-full min-w-[1000px] md:min-w-full divide-y divide-gray-200/70">
            <thead className="sticky top-0 bg-white z-10">
              <tr>
                <th className="p-2 md:p-4 text-left text-sm tracking-wide font-medium">Patient Name</th>
                <th className="p-2 md:p-4 text-left text-sm tracking-wide font-medium">Phone No.</th>
                <th className="p-2 md:p-4 text-left text-sm tracking-wide font-medium">Blood Gp.</th>
                <th className="p-2 md:p-4 text-left text-sm tracking-wide font-medium">Age</th>
                <th className="p-2 md:p-4 text-left text-sm tracking-wide font-medium">Gender</th>
                <th className="p-2 md:p-4 text-left text-sm tracking-wide font-medium">Hospital</th>
                <th className="p-2 md:p-4 text-left text-sm tracking-wide font-medium">Request Date</th>
                <th className="p-2 md:p-4 text-left text-sm tracking-wide font-medium">Donated Date</th>
                <th className="p-2 md:p-4 text-center text-sm tracking-wide font-medium">Status</th>
                <th className="p-2 md:p-4 text-center text-sm tracking-wide font-medium">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200/40 bg-white/50">
              {PatientData
                  ?.sort((a: any, b: any): number => new Date(b.receive_datetime).getTime() - new Date(a.receive_datetime).getTime())
                  ?.map((patient: any, index: any): React.ReactElement => (
                <tr key={index} className="group hover:bg-white/90 transition-all duration-200 ease-out">
                  <td className="px-2 md:px-4 py-3 whitespace-nowrap">
                    <div className="text-sm font-medium text-gray-900 truncate max-w-[120px] md:max-w-none">{patient?.patient_name}</div>
                  </td>
                  <td className="px-2 md:px-4 py-3 whitespace-nowrap">
                    <div className="text-sm font-medium text-gray-900 truncate max-w-[120px] md:max-w-none">{patient?.patient_phone_no}</div>
                  </td>
                  <td className="px-2 md:px-4 py-3 whitespace-nowrap">
                    <span className="inline-flex items-center px-3 py-1 rounded-full bg-red-100/90 text-red-700 text-sm font-medium border border-red-200">
                      <svg xmlns="http://www.w3.org/2000/svg" width={18} height={18} viewBox="0 0 48 48" className="mr-1">
                        <path fill="currentColor" fillRule="evenodd" d="m24 4l-.69.66l-.004.004l-.009.008l-.032.032l-.122.119q-.16.157-.456.455a72 72 0 0 0-6.492 7.621C12.681 17.68 9 24.082 9 30.08C9 37.845 15.796 44 24 44s15-6.155 15-13.92c0-6-3.681-12.401-7.195-17.18a72 72 0 0 0-6.492-7.622a42 42 0 0 0-.578-.574l-.032-.032l-.01-.008l-.003-.004zm-8.535 27.399a1 1 0 1 0-1.902.62a11.53 11.53 0 0 0 4.177 5.766a11.48 11.48 0 0 0 6.76 2.203c.552 0 1-.449 1-1.003s-.448-1.003-1-1.003a9.5 9.5 0 0 1-5.584-1.82a9.53 9.53 0 0 1-3.451-4.764" clipRule="evenodd"></path>
                      </svg>
                      {patient?.patient_blood_group}
                    </span>
                  </td>
                  <td className="px-2 md:px-4 py-3 whitespace-nowrap text-center">
                    <div className="flex items-baseline space-x-1">
                      <span className="text-sm text-gray-900 font-medium">{patient?.age}</span>
                      <span className="text-xs text-gray-500">yrs</span>
                    </div>
                  </td>
                  <td className="px-2 md:px-4 py-3 whitespace-nowrap text-center">
                    <span className={`flex items-center justify-center w-[4rem] py-0.5 rounded-md text-xs font-medium ${ patient?.gender === "Male" ? "bg-blue-100/90 text-blue-800 border border-blue-200" : "bg-pink-100/90 text-pink-800 border border-pink-200" }`}>{patient?.gender}</span>
                  </td>
                  <td className="px-2 md:px-4 py-3 whitespace-nowrap">
                    <div className="text-sm text-gray-900 font-medium truncate max-w-[150px] md:max-w-none">{patient?.hospital}</div>
                    <div className="text-xs text-gray-500 truncate max-w-[150px] md:max-w-none">{patient?.hospital_address}</div>
                  </td>
                  <td className="px-2 md:px-4 py-3 whitespace-nowrap">
                    <div className="text-sm text-gray-900">{FormatDatetime(patient?.receive_datetime)}</div>
                    <div className="text-xs text-gray-500">{TimeAgo(patient?.receive_datetime)}</div>
                  </td>
                  <td className="px-2 md:px-4 py-3 whitespace-nowrap">
                    <div className={`text-sm font-medium truncate max-w-[120px] md:max-w-none ${ patient?.donated_datetime || patient?.scheduled_at || patient?.closed_on ? "text-gray-900" : "text-red-700 text-[11px] font-mono tracking-widest" }`}>
                      {patient?.donated_datetime ? FormatDatetime(patient?.donated_datetime) : patient?.scheduled_at ? FormatDatetime(patient?.scheduled_at) : patient?.closed_on ? FormatDatetime(patient?.closed_on) : patient?.status}
                    </div>
                    <div className="text-xs text-gray-500">
                      {patient?.donated_datetime ? TimeAgo(patient?.donated_datetime) : patient?.scheduled_at ? TimeAgo(patient?.scheduled_at) : patient?.closed_on ? TimeAgo(patient?.closed_on) : null}
                    </div>
                  </td>
                  <td className="px-2 md:px-4 py-3 whitespace-nowrap">
                    <div className={`text-xs font-medium px-3 py-1.5 rounded-full border shadow-sm ${ patient?.status === "Scheduled" ? "bg-blue-50 text-blue-800 border-blue-200" : patient?.status === "Pending" ? "bg-amber-50 text-amber-800 border-amber-200" : patient?.status === "Completed" ? "bg-green-50 text-green-800 border-green-200" : patient?.status === "On Hold" ? "bg-orange-50 text-orange-800 border-orange-200" : patient?.status === "Closed" ? "bg-gray-100 text-gray-800 border-gray-300" : "" }`}>
                      <div className="flex items-center justify-center space-x-1.5">
                        <span className={`w-2 h-2 rounded-full ${ patient?.status === "Scheduled" ? "bg-blue-500" : patient?.status === "Pending" ? "bg-amber-500" : patient?.status === "Completed" ? "bg-green-500" : patient?.status === "On Hold" ? "bg-orange-500" : "bg-gray-500" }`}></span>
                        <span>{patient?.status}</span>
                      </div>
                    </div>
                  </td>
                  <td className="px-2 md:px-4 py-3 whitespace-nowrap text-center">
                    <button className="bg-blue-600 hover:bg-blue-700 text-white flex items-center justify-center gap-1 md:gap-2 cursor-pointer border-2 border-blue-600 rounded-lg p-1 shadow-md hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-300 transition-all duration-300 ease-in-out">
                      <svg xmlns="http://www.w3.org/2000/svg" width={20} height={20} viewBox="0 0 24 24">
                        <g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} color="currentColor">
                          <path d="M20.46 17.515c.36.416.54.624.54.985s-.18.57-.54.985C19.56 20.52 17.937 22 16 22s-3.561-1.48-4.46-2.515c-.36-.416-.54-.623-.54-.985c0-.361.18-.57.54-.985C12.44 16.48 14.063 15 16 15s3.561 1.48 4.46 2.515" />
                          <path d="M20 13.003V7.82c0-1.694 0-2.54-.268-3.217c-.43-1.087-1.342-1.945-2.497-2.35C16.517 2 15.617 2 13.818 2c-3.148 0-4.722 0-5.98.441c-2.02.71-3.615 2.211-4.37 4.114C3 7.74 3 9.221 3 12.185v2.546c0 3.07 0 4.605.848 5.672c.243.305.53.576.855.805c.912.643 2.147.768 4.297.792" />
                          <path d="M3 12a3.333 3.333 0 0 1 3.333-3.333c.666 0 1.451.116 2.098-.057A1.67 1.67 0 0 0 9.61 7.43c.173-.647.057-1.432.057-2.098A3.333 3.333 0 0 1 13 2m2.992 16.5h.01" />
                        </g>
                      </svg>
                      <span className="font-medium text-xs md:text-sm">View</span>
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="absolute inset-x-0 bottom-0 h-8 bg-gradient-to-t from-white/50 pointer-events-none"></div>
      </div>
      {isModalOpen && ( <BloodRequestForm isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen}/> )}
    </div>
  );
}
