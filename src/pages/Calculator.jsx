import React from "react";

export const CalculatorPage = () => (
  <div className="min-h-screen w-full bg-gradient-to-r from-purple-500 to-blue-500 py-12 px-8">
    <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-xl p-8">
      <h2 className="text-3xl font-extrabold text-center text-gray-800">Loan Calculator</h2>
      
      <form className="mt-8 space-y-6">
        <div className="space-y-2">
          <label htmlFor="category" className="block text-sm font-medium text-gray-700">Category</label>
          <select id="category" className="w-full border-gray-300 rounded-lg p-3 bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500">
            <option>Wedding Loans</option>
            <option>Home Construction Loans</option>
            <option>Business Startup Loans</option>
            <option>Education Loans</option>
          </select>
        </div>
        
        <div className="space-y-2">
          <label htmlFor="subcategory" className="block text-sm font-medium text-gray-700">Subcategory</label>
          <input id="subcategory" type="text" className="w-full border-gray-300 rounded-lg p-3 bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500" />
        </div>

        <div className="space-y-2">
          <label htmlFor="deposit" className="block text-sm font-medium text-gray-700">Initial Deposit</label>
          <input id="deposit" type="number" className="w-full border-gray-300 rounded-lg p-3 bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500" />
        </div>

        <div className="space-y-2">
          <label htmlFor="period" className="block text-sm font-medium text-gray-700">Loan Period</label>
          <select id="period" className="w-full border-gray-300 rounded-lg p-3 bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500">
            <option>3 years</option>
            <option>4 years</option>
            <option>5 years</option>
          </select>
        </div>

        <button type="submit" className="w-full bg-blue-600 text-white py-3 px-6 rounded-full hover:bg-blue-700 transition-colors duration-300 focus:outline-none focus:ring-4 focus:ring-blue-300 focus:ring-opacity-50">
          Calculate
        </button>
      </form>
    </div>
  </div>
);
