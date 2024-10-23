import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend, ChartOptions } from 'chart.js';
import { ChartData } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const LeadsBarChart: React.FC = () => {
  const data: ChartData<'bar'> = {
    labels: ["January", "February", "March", "April", "May", "June"],
    datasets: [
      {
        label: "Leads Generated",
        data: [50, 70, 80, 90, 150, 120],
        backgroundColor: "rgba(54, 162, 235, 0.2)",
        borderColor: "rgba(54, 162, 235, 1)",
        borderWidth: 1,
      },
      {
        label: "Deals Closed",
        data: [10, 20, 30, 40, 60, 50],
        backgroundColor: "rgba(37,99,235, 1)",
        borderColor: "rgba(37,99,235, 1)",
        borderWidth: 1,
      }
    ]
  };

  const options: ChartOptions<'bar'> = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'Leads and Deals Comparison',
      }
    }
  };

  return (
   
      <Bar className='min-h-full min-w-full' data={data} options={options} />

  );
};

export default LeadsBarChart;