import {PatientData} from "@/utils/PatientData";

export const StatusContentData = [
  {
    title: "Total Requests",
    count: PatientData.length,
    subTitle: "Requests Received",
  },
  {
    title: "Total Donations",
    count: PatientData.filter((patient: any): any => patient.donated_datetime !== null).length,
    subTitle: "Donations Made",
  },
  {
    title: "Total Donors",
    count: (PatientData.length / 3).toFixed(0),
    subTitle: "Unique Donors",
  },
  {
    title: "Total Contributions",
    count: (PatientData.length / 5).toFixed(0),
    subTitle: "Contributions Recorded",
  },
];