
'use client'
import { IoTrophyOutline } from "react-icons/io5";
import { CgNotes } from "react-icons/cg";
import { TiTick } from "react-icons/ti";
import { useScore } from "../context/ScoreContext";

export default function QuickStatistics() {
  const { rank, percentile, score } = useScore();
  
  return (
    <div className="bg-white p-6 rounded-lg border">
      <h3 className="text-xl font-bold mb-6">Quick Statistics</h3>
      <div className="flex justify-between">
        <StatItem
          icon={<IoTrophyOutline className="w-6 h-6 text-yellow-500" />}
          value={`${rank}`}
          label="YOUR RANK"
        />
        <StatItem
          icon={<CgNotes className="w-6 h-6 text-gray-500" />}
          value={`${percentile}%`}
          label="PERCENTILE"
          border
        />
        <StatItem
          icon={<TiTick className="w-6 h-6 text-green-500" />}
          value={`${score} / 15`}
          label="CORRECT ANSWERS"
          border
        />
      </div>
    </div>
  );
}

interface StatItemProps {
  icon: React.ReactNode;
  value: string;
  label: string;
  border?: boolean;
}

function StatItem({ icon, value, label, border }: StatItemProps) {
  return (
    <div className={`flex gap-x-3 items-center px-4 ${border ? "border-l border-gray-300" : ""}`}>
      <div className="bg-gray-100 rounded-full p-3 mb-2">
        {icon}
      </div>
      <div>
        <span className="text-2xl font-bold mb-1">{value}</span>
        <p className="text-xs text-gray-500 uppercase">{label}</p>
      </div>
    </div>
  );
}
