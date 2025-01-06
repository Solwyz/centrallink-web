import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import project from "../../../Assets/Admin/sidebar/Project.svg";
import service from "../../../Assets/Admin/sidebar/service.svg";
import blogs from "../../../Assets/Admin/sidebar/blogs.svg";
import enquiry from "../../../Assets/Admin/sidebar/enquiries.svg";
import general from "../../../Assets/Admin/sidebar/general.svg";

function AdminSidebar() {
  const location = useLocation();

  const menuItems = [
    { name: 'Projects', path: '/admin', icon: project },
    { name: 'Services', path: '/admin/services', icon: service },
    { name: 'Blogs', path: '/admin/blogs', icon: blogs },
    { name: 'Enquires', path: '/admin/enquiry', icon: enquiry },
    { name: 'General', path: '/admin/general', icon: general },
  ];

  return (
    <div className="flex z-50 px-6">
      <div className="bg-[#0D171F] w-[261px] py-[60px] px-5 rounded-[24px] h-screen fixed">
        <ul className="text-[14px] font-medium space-y-6 tracking-[1px]">
          {menuItems.map((item) => (
            <Link to={item.path} key={item.name}>
              <li
                className={`flex items-center py-[12px] pl-2 rounded-lg ${
                  location.pathname === item.path
                    ? 'bg-[#192B3A] rounded-[16px] text-white'
                    : 'text-white'
                }`}
              >
                <img
                  className="w-[32px] h-[32px] mr-2"
                  src={item.icon}
                  alt={item.name}
                />
                {item.name}
              </li>
            </Link>
          ))}
        </ul>
      </div>
      <div className="ml-[263px] flex-1 h-screen overflow-y-auto"></div>
    </div>
  );
}

export default AdminSidebar;
