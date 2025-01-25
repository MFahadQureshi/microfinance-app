import React from "react";

export const LoginPage = () => (
  <div className="min-h-screen w-full bg-gradient-to-r from-purple-500 to-blue-500 flex items-center justify-center py-12 px-8">
    <div className="max-w-md w-full bg-white rounded-lg shadow-xl p-8">
      <h2 className="text-3xl font-extrabold text-center text-gray-800">User Login</h2>

      <form className="mt-6 space-y-6">
        <div className="space-y-2">
          <label htmlFor="cnic" className="block text-sm font-medium text-gray-700">CNIC</label>
          <input id="cnic" type="text" className="w-full border-gray-300 rounded-lg p-3 bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500" />
        </div>

        <div className="space-y-2">
          <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
          <input id="email" type="email" className="w-full border-gray-300 rounded-lg p-3 bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500" />
        </div>

        <div className="space-y-2">
          <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
          <input id="password" type="password" className="w-full border-gray-300 rounded-lg p-3 bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500" />
        </div>

        <button type="submit" className="w-full bg-blue-600 text-white py-3 px-6 rounded-full hover:bg-blue-700 transition-colors duration-300 focus:outline-none focus:ring-4 focus:ring-blue-300 focus:ring-opacity-50">
          Login
        </button>
      </form>
    </div>
  </div>
);
