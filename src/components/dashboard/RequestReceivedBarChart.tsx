import { Bar } from "react-chartjs-2";
import {Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend,} from "chart.js";

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

interface Patient {
  receive_datetime: string;
}

interface RequestReceivedBarChartProps {
  patients: Patient[];
}

export default function RequestReceivedBarChart({
  patients,
}: RequestReceivedBarChartProps) {
  const monthlyCounts = patients.reduce((acc: Record<string, number>, patient: Patient) => {
    const date = new Date(patient.receive_datetime);
    const monthYear = date.toLocaleDateString("default", {
      month: "short",
      year: "numeric",
    });
    acc[monthYear] = (acc[monthYear] || 0) + 1;
    return acc;
  }, {});

  const sortedLabels = Object.keys(monthlyCounts).sort((a, b) => {
    return new Date(a).getTime() - new Date(b).getTime();
  });

  const data = {
    labels: sortedLabels,
    datasets: [
      {
        label: "Requests Received",
        data: sortedLabels.map((label) => monthlyCounts[label]),
        backgroundColor: "rgba(59, 130, 246, 0.5)",
        borderColor: "rgb(59, 130, 246)",
        borderWidth: 1,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: "top" as const,
      },
      title: {
        display: false,
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        title: {
          display: true,
          text: "Number of Requests",
        },
        ticks: {
          stepSize: 1,
          precision: 0,
        },
      },
      x: {
        title: {
          display: true,
          text: "Month",
        },
      },
    },
  };

  return (
    <div className="bg-white border border-gray-200 shadow-xs rounded-md p-5 h-[72vh]">
      <h1 className="text-lg font-bold text-gray-800">
        Blood Requests Per Month
      </h1>
      <div className="h-[calc(100%-2rem)] mt-4">
        <Bar data={data} options={options} />
      </div>
    </div>
  );
}
