import React from 'react'
import { FaBars, FaSearch, FaEnvelope, FaInbox } from 'react-icons/fa';

const NavSideBar = () => {
  return (
    <div>
     <nav className="bg-gradient-to-r from-blue-500 to-blue-700 p-4 shadow-md">
        <div className="container mx-auto flex items-center justify-between">
          <div className="flex items-center">
            <button className="mr-4 focus:outline-none">
              <FaBars className="h-6 w-6 text-white" />
            </button>
            <h2 className="font-medium text-xl text-white">Mail</h2>
          </div>
          <div className="flex justify-center items-center flex-grow">
            <div className="w-full max-w-lg relative">
              <input
                type="text"
                placeholder="Search"
                className="p-2 pl-8 w-full bg-blue-400 rounded-lg text-white placeholder-white focus:outline-none"
              />
              <FaSearch className="absolute left-2 top-2 text-white" />
            </div>
          </div>
          <div className="flex items-center">
            <button className="mr-4 focus:outline-none">
              <FaEnvelope className="h-8 w-8 text-white" />
            </button>
          </div>
        </div>
      </nav>
      </div>
      
  );
};

export default NavSideBar;