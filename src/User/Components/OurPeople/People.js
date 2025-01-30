import React from "react";
import Slider from "react-slick";
import people1 from "../../../Assets/About/Peopls/noufal.png";
import people2 from "../../../Assets/About/Peopls/basheer.png";
import people3 from "../../../Assets/About/Peopls/nishad.png";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function People() {
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  const teamMembers = [
    {
      name: "Noufal Khan",
      position: "Project Manager",
      img: people1,
    },
    {
      name: "Basheer",
      position: "Project Supervisor",
      img: people2,
    },
    {
      name: "Nishad Abdul Rahim",
      position: "Project Engineer",
      img: people3,
    },
  ];

  return (
    <div className="flex flex-col md:flex-row items-center justify-between md:pr-[120px] mt-[72px] md:mt-[72px]">
      {/* Left Section */}
      <div className="rounded-full hidden md:block bg-[#FFFCF5] md:w-[537px] md:h-[537px] bg-cover md:ml-[-103px]">
        <div className="flex-1 ml-[295px] items-center justify-center md:w-[354px] text-center md:text-left md:mt-[129px]">
          <h2 className="text-[48px] font-normal font-milchella">Meet our Team</h2>
          <p className="text-start text-base font-normal leading-[24px] mt-8">
            Meet Our Experts: A dedicated team of interior designers and
            construction professionals committed to delivering exceptional spaces
            tailored to your vision and needs.
          </p>
        </div>
      </div>

      {/* Mobile View for Title */}
      <div className="flex-1 md:hidden block px-4 items-center justify-center text-center">
        <h2 className="text-[32px] font-normal font-milchella">Meet our Team</h2>
        <p className="text-justify text-base font-normal leading-[24px] mt-6">
          Meet Our Experts: A dedicated team of interior designers and
          construction professionals committed to delivering exceptional spaces
          tailored to your vision and needs.
        </p>
      </div>

      {/* Right Section for Desktop */}
      <div className="md:flex hidden">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:ml-[62px]">
          {teamMembers.map((member, index) => (
            <div key={index} className="group text-end cursor-pointer transform hover:scale-101 transition-transform">
              <div className="relative overflow-hidden">
                <img src={member.img} alt={member.name} className="w-[224px] object-fill h-[279px]" />
              </div>
             <div className="mr-10">
                  <h3 className="mt-4 font-bold text-[#252012] text-base">{member.name}</h3>
                  <p className="font-medium text-[#757575] text-base mt-[6px]">{member.position}</p>
             </div>
              <div className="absolute bottom-0 right-4 w-4 h-[0px] bg-[#EAC145] group-hover:h-[103px] transition-all duration-300"></div>
            </div>
          ))}
        </div>
      </div>

      {/* Slider View for Mobile */}
      <div className="md:hidden block w-full px-4 mt-[22px]">
        <Slider {...sliderSettings}>
          {teamMembers.map((member, index) => (
            <div key={index} className="text-end">
              <img
                src={member.img}
                alt={member.name}
                className="w-[361px] h-[357px] mx-auto"
              />
             <div className="mr-4">
                  <h3 className="mt-4 font-bold text-[#252012] text-base">{member.name}</h3>
                  <p className="font-medium text-[#757575] text-base mt-[6px]">{member.position}</p>
             </div>

            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}

export default People;
