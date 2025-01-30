import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import bgImg from "../../../Assets/About/BG.png";
import luxe from "../../../Assets/About/luxe.png";
import ambience from "../../../Assets/About/ambience.png";
import elegant from "../../../Assets/About/elegant.png";
import videoSrc from "../../../Assets/About/video.mp4";
import mission from "../../../Assets/About/Mission.svg";
import vision from "../../../Assets/About/Vision.svg";
import { motion } from "framer-motion";
import People from "../../Components/OurPeople/People";

function AboutPage() {
  // Animation Variants
  const fadeInFromLeft = {
    hidden: { opacity: 0, x: -50 }, // Start off-screen to the left
    visible: { opacity: 1, x: 0 }, // Fade in and move to the center
  };

  const parentVariants = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 1.5, // Delay between child animations (1.5 seconds)
      },
    },
  };
  const fadeIn = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  const slideIn = {
    hidden: { opacity: 0, y: -100 },
    visible: { opacity: 1, x: 0 },
  };

  return (
    <div>
      <div className="md:px-[120px] md:pt-0 pt-[118px]">
        <motion.div
          className="hidden md:flex items-center justify-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 1 }}
          variants={fadeIn}
        >
          <img src={bgImg} className="h-[572px] w-full" alt="" />
        </motion.div>
        <motion.div
          className="hidden px-[152px] py-[56px] md:block mx-auto translate-y-[-90px] w-[895px] h-[316px] bg-[#F6F6F6]"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 1, delay: 0.2 }}
          variants={slideIn}
        >
          {" "}
          <h2 className="font-milchella font-normal text-[40px] text-center text-[#817140]">
            Our Core, Our Commitment.
          </h2>
          <p className="text-base text-[#252012] text-center mt-6 font-normal leading-[28px]">
            At Central Link, we craft exceptional spaces that harmonize function
            and style. Driven by innovation, quality craftsmanship, and
            attention to detail, we exceed expectations. From concept to
            completion, we provide bespoke solutions for residential,
            commercial, and industrial interiors, transforming visions into
            reality with precision and dedication.
          </p>
        </motion.div>

        <div className="md:hidden bg-aboutBgmob w-full bg-cover px-4 py-[88px] h-[584px]">
          <motion.div
            className="px-[16px] py-[48px] w-full h-[408px] bg-[#F6F6F6]"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 1, delay: 0.3 }}
            variants={fadeIn}
          >
            <h2 className="font-milchella font-normal text-[32px] leading-[32px] text-center text-[#817140]">
              Our Core, <br /> Our Commitment.
            </h2>
            <p className="text-base text-[#252012] text-center justify-center mt-6 font-normal leading-[28px]">
              At Central Link, we craft exceptional spaces that harmonize
              function and style. Driven by innovation, quality craftsmanship,
              and attention to detail, we exceed expectations. From concept to
              completion, we provide bespoke solutions for residential,
              commercial, and industrial interiors, transforming visions into
              reality with precision and dedication.
            </p>
          </motion.div>
        </div>

        <motion.div
          className="px-6 md:px-0 mt-[120px] md:mt-[40px]"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 1 }}
          variants={fadeIn}
        >
          {" "}
          <h1 className="text-[#252012] text-[24px] font-semibold">
            Our Company
          </h1>
          <p className="text-[#252012] font-semibold mt-4 text-justify leading-[28px]">
            Welcome to Central Link, a trusted name in the interior construction
            industry. With years of experience and a passion for excellence, we
            are committed to transforming spaces into functional, aesthetic
            masterpieces. Our expertise spans residential, commercial, and
            industrial projects, delivering tailored solutions that reflect the
            unique vision of each client. At Central Link, innovation is at the
            core of everything we do. We blend cutting-edge technology, modern
            design trends, and unparalleled craftsmanship to create spaces that
            inspire. Whether it's a cozy home, a dynamic office environment, or
            a state-of-the-art industrial facility, our team approaches every
            project with precision and dedication. Quality and client
            satisfaction are the pillars of our success. We pride ourselves on
            our attention to detail, ensuring that every aspect of a project
            meets the highest standards. From the initial concept to the final
            execution, we work closely with our clients, transforming their
            ideas into reality. Choose Central Link for interior construction
            that goes beyond expectations. Together, let’s create spaces that
            are not only beautiful but also purposeful and enduring.
          </p>
        </motion.div>

        <div className="mt-[48px]">
          <Swiper
            spaceBetween={20}
            slidesPerView={1}
            autoplay={{
              delay: 300, // Time between slides in milliseconds
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
              <motion.div
                className="flex flex-col items-center"
                initial="hidden"
                animate="visible"
                transition={{ duration: 1 }}
                variants={fadeIn}
              >
                <img src={luxe} className="w-[387px] h-[517px]" alt="Luxe" />
                <h3 className="px-[22px] translate-y-[-48px] text-white font-semibold text-[24px]">
                  Luxe
                </h3>
              </motion.div>
            </SwiperSlide>

            {/* Slide 2 */}
            <SwiperSlide>
              <motion.div
                className="flex flex-col items-center"
                initial="hidden"
                animate="visible"
                transition={{ duration: 1 }}
                variants={fadeIn}
              >
                <img
                  src={elegant}
                  className="w-[387px] h-[517px]"
                  alt="Elegant"
                />
                <h3 className="px-[22px] translate-y-[-48px] text-white font-semibold text-[24px]">
                  Elegant
                </h3>
              </motion.div>
            </SwiperSlide>

            {/* Slide 3 */}
            <SwiperSlide>
              <motion.div
                className="flex flex-col items-center"
                initial="hidden"
                animate="visible"
                transition={{ duration: 1 }}
                variants={fadeIn}
              >
                <img
                  src={ambience}
                  className="w-[388px] h-[517px]"
                  alt="Ambiance"
                />
                <h3 className="px-[22px] translate-y-[-48px] text-white font-semibold text-[24px]">
                  Ambiance
                </h3>
              </motion.div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>

      <div className="relative mt-[100px]">
        {/* Video Background */}
        <video
          src={videoSrc}
          autoPlay
          loop
          muted
          className="md:h-[572px] h-[605px] w-full object-cover"
        />

        {/* Gradient Overlay */}
        <div
          className="absolute inset-0 bg-gradient-to-t from-[#000000A6] to-transparent"
          style={{
            background: "linear-gradient(to top, #000000A6 65%, transparent)",
          }}
        ></div>

        {/* Content Overlay */}
        <div className="absolute inset-0 flex flex-col pt-[64px] md:pt-[180px] py-[10px] text-white ">
          <h1 className="text-[32px] md:text-[40px] leading-[32px] md:leading-[40px]  font-milchella px-4 md:px-0 font-normal text-center">
            Redefining the art of interior design
          </h1>
          <div className="flex flex-col md:flex-row gap-10 md:px-[120px] px-4 justify-between mt-[80px] md:mt-[104px] ">
            {/* Mission */}
            <div className="flex md:w-[492px] w-full">
              <img src={mission} alt="" />
              <div className="text-start ml-4">
                <h2 className="text-[24px] font-semibold ">Our Mission</h2>
                <p className="text-base leading-[24px] text-start font-normal mt-3">
                  "To design inspiring interiors that balance sustainability,
                  functionality, and timeless beauty."
                </p>
              </div>
            </div>
            {/* Vision */}
            <div className="flex md:w-[492px] w-full mt-[54px] md:mt-0 md:ml-[216px]">
              <img src={vision} alt="" />
              <div className="text-start ml-4">
                <h2 className="text-[24px]  font-semibold ">Our Vision</h2>
                <p className="text-base leading-[24px] font-normal text-start  mt-3">
                  "To lead the industry in creating sustainable, innovative, and
                  people-centered interior solutions."
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

<People/>
    </div>
  );
}

export default AboutPage;
