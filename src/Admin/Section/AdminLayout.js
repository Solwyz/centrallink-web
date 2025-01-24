import React, { createContext, useState } from "react";
import { Outlet } from "react-router-dom"; 
import AdminLogin from "../Pages/LoginPage/AdminLogin";
import AdminSidebar from "./Sidebar/AdminSidebar";
import AdminHeader from "./Header/AdminHeader";

export const adminContext = createContext();

function AdminLayout() {
  const [token, setToken] = useState(localStorage.getItem("adminAuthToken"));

  // If there's a token, show the layout, otherwise show login page
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
          <AdminLogin /> // If no token, show the login page
        )}
      </div>
    </adminContext.Provider>
  );
}

export default AdminLayout;
