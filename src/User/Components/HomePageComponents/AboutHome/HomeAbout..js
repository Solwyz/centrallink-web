import React from "react";
import aboutHome from "../../../../Assets/Home/aboutHome.png";

function HomeAbout() {
  return (
   <div>
      <div className="flex flex-col md:flex-row items-center md:mt-[168px]  mt-[64px] px-4 md:px-[120px]">
        {/* Image Section */}
        <div className=" ">
          <img
            src={aboutHome}
            alt="About Home"
            className=" object-cover w-[361px] h-[260px] md:h-[436px] md:w-[607px]"
          />
        </div>
  
        {/* Text Section */}
        <div className="w-[319px]  h-[468px] md:w-[688px] md:h-[356px] md:absolute  translate-y-[-40px] md:translate-y-0  md:left-[626px] bg-[#FBFBFB] md:p-8 p-4">
          <h2 className="font-normal text-[#817140] leading-10  md:text-[40px] text-[32px] font-milchella text-start md:text-left">
            Our Core,  Our Commitment.
          </h2>
          <p className="text-[#252012] md:w-[624px]  md:mt-[32px] mt-6 text-base font-normal leading-[22px]  text-justify  ">
            "We are a leading interior construction company dedicated to
            transforming spaces into functional, aesthetic masterpieces. With a
            blend of innovation, craftsmanship, and attention to detail, we create
            tailored solutions for residential, commercial, and industrial
            projects. Our commitment to quality and client satisfaction drives
            every project from concept to completion."
          </p>
          <div className="flex justify-center mt-6 md:mt-6 md:justify-start">
            <div className="w-[183px] h-[56px] text-[#736B5B] font-medium text-base border border-[#726E62] focus:outline-none rounded-lg flex items-center justify-center text-center hover:shadow-[0px_7px_7px_0px_#00000026] transition-shadow">
              Read More
            </div>
          </div>
        </div>
        
      </div>
   
   </div>

  );
}

export default HomeAbout;
