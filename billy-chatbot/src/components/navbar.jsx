import React from 'react';

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center p-4 bg-[#d1e0f0] shadow">
      <div className="flex items-center">
        <img src="/billy.jpg" alt="Logo" className="h-16 w-16 rounded-full" />
      </div>
      <div className="space-x-9">
        <button className="bg-black text-white rounded-full px-4 py-2 transform transition-transform duration-300 hover:scale-110 hover:bg-purple-700">
          Statistics
        </button>
        <button className="bg-black text-white rounded-full px-4 py-2 transform transition-transform duration-300 hover:scale-110 hover:bg-purple-700">
          Education
        </button>
        <button className="bg-black text-white rounded-full px-4 py-2 transform transition-transform duration-300 hover:scale-110 hover:bg-purple-700">
          Community
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
