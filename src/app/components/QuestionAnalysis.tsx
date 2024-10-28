'use client'

import { Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { useScore } from '../context/ScoreContext';

ChartJS.register(ArcElement, Tooltip, Legend);

export default function QuestionAnalysis() {
  const { score } = useScore();
  // Data for the donut chart
  const data = {
    datasets: [
      {
        data: [score, 15 - score],
        backgroundColor: ['#3B82F6', '#E0E7FF'],
        borderWidth: 0,
        cutout: '70%',
      },
    ],
  };

  // Chart options
  const options = {
    plugins: {
      tooltip: { enabled: false }, // Disable tooltip
      legend: { display: false },  // Hide legend
    },
  };

  return (
    <div className="bg-white p-6 rounded-lg border">
      <h3 className="text-xl font-bold mb-2">Question Analysis</h3>
      <div className='pb-7'>
      <span className="text-gray-700 font-semibold mb-1">
        You scored {score} question correct out of 15.
      </span>
      <span className="text-gray-500 mb-4 "> However it still needs some improvements</span>
      </div>

      <div className="relative w-32 h-32 mx-auto">
        <Doughnut data={data} options={options} />

        {/* Center icon */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <span role="img" aria-label="target" className="text-4xl">🎯</span>
        </div>
      </div>

      <p className="text-blue-500 font-bold text-right mt-4">{score}/15</p>
    </div>
  );
}
