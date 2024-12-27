import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from './Section/Header/Header'
import Footer from './Section/Footer/Footer'

function User() {
  return (
    <div>
      <Header/>
      <Outlet/>
      <Footer/>
    </div>
  )
}

export default User
