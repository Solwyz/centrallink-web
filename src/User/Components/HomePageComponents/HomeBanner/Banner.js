import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

function Banner() {
  // Variants for animations
  const fadeIn = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1, 
      transition: { 
        duration: 2,  // Increase duration for smoother fade-in
        delay: 0.5,  
         // Add delay before the fade-in starts
      }, 
      
    },
  };
  const slideUp = {
    hidden: { y: 50, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1, 
      transition: { 
        duration: 1, 
        delay: 1,  // Delay after the title fades in
      }, 
    },
  };



  return (
    <div className="w-full bg-BannerImgMob md:bg-BannerImg bg-cover md:h-[800px] h-[612px]">
      <div className="text-center mx-auto">
        {/* Fade-in animation for the title */}
        <motion.h1
          className="md:pt-[274px] md:text-[120px] font-milchella pt-[230px] text-[40px] md:leading-[120px] font-normal text-white items-center"
          variants={fadeIn}
          whileInView="visible"
          initial="hidden"
          animate="visible"
          viewport={{ once: true, amount: 0.5 }}

        >
          Transform Your Space
        </motion.h1>

        {/* Slide-up animation for the subtitle */}
        <motion.h3
          className="text-white md:text-[24px] text-base font-medium mt-8 md:mt-4"
          variants={slideUp}
          initial="hidden"
          animate="visible"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}

        >
          Innovative Designs for Inspired Living
        </motion.h3>

        {/* Button with hover effect */}
        <Link to="contact">
          <motion.div
            className="w-[139px] h-[56px] flex justify-center mx-auto hover:bg-[#FFC107] hover:text-white mt-[88px] md:mt-8 items-center bg-white rounded-lg text-base text-[#464138] font-medium"
            variants={slideUp}
            initial="hidden"
            animate="visible"
         
          >
            Contact Now
          </motion.div>
        </Link>
      </div>
    </div>
  );
}

export default Banner;
