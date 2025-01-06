import React, { useContext, useEffect, useRef, useState } from 'react'
import { adminContext } from '../AdminLayout';
import logo from "../../../Assets/Logo.svg"
import notICon from "../../../Assets/Admin/noti.svg"
import people from "../../../Assets/Admin/people.png"
import arrowDown from "../../../Assets/Admin/arrowDown.svg"
import logOut from "../../../Assets/Admin/logoutt.svg"

function AdminHeader() {
    const [isDropdown, setIsDropdown] = useState(false);

    const {setToken} = useContext(adminContext)
  
    const dropdownRef = useRef(null);
  
    const handleLogout =()=> {
      setToken(null)
      localStorage.removeItem('adminToken');
    }
  
    const handleProfileClick = () => {
      setIsDropdown(!isDropdown);
    }
  
    useEffect(() => {
      const handleClickOutside =(event)=> {
        if(dropdownRef.current && !dropdownRef.current.contains(event.target)) {
          setIsDropdown(false);
        }
      };
  
      document.addEventListener('mousedown', handleClickOutside);
      return () => document.removeEventListener('mousedown', handleClickOutside);
    },[]);
  
    return (
      <div className='bg-[#F0F0F0] rounded-[16px] fixed h-[88px] pl-6 pr-10 py-[26px] flex justify-between items-center min-w-[1160px] ml-[305px]   mr-[72px] '>
        <div><img src={logo} className='w-[161px] h-[36px]'></img></div>
        <div className='flex items-center justify-center relative'>
          <img src={notICon} className='h-8 w-8'></img>
          <div className='flex items-center ml-6 justify-center'> 
          <img src={people} className='w-8 h-8 mr-4' alt="" />
          <h2 className='text-base font-medium'>Hi Admin</h2>
          </div>
          <div className='ml-2' ref={dropdownRef}>
            <img src={arrowDown} className='h-4 w-4 cursor-pointer' onClick={handleProfileClick}></img>
            {isDropdown && (
              <div className='absolute text-[18px] font-normal right-0 mt-12 w-[160px]  py-4 bg-white shadow-lg'>
                <div className='flex items-center justify-center gap-2 cursor-pointer' onClick={handleLogout}>
                  <img src={logOut} className='w-6 h-6'></img>
                  <div>Log out</div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    )
  }

export default AdminHeader
