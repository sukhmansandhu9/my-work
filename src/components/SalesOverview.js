import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Progress,
} from "recharts";

const salesOverviewData = {
  salesAmount: 95000,
};

const orderVisitsData = {
  orders: 1200,
  previousOrders: 1000,
  visits: 1800,
  previousVisits: 1500,
};

const Dashboard = () => {
  const orderPercentage =
    ((orderVisitsData.orders - orderVisitsData.previousOrders) /
      orderVisitsData.previousOrders) *
    100;
  const visitPercentage =
    ((orderVisitsData.visits - orderVisitsData.previousVisits) /
      orderVisitsData.previousVisits) *
    100;

  return (
    <div className="p-4">
      <div className="p-4 shadow-md rounded-lg bg-white mb-4">
        <h2 className="text-2xl font-semibold mb-2">Sales Overview</h2>
        <p className="text-xl">${salesOverviewData.salesAmount}</p>
      </div>
      <div className="p-4 shadow-md rounded-lg bg-white mb-4">
        <h2 className="text-2xl font-semibold mb-4">Order vs Visits</h2>
        <div className="flex items-center space-x-4">
          <div className="w-1/2">
            <p className="text-xl">Order %</p>
            <p
              className={`text-lg ${
                orderPercentage > 0 ? "text-green-500" : "text-red-500"
              }`}
            >
              {orderPercentage > 0 ? "+" : "-"}
              {Math.abs(orderPercentage).toFixed(2)}%
            </p>
            <p className="text-base">{orderVisitsData.orders} orders</p>
          </div>
          <div className="w-1/2">
            <p className="text-xl">Visit %</p>
            <p
              className={`text-lg ${
                visitPercentage > 0 ? "text-green-500" : "text-red-500"
              }`}
            >
              {visitPercentage > 0 ? "+" : "-"}
              {Math.abs(visitPercentage).toFixed(2)}%
            </p>
            <p className="text-base">{orderVisitsData.visits} visits</p>
          </div>
        </div>
        <ResponsiveContainer width="100%" height={100}>
          <BarChart
            data={[
              { type: "Order %", value: Math.abs(orderPercentage) },
              { type: "Visit %", value: Math.abs(visitPercentage) },
            ]}
          >
            <XAxis dataKey="type" hide />
            <YAxis />
            <CartesianGrid strokeDasharray="3 3" />
            <Tooltip />
            <Bar dataKey="value" fill="#8884d8" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default Dashboard;
