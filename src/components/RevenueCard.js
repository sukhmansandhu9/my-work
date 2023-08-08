import React from "react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const revenueData = [
  { month: "Jan", revenue: 15000 },
  { month: "Feb", revenue: 18000 },
  { month: "Mar", revenue: 19000 },
  { month: "Apr", revenue: 14000 },
  { month: "May", revenue: 17000 },
  { month: "Jun", revenue: 21000 },
];

const Dashboard = () => {
  return (
    <div className="p-4">
      <div className="p-4 shadow-md rounded-lg bg-white mb-4">
        <h2 className="text-2xl font-semibold mb-2">Revenue</h2>
        <p className="text-xl">
          ${revenueData[revenueData.length - 1].revenue}
        </p>
      </div>
      <div className="p-4 shadow-md rounded-lg bg-white">
        <h2 className="text-2xl font-semibold mb-4">Revenue Over Time</h2>
        <ResponsiveContainer width="100%" height={300}>
          <AreaChart data={revenueData}>
            <XAxis dataKey="month" />
            <YAxis />
            <CartesianGrid strokeDasharray="3 3" />
            <Tooltip />
            <Area
              type="monotone"
              dataKey="revenue"
              stroke="#8884d8"
              fill="#8884d8"
              fillOpacity={0.3}
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default Dashboard;
