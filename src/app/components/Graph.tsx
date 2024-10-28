"use client";

import React from 'react';
import { LineChart, Line, XAxis, Tooltip, ReferenceLine } from 'recharts';
import { useScore } from "../context/ScoreContext";

const data = [
    { percentile: 0, noOfStudents: 5, },
    { percentile: 10, noOfStudents: 12, },
    { percentile: 20, noOfStudents: 2, },
    { percentile: 30, noOfStudents: 1, },
    { percentile: 40, noOfStudents: 7, },
    { percentile: 50, noOfStudents: 2, },
    { percentile: 60, noOfStudents: 9, },
    { percentile: 70, noOfStudents: 5, },
    { percentile: 80, noOfStudents: 8, },
    { percentile: 90, noOfStudents: 2, },
    { percentile: 100, noOfStudents: 8, },
];

const Graph = () => {
    const { percentile} = useScore();
    return (
        <LineChart width={600} height={250} data={data}>
            <Line type="monotone" dataKey="noOfStudents" stroke="#8884d8" />
            <XAxis dataKey="percentile" padding={{ left: 30, right: 30 }}
                type="number"
                domain={[0, 100]}
                ticks={[0, 25, 50, 75, 100]}
            />
            <ReferenceLine x={percentile} label="Your percentile" />
            <Tooltip />
        </LineChart>
    );
}

export default Graph;
