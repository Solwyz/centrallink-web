import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import bgImg from "../../../Assets/About/BG.png";
import luxe from "../../../Assets/About/luxe.png";
import ambience from "../../../Assets/About/ambience.png";
import elegant from "../../../Assets/About/elegant.png";

function AboutPage() {
  return (
    <div className="md:px-[120px]">
      <div className="hidden md:flex items-center justify-center">
        <img src={bgImg} className="h-[572px]" alt="" />
      </div>
      <div className="hidden px-[152px] py-[56px] md:block mx-auto translate-y-[-90px] w-[895px] h-[316px] bg-[#F6F6F6]">
        <h2 className="font-milchella font-normal text-[40px] text-center text-[#817140]">
          Our Core, Our Commitment.
        </h2>
        <p className="text-base text-[#252012] text-center mt-6 font-normal leading-[28px]">
          At Central Link, we craft exceptional spaces that harmonize function
          and style. Driven by innovation, quality craftsmanship, and attention
          to detail, we exceed expectations. From concept to completion, we
          provide bespoke solutions for residential, commercial, and industrial
          interiors, transforming visions into reality with precision and
          dedication.
        </p>
      </div>

      <div className="md:hidden bg-aboutBgmob w-full bg-cover px-4 py-[88px] h-[584px]">
        <div className="px-[16px] py-[48px] w-full h-[408px] bg-[#F6F6F6]">
          <h2 className="font-milchella font-normal text-[32px] leading-[32px] text-center text-[#817140]">
            Our Core, <br /> Our Commitment.
          </h2>
          <p className="text-base text-[#252012] text-center justify-center mt-6 font-normal leading-[28px]">
            At Central Link, we craft exceptional spaces that harmonize function
            and style. Driven by innovation, quality craftsmanship, and
            attention to detail, we exceed expectations. From concept to
            completion, we provide bespoke solutions for residential,
            commercial, and industrial interiors, transforming visions into
            reality with precision and dedication.
          </p>
        </div>
      </div>

      <div className="px-6 md:px-0 mt-[120px]">
        <h1 className="text-[#252012] text-[24px] font-semibold">Our Company</h1>
        <p className="text-[#252012] font-semibold mt-4 text-justify leading-[28px]">
          Welcome to Central Link, a trusted name in the interior construction
          industry. With years of experience and a passion for excellence, we
          are committed to transforming spaces into functional, aesthetic
          masterpieces. Our expertise spans residential, commercial, and
          industrial projects, delivering tailored solutions that reflect the
          unique vision of each client. At Central Link, innovation is at the
          core of everything we do. We blend cutting-edge technology, modern
          design trends, and unparalleled craftsmanship to create spaces that
          inspire. Whether it's a cozy home, a dynamic office environment, or a
          state-of-the-art industrial facility, our team approaches every
          project with precision and dedication. Quality and client satisfaction
          are the pillars of our success. We pride ourselves on our attention to
          detail, ensuring that every aspect of a project meets the highest
          standards. From the initial concept to the final execution, we work
          closely with our clients, transforming their ideas into reality.
          Choose Central Link for interior construction that goes beyond
          expectations. Together, let’s create spaces that are not only
          beautiful but also purposeful and enduring.
        </p>
      </div>

      <div className="mt-[48px]">
        <Swiper
          spaceBetween={20}
          slidesPerView={1}
          autoplay={{
            delay: 3000, // Time between slides in milliseconds
            disableOnInteraction: false, // Continue autoplay after user interaction
          }}

          breakpoints={{
            640: {
              slidesPerView: 1,
            },
            768: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 3,
            },
          }}
        >
          <SwiperSlide>
            <div className="flex flex-col items-center  ">
              <img src={luxe} className="w-[387px] h-[517px]" alt="Luxe" />
              <h3 className="px-[22px]  translate-y-[-48px] text-white font-semibold text-[24px]">
                Luxe
              </h3>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="flex flex-col items-center">
              <img src={elegant} className="w-[387px] h-[517px]" alt="Elegant" />
              <h3 className="px-[22px] translate-y-[-48px]  text-white font-semibold text-[24px]">
                Elegant
              </h3>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="flex flex-col items-center ">
              <img src={ambience} className="w-[388px] h-[517px]" alt="Ambiance" />
              <h3 className="px-[22px]  translate-y-[-48px] text-white font-semibold text-[24px]">
                Ambiance
              </h3>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>


      <div className="relative w-full ">
      {/* Video Background */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover"
      >
        <source src="/Videos/bannerVid.mp4" type="video/mp4" />
        
      </video>

      {/* Dark Overlay */}
      <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-50"></div>

      {/* Overlay Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-white px-4 text-center">
        <h1 className="text-4xl md:text-6xl font-bold font-milchella mb-6">
          Redefining the art of interior design
        </h1>
        <div className="flex flex-col md:flex-row md:space-x-12 space-y-6 md:space-y-0">
          {/* Mission Section */}
          <div className="text-center">
            <div className="bg-yellow-500 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4">
              {/* Mission Icon */}
              <img
                src="path-to-mission-icon.svg"
                alt="Mission Icon"
                className="w-6 h-6"
              />
            </div>
            <h2 className="text-xl font-semibold">Our Mission</h2>
            <p className="text-sm mt-2">
              "To drive meaningful action towards reducing carbon footprints
              for a sustainable tomorrow."
            </p>
          </div>

          {/* Vision Section */}
          <div className="text-center">
            <div className="bg-yellow-500 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4">
              {/* Vision Icon */}
              <img
                src="path-to-vision-icon.svg"
                alt="Vision Icon"
                className="w-6 h-6"
              />
            </div>
            <h2 className="text-xl font-semibold">Our Vision</h2>
            <p className="text-sm mt-2">
              "To drive meaningful action towards reducing carbon footprints
              for a sustainable tomorrow."
            </p>
          </div>
        </div>
      </div>
    </div>


    </div>
  );
}

export default AboutPage;
