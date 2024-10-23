import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend, ChartOptions } from 'chart.js';
import { ChartData } from 'chart.js';

// Register Chart.js components
ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

// Define the data structure for the chart
// interface PerformanceData {
//     labels: string[];
//     datasets: {
//       label: string;
//       data: number[];
//       backgroundColor: string;
//       borderColor: string;
//       borderWidth: number;
//       tension: number;
//     }[];
//   }

export default function PerformanceChart() {

    const performanceData: ChartData<'line'> = {
        labels: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October"],
        datasets: [
          {
            label: "Sales ($)",
            data: [5000, 7000, 8000, 9000, 15000, 12000, 14000, 17000, 20000, 25000],
            backgroundColor: "rgba(75, 192, 192, 0.2)",
            borderColor: "rgba(75, 192, 192, 1)",
            borderWidth: 1,
            tension: 0.4, // Smooth curves
          },
          {
            label: "Lead Conversion Rate (%)",
            data: [2, 3, 4, 3.5, 5, 4.5, 5.5, 6, 7, 6.5],
            backgroundColor: "rgba(255, 99, 132, 0.2)",
            borderColor: "rgba(255, 99, 132, 1)",
            borderWidth: 1,
            tension: 0.4,
          }
        ]
      };
    
      // Chart options
      const options: ChartOptions<'line'> = {
        responsive: true,
        plugins: {
          legend: {
            position: 'top',
          },
          title: {
            display: true,
            text: 'Sales and Lead Conversion Rate Over Time',
          },
        },
      };
    
      return (

            <Line className='min-h-full min-w-full' data={performanceData} options={options} />
      );
}
