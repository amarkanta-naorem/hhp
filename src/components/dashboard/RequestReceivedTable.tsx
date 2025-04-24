import { FormatDatetime, TimeAgo } from "@/utils/FormatDatetime";
import React from "react";

export default function RequestReceivedTable({ patients }: any): React.ReactElement {
  return (
    <div className="bg-white border border-gray-200 shadow-lg rounded-xl p-4 h-[47vh] sm:h-[41vh]">
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-2 mb-3">
        <h1 className="text-lg font-bold text-gray-800">Request Received</h1>
      </div>

      <div className="relative">
        <div className="h-[39vh] md:h-[34vh] overflow-y-auto scrollbar-thin scrollbar-thumb-blue-200 scrollbar-track-gray-50">
          <table className="w-full">
            <thead className="sticky top-0 bg-white border-b border-gray-100">
              <tr>
                <th className="p-2 text-left text-xs font-semibold text-gray-600">Patient</th>
                <th className="p-2 text-left text-xs font-semibold text-gray-600">Phone</th>
                <th className="p-2 text-left text-xs font-semibold text-gray-600">Blood</th>
                <th className="p-2 text-left text-xs font-semibold text-gray-600">Age</th>
                <th className="p-2 text-left text-xs font-semibold text-gray-600">Gender</th>
                <th className="p-2 text-left text-xs font-semibold text-gray-600">Hospital</th>
                <th className="p-2 text-left text-xs font-semibold text-gray-600">Request Date</th>
                <th className="p-2 text-left text-xs font-semibold text-gray-600">Action</th>
              </tr>
            </thead>
            <tbody>
              {patients
                ?.filter((patient: any): boolean => patient?.receive_datetime !== null && patient.status !== "Closed" && patient.status !== "Completed")
                ?.sort((a: any, b: any): number => new Date(b.receive_datetime).getTime() - new Date(a.receive_datetime).getTime())
                ?.slice(0, 4)
                ?.map((patient: any, index: any): React.ReactElement => (
                  <tr key={index} className="hover:bg-gray-50/50 transition-colors">
                    <td className="p-2 text-sm flex items-center space-x-5">{patient?.patient_name}</td>
                    <td className="p-2 text-sm text-gray-700">{patient?.patient_phone_no}</td>
                    <td className="p-2">
                      <span className="inline-flex items-center px-3 py-1 rounded-full bg-red-100/90 text-red-700 text-xs font-medium border border-red-200">
                        <svg xmlns="http://www.w3.org/2000/svg" width={18} height={18} viewBox="0 0 48 48" className="mr-1">
                          <path fill="currentColor" fillRule="evenodd" d="m24 4l-.69.66l-.004.004l-.009.008l-.032.032l-.122.119q-.16.157-.456.455a72 72 0 0 0-6.492 7.621C12.681 17.68 9 24.082 9 30.08C9 37.845 15.796 44 24 44s15-6.155 15-13.92c0-6-3.681-12.401-7.195-17.18a72 72 0 0 0-6.492-7.622a42 42 0 0 0-.578-.574l-.032-.032l-.01-.008l-.003-.004zm-8.535 27.399a1 1 0 1 0-1.902.62a11.53 11.53 0 0 0 4.177 5.766a11.48 11.48 0 0 0 6.76 2.203c.552 0 1-.449 1-1.003s-.448-1.003-1-1.003a9.5 9.5 0 0 1-5.584-1.82a9.53 9.53 0 0 1-3.451-4.764" clipRule="evenodd"></path>
                        </svg>
                        {patient?.patient_blood_group}
                      </span>
                    </td>
                    <td className="p-2 whitespace-nowrap text-center">
                      <div className="flex items-baseline space-x-1">
                        <span className="text-sm text-gray-900 font-medium">{patient?.age}</span>
                        <span className="text-xs text-gray-500">years</span>
                      </div>
                    </td>
                    <td className="p-2 whitespace-nowrap text-center">
                      <span className={`flex items-center justify-center w-[4rem] py-0.5 rounded-md text-xs font-medium ${ patient?.gender === "Male" ? "bg-blue-100/90 text-blue-800 border border-blue-200" : "bg-pink-100/90 text-pink-800 border border-pink-200" }`}>{patient?.gender}</span>
                    </td>
                    <td className="p-2 whitespace-nowrap">
                      <div className="text-sm text-gray-900 font-medium">{patient?.hospital}</div>
                      <div className="text-xs text-gray-500">{patient?.hospital_address}</div>
                    </td>
                    <td className="p-2 whitespace-nowrap">
                      <div className="text-sm text-gray-900">{FormatDatetime(patient?.receive_datetime)}</div>
                      <div className="text-xs text-gray-500">{TimeAgo(patient?.receive_datetime)}</div>
                    </td>
                    <td className="p-2 whitespace-nowrap text-center">
                      <button className="bg-blue-600 hover:bg-blue-700 text-white flex items-center justify-center gap-1 md:gap-2 cursor-pointer border-2 border-blue-600 rounded-lg p-1 shadow-md hover:shadow-lg transition-all duration-200">
                        <svg xmlns="http://www.w3.org/2000/svg" width={18} height={18} viewBox="0 0 24 24" className="flex-shrink-0">
                          <g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}>
                            <path d="M20.46 17.515c.36.416.54.624.54.985s-.18.57-.54.985C19.56 20.52 17.937 22 16 22s-3.561-1.48-4.46-2.515c-.36-.416-.54-.623-.54-.985c0-.361.18-.57.54-.985C12.44 16.48 14.063 15 16 15s3.561 1.48 4.46 2.515" />
                            <path d="M20 13.003V7.82c0-1.694 0-2.54-.268-3.217c-.43-1.087-1.342-1.945-2.497-2.35C16.517 2 15.617 2 13.818 2c-3.148 0-4.722 0-5.98.441c-2.02.71-3.615 2.211-4.37 4.114C3 7.74 3 9.221 3 12.185v2.546c0 3.07 0 4.605.848 5.672c.243.305.53.576.855.805c.912.643 2.147.768 4.297.792" />
                            <path d="M3 12a3.333 3.333 0 0 1 3.333-3.333c.666 0 1.451.116 2.098-.057A1.67 1.67 0 0 0 9.61 7.43c.173-.647.057-1.432.057-2.098A3.333 3.333 0 0 1 13 2m2.992 16.5h.01" />
                          </g>
                        </svg>
                        <span className="font-medium text-xs tracking-wider">View</span>
                      </button>
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
