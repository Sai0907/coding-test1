import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <header className="bg-gray-800">
      <nav className="container mx-auto px-6 py-4">
        
          <Link
            className="text-3xl font-bold text-white hover:text-gray-200 text-center "
            to="/"
          >
            <h1>

            Contact Manager
            </h1>
          </Link>
     
      </nav>
    </header>
  );
};

export default Navbar;
