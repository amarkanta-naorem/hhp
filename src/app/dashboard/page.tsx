"use client";
import StatusContent from "@/components/dashboard/StatusContent";
import RequestReceivedTable from "@/components/dashboard/RequestReceivedTable";
import RequestReceivedBarChart from "@/components/dashboard/RequestReceivedBarChart";
import { PatientData } from "@/utils/PatientData";
import { StatusContentData } from "@/utils/StatusContent";
import BloodRequestForm from "@/components/dashboard/BloodRequest/BloodRequestForm";
import {useState} from "react";
import RequestReceivedStatusDoughnutChart from "@/components/dashboard/RequestReceivedStatusDoughnutChart";

export default function Dashboard() {
    const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <div className="p-2">
      <div className="relative">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2 md:gap-4">
              {StatusContentData.map((status, index) => (
                  <StatusContent key={index} {...status} />
              ))}
          </div>

          <div className="flex flex-col lg:flex-row gap-4 my-4">
              <div className="w-full lg:w-1/2">
                  <RequestReceivedStatusDoughnutChart />
              </div>
              <div className="w-full lg:w-1/2">
                  <RequestReceivedBarChart patients={PatientData} />
              </div>
          </div>
          <div className="w-full">
              <RequestReceivedTable patients={PatientData} setIsModalOpen={setIsModalOpen} />
          </div>
      </div>
    </div>
  );
}
