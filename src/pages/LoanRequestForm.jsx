import React from "react";

export const LoanRequestForm = () => (
  <div className="min-h-screen w-full bg-gradient-to-r from-green-400 to-blue-500 flex items-center justify-center py-12 px-8">
    <div className="max-w-lg w-full bg-white rounded-lg shadow-2xl p-8">
      <h2 className="text-3xl font-extrabold text-center text-gray-800">Loan Request Form</h2>

      <form className="mt-6 space-y-6">
        <div className="space-y-2">
          <label htmlFor="guarantor1" className="block text-sm font-medium text-gray-700">Guarantor 1 Name</label>
          <input id="guarantor1" type="text" className="w-full border-gray-300 rounded-lg p-3 bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500" />
        </div>

        <div className="space-y-2">
          <label htmlFor="guarantor2" className="block text-sm font-medium text-gray-700">Guarantor 2 Name</label>
          <input id="guarantor2" type="text" className="w-full border-gray-300 rounded-lg p-3 bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500" />
        </div>

        <div className="space-y-2">
          <label htmlFor="statement" className="block text-sm font-medium text-gray-700">Statement</label>
          <textarea id="statement" className="w-full border-gray-300 rounded-lg p-3 bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500"></textarea>
        </div>

        <div className="space-y-2">
          <label htmlFor="address" className="block text-sm font-medium text-gray-700">Address</label>
          <input id="address" type="text" className="w-full border-gray-300 rounded-lg p-3 bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500" />
        </div>

        <button type="submit" className="w-full bg-blue-600 text-white py-3 px-6 rounded-full hover:bg-blue-700 transition-colors duration-300 focus:outline-none focus:ring-4 focus:ring-blue-300 focus:ring-opacity-50">
          Submit
        </button>
      </form>
    </div>
  </div>
);
