import React from 'react'
import Banner from '../../Components/HomePageComponents/HomeBanner/Banner'
import HomeProjects from '../../Components/HomePageComponents/HomeProjects/HomeProjects'
import HomeServices from '../../Components/HomePageComponents/HomeServices/HomeServices'
import HomeAbout from '../../Components/HomePageComponents/AboutHome/HomeAbout.'
import ClientSays from '../../Components/HomePageComponents/ClientSays/ClientSays'
import Contact from '../../Components/ContactPage/Contact'
import Location from '../../Components/LocateUs/Location'
import { motion } from 'framer-motion'


function HomePage() {
  return (
    <div className='pt-[120px]'>
        <motion.div 
        initial={{ opacity: 0 }} 
        whileInView={{ opacity: 1 }} 
        transition={{ duration: 0.5 }}
      >
        <Banner />
      </motion.div>

      <motion.div 
        initial={{ opacity: 0 }} 
        whileInView={{ opacity: 1 }} 
        transition={{ duration: 0.5 }}
      >
        <HomeAbout />
      </motion.div>

      <motion.div 
        initial={{ opacity: 0 }} 
        whileInView={{ opacity: 1 }} 
        transition={{ duration: 0.5 }}
      >
        <HomeProjects />
      </motion.div>

      <motion.div 
        initial={{ opacity: 0 }} 
        whileInView={{ opacity: 1 }} 
        transition={{ duration: 0.5 }}
      >
        <HomeServices />
      </motion.div>

      <motion.div 
        initial={{ opacity: 0 }} 
        whileInView={{ opacity: 1 }} 
        transition={{ duration: 0.5 }}
      >
        <ClientSays />
      </motion.div>

      <motion.div 
        initial={{ opacity: 0 }} 
        whileInView={{ opacity: 1 }} 
        transition={{ duration: 0.5 }}
      >
        <Contact />
      </motion.div>

      <motion.div 
        initial={{ opacity: 0 }} 
        whileInView={{ opacity: 1 }} 
        transition={{ duration: 0.5 }}
      >
        <Location />
      </motion.div>
    
      
    </div>
  )
}

export default HomePage
