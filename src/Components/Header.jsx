import React, { useState } from 'react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-white py-2">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center">
          <img src="Logo.png" alt="Logo" className="h-8 w-auto mr-4" />
        </div>

        {/* Responsive Menu */}
        <div className="md:hidden">
          {/* Hamburger Icon */}
          <button onClick={toggleMenu}>
            <svg
              className="w-6 h-6 text-gray-800"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}
              />
            </svg>
          </button>

          {/* Menu Items */}
          {isMenuOpen && (
            <nav className="absolute top-8 right-0 mt-12 mr-4 bg-white border rounded-md shadow-lg">
              <ul className="flex flex-col p-4 space-y-2">
                <li>
                  <a href="#" className="text-gray-800">Home</a>
                </li>
                <li>
                  <a href="#" className="text-gray-800">FlashCard</a>
                </li>
                <li>
                  <a href="#" className="text-gray-800">Contact</a>
                </li>
                <li>
                  <a href="#" className="text-gray-800">FAQ</a>
                </li>
                <li>
                  <a href="#" className="bg-gradient-to-br from-blue-900 to-blue-500 text-white px-6 py-2 rounded-full">Login</a>
                </li>
              </ul>
            </nav>
          )}
        </div>

        {/* Tabs */}
        <nav className="hidden md:flex items-center space-x-6">
          <a href="#" className="text-gray-800">Home</a>
          <a href="#" className="text-gray-800">FlashCard</a>
          <a href="#" className="text-gray-800">Contact</a>
          <a href="#" className="text-gray-800">FAQ</a>
          <a href="#" className="bg-gradient-to-br from-blue-900 to-blue-500 text-white px-6 py-2 rounded-full">Login</a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
