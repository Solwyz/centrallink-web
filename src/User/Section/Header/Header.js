import React, { useState, useEffect, useRef } from "react";
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
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="flex items-center fixed z-50 h-[118px] md:px-[62px] px-4 py-2 w-full bg-white  ">
      {/* Mobile Menu Icon */}
      <div className="md:hidden block w-fit ">
        <img className="w-fit" src={menuIcon} alt="Menu" onClick={toggleSideMenu} />
      </div>

      {/* Logo */}
      <div className="flex-1 flex md:justify-start justify-end ">
        <NavLink to="/">
          <img
            src={logo}
            className="md:w-[241px] md:h-[51px]   w-[182px] h-[41px]"
            alt="Logo"
          />
        </NavLink>
      </div>

      {/* Navigation Links (Desktop) */}
      <div className="hidden md:flex flex-1 justify-end md:px-[28px]">
        <ul className="flex gap-8 text-[16px] font-medium text-[#5F5F5F]">
          <li className="hover:text-[#C39F33] hover:font-medium hover:underline ">
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? "text-[#C39F33] font-medium" : ""
              }
            >
              Home
            </NavLink>
          </li>
          <li className="hover:text-[#C39F33] hover:font-medium hover:underline">
            <NavLink
              to="/about"
              className={({ isActive }) =>
                isActive ? "text-[#C39F33] font-medium" : ""
              }
            >
              About
            </NavLink>
          </li>
          <li className="hover:text-[#C39F33] hover:font-medium hover:underline">
            <NavLink
              to="/services"
              className={({ isActive }) =>
                isActive ? "text-[#C39F33] font-medium" : ""
              }
            >
              Services
            </NavLink>
          </li>
          <li className="hover:text-[#C39F33] hover:font-medium hover:underline">
            <NavLink
              to="/projects"
              className={({ isActive }) =>
                isActive ? "text-[#C39F33] font-medium" : ""
              }
            >
              Projects
            </NavLink>
          </li>
          <li className="hover:text-[#C39F33] hover:font-medium hover:underline">
            <NavLink
              to="/blogs"
              className={({ isActive }) =>
                isActive ? "text-[#C39F33] font-medium" : ""
              }
            >
              Blogs
            </NavLink>
          </li>
          <li className="hover:text-[#C39F33] hover:font-medium hover:underline">
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                isActive ? "text-[#C39F33] font-medium" : ""
              }
            >
              Contact
            </NavLink>
          </li>
        </ul>
      </div>

      {/* Side Menu (Mobile) */}
      {isSideMenuOpen && (
        <div className="fixed inset-0 bg-white bg-opacity-50 z-10">
          <div className="fixed left-0 top-0 w-[283px] h-screen bg-white p-5 shadow-lg z-20">
            <div className="flex justify-end items-center mb-4">
              <img
                src={closeIcon}
                alt="Close"
                onClick={toggleSideMenu}
                className="cursor-pointer"
              />
            </div>
            <ul className="flex flex-col gap-6 pt-4 font-medium text-[#5F5F5F]">
              <li className="hover:text-[#C39F33]">
                <NavLink
                  to="/"
                  onClick={() => {
                    toggleSideMenu();
                    window.scrollTo({ top: 0, behavior: "smooth" });
                  }}
                >
                  Home
                </NavLink>
              </li>
              <li className="hover:text-[#C39F33]">
                <NavLink
                  to="/about"
                  onClick={() => {
                    toggleSideMenu();
                    window.scrollTo({ top: 0, behavior: "smooth" });
                  }}
                >
                  About
                </NavLink>
              </li>
              <li className="hover:text-[#C39F33]">
                <NavLink
                  to="/services"
                  onClick={() => {
                    toggleSideMenu();
                    window.scrollTo({ top: 0, behavior: "smooth" });
                  }}
                >
                  Services
                </NavLink>
              </li>
              <li className="hover:text-[#C39F33]">
                <NavLink
                  to="/projects"
                  onClick={() => {
                    toggleSideMenu();
                    window.scrollTo({ top: 0, behavior: "smooth" });
                  }}
                >
                  Projects
                </NavLink>
              </li>
              <li className="hover:text-[#C39F33]">
                <NavLink
                  to="/blogs"
                  onClick={() => {
                    toggleSideMenu();
                    window.scrollTo({ top: 0, behavior: "smooth" });
                  }}
                >
                  Blogs
                </NavLink>
              </li>
              <li className="hover:text-[#C39F33]">
                <NavLink
                  to="/contact"
                  onClick={() => {
                    toggleSideMenu();
                    window.scrollTo({ top: 0, behavior: "smooth" });
                  }}
                >
                  Contact
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      )}
    </div>
  );
}

export default Header;
