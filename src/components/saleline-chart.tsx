import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend, ChartOptions } from 'chart.js';
import { ChartData } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const SalesLineChart: React.FC = () => {
  const data: ChartData<'line'> = {
    labels: ["January", "February", "March", "April", "May", "June"],
    datasets: [
      {
        label: "Sales ($)",
        data: [5000, 7000, 8000, 9000, 15000, 12000],
        backgroundColor: "rgba(75, 192, 192, 0.2)",
        borderColor: "rgba(75, 192, 192, 1)",
        borderWidth: 1,
        tension: 0.4, // Smooth curve
      },
      {
        label: "Lead Conversion Rate (%)",
        data: [2, 3, 4, 3.5, 5, 4.5],
        backgroundColor: "rgba(255, 99, 132, 0.2)",
        borderColor: "rgba(255, 99, 132, 1)",
        borderWidth: 1,
        tension: 0.4,
      }
    ]
  };

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
      tooltip: {
        enabled: true,
      }
    }
  };

  return (
      <Line className='min-h-full min-w-full' data={data} options={options} />
  );
};

export default SalesLineChart;