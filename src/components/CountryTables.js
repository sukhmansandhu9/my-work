import React from "react";

const countryData = [
  { name: "USA", sales: 120000, previousSales: 105000, flag: "🇺🇸" },
  { name: "Canada", sales: 80000, previousSales: 75000, flag: "🇨🇦" },
  { name: "UK", sales: 95000, previousSales: 98000, flag: "🇬🇧" },
  { name: "Australia", sales: 72000, previousSales: 68000, flag: "🇦🇺" },
  { name: "Germany", sales: 85000, previousSales: 82000, flag: "🇩🇪" },
  { name: "France", sales: 78000, previousSales: 79000, flag: "🇫🇷" },
];

const Table = () => {
  return (
    <div className="p-4 shadow-md rounded-lg bg-white">
      <h2 className="text-2xl font-semibold mb-4">Sales by Countries</h2>
      <table className="w-full border-collapse">
        <tbody className="divide-y divide-gray-200">
          {countryData.map((country, index) => {
            const increase = country.sales - country.previousSales > 0;
            const percentageChange =
              ((country.sales - country.previousSales) /
                country.previousSales) *
              100;

            return (
              <tr key={index} className="hover:bg-gray-100">
                <td className="px-4 py-3">
                  <span className="text-2xl">{country.flag}</span>
                </td>
                <td className="px-4 py-3">{country.name}</td>
                <td className="px-4 py-3">{country.sales}</td>
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
