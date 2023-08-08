import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const totalEarningData = {
  totalEarning: 185000,
  previousTotalEarning: 170000,
};

const salesRevenueData = [
  { name: "Jan", sales: 12000, revenue: 15000 },
  { name: "Feb", sales: 14000, revenue: 18000 },
  { name: "Mar", sales: 16000, revenue: 19000 },
  { name: "Apr", sales: 11000, revenue: 14000 },
  { name: "May", sales: 13000, revenue: 17000 },
  { name: "Jun", sales: 17000, revenue: 21000 },
];

const totalSales = salesRevenueData.reduce(
  (total, data) => total + data.sales,
  0
);
const totalRevenue = salesRevenueData.reduce(
  (total, data) => total + data.revenue,
  0
);

const Dashboard = () => {
  return (
    <div className="p-2">
      <div className="p-2 shadow-md rounded-lg bg-white mb-2">
        <h2 className="text-lg font-semibold mb-1">Total Earning</h2>
        <p className="text-base">{totalEarningData.totalEarning}</p>
        <p
          className={`text-sm ${
            totalEarningData.totalEarning >
            totalEarningData.previousTotalEarning
              ? "text-green-500"
              : "text-red-500"
          }`}
        >
          {totalEarningData.totalEarning > totalEarningData.previousTotalEarning
            ? "+"
            : "-"}
          {(
            ((totalEarningData.totalEarning -
              totalEarningData.previousTotalEarning) /
              totalEarningData.previousTotalEarning) *
            100
          ).toFixed(2)}
          %
        </p>
      </div>
      <div className="p-2 shadow-md rounded-lg bg-white mb-2">
        <h2 className="text-lg font-semibold mb-2">Sales vs Revenue</h2>
        <ResponsiveContainer width="100%" height={150}>
          <BarChart data={salesRevenueData}>
            <XAxis dataKey="name" />
            <YAxis />
            <CartesianGrid strokeDasharray="3 3" />
            <Tooltip />
            <Bar dataKey="sales" fill="#8884d8" />
            <Bar dataKey="revenue" fill="#82ca9d" />
          </BarChart>
        </ResponsiveContainer>
      </div>
      <div className="p-2 shadow-md rounded-lg bg-white">
        <h2 className="text-lg font-semibold mb-1">Total Sales and Revenue</h2>
        <p className="text-base">Total Sales: {totalSales}</p>
        <p className="text-base">Total Revenue: {totalRevenue}</p>
      </div>
    </div>
  );
};

export default Dashboard;
