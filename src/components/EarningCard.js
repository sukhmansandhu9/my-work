import "../style/EarningCardStyle.css";
import React from "react";
import BarGraph from "./BarGraph";

const EarningCard = () => {
  const weeklyData = {
    labels: ["Week 1", "Week 2", "Week 3", "Week 4"],
    values: [1200, 1800, 1500, 2000],
  };

  const earning = 5500;
  const profit = 3000;
  const expense = 2500;

  return (
    <div className="earning-card">
      <h2>Weekly Earning</h2>
      <div className="graph-container">
        <BarGraph data={weeklyData} />
      </div>
      <div className="sections">
        <div className="section">
          <h3>Earning</h3>
          <p>${earning}</p>
        </div>
        <div className="section">
          <h3>Profit</h3>
          <p>${profit}</p>
        </div>
        <div className="section">
          <h3>Expense</h3>
          <p>${expense}</p>
        </div>
      </div>
    </div>
  );
};

export default EarningCard;
