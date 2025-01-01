import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import quoteIcon from "../../../../Assets/Home/clientSays/quoteIcon.svg";
import people from "../../../../Assets/Home/clientSays/people.png";

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
      text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
      name: "Robert Ali",
      position: "TSC Hospitals",
      image: people, 
    },
    {
      text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
      name: "Robert Ali",
      position: "TSC Hospitals",
      image: people, // Replace with actual image URLs
    },
    {
      text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
      name: "Robert Ali",
      position: "TSC Hospitals",
      image: people, // Replace with actual image URLs
    },
  ];

  return (
    <div className="md:px-[120px]  md:mt-[168px] mt-[120px] ">
      <div className="grid grid-cols-1 md:grid-cols-2 md:h-[552px] ">
        {/* Left Section */}
        <div className="bg-[#C8BD9C] hidden md:flex md:px-[72px]">
          <h2 className="text-[32px] md:text-[48px] md:mt-[136px] leading-[48px] font-milchella  text-start">
            What Do Our <br /> Clients Say
          </h2>
        </div>
        <div className="bg-[#C8BD9C] w-full h-[304px] items-center justify-center md:hidden flex ">
          <h2 className="text-[32px]  text-center leading-[48px] font-milchella ">
            What Do Our <br /> Clients Say
          </h2>
        </div>
        {/* Right Section */}
        <div className=" bg-[#FAFAFA] hidden md:block md:px-[72px] md:py-[82px] ">
          <Slider {...settings}>
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="text-center  md:w-[466px] md:p-8 md:h-[369px] bg-white"
              >
                <img src={quoteIcon} className=""></img>

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


        <div className=" bg-[#FAFAFA] md:hidden block w-full h-[591px] py-8 px-4">
          <Slider {...settings}>
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="text-center w-[361px] h-[495px] px-4 py-10 bg-white"
              >
              

                <div className="flex justify-center ">
                  <img
                    src={testimonial.image}
                    alt={`${testimonial.name}`}
                    className="w-[100px] h-[100px] rounded-full"
                  />
                </div>
                <img src={quoteIcon} className="mt-10"></img>
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
