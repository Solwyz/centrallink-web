import React from "react";
import aboutHome from "../../../../Assets/Home/aboutHome.png";
import { Link } from "react-router-dom";

function HomeAbout() {
  return (
    <div>
      <div className="flex flex-col md:flex-row items-center md:mt-[168px]  mt-[64px] px-4 md:px-[120px]">
        {/* Image Section */}
        <div className="w-full ">
          <img
            src={aboutHome}
            alt="About Home"
            className=" object-cover w-full h-[260px] md:h-[436px] md:w-[607px]"
          />
        </div>

        {/* Text Section */}
        <div className="w-[320px]  h-[468px] md:w-[688px] md:h-[356px] md:absolute  translate-y-[-40px] md:translate-y-0  md:left-[626px] bg-[#FBFBFB] md:p-8 p-4">
          <h2 className="font-normal text-[#817140] leading-10  md:text-[40px] text-[32px] font-milchella text-start md:text-left">
            Our Core, Our Commitment.
          </h2>
          <p className="text-[#252012] md:w-[624px]  md:mt-[32px] mt-6 text-base font-normal leading-[22px]  text-justify  ">
            At Central Link, we craft exceptional spaces that harmonize function
            and style. Driven by innovation, quality craftsmanship, and
            attention to detail, we exceed expectations. From concept to
            completion, we provide bespoke solutions for residential,
            commercial, and industrial interiors, transforming visions into
            reality with precision and dedication.
          </p>
          <div className="flex justify-center mt-6 md:mt-6 md:justify-start">
           <Link to="about">
              <div className="w-[183px] h-[56px] text-[#736B5B] font-medium text-base border border-[#726E62] focus:outline-none rounded-lg flex items-center justify-center text-center hover:shadow-[0px_7px_7px_0px_#00000026] transition-shadow">
                Read More
              </div>
           </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomeAbout;
