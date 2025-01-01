import React from "react";
import location from "../../../Assets/contact/location.png";
import mapMob from "../../../Assets/contact/Group 1000005777.png";

function Location() {
  return (
    <div className="mt-[120px] px-4 md:px-[120px]">


      <div className="md:flex justify-between hidden ">
        <div className="mt-[137px]">
          <h3 className="text-[#947F41] font-normal font-milchella text-[40px]">
            Locate Us
          </h3>
          <p className="leading-[24px] text-base font-semibold mt-6">
            1234 Sheikh Zayed Road, Business Bay, <br />
            Dubai, UAE, <br />
            P.O. Box 12345
          </p>
        </div>
        <div className="">
          <img src={location} className="w-[770px] h-[441px]" alt="" />
        </div>
      </div>


      <div className="  md:hidden ">
        <div className="">
          <h3 className="text-[#947F41] font-normal font-milchella text-[40px]">
            Locate Us
          </h3>
          <div className="mt-8">
          <img src={mapMob} className="w-full h-[290px]" alt="" />
        </div>
          <p className="leading-[24px] text-sm font-semibold mt-4">
            1234 Sheikh Zayed Road, Business Bay, <br />
            Dubai, UAE, <br />
            P.O. Box 12345
          </p>
        </div>
       
      </div>



    </div>
  );
}

export default Location;
