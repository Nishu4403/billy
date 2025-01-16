// components/Navbar.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center p-4 bg-[#d1e0f0] shadow">
      <div className="flex items-center">
        <img src="/billy.jpg" alt="Logo" className="h-16 w-16 rounded-full" />
      </div>

      <div className="space-x-11">

        <Link to="/">
          <button className="bg-black text-white rounded-full px-4 py-2 transform transition-transform duration-300 hover:scale-110 hover:bg-purple-700">
            Home
          </button>
        </Link>
        
        <Link to="/education">
          <button className="bg-black text-white rounded-full px-4 py-2 transform transition-transform duration-300 hover:scale-110 hover:bg-purple-700">
            Awareness
          </button>
        </Link>

        <Link to="/prevention">
          <button className="bg-black text-white rounded-full px-4 py-2 transform transition-transform duration-300 hover:scale-110 hover:bg-purple-700">
            Prevention
          </button>
        </Link>

        <Link to="/map">
          <button className="bg-black text-white rounded-full px-4 py-2 transform transition-transform duration-300 hover:scale-110 hover:bg-purple-700">
            Statistics
          </button>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
