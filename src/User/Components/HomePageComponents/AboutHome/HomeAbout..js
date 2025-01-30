import React from "react";
import { motion } from "framer-motion";
import aboutHome from "../../../../Assets/Home/aboutHome.png";
import { Link } from "react-router-dom";

function HomeAbout() {
  // Animation Variants
  const fadeIn = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 1 } },
  };

  const slideInLeft = {
    hidden: { x: 100, opacity: 1 },
    visible: { x: 0, opacity: 1, transition: { duration: 2 } },
  };

  const slideInUp = {
    hidden: { y: 50, opacity: 1 },
    visible: { y: 0, opacity: 1, transition: { duration: 1 } },
  };

  return (
    <div className="px-4 md:px-[120px] mt-[64px] md:mt-[168px]">
      {/* Desktop Layout */}
      <div className="hidden md:flex flex-row items-center">
        {/* Image Section */}
        <motion.div
          className=""
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          variants={fadeIn}
        >
          <img
            src={aboutHome}
            alt="About Home"
            className="object-cover w-[607px] h-[436px]"
          />
        </motion.div>

        {/* Text Section */}
        <motion.div
          className="w-[688px] h-[356px] bg-[#FBFBFB] p-8 absolute left-[626px]"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          variants={slideInLeft}
        >
          <h2 className="font-normal text-[#817140] leading-10 text-[40px] font-milchella text-left">
            Our Core, Our Commitment.
          </h2>
          <p className="text-[#252012] mt-[32px] text-base font-normal leading-[22px] text-justify">
            At Central Link, we craft exceptional spaces that harmonize function
            and style. Driven by innovation, quality craftsmanship, and
            attention to detail, we exceed expectations. From concept to
            completion, we provide bespoke solutions for residential,
            commercial, and industrial interiors, transforming visions into
            reality with precision and dedication.
          </p>
          <div className="flex justify-start mt-6">
            <Link to={"/about"}>
              <div className="w-[183px] h-[56px] text-[#736B5B] font-medium text-base border border-[#726E62] focus:outline-none rounded-lg flex items-center justify-center text-center hover:shadow-[0px_7px_7px_0px_#00000026] transition-shadow">
                Read More
              </div>
            </Link>
          </div>
        </motion.div>
      </div>

      {/* Mobile Layout */}
      <div className="flex flex-col items-center md:hidden">
        {/* Image Section */}
        <motion.div
          className=""
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          variants={fadeIn}
        >
          <img
            src={aboutHome}
            alt="About Home"
            className="object-cover w-[361px] h-[260px]"
          />
        </motion.div>

        {/* Text Section */}
        <motion.div
          className="w-[319px] h-[468px] bg-[#F2F2F2] p-4 mt-[-40px]"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          variants={slideInUp}
        >
          <h2 className="font-normal text-[#817140] leading-10 text-[32px] font-milchella text-start">
            Our Core, Our Commitment.
          </h2>
          <p className="text-[#252012] mt-6 text-base font-normal leading-[22px] text-justify">
            At Central Link, we craft exceptional spaces that harmonize function
            and style. Driven by innovation, quality craftsmanship, and
            attention to detail, we exceed expectations. From concept to
            completion, we provide bespoke solutions for residential,
            commercial, and industrial interiors, transforming visions into
            reality with precision and dedication.
          </p>
          <div className="flex justify-center mt-6">
            <Link to={"/about"}>
              <div className="w-[183px] h-[56px] text-[#736B5B] font-medium text-base border border-[#726E62] focus:outline-none rounded-lg flex items-center justify-center text-center hover:shadow-[0px_7px_7px_0px_#00000026] transition-shadow">
                Read More
              </div>
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default HomeAbout;
