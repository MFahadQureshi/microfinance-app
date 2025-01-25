import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { LandingPage } from "./pages/langingpage";
import { CalculatorPage } from "./pages/Calculator";
import { LoginPage } from "./pages/LoginPage";
import { LoanRequestForm } from "./pages/LoanRequestForm";
import { Dashboard } from "./pages/Dashboard";

const App = () => {
  return (
    <Router>
      <div className="min-h-screen bg-gray-100">
        <nav className="bg-blue-500 p-4 text-white">
          <ul className="flex space-x-4">
            <li>
              <Link to="/" className="hover:underline">Landing</Link>
            </li>
            <li>
              <Link to="/calculator" className="hover:underline">Calculator</Link>
            </li>
            <li>
              <Link to="/login" className="hover:underline">Login</Link>
            </li>
            <li>
              <Link to="/loan-request" className="hover:underline">Loan Request</Link>
            </li>
            <li>
              <Link to="/dashboard" className="hover:underline">Dashboard</Link>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/calculator" element={<CalculatorPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/loan-request" element={<LoanRequestForm />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
