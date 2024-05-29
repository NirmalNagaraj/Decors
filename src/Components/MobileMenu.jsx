import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

const MobileMenu = ({ isOpen, onClose }) => {
  const location = useLocation();

  const getLinkClassName = (path) => {
    return location.pathname === path 
      ? "text-[#FD8901] font-semibold scale-125 transition duration-500 md:mx-0 cursor-pointer"
      : "hover:text-[#FD8901] font-semibold hover:scale-125 transition duration-500 md:mx-0 cursor-pointer";
  };

  return (
    <div
      className={`fixed top-0 left-0 w-full h-1/2 bg-white transition-transform transform duration-500 ${
        isOpen ? 'translate-y-0' : '-translate-y-full'
      }`}
      style={{ zIndex: 1000 }}
    >
      <div className="flex justify-end p-4">
        <button onClick={onClose} className="text-black text-2xl">
          &times;
        </button>
      </div>
      <nav className="flex flex-col items-center text-xl mt-8 space-y-4">
        <a href="/" className={getLinkClassName("/")} onClick={onClose}>
          Home
        </a>
        <a href="/services" className={getLinkClassName("/services")} onClick={onClose}>
          Services
        </a>
        <a href="/gallery" className={getLinkClassName("/gallery")} onClick={onClose}>
          Gallery
        </a>
        <a href="/about" className={getLinkClassName("/about")} onClick={onClose}>
          About us
        </a>
        <a href="/contact" className={getLinkClassName("/contact")} onClick={onClose}>
          Contact
        </a>
      </nav>
    </div>
  );
};

export default MobileMenu;