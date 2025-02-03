import React, { createContext, useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import AdminLogin from "../Pages/LoginPage/AdminLogin";
import AdminSidebar from "./Sidebar/AdminSidebar";
import AdminHeader from "./Header/AdminHeader";
import Api from "../Services/Api";

export const adminContext = createContext();

const refreshToken = localStorage.getItem("refreshToken")

function AdminLayout() {
  const [token, setToken] = useState(localStorage.getItem("adminAuthToken"));

  const callRefreshToken = () => {
    console.log('refresh token called at', new Date().toLocaleTimeString());
    Api.post('api/auth/refreshtoken', {
      "refreshToken": refreshToken
    })
      .then(response => {
        console.log('refresh token response:', response)
        if (response && response.data) {
          localStorage.setItem("adminAuthToken", response.data.jwt);
          localStorage.setItem("refreshToken", response.data.refreshToken);
          return true;
        } else {
          return false
        }

      })
  }

  useEffect(() => {
    if (token) {
      callRefreshToken();
      const interval = setInterval(callRefreshToken, 600000);
      return () => clearInterval(interval);
    }
  },[token]);

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
