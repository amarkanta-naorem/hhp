import { Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, ChartData, ChartOptions, ArcElement, Tooltip, Legend, TooltipItem } from 'chart.js';
import { PatientData } from "@/utils/PatientData";

ChartJS.register(ArcElement, Tooltip, Legend);

const statusOrder = ['Scheduled', 'Pending', 'Completed', 'On Hold', 'Closed'] as const;
type Status = typeof statusOrder[number];

interface StatusData {
    count: number;
    color: string;
}

export default function RequestReceivedStatusDoughnutChart() {
    // Calculate status counts
    const statusData = PatientData.reduce((acc, item) => {
        const status = item.status as Status;
        acc[status] = (acc[status] || 0) + 1;
        return acc;
    }, {} as Record<Status, number>);

    // Status details with colors
    const statusDetails: Record<Status, StatusData> = {
        'Scheduled': { count: statusData['Scheduled'] || 0, color: '#155dfc' },
        'Pending': { count: statusData['Pending'] || 0, color: 'oklch(0.828 0.189 84.429)' },
        'Completed': { count: statusData['Completed'] || 0, color: 'oklch(0.627 0.194 149.214)' },
        'On Hold': { count: statusData['On Hold'] || 0, color: 'oklch(0.705 0.213 47.604)' },
        'Closed': { count: statusData['Closed'] || 0, color: '#4a5565' }
    };

    const totalRequests = PatientData.length;
    const labels = [...statusOrder];
    const chartData: ChartData<"doughnut"> = {
        labels: labels,
        datasets: [{
            data: statusOrder.map(status => statusDetails[status].count),
            backgroundColor: statusOrder.map(status => statusDetails[status].color),
            borderWidth: 0,
            hoverOffset: 10,
            borderRadius: 8,
            spacing: 4,
        }]
    };

    const options: ChartOptions<"doughnut"> = {
        cutout: '82%',
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: { display: false },
            tooltip: {
                callbacks: {
                    label: (context: TooltipItem<"doughnut">) => {
                        const label = context.label;
                        const count = context.raw as number;
                        const percentage = ((count / totalRequests) * 100).toFixed(1);
                        return `${label}: ${count} requests (${percentage}%)`;
                    }
                },
                bodyFont: { size: 14 },
                padding: 12,
                boxPadding: 6,
                usePointStyle: true,
            }
        },
        animation: {
            duration: 1200,
            easing: 'easeOutQuad'
        }
    };

    return (
        <div className="bg-white border border-gray-200 shadow-xs rounded-xl p-4 h-[36vh] relative group">
            <h1 className="text-base font-semibold text-gray-800 mb-4">Blood Request Status Overview</h1>

            <div className="w-full flex items-center justify-between h-[calc(36vh-5rem)]">
                <div className="w-1/2 h-full relative">
                    <Doughnut data={chartData} options={options} />

                    <div className="absolute inset-0 flex flex-col items-center justify-center">
                        <span className="text-2xl font-bold text-gray-800">{totalRequests}</span>
                        <span className="text-xs md:text-sm text-gray-500">Total Blood Requests</span>
                    </div>
                </div>

                <div className="w-1/2 pl-4 space-y-3">
                    {statusOrder.map((status) => {
                        const percentage = (statusDetails[status].count / totalRequests) * 100;
                        return (
                            <div key={status} className="flex items-center group">
                                <div
                                    className="w-3 h-3 rounded-full mr-3 shadow-sm transition-transform duration-200 group-hover:scale-125"
                                    style={{ backgroundColor: statusDetails[status].color }}
                                />
                                <div className="flex-1">
                                    <div className="flex justify-between items-center">
                                        <span className="text-gray-700 text-xs md:text-sm font-medium">{status}</span>
                                        <span className="text-gray-500 text-xs sm:text-sm md:text-[0.92rem]">
                                          {statusDetails[status].count}
                                          <span className="sm:hidden"> req{statusDetails[status].count !== 1 ? "'s" : ""}</span>
                                          <span className="hidden sm:inline"> request{statusDetails[status].count !== 1 ? "s" : ""}</span>
                                        </span>
                                    </div>
                                    <div className="h-1 bg-gray-100 rounded-full mt-1">
                                        <div
                                            className="h-full rounded-full transition-all duration-500"
                                            style={{
                                                width: `${percentage}%`,
                                                backgroundColor: statusDetails[status].color
                                            }}
                                        />
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>

            {/*<div className="absolute inset-0 pointer-events-none">*/}
            {/*    <div className="absolute -right-8 -top-8 w-28 h-28 bg-blue-100/30 rounded-full blur-xl" />*/}
            {/*    <div className="absolute -left-8 -bottom-8 w-28 h-28 bg-purple-100/30 rounded-full blur-xl" />*/}
            {/*</div>*/}
        </div>
    );
}