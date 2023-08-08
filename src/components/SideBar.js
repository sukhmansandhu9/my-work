import React, { useState } from "react";

const Sidebar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div
      className={`h-screen bg-gray-800 text-white ${
        isSidebarOpen ? "w-64" : "w-16"
      } transition-all overflow-hidden`}
    >
      <div className="flex flex-col h-full">
        <div className="p-4">
          <button
            className="text-white focus:outline-none"
            onClick={toggleSidebar}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isSidebarOpen ? (
                <path d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
        <div
          className={`flex flex-col space-y-2 px-4 ${
            isSidebarOpen ? "visible" : "hidden"
          } md:visible`}
        >
          <a
            href="#"
            className="text-white hover:bg-gray-700 px-4 py-2 rounded transition"
          >
            Analytics
          </a>
          <a
            href="#"
            className="text-white hover:bg-gray-700 px-4 py-2 rounded transition"
          >
            Sales
          </a>
          <a
            href="#"
            className="text-white hover:bg-gray-700 px-4 py-2 rounded transition"
          >
            Orders
          </a>
          <a
            href="#"
            className="text-white hover:bg-gray-700 px-4 py-2 rounded transition"
          >
            Customers
          </a>
          <a
            href="#"
            className="text-white hover:bg-gray-700 px-4 py-2 rounded transition"
          >
            Products
          </a>
          <a
            href="#"
            className="text-white hover:bg-gray-700 px-4 py-2 rounded transition"
          >
            Settings
          </a>
          <a
            href="#"
            className="text-white hover:bg-gray-700 px-4 py-2 rounded transition"
          >
            Help
          </a>
          <a
            href="#"
            className="text-white hover:bg-gray-700 px-4 py-2 rounded transition"
          >
            Logout
          </a>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
