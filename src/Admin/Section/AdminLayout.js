import React, { createContext, useState, useEffect } from "react";
import { Outlet } from "react-router-dom";
import AdminLogin from "../Pages/LoginPage/AdminLogin";
import AdminSidebar from "./Sidebar/AdminSidebar";
import AdminHeader from "./Header/AdminHeader";
import { validateAdminToken } from "../Services/Services";


export const adminContext = createContext();

function AdminLayout() {
  const [token, setToken] = useState(() => localStorage.getItem("adminToken"));

  useEffect(() => {
    const validateToken = async () => {
      if (token) {
        try {
          // Assume an API call to validate the token
          const isValid = await validateAdminToken(token); // Implement this API
          if (!isValid) {
            setToken(null);
          }
        } catch (error) {
          console.error("Token validation failed:", error);
          setToken(null);
        }
      }
    };
    validateToken();
  }, [token]);
  

  return (
    <adminContext.Provider value={{ token, setToken }}>
      <div>
        {token ? (
          <div className="pt-10 flex bg-[#FCFCFC]">
            <AdminHeader />
            <AdminSidebar />
            <div className="pt-[88px] w-full">
              <Outlet />
            </div>
          </div>
        ) : (
          <AdminLogin />
        )}
      </div>
    </adminContext.Provider>
  );
}

export default AdminLayout;
