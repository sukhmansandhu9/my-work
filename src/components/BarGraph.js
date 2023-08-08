import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";

const BarGraph = () => {
  const data = [
    { name: "Week 1", earnings: 1200 },
    { name: "Week 2", earnings: 1800 },
    { name: "Week 3", earnings: 1500 },
    { name: "Week 4", earnings: 2000 },
  ];

  return (
    <BarChart width={300} height={220} data={data}>
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip />
      <Legend />
      <Bar
        dataKey="earnings"
        fill="rgba(75, 192, 192, 0.6)"
        name="Weekly Earnings"
      />
    </BarChart>
  );
};

export default BarGraph;
