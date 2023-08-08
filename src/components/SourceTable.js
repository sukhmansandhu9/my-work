import React from "react";

const randomSources = [
  "Organic Search",
  "Social Media",
  "Referral Traffic",
  "Paid Search",
  "Direct Traffic",
  "Email Marketing",
];

const getRandomVisits = () => Math.floor(Math.random() * 300) + 50;

const generateRandomData = () =>
  randomSources.map((source) => ({ name: source, visits: getRandomVisits() }));

const Table = () => {
  return (
    <div className="p-4 shadow-md rounded-lg bg-white">
      <h2 className="text-2xl font-semibold mb-4">Traffic Source</h2>
      <table className="w-full border-collapse">
        <tbody className="divide-y divide-gray-200">
          {generateRandomData().map((item, index) => {
            const randomVisits = getRandomVisits();
            const increase = randomVisits - item.visits > 0;

            return (
              <tr key={index} className="hover:bg-gray-100">
                <td className="px-4 py-3">{item.name}</td>
                <td className="px-4 py-3">{randomVisits}</td>
                <td
                  className={`px-4 py-3 ${
                    increase ? "text-green-500" : "text-red-500"
                  }`}
                >
                  {increase
                    ? `+${randomVisits - item.visits}`
                    : `-${item.visits - randomVisits}`}
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
