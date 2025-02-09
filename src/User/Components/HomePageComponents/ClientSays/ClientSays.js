import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { motion } from "framer-motion"; // Import motion from framer-motion
import quoteIcon from "../../../../Assets/Home/clientSays/quoteIcon.svg";
import quoteUp from "../../../../Assets/Home/clientSays/quoteUp.svg";
import quoteDown from "../../../../Assets/Home/clientSays/quoteDown.svg";
import people from "../../../../Assets/Home/clientSays/people.png";
import sophia from "../../../../Assets/Home/clientSays/sophia.png";
import emily from "../../../../Assets/Home/clientSays/emily.png";
import male from "../../../../Assets/Home/clientSays/male.png";

function ClientSays() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
  };

  const testimonials = [
    {
      text: "Central Link transformed my workspace into a modern, functional environment. Their attention to detail and professionalism exceeded my expectations. Highly recommend their services",
      name: "John Davis",
      position: "TSC Hospitals",
      image: people,
    },
    {
      text: "The team at Central Link delivered exceptional quality on our home renovation project. They were efficient, friendly, and truly cared about our vision. Fantastic experience!",
      name: "Sophia Carter",
      position: "Telsa Corp",
      image: sophia,
    },
    {
      text: "I’m impressed by Central Link’s commitment to excellence. Their innovative designs and expert craftsmanship made our office redesign seamless and stunning. Thank you!",
      name: "Michael Thompson",
      position: "Olicka Real Tech",
      image: male,
    },
    {
      text: "From start to finish, Central Link ensured our project was stress-free and completed on time. Their expertise and dedication to client satisfaction were outstanding!",
      name: "Emily Richards",
      position: "Boby Homes",
      image: emily,
    },
  ];

  return (
    <div className="md:px-[120px] md:mt-[72px] mt-[72px] ">
      <div className="grid grid-cols-1 md:grid-cols-2 md:h-[552px]">
        {/* Left Section */}
        <div className="bg-[#C8BD9C] hidden  relative md:flex md:p-[40px]">
          {/* Animation for "What Do Our Clients Say" */}
          <img src={quoteUp} alt="" className="w-[80px] h-[80px]"/>
          <motion.h2
            className="text-[32px] md:text-[48px] ml-[-32px] md:mt-[200px] leading-[48px] font-milchella text-start"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            What Do Our <br /> Clients Say
          </motion.h2>
          <img src={quoteDown} alt="" className="w-[80px] h-[80px]  absolute bottom-10 right-10 " />
        </div>
        <div className="bg-[#C8BD9C] w-full h-[304px] relative  p-6 items-center justify-center md:hidden flex">
        <img src={quoteUp} alt="" className="w-[40px] h-[40px] absolute top-6 left-6 "/>

          <h2 className="text-[32px] text-center  leading-[48px] font-milchella ">
            What Do Our <br /> Clients Say
          </h2>
          <img src={quoteDown} alt="" className="w-[40px] h-[40px]  absolute bottom-6 right-6 " />

        </div>
        {/* Right Section */}
        <div className="bg-[#FAFAFA] hidden md:block md:px-[72px] md:py-[82px]">
          <Slider {...settings}>
            {testimonials.map((testimonial, index) => (
              <div key={index} className="text-center md:w-[466px] md:p-8 md:h-[369px] bg-white">
                <img src={quoteIcon} className="" alt="Quote Icon" />

                <div className="flex justify-center ">
                  <img
                    src={testimonial.image}
                    alt={`${testimonial.name}`}
                    className="w-[100px] h-[100px] rounded-full"
                  />
                </div>
                <p className="text-[#252012] mt-4 text-start text-sm font-normal leading-[20px]">
                  "{testimonial.text}"
                </p>
                <p className="font-bold text-start text-base text-[#70674B] mt-10">
                  {testimonial.name}
                </p>
                <p className="font-semibold text-start text-base text-[#A6A08F]">
                  {testimonial.position}
                </p>
              </div>
            ))}
          </Slider>
        </div>

        {/* Mobile Version */}
        <div className="bg-[#FAFAFA] md:hidden block w-full h-[591px] py-8 px-4">
          <Slider {...settings}>
            {testimonials.map((testimonial, index) => (
              <div key={index} className="text-center w-[361px] h-[495px] px-4 py-10 bg-white">
                <div className="flex justify-center ">
                  <img
                    src={testimonial.image}
                    alt={`${testimonial.name}`}
                    className="w-[100px] h-[100px] rounded-full"
                  />
                </div>
                <img src={quoteIcon} className="mt-10" alt="Quote Icon" />
                <p className="text-[#252012] mt-6 text-start text-sm font-normal leading-[20px]">
                  "{testimonial.text}"
                </p>
                <p className="font-bold text-start text-base text-[#70674B] mt-10">
                  {testimonial.name}
                </p>
                <p className="font-semibold text-start mt-2 text-base text-[#A6A08F]">
                  {testimonial.position}
                </p>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
}

export default ClientSays;
