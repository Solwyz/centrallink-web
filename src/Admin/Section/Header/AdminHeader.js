import React, { useContext, useEffect, useRef, useState } from "react";
import { jwtDecode } from "jwt-decode";
import { adminContext } from "../AdminLayout";
import logo from "../../../Assets/Logo.svg";
import notICon from "../../../Assets/Admin/noti.svg";
import people from "../../../Assets/Admin/people.png";
import arrowDown from "../../../Assets/Admin/arrowDown.svg";
import logOut from "../../../Assets/Admin/logoutt.svg";

function AdminHeader() {
  const [isDropdown, setIsDropdown] = useState(false);
  const [isNotiDropdown, setIsNotiDropdown] = useState(false);
  const [username, setUsername] = useState("Admin");

  const { setToken } = useContext(adminContext);

  const dropdownRef = useRef(null);
  const notiDropdownRef = useRef(null);

 

  const handleLogout = () => {
    setToken(null);
    localStorage.removeItem("adminAuthToken");
    window.location.href = "/admin";
  };

  const handleProfileClick = () => {
    setIsDropdown(!isDropdown);
    setIsNotiDropdown(false);
  };

  const handleNotificationClick = () => {
    setIsNotiDropdown(!isNotiDropdown);
    setIsDropdown(false);
  };

  useEffect(() => {
    const token = localStorage.getItem("adminAuthToken");
    if (token) {
      try {
        const decoded = jwtDecode(token);
        console.log("Decoded Token:", decoded); // Check the full token structure
        console.log("Extracted Username:", decoded.username); // See if "superadmin" appears
        setUsername(decoded.username || "Admin");
      } catch (error) {
        console.error("Error decoding token:", error);
      }
    }
  }, []);
  

  return (
    <div className="bg-[#F0F0F0] rounded-[16px] fixed z-50 h-[88px] pl-6 pr-10 py-[26px] flex justify-between items-center min-w-[1160px] ml-[305px] mr-[72px]">
      <div>
        <img src={logo} className="w-[161px] h-[36px]" alt="Logo" />
      </div>
      <div className="flex items-center justify-center relative">
        <div ref={notiDropdownRef}>
          <img
            src={notICon}
            className="h-8 w-8 cursor-pointer"
            onClick={handleNotificationClick}
            alt="Notifications"
          />
          {isNotiDropdown && (
            <div className="absolute text-[14px] font-normal right-0 mt-12 w-[300px] py-4 bg-white shadow-lg rounded-lg">
              <ul className="list-none px-6">
                <li className="flex items-center gap-4 mb-4">
                  <span className="w-2 h-2 bg-[#947F41] rounded-full"></span>
                  You have a new enquiry
                </li>
                <li className="flex items-center gap-4 mb-4">
                  <span className="w-2 h-2 bg-[#947F41] rounded-full"></span>
                  You have a new enquiry
                </li>
                <li className="flex items-center gap-4">
                  <span className="w-2 h-2 bg-[#947F41] rounded-full"></span>
                  You have a new enquiry
                </li>
              </ul>
            </div>
          )}
        </div>
        <div className="flex items-center ml-6 justify-center">
          <img src={people} className="w-8 h-8 mr-4" alt="Admin" />
          <h2 className="text-base font-medium">Hi {username}</h2>
        </div>
        <div className="ml-2" ref={dropdownRef}>
          <img
            src={arrowDown}
            className="h-4 w-4 cursor-pointer"
            onClick={handleProfileClick}
            alt="Dropdown"
          />
          {isDropdown && (
            <div className="absolute text-[18px] font-normal right-0 mt-12 w-[160px] py-4 bg-white shadow-lg">
              <div
                className="flex items-center justify-center gap-2 cursor-pointer"
                onClick={handleLogout}
              >
                <img src={logOut} className="w-6 h-6" alt="Logout" />
                <div>Log out</div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default AdminHeader;
