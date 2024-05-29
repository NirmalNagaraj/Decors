import { useState } from 'react';
import React from 'react';
import Moon from '../assets/Raja_Decors_logo 1.png';
import MobileMenu from './MobileMenu';
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation(); // Get the current path

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const getLinkClassName = (path) => {
    return location.pathname === path 
      ? "text-[#FD8901] font-semibold scale-125 transition duration-500 md:mx-0 cursor-pointer"
      : "hover:text-[#FD8901] font-semibold hover:scale-125 transition duration-500 md:mx-0 cursor-pointer";
  };

  return (
    <div>
      <div className="relative flex justify-between px-5 md:py-5 md:px-10">
        <div className="flex items-center">
          <img className="absolute" src={Moon} height={100} width={100} alt="moon" />
        </div>
        <div className="flex my-5 items-center md:hidden">
          <button
            className="text-black text-2xl focus:outline-none"
            onClick={toggleMobileMenu}
          >
            &#9776; {/* Hamburger icon */}
          </button>
        </div>
        <nav className="hidden items-center text-xl md:flex md:items-center md:gap-32">
          <Link to="/" className={getLinkClassName("/")}>
            Home
          </Link>
          <Link to="/services" className={getLinkClassName("/services")}>
            Services
          </Link>
          <Link to="/gallery" className={getLinkClassName("/gallery")}>
            Gallery
          </Link>
          <Link to="/about" className={getLinkClassName("/about")}>
            About us
          </Link>
          <Link to="/contact" className={getLinkClassName("/contact")}>
            Contact
          </Link>
        </nav>
      </div>
      <MobileMenu isOpen={isMobileMenuOpen} onClose={toggleMobileMenu} />
    </div>
  );
};

export default Navbar;
