'use client'

import { useScore } from "../context/ScoreContext";
import Graph from "./Graph";

export default function ComparisonGraph() {
  const { percentile } = useScore();

  return (
    <div className="bg-white p-6 rounded-lg border">
      <h3 className="text-lg font-semibold mb-4">Comparison Graph</h3>
      <p className="text-gray-600 mb-4">
        <span className="text-gray-700 font-semibold">You scored {percentile}% percentile </span>
        which is lower than the average percentile 72% of all the engineers who took this assessment
      </p>
      <Graph />
    </div>
  )
}