import React from 'react';
import { Link } from 'react-router-dom';

export const LandingPage = () => (
  <div className="min-h-screen w-full bg-gradient-to-r from-purple-500 to-blue-500">
    {/* Navbar */}
    <nav className="fixed top-0 left-0 w-full bg-white shadow-md z-10">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link to="/" className="text-2xl font-bold text-blue-600">Saylani Microfinance</Link>
        <ul className="hidden md:flex space-x-8 text-lg">
          <li><Link to="/" className="hover:text-blue-600 transition-all">Home</Link></li>
          <li><Link to="#services" className="hover:text-blue-600 transition-all">Services</Link></li>
          <li><Link to="#about" className="hover:text-blue-600 transition-all">About Us</Link></li>
          <li><Link to="#contact" className="hover:text-blue-600 transition-all">Contact</Link></li>
          <li><Link to="/login" className="bg-blue-600 text-white py-2 px-6 rounded-full hover:bg-blue-700 transition-all">Apply Now</Link></li>
        </ul>
        {/* Mobile Menu Icon */}
        <div className="md:hidden">
          <button className="text-blue-600" id="mobile-menu-button">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
          </button>
        </div>
      </div>
    </nav>

    <div id="home" className="flex flex-col items-center justify-between min-h-full py-8 px-8 w-full bg-cover bg-center" style={{ backgroundImage: 'url("https://source.unsplash.com/1600x900/?finance")' }}>
      {/* Hero Section */}
      <section className="text-center text-white mb-12 z-10 relative">
        <h1 className="text-5xl font-extrabold leading-tight mb-4 text-shadow-lg">
          Welcome to Saylani Microfinance
        </h1>
        <p className="text-xl mb-6 max-w-2xl mx-auto">
          Empowering you to take the next step with flexible loans for education, weddings, businesses, and more.
        </p>
        <button className="bg-white text-blue-600 py-3 px-8 rounded-full text-lg font-semibold shadow-xl hover:shadow-2xl transform transition-all duration-300 ease-in-out">
          Get Started
        </button>
      </section>

      {/* Loan Categories */}
      <div id="services" className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 w-full">
        <div className="p-6 bg-white rounded-lg shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300 ease-in-out w-full">
          <h2 className="text-2xl font-bold text-blue-600">Wedding Loans</h2>
          <ul className="mt-2 list-disc list-inside text-gray-700">
            <li>Valima</li>
            <li>Furniture</li>
            <li>Valima Food</li>
            <li>Jahez</li>
          </ul>
          <p className="mt-2 text-sm text-gray-600">Maximum Loan: PKR 5 Lakh</p>
          <p className="text-sm text-gray-600">Loan Period: 3 years</p>
          <button className="mt-4 w-full bg-blue-600 text-white py-2 rounded-full hover:bg-blue-700 transition-colors duration-200">
            Proceed
          </button>
        </div>

        <div className="p-6 bg-white rounded-lg shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300 ease-in-out w-full">
          <h2 className="text-2xl font-bold text-blue-600">Home Construction Loans</h2>
          <ul className="mt-2 list-disc list-inside text-gray-700">
            <li>Structure</li>
            <li>Finishing</li>
            <li>Loan</li>
          </ul>
          <p className="mt-2 text-sm text-gray-600">Maximum Loan: PKR 10 Lakh</p>
          <p className="text-sm text-gray-600">Loan Period: 5 years</p>
          <button className="mt-4 w-full bg-blue-600 text-white py-2 rounded-full hover:bg-blue-700 transition-colors duration-200">
            Proceed
          </button>
        </div>

        <div className="p-6 bg-white rounded-lg shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300 ease-in-out w-full">
          <h2 className="text-2xl font-bold text-blue-600">Business Startup Loans</h2>
          <ul className="mt-2 list-disc list-inside text-gray-700">
            <li>Buy Stall</li>
            <li>Advance Rent for Shop</li>
            <li>Shop Assets</li>
            <li>Shop Machinery</li>
          </ul>
          <p className="mt-2 text-sm text-gray-600">Maximum Loan: PKR 10 Lakh</p>
          <p className="text-sm text-gray-600">Loan Period: 5 years</p>
          <button className="mt-4 w-full bg-blue-600 text-white py-2 rounded-full hover:bg-blue-700 transition-colors duration-200">
            Proceed
          </button>
        </div>

        <div className="p-6 bg-white rounded-lg shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300 ease-in-out w-full">
          <h2 className="text-2xl font-bold text-blue-600">Education Loans</h2>
          <ul className="mt-2 list-disc list-inside text-gray-700">
            <li>University Fees</li>
            <li>Child Fees Loan</li>
          </ul>
          <p className="mt-2 text-sm text-gray-600">Maximum Loan: Based on requirement</p>
          <p className="text-sm text-gray-600">Loan Period: 4 years</p>
          <button className="mt-4 w-full bg-blue-600 text-white py-2 rounded-full hover:bg-blue-700 transition-colors duration-200">
            Proceed
          </button>
        </div>
      </div>
    </div>

    {/* About Us Section */}
    <div id="about" className="py-16 bg-white text-center">
      <h2 className="text-3xl font-bold text-blue-600 mb-4">About Us</h2>
      <p className="text-lg text-gray-700 mx-auto max-w-3xl">
        We are committed to providing financial solutions to underserved communities, ensuring that everyone has the opportunity to pursue their goals. Our loans are designed to empower individuals and families across Pakistan.
      </p>
    </div>

    {/* Contact Section */}
    <div id="contact" className="py-16 bg-gray-100 text-center">
      <h2 className="text-3xl font-bold text-blue-600 mb-4">Contact Us</h2>
      <p className="text-lg text-gray-700 mx-auto max-w-3xl">
        Have any questions? Feel free to reach out to us. We're here to help.
      </p>
      <form className="mt-6 max-w-2xl mx-auto">
        <input type="email" className="w-full p-3 rounded-lg border border-gray-300 mb-4" placeholder="Your Email" />
        <textarea className="w-full p-3 rounded-lg border border-gray-300 mb-4" placeholder="Your Message" rows="4"></textarea>
        <button className="w-full bg-blue-600 text-white py-3 px-6 rounded-full hover:bg-blue-700 transition-all">Send Message</button>
      </form>
    </div>

    {/* Footer */}
    <footer className="bg-blue-600 py-8 text-center text-white w-full mt-auto">
      <div className="container mx-auto">
        <p className="text-lg font-semibold">Saylani Microfinance</p>
        <p className="text-sm">Empowering communities with accessible financial solutions</p>
        <div className="mt-4 flex justify-center space-x-6">
          <Link to="#terms" className="hover:underline">Terms & Conditions</Link>
          <Link to="#privacy" className="hover:underline">Privacy Policy</Link>
          <Link to="#contact" className="hover:underline">Contact Us</Link>
        </div>
        <p className="mt-6 text-sm">© 2025 Saylani Microfinance. All Rights Reserved.</p>
      </div>
    </footer>
  </div>
);
