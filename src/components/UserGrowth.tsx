'use client';

import { EllipsisHorizontalIcon } from '@heroicons/react/24/outline';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler,
} from 'chart.js';
import { Line } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler
);

const labels = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'];
const data = {
  labels,
  datasets: [
    {
      label: 'Users',
      data: [400, 450, 500, 600, 700, 750, 850],
      borderColor: 'rgb(59, 130, 246)',
      backgroundColor: (context) => {
        const ctx = context.chart.ctx;
        const gradient = ctx.createLinearGradient(0, 0, 0, 200);
        gradient.addColorStop(0, 'rgba(59, 130, 246, 0.2)');
        gradient.addColorStop(1, 'rgba(59, 130, 246, 0)');
        return gradient;
      },
      tension: 0.4,
      fill: true,
      pointRadius: 0,
      pointHoverRadius: 6,
      pointHoverBackgroundColor: 'rgb(255, 255, 255)',
      pointHoverBorderColor: 'rgb(59, 130, 246)',
      pointHoverBorderWidth: 2,
      borderWidth: 3,
    },
  ],
};

const options = {
  responsive: true,
  maintainAspectRatio: false,
  interaction: {
    intersect: false,
    mode: 'index',
  },
  plugins: {
    legend: {
      display: false,
    },
    tooltip: {
      backgroundColor: 'rgb(255, 255, 255)',
      titleColor: 'rgb(107, 114, 128)',
      bodyColor: 'rgb(59, 130, 246)',
      bodyFont: {
        weight: 'bold',
      },
      borderColor: 'rgba(0, 0, 0, 0.05)',
      borderWidth: 1,
      padding: 12,
      displayColors: false,
      callbacks: {
        title: (items) => {
          return items[0].label;
        },
        label: (item) => {
          return `${item.formattedValue} Users`;
        },
      },
    },
  },
  scales: {
    y: {
      beginAtZero: true,
      grid: {
        display: true,
        color: 'rgba(0, 0, 0, 0.03)',
        drawBorder: false,
      },
      ticks: {
        color: 'rgb(156, 163, 175)',
        font: {
          size: 11,
          family: 'Inter, system-ui, sans-serif',
        },
        padding: 8,
        maxTicksLimit: 5,
      },
      border: {
        display: false,
      },
    },
    x: {
      grid: {
        display: false,
        drawBorder: false,
      },
      ticks: {
        color: 'rgb(156, 163, 175)',
        font: {
          size: 11,
          family: 'Inter, system-ui, sans-serif',
        },
        padding: 8,
      },
      border: {
        display: false,
      },
    },
  },
};

export default function UserGrowth() {
  return (
    <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 flex-1">
      <div className="flex justify-between items-center mb-6">
        <div>
          <h2 className="text-lg font-semibold text-gray-900">User Growth</h2>
          <p className="text-sm text-gray-500">User growth on your platform</p>
        </div>
        <button className="text-gray-400 hover:text-gray-600">
          <EllipsisHorizontalIcon className="h-6 w-6" />
        </button>
      </div>
      <div className="h-[220px] w-full">
        <Line options={options} data={data} />
      </div>
    </div>
  );
} 