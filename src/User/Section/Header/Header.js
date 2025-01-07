import React, { useState, useEffect, useRef } from "react";
import { NavLink } from "react-router-dom";
import logo from "../../../Assets/Logo.svg";
import menuIcon from "../../../Assets/menuIcon.svg";
import closeIcon from "../../../Assets/close.svg"; // Add close icon for side menu

function Header() {
  const [isSideMenuOpen, setIsSideMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isHeaderVisible, setIsHeaderVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const dropdownRef = useRef(null);

  // Toggle side menu (mobile)
  const toggleSideMenu = () => {
    setIsSideMenuOpen(!isSideMenuOpen);
  };

  useEffect(() => {
    // Close dropdown when clicking outside
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

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > lastScrollY && currentScrollY > 50) {
        setIsHeaderVisible(false); // Hide header on scroll down
      } else {
        setIsHeaderVisible(true); // Show header on scroll up
      }
      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]);

  return (
    <div
      className={`flex items-center fixed z-50 h-[118px] md:px-[62px] px-4 py-2 w-full bg-white transition-transform duration-300 ${
        isHeaderVisible ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      {/* Mobile Menu Icon */}
      <div className="md:hidden block w-fit">
        <img className="w-fit" src={menuIcon} alt="Menu" onClick={toggleSideMenu} />
      </div>

      {/* Logo */}
      <div className="flex-1 flex md:justify-start justify-end">
        <NavLink to="/">
          <img
            src={logo}
            className="md:w-[241px] md:h-[51px] w-[182px] h-[41px]"
            alt="Logo"
          />
        </NavLink>
      </div>

      {/* Navigation Links (Desktop) */}
      <div className="hidden md:flex flex-1 justify-end md:px-[28px]">
        <ul className="flex gap-8 text-[16px] font-medium text-[#5F5F5F]">
          {["Home", "About", "Services", "Projects", "Blogs", "Contact"].map((item) => (
            <li
              key={item}
              className="hover:text-[#C39F33] hover:font-medium hover:underline"
            >
              <NavLink
                to={`/${item.toLowerCase()}`}
                className={({ isActive }) =>
                  isActive ? "text-[#C39F33] font-medium" : ""
                }
              >
                {item}
              </NavLink>
            </li>
          ))}
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
              {["Home", "About", "Services", "Projects", "Blogs", "Contact"].map(
                (item) => (
                  <li key={item} className="hover:text-[#C39F33]">
                    <NavLink
                      to={`/${item.toLowerCase()}`}
                      onClick={() => {
                        toggleSideMenu();
                        window.scrollTo({ top: 0, behavior: "smooth" });
                      }}
                    >
                      {item}
                    </NavLink>
                  </li>
                )
              )}
            </ul>
          </div>
        </div>
      )}
    </div>
  );
}

export default Header;
