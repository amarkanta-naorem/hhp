"use client";
import StatusContent from "@/components/dashboard/StatusContent";
import RequestReceivedTable from "@/components/dashboard/RequestReceivedTable";
import RequestReceivedBarChart from "@/components/dashboard/RequestReceivedBarChart";
import { PatientData } from "@/utils/PatientData";
import { StatusContentData } from "@/utils/StatusContent";

export default function Dashboard() {
  return (
    <div className="p-2 md:p-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2 md:gap-4">
        {StatusContentData.map((status, index) => (
          <StatusContent key={index} {...status} />
        ))}
      </div>

      <div className="flex flex-col lg:flex-row gap-4 my-4">
        <div className="w-full lg:w-1/2">
          <RequestReceivedTable patients={PatientData} />
        </div>
        <div className="w-full lg:w-1/2">
          <RequestReceivedBarChart patients={PatientData} />
        </div>
      </div>
    </div>
  );
}
