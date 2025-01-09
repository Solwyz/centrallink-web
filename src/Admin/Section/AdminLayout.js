import React, { createContext, useState, useEffect } from "react";
import AdminLogin from "../Pages/LoginPage/AdminLogin";
import AdminSidebar from "./Sidebar/AdminSidebar";
import AdminHeader from "./Header/AdminHeader";
import { Outlet } from "react-router-dom";

export const adminContext = createContext();

function AdminLayout() {
  const [token, setToken] = useState(localStorage.getItem("adminToken"));

  // Update localStorage and state when the token changes
  useEffect(() => {
    if (token) {
      localStorage.setItem("adminToken", token);
    } else {
      localStorage.removeItem("adminToken");
    }
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
          <AdminLogin setToken={setToken} />
        )}
      </div>
    </adminContext.Provider>
  );
}

export default AdminLayout;
