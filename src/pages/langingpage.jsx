import React from "react";

export const LandingPage = () => (
  <div className="min-h-screen w-full bg-gradient-to-r from-purple-500 to-blue-500">
    <div className="flex flex-col items-center justify-between min-h-full py-8 px-8 w-full">
      <h1 className="text-4xl font-extrabold text-white text-center">Welcome to Saylani Microfinance</h1>
      <p className="mt-4 text-lg text-white text-center">Explore loan categories and calculate your options.</p>

      <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 w-full">
        <div className="p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 ease-in-out transform hover:scale-105 w-full">
          <h2 className="text-2xl font-bold text-blue-600">Wedding Loans</h2>
          <ul className="mt-2 list-disc list-inside text-gray-700">
            <li>Valima</li>
            <li>Furniture</li>
            <li>Valima Food</li>
            <li>Jahez</li>
          </ul>
          <p className="mt-2 text-sm text-gray-600">Maximum Loan: PKR 5 Lakh</p>
          <p className="text-sm text-gray-600">Loan Period: 3 years</p>
          <button className="mt-4 w-full bg-blue-600 text-white py-2 rounded-full hover:bg-blue-700 transition-colors duration-200">Proceed</button>
        </div>

        <div className="p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 ease-in-out transform hover:scale-105 w-full">
          <h2 className="text-2xl font-bold text-blue-600">Home Construction Loans</h2>
          <ul className="mt-2 list-disc list-inside text-gray-700">
            <li>Structure</li>
            <li>Finishing</li>
            <li>Loan</li>
          </ul>
          <p className="mt-2 text-sm text-gray-600">Maximum Loan: PKR 10 Lakh</p>
          <p className="text-sm text-gray-600">Loan Period: 5 years</p>
          <button className="mt-4 w-full bg-blue-600 text-white py-2 rounded-full hover:bg-blue-700 transition-colors duration-200">Proceed</button>
        </div>

        <div className="p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 ease-in-out transform hover:scale-105 w-full">
          <h2 className="text-2xl font-bold text-blue-600">Business Startup Loans</h2>
          <ul className="mt-2 list-disc list-inside text-gray-700">
            <li>Buy Stall</li>
            <li>Advance Rent for Shop</li>
            <li>Shop Assets</li>
            <li>Shop Machinery</li>
          </ul>
          <p className="mt-2 text-sm text-gray-600">Maximum Loan: PKR 10 Lakh</p>
          <p className="text-sm text-gray-600">Loan Period: 5 years</p>
          <button className="mt-4 w-full bg-blue-600 text-white py-2 rounded-full hover:bg-blue-700 transition-colors duration-200">Proceed</button>
        </div>

        <div className="p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 ease-in-out transform hover:scale-105 w-full">
          <h2 className="text-2xl font-bold text-blue-600">Education Loans</h2>
          <ul className="mt-2 list-disc list-inside text-gray-700">
            <li>University Fees</li>
            <li>Child Fees Loan</li>
          </ul>
          <p className="mt-2 text-sm text-gray-600">Maximum Loan: Based on requirement</p>
          <p className="text-sm text-gray-600">Loan Period: 4 years</p>
          <button className="mt-4 w-full bg-blue-600 text-white py-2 rounded-full hover:bg-blue-700 transition-colors duration-200">Proceed</button>
        </div>
      </div>
    </div>
  </div>
);

