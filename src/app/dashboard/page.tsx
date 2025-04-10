"use client";
import StatusContent from "@/components/dashboard/StatusContent";
import RequestReceivedTable from "@/components/dashboard/RequestReceivedTable";
import RequestReceivedBarChart from "@/components/dashboard/RequestReceivedBarChart";

export default function Dashboard() {
  const statusContents = [
    {
      title: "Total Requests",
      count: "36",
      subTitle: "Requests Received",
    },
    {
      title: "Total Donations",
      count: "32",
      subTitle: "Donations Made",
    },
    {
      title: "Total Donors",
      count: "48",
      subTitle: "Unique Donors",
    },
    {
      title: "Total Contributions",
      count: "13",
      subTitle: "Contributions Recorded",
    },
  ];

  const patients = [
    {
      patient_name: "Sanajaoba Singh",
      age: 32,
      gender: "Male",
      patient_blood_group: "B+",
      patient_phone_no: "9087654321",
      hospital: "JNIMS Hospital",
      hospital_address: "Porompat, Imphal East, Manipur",
      receive_datetime: "2024-11-10T09:30:00Z",
    },
    {
      patient_name: "Devi Chanu",
      age: 45,
      gender: "Female",
      patient_blood_group: "O+",
      patient_phone_no: "7890654321",
      hospital: "Shija Hospitals",
      hospital_address: "Langol, Imphal West, Manipur",
      receive_datetime: "2025-03-15T14:15:00Z",
    },
    {
      patient_name: "Rajesh Khanna",
      age: 58,
      gender: "Male",
      patient_blood_group: "A+",
      patient_phone_no: "9876543210",
      hospital: "MAX Hospital",
      hospital_address: "Saket, New Delhi",
      receive_datetime: "2024-11-22T11:20:00Z",
    },
    {
      patient_name: "Priyanka Meitei",
      age: 28,
      gender: "Female",
      patient_blood_group: "AB+",
      patient_phone_no: "8976543210",
      hospital: "Raj Medicity",
      hospital_address: "North AOC, Imphal, Manipur",
      receive_datetime: "2025-02-25T16:35:00Z",
    },
    {
      patient_name: "Amit Kumar",
      age: 65,
      gender: "Male",
      patient_blood_group: "O-",
      patient_phone_no: "8765432109",
      hospital: "Apollo Hospital",
      hospital_address: "Sarita Vihar, New Delhi",
      receive_datetime: "2024-08-12T10:00:00Z",
    },
    {
      patient_name: "Tombi Devi",
      age: 37,
      gender: "Female",
      patient_blood_group: "B-",
      patient_phone_no: "7654321098",
      hospital: "RIMS Hospital",
      hospital_address: "Lamphelpat, Imphal West, Manipur",
      receive_datetime: "2025-03-05T13:25:00Z",
    },
    {
      patient_name: "Vikram Singh",
      age: 42,
      gender: "Male",
      patient_blood_group: "A-",
      patient_phone_no: "6543210987",
      hospital: "Fortis Hospital",
      hospital_address: "Vasant Kunj, New Delhi",
      receive_datetime: "2024-07-30T15:40:00Z",
    },
    {
      patient_name: "Anjali Sharma",
      age: 29,
      gender: "Female",
      patient_blood_group: "AB-",
      patient_phone_no: "9876123450",
      hospital: "Mother’s Care Hospital",
      hospital_address: "Paona Bazar, Imphal, Manipur",
      receive_datetime: "2024-11-15T08:55:00Z",
    },
    {
      patient_name: "Rohit Mehta",
      age: 51,
      gender: "Male",
      patient_blood_group: "O+",
      patient_phone_no: "8765094321",
      hospital: "AIIMS",
      hospital_address: "Ansari Nagar, New Delhi",
      receive_datetime: "2025-02-10T12:15:00Z",
    },
    {
      patient_name: "Geeta Devi",
      age: 63,
      gender: "Female",
      patient_blood_group: "B+",
      patient_phone_no: "7658904321",
      hospital: "City Hospital",
      hospital_address: "Thangal Bazar, Imphal, Manipur",
      receive_datetime: "2025-04-07T17:30:00Z",
    },
    {
      patient_name: "Kiran Patel",
      age: 34,
      gender: "Female",
      patient_blood_group: "A+",
      patient_phone_no: "9123456789",
      hospital: "JNIMS Hospital",
      hospital_address: "Porompat, Imphal East, Manipur",
      receive_datetime: "2024-09-17T14:45:00Z",
    },
    {
      patient_name: "Manish Thakur",
      age: 49,
      gender: "Male",
      patient_blood_group: "B+",
      patient_phone_no: "9234567890",
      hospital: "Shija Hospitals",
      hospital_address: "Langol, Imphal West, Manipur",
      receive_datetime: "2025-03-15T09:30:00Z",
    },
    {
      patient_name: "Sneha Verma",
      age: 27,
      gender: "Female",
      patient_blood_group: "O+",
      patient_phone_no: "9345678901",
      hospital: "MAX Hospital",
      hospital_address: "Saket, New Delhi",
      receive_datetime: "2024-10-28T11:10:00Z",
    },
    {
      patient_name: "Arjun Yadav",
      age: 55,
      gender: "Male",
      patient_blood_group: "AB+",
      patient_phone_no: "9456789012",
      hospital: "Raj Medicity",
      hospital_address: "North AOC, Imphal, Manipur",
      receive_datetime: "2025-04-15T15:15:00Z",
    },
    {
      patient_name: "Pooja Gupta",
      age: 31,
      gender: "Female",
      patient_blood_group: "O-",
      patient_phone_no: "9567890123",
      hospital: "Apollo Hospital",
      hospital_address: "Sarita Vihar, New Delhi",
      receive_datetime: "2024-12-03T10:30:00Z",
    },
    {
      patient_name: "Nitin Sharma",
      age: 39,
      gender: "Male",
      patient_blood_group: "B-",
      patient_phone_no: "9678901234",
      hospital: "RIMS Hospital",
      hospital_address: "Lamphelpat, Imphal West, Manipur",
      receive_datetime: "2025-01-22T16:20:00Z",
    },
    {
      patient_name: "Rani Kaur",
      age: 46,
      gender: "Female",
      patient_blood_group: "A-",
      patient_phone_no: "9789012345",
      hospital: "Fortis Hospital",
      hospital_address: "Vasant Kunj, New Delhi",
      receive_datetime: "2024-08-20T13:50:00Z",
    },
    {
      patient_name: "Suresh Das",
      age: 60,
      gender: "Male",
      patient_blood_group: "AB-",
      patient_phone_no: "9890123456",
      hospital: "Mother’s Care Hospital",
      hospital_address: "Paona Bazar, Imphal, Manipur",
      receive_datetime: "2025-03-05T09:10:00Z",
    },
    {
      patient_name: "Meena Kumari",
      age: 33,
      gender: "Female",
      patient_blood_group: "O+",
      patient_phone_no: "9901234567",
      hospital: "AIIMS",
      hospital_address: "Ansari Nagar, New Delhi",
      receive_datetime: "2024-07-15T14:25:00Z",
    },
    {
      patient_name: "Rahul Sen",
      age: 52,
      gender: "Male",
      patient_blood_group: "B+",
      patient_phone_no: "9012345678",
      hospital: "City Hospital",
      hospital_address: "Thangal Bazar, Imphal, Manipur",
      receive_datetime: "2025-04-15T12:40:00Z",
    },
  ];

  return (
    <div className="p-2 md:p-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2 md:gap-4">
        {statusContents.map((status, index) => (
          <StatusContent key={index} {...status} />
        ))}
      </div>

      <div className="flex flex-col lg:flex-row gap-4 my-4">
        <div className="w-full lg:w-1/2">
          <RequestReceivedTable patients={patients} />
        </div>
        <div className="w-full lg:w-1/2">
          <RequestReceivedBarChart patients={patients} />
        </div>
      </div>
    </div>
  );
}
