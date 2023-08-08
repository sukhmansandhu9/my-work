import React from "react";

const campaignData = [
  { metric: "Email", count: 12000, previousCount: 10500, icon: "📧" },
  { metric: "Opened", count: 9800, previousCount: 9000, icon: "👀" },
  { metric: "Clicked", count: 7500, previousCount: 6800, icon: "🔗" },
  { metric: "Subscribed", count: 5200, previousCount: 4800, icon: "✅" },
  { metric: "Complaints", count: 180, previousCount: 150, icon: "🚫" },
  { metric: "Unsubscribed", count: 320, previousCount: 280, icon: "🔕" },
];

const Table = () => {
  return (
    <div className="p-4 shadow-md rounded-lg bg-white">
      <h2 className="text-2xl font-semibold mb-4">Monthly Campaign Stats</h2>
      <table className="w-full border-collapse">
        <tbody className="divide-y divide-gray-200">
          {campaignData.map((campaign, index) => {
            const increase = campaign.count - campaign.previousCount > 0;
            const percentageChange =
              ((campaign.count - campaign.previousCount) /
                campaign.previousCount) *
              100;

            return (
              <tr key={index} className="hover:bg-gray-100">
                <td className="px-4 py-3">
                  <span className="text-2xl">{campaign.icon}</span>
                </td>
                <td className="px-4 py-3">{campaign.metric}</td>
                <td className="px-4 py-3">{campaign.count}</td>
                <td
                  className={`px-4 py-3 ${
                    increase ? "text-green-500" : "text-red-500"
                  }`}
                >
                  {increase
                    ? `+${percentageChange.toFixed(2)}%`
                    : `-${percentageChange.toFixed(2)}%`}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
