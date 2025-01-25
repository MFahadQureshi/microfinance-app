import React from "react";

export const Dashboard = () => {
  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-200 to-purple-300 py-12 px-8">
      <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-xl p-8">
        <h1 className="text-4xl font-extrabold text-gray-800 mb-6">Admin Dashboard</h1>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-700 mb-4">Application Management</h2>
          <p className="text-lg text-gray-600">View and manage all submitted applications.</p>
          <div className="mt-6 space-y-4">
            <div className="space-y-1">
              <label htmlFor="filter-city" className="block text-sm font-medium text-gray-700">Filter by City</label>
              <input
                id="filter-city"
                type="text"
                className="w-full border-2 border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter city"
              />
            </div>
            <div className="space-y-1">
              <label htmlFor="filter-country" className="block text-sm font-medium text-gray-700">Filter by Country</label>
              <input
                id="filter-country"
                type="text"
                className="w-full border-2 border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter country"
              />
            </div>
          </div>
          <button className="mt-6 bg-blue-600 text-white py-2 px-6 rounded-lg hover:bg-blue-700 transition duration-200 ease-in-out">
            Apply Filters
          </button>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-700 mb-4">Loan Details</h2>
          <p className="text-lg text-gray-600">View detailed information about loans, including category, subcategory, and guarantor details.</p>
          <div className="mt-6 p-6 bg-white shadow-lg rounded-lg space-y-4">
            <h3 className="text-xl font-bold text-blue-600">Loan #12345</h3>
            <p className="text-lg text-gray-700">Category: <span className="font-medium">Business Startup Loans</span></p>
            <p className="text-lg text-gray-700">Subcategory: <span className="font-medium">Shop Assets</span></p>
            <p className="text-lg text-gray-700">Guarantor 1: <span className="font-medium">John Doe</span></p>
            <p className="text-lg text-gray-700">Guarantor 2: <span className="font-medium">Jane Smith</span></p>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-gray-700 mb-4">Appointment Scheduling</h2>
          <p className="text-lg text-gray-600">Automatically schedule user appointments based on available slots.</p>
          <div className="mt-6 space-y-4">
            <div className="space-y-1">
              <label htmlFor="appointment-date" className="block text-sm font-medium text-gray-700">Appointment Date</label>
              <input
                id="appointment-date"
                type="date"
                className="w-full border-2 border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div className="space-y-1">
              <label htmlFor="appointment-time" className="block text-sm font-medium text-gray-700">Appointment Time</label>
              <input
                id="appointment-time"
                type="time"
                className="w-full border-2 border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>
          <button className="mt-6 bg-blue-600 text-white py-2 px-6 rounded-lg hover:bg-blue-700 transition duration-200 ease-in-out">
            Schedule Appointment
          </button>
        </section>
      </div>
    </div>
  );
};
