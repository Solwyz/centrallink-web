import React, { useState, useEffect, useRef } from 'react';
import { NavLink } from "react-router-dom";
import logo from "../../../Assets/Logo.svg";
import menuIcon from "../../../Assets/menuIcon.svg";
import closeIcon from "../../../Assets/close.svg"; // Add close icon for side menu

function Header() {
  const [isSideMenuOpen, setIsSideMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  // Toggle side menu (mobile)
  const toggleSideMenu = () => {
    setIsSideMenuOpen(!isSideMenuOpen);
  };

  

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div className="flex items-center  h-[118px] md:px-[62px] px-4 py-2 w-full bg-white bg-opacity-20 backdrop-blur-xl ">
   
        {/* Mobile Menu Icon */}
        <div className="md:hidden block ">
          <img src={menuIcon} alt="Menu" onClick={toggleSideMenu} />
        </div>
  
        {/* Logo */}
        <div><NavLink to="/">
          <img src={logo} className="md:w-[241px] md:h-[51px] md:ml-0 ml-[154px] w-[182px] h-[41px]" alt="Logo" />
        </NavLink></div>
    

     

      {/* Navigation Links (Desktop) */}
      <div className="hidden md:flex flex-1 justify-end md:px-[28px]">
        <ul className="flex gap-8 text-[14px] font-medium text-[#5F5F5F]">
          <li className="hover:text-[#C39F33] hover:font-bold hover:underline"><NavLink to="/">Home</NavLink></li>
          <li className="hover:text-[#C39F33] hover:font-bold hover:underline"><NavLink to="/about">About</NavLink></li>
          <li className="hover:text-[#C39F33] hover:font-bold hover:underline"><NavLink to="/services">Services</NavLink></li>
          <li className="hover:text-[#C39F33] hover:font-bold hover:underline"><NavLink to="/projects">Projects</NavLink></li>
          <li className="hover:text-[#C39F33] hover:font-bold hover:underline"><NavLink to="/blogs">Blogs</NavLink></li>
          <li className="hover:text-[#C39F33] hover:font-bold hover:underline"><NavLink to="/contact">Contact</NavLink></li>
        </ul>
      </div>

      {/* Side Menu (Mobile) */}
      {isSideMenuOpen && (
        <div className="fixed inset-0 bg-white bg-opacity-50 z-10">
          <div className="fixed left-0 top-0 w-[283px] h-screen bg-white p-5 shadow-lg z-20">
            <div className="flex justify-end items-center mb-4">
              <img src={closeIcon} alt="Close" onClick={toggleSideMenu} className="cursor-pointer" />
            </div>
            <ul className="flex flex-col gap-6 pt-4 font-medium text-[#5F5F5F]">
              <li className=" hover:text-[#C39F33]"><NavLink to="/">Home</NavLink></li>
              <li className=" hover:text-[#C39F33]"><NavLink to="/about">About</NavLink></li>
              <li className=" hover:text-[#C39F33]"><NavLink to="/services">Services</NavLink></li>
              <li className=" hover:text-[#C39F33]"><NavLink to="/projects">Projects</NavLink></li>
              <li className=" hover:text-[#C39F33]"><NavLink to="/blogs">Blogs</NavLink></li>
              <li className=" hover:text-[#C39F33]"><NavLink to="/contact">Contact</NavLink></li>
            </ul>
          </div>
        </div>
      )}
    </div>
  );
}

export default Header;
