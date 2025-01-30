import React from "react";
import { motion } from "framer-motion"; // Import motion from framer-motion
import interiors from "../../../../Assets/Home/interiors.png";
import construction from "../../../../Assets/Home/construction.png";
import building from "../../../../Assets/Home/building.png";
import office from "../../../../Assets/Home/office.png";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from "react-router-dom";

function HomeProjects() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    adaptiveHeight: true,
  };

  const fadeInUp = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 2 } },
  };

  const fadeIn = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 2 } },
  };

  return (
    <div className="flex flex-col md:flex-row justify-between px-6 md:px-[120px] mt-[72px] md:mt-[168px]">
      {/* Left Section */}
      <motion.div
        className="md:w-1/2"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={fadeInUp}
      >
        <h2 className="md:text-[40px] text-[32px] text-start font-milchella font-normal text-[#817140]">
          Our Leading Projects
        </h2>
        <p className="text-[#252012] text-justify md:w-[511px] md:mt-[38px] mt-8 font-normal text-base">
          Central Link excels in delivering remarkable interior construction
          projects tailored to residential, commercial, and industrial needs.
          With innovation, superior craftsmanship, and meticulous attention to
          detail, we transform spaces into functional and aesthetic
          masterpieces. Our unwavering commitment to quality and client
          satisfaction ensures excellence from initial concept to final
          execution.
        </p>
        <div className="hidden md:flex justify-center mt-8 md:mt-[38px] md:justify-start">
          <Link to="projects">
            <motion.div
              className="w-[183px] h-[56px] text-[#736B5B] font-medium text-base border border-[#726E62] focus:outline-none rounded-lg flex items-center justify-center text-center hover:shadow-[0px_7px_7px_0px_#00000026] transition-shadow"
              whileHover={{ scale: 1.05 }}
            >
              View All
            </motion.div>
          </Link>
        </div>
      </motion.div>

      {/* Right Section */}
      <motion.div
        className="md:w-1/2"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={fadeIn}
      >
        {/* Grid for Larger Screens */}
        <div className="hidden md:grid grid-cols-2 gap-5">
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            <div className="relative overflow-hidden group">
              <img
                src={office}
                alt="Office Design"
                className="w-[285px] h-[260px] object-cover"
              />
              <div className="absolute inset-0 bg-black bg-opacity-50 w-[285px] flex items-end p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <span className="text-white text-lg font-medium">
                  OFFICE DESIGN
                </span>
              </div>
            </div>
            <div className="relative overflow-hidden group mt-5">
              <img
                src={building}
                alt="Building Design"
                className="w-[285px] h-[260px] object-cover"
              />
              <div className="absolute inset-0 w-[285px] bg-black bg-opacity-50 flex items-end p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <span className="text-white text-lg font-medium">
                  BUILDING DESIGN
                </span>
              </div>
            </div>
          </motion.div>
          <motion.div
            className="mt-[77px]"
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            <div className="relative overflow-hidden group">
              <img
                src={construction}
                alt="Construction Design"
                className="w-[285px] h-[260px] object-cover"
              />
              <div className="absolute inset-0 w-[285px] bg-black bg-opacity-50 flex items-end p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <span className="text-white text-lg font-medium">
                  CONSTRUCTION DESIGN
                </span>
              </div>
            </div>
            <div className="relative overflow-hidden group mt-5">
              <img
                src={interiors}
                alt="Interior Design"
                className="w-[285px] h-[260px] object-cover"
              />
              <div className="absolute inset-0 w-[285px] bg-black bg-opacity-50 flex items-end p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <span className="text-white text-lg font-medium">
                  INTERIOR DESIGN
                </span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Slider for Smaller Screens */}
        <div className="md:hidden mt-8">
          <Slider {...settings}>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              className="relative overflow-hidden"
            >
              <img
                src={office}
                alt="Office Design"
                className="w-full h-[260px] object-cover"
              />
              <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                <span className="text-white text-lg font-medium">
                  OFFICE DESIGN
                </span>
              </div>
            </motion.div>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              className="relative overflow-hidden"
            >
              <img
                src={building}
                alt="Building Design"
                className="w-full h-[260px] object-cover"
              />
              <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                <span className="text-white text-lg font-medium">
                  BUILDING DESIGN
                </span>
              </div>
            </motion.div>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              className="relative overflow-hidden"
            >
              <img
                src={construction}
                alt="Construction Design"
                className="w-full h-[260px] object-cover"
              />
              <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                <span className="text-white text-lg font-medium">
                  CONSTRUCTION DESIGN
                </span>
              </div>
            </motion.div>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              className="relative overflow-hidden"
            >
              <img
                src={interiors}
                alt="Interior Design"
                className="w-full h-[260px] object-cover"
              />
              <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                <span className="text-white text-lg font-medium">
                  INTERIOR DESIGN
                </span>
              </div>
            </motion.div>
          </Slider>
        </div>
      </motion.div>
    </div>
  );
}

export default HomeProjects;
