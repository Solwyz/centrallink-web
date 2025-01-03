import React from "react";
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
    dots: true, // Enable dots for navigation
    infinite: true, // Infinite scrolling
    speed: 300, // Transition speed
    slidesToShow: 1, // Show one slide at a time
    slidesToScroll: 1, // Scroll one slide at a time
    arrows: false, // Hide arrows for smaller screens
    adaptiveHeight: true, // Adjust height based on content
  };

  return (
    <div className="flex flex-col md:flex-row justify-between px-6 md:px-[120px] md:mt-[168px]">
      {/* Left Section */}
      <div className="md:w-1/2">
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
            <div className="w-[183px] h-[56px] text-[#736B5B] font-medium text-base border border-[#726E62] focus:outline-none rounded-lg flex items-center justify-center text-center hover:shadow-[0px_7px_7px_0px_#00000026] transition-shadow">
              Read More
            </div>
          </Link>
        </div>
      </div>

      {/* Right Section */}
      <div className="md:w-1/2">
        {/* Grid for Larger Screens */}
        <div className="hidden md:grid grid-cols-2 gap-5">
          <div>
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
          </div>
          <div className="mt-[77px]">
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
          </div>
        </div>

        {/* Slider for Smaller Screens */}
        <div className="md:hidden mt-8">
          <Slider {...settings}>
            <div className="relative overflow-hidden">
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
            </div>
            <div className="relative overflow-hidden">
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
            </div>
            <div className="relative overflow-hidden">
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
            </div>
            <div className="relative overflow-hidden">
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
            </div>
          </Slider>
        </div>
      </div>
    </div>
  );
}

export default HomeProjects;
