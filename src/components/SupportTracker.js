import "../style/SupportTrackerStyle.css";
import React from "react";
import { ResponsiveContainer, RadialBarChart, RadialBar } from "recharts";

const SupportTracker = () => {
  const completionPercentage = 85;

  const completionData = [
    {
      name: "Completion",
      value: completionPercentage,
      fill: "#00b300",
    },
  ];

  const ticketData = [
    { name: "Total Tickets", value: 150 },
    { name: "New Tickets", value: 30 },
    { name: "Open Tickets", value: 80 },
  ];

  return (
    <div className="support-tracker">
      <h2 className="tracker-header">Support Tracker</h2>
      <div className="sectionDiv">
        <div className="chart completion-chart">
          <ResponsiveContainer width="100%" aspect={1}>
            <RadialBarChart
              cx="50%"
              cy="50%"
              innerRadius="50%"
              outerRadius="80%"
              data={completionData}
              startAngle={0}
              endAngle={306}
            >
              <RadialBar
                minAngle={15}
                label={{ position: "insideStart", fill: "#000" }}
                background
                clockWise
                dataKey="value"
              />
            </RadialBarChart>
          </ResponsiveContainer>
        </div>
        <div className="tracker-data">
          {ticketData.map((item, index) => (
            <div className="tracker-item" key={index}>
              <h3>{item.name}</h3>
              <p>{item.value}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SupportTracker;
