import React from "react";
import { Link } from "react-router-dom";
function Banner() {
  return (
    <div className="w-full bg-BannerImgMob md:bg-BannerImg bg-cover md:h-[748px] h-[612px]">
      <div className=" text-center  mx-auto">
        <h1 className="md:pt-[274px]  md:text-[120px] font-milchella pt-[230px] text-[40px] md:leading-[120px]  font-normal text-white  items-center ">
          Transform Your Space
        </h1>
        <h3 className="text-white md:text-[24px] text-base font-medium mt-8 md:mt-4">
          Innovative Designs for Inspired Living
        </h3>
     <Link to="contact">
          <div className="w-[139px] h-[56px] flex justify-center mx-auto mt-[88px] md:mt-8 items-center bg-white rounded-lg text-base text-[#464138] font-medium">
            Contact Now
          </div>
     </Link>
      </div>
    </div>
  );
}

export default Banner;
