import React, { createContext, useState } from "react";
import AdminLogin from "../Pages/LoginPage/AdminLogin";
import AdminSidebar from "./Sidebar/AdminSidebar";
import AdminHeader from "./Header/AdminHeader";
import { Outlet } from "react-router-dom";
export const adminContext = createContext();

function AdminLayout() {
  const [token, setToken] = useState(localStorage.getItem("adminToken"));

  return (
    <adminContext.Provider value={{ token, setToken }}>
      <div>
        {token ? (
          <div className="pt-10 flex bg-[#FCFCFC]">
              <AdminHeader />
              <AdminSidebar />
              <div className="pt-[120px]">
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
