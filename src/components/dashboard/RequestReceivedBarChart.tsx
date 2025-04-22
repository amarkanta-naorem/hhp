import { Bar } from "react-chartjs-2";
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend, ChartOptions, TooltipItem } from "chart.js";
import { PatientData } from "@/utils/PatientData";

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

interface RequestReceivedBarChartProps {
  patients: typeof PatientData;
}

export default function RequestReceivedBarChart({ patients }: RequestReceivedBarChartProps) {
  const monthlyCounts = patients.reduce((acc: Record<string, number>, patient) => {
    const date = new Date(patient.receive_datetime);
    const monthYear = date.toLocaleDateString("en-US", {
      month: "short",
      year: "numeric"
    });
    acc[monthYear] = (acc[monthYear] || 0) + 1;
    return acc;
  }, {});

  // Sort months chronologically
  const sortedLabels = Object.keys(monthlyCounts).sort((a, b) =>
      new Date(a).getTime() - new Date(b).getTime()
  );

  const values = sortedLabels.map(label => monthlyCounts[label]);
  const averageValue = values.reduce((a, b) => a + b, 0) / values.length;

  // Color calculation function
  const getBarColor = (value: number): string => {
    if (value < averageValue * 0.75) return '#10B981';
    if (value > averageValue * 1.25) return '#EF4444';
    return '#3B82F6';
  };

  // Chart data configuration
  const data = {
    labels: sortedLabels,
    datasets: [{
      label: "Requests",
      data: values,
      backgroundColor: values.map(getBarColor),
      hoverBackgroundColor: values.map(v => `${getBarColor(v)}CC`),
      borderRadius: 4,
      borderSkipped: false,
      categoryPercentage: 0.8,
      barPercentage: 0.9
    }],
  };

  // Typed chart options
  const options: ChartOptions<"bar"> = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: { display: false },
      tooltip: {
        backgroundColor: "#1E293B",
        bodyColor: "#F8FAFC",
        titleColor: "#94A3B8",
        borderColor: "#334155",
        borderWidth: 1,
        padding: 12,
        displayColors: false,
        callbacks: {
          title: (items: TooltipItem<"bar">[]) => {
            const item = items[0];
            const date = new Date(item.label);
            return date.toLocaleDateString("en-US", {
              month: "long",
              year: "numeric"
            });
          },
          label: (context: TooltipItem<"bar">) => {
            const value = context.parsed.y;
            let category = 'Average';
            if (value < averageValue * 0.75) category = 'Below Average';
            if (value > averageValue * 1.25) category = 'Above Average';
            return `${value} requests (${category})`;
          }
        }
      }
    },
    scales: {
      y: {
        beginAtZero: true,
        grid: { color: "#E2E8F0" },
        border: { display: false },
        title: {
          display: true,
          text: "Number of Requests",
          color: "#64748B",
          font: { size: 12 }
        },
        ticks: {
          stepSize: 1,
          color: "#64748B"
        }
      },
      x: {
        grid: { display: false },
        border: { display: false },
        title: {
          display: true,
          text: "Month",
          color: "#64748B",
          font: { size: 12 }
        },
        ticks: {
          color: "#64748B",
          maxRotation: 0,
          padding: 8
        }
      }
    },
    animation: {
      duration: 800,
      easing: "easeOutQuart"
    }
  };

  return (
      <div className="bg-white border border-gray-100 rounded-lg p-4 h-[36vh] shadow-sm">
        <div className="mb-4">
          <h2 className="text-base font-semibold text-gray-800">
            Monthly Blood Request Analysis
          </h2>
          <div className="mt-3 flex justify-start gap-4">
            {[
              { color: '#10B981', label: 'Low' },
              { color: '#3B82F6', label: 'Average' },
              { color: '#EF4444', label: 'High' }
            ].map((item) => (
                <div key={item.label} className="flex items-center gap-2">
                  <div
                      className="w-3 h-3 rounded-sm"
                      style={{ backgroundColor: item.color }}
                  />
                  <span className="text-xs text-gray-500">{item.label}</span>
                </div>
            ))}
          </div>
        </div>
        <div className="h-[calc(100%-3.5rem)]">
          <Bar data={data} options={options} />
        </div>
      </div>
  );
}