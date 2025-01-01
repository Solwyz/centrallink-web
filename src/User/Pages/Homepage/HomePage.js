import React from 'react'
import Banner from '../../Components/HomePageComponents/HomeBanner/Banner'
import HomeProjects from '../../Components/HomePageComponents/HomeProjects/HomeProjects'
import HomeServices from '../../Components/HomePageComponents/HomeServices/HomeServices'
import HomeAbout from '../../Components/HomePageComponents/AboutHome/HomeAbout.'
import ClientSays from '../../Components/HomePageComponents/ClientSays/ClientSays'
import Contact from '../../Components/ContactPage/Contact'
import Location from '../../Components/LocateUs/Location'

function HomePage() {
  return (
    <div className='pt-[120px]'>
      <Banner/>
      <HomeAbout/>
      <HomeProjects/>
      <HomeServices/>
      <ClientSays/>
      <Contact/>
      <Location/>
      
    </div>
  )
}

export default HomePage
