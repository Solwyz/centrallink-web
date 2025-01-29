import React from "react";
import Contact from "../../Components/ContactPage/Contact";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

import ServiceBg from "../../../Assets/Service/Rectangle 5537.png";
import serviceMob from "../../../Assets/Service/Rectangle 5537 (1).png";

import interior from "../../../Assets/Home/services/officeInterior.png";
import Maintenance from "../../../Assets/Home/services/buildingMaint.png";
import Demolition from "../../../Assets/Home/services/demolition.png";
import Electrical from "../../../Assets/Home/services/electricalWork.png";
import Plumbing from "../../../Assets/Home/services/plumbing.png";
import Voice from "../../../Assets/Home/services/voiceandData.png";
import Ac from "../../../Assets/Home/services/Ac.png";
import iconInt from "../../../Assets/Home/services/interiorIcon.png";
import iconDemol from "../../../Assets/Home/services/demolIco.svg";
import iconMaint from "../../../Assets/Home/services/maintIco.svg";
import iconEc from "../../../Assets/Home/services/electricalIco.svg";
import iconPlumb from "../../../Assets/Home/services/plumbIco.svg";
import iconVoice from "../../../Assets/Home/services/voiceIco.svg";
import iconAc from "../../../Assets/Home/services/AcIco.svg";

import { useNavigate } from "react-router-dom";

const servicesData = [
  {
    id: 1,
    title: "Office Interior",
    description:
      "Enhance productivity and aesthetics with tailored office interiors that maximize functionality and create a comfortable, professional environment for your business. ",
    icon: iconInt,
    image: interior,
    link: "/services/details/office-interior", // Add link for each service
  },
  {
    id: 2,
    title: "Building Maintenance",
    description:
      "Ensure seamless operations with our expert building maintenance solutions, addressing repairs, upgrades, and preventive care for a durable and efficient property. ",
    icon: iconMaint,
    image: Maintenance,
    link: "/services/details/building-maintenace",
  },
  {
    id: 3,
    title: "Demolition",
    description:
      "Efficient, safe, and controlled demolition services designed to clear spaces while prioritizing safety and environmental standards for your next project. ",
    icon: iconDemol,
    image: Demolition,
    link: "/services/details/demolition",
  },
  {
    id: 4,
    title: "Electrical Work",
    description:
      "Reliable electrical installations, repairs, and maintenance ensure safety, energy efficiency, and uninterrupted power for residential, commercial, and industrial spaces. ",
    icon: iconEc,
    image: Electrical,
    link: "/services/details/electrical",
  },
  {
    id: 5,
    title: "Plumbing Work",
    description:
      "Comprehensive plumbing solutions addressing installations, maintenance, and emergency repairs to keep your systems running smoothly and leak-free. ",
    icon: iconPlumb,
    image: Plumbing,
    link: "/services/details/plumbing",
  },
  {
    id: 6,
    title: "Voice and Data Work",
    description:
      "Upgrade your communication systems with reliable voice and data infrastructure. Our advanced solutions ensure seamless connectivity for homes, offices, and industries.",
    icon: iconVoice,
    image: Voice,
    link: "/services/details/voice",
  },
  {
    id: 7,
    title: "AC Service and Installation",
    description:
      "Stay comfortable with our AC services. From expert installations to maintenance and repairs, we provide efficient cooling solutions customized for residential and commercial spaces. ",
    icon: iconAc,
    image: Ac,
    link: "/services/details/ac",
  },
];

function ServicePage() {
  const navigate = useNavigate();
  const { ref: firstRowRef, inView: firstRowInView } = useInView({
    triggerOnce: true,
  });
  const { ref: secondRowRef, inView: secondRowInView } = useInView({
    triggerOnce: true,
  });
  // Split the data into two groups
  const firstRow = servicesData.slice(0, 4); // First 4 services
  const secondRow = servicesData.slice(4);
  const fadeInUp = {
    hidden: { opacity: 0, y: 50 }, // Initial state (invisible and below the screen)
    visible: { opacity: 1, y: 0 }, // Final state (visible and in position)
  };
  return (
    <div className="pt-[120px]">
      <div className="md:px-[120px] md:mt-10 px-4 mt-4">
        <h2 className="text-center text-[32px] font-milchella font-normal md:text-[40px] text-[#817140]">
          Our Best Services
        </h2>
        <div className="hidden md:block mt-[72px]">
          <img src={ServiceBg} className="h-[287px] w-full" alt="" />
        </div>
        <div className="md:hidden block mt-10">
          <img src={serviceMob} className="h-[287px] w-full" alt="" />
        </div>
        <motion.p
        className="mt-[48px] text-[#252012] text-base font-normal leading-[28px] text-justify"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }} // Trigger animation when 20% of text is in view
        transition={{ duration: 1, ease: "easeIn" }} // Smooth animation
        variants={fadeInUp}
      >
        At Central Link, we take pride in offering a diverse range of exceptional
        services tailored to meet your unique needs. Our expertise includes
        Office Interior design that blends functionality and aesthetics, Building
        Maintenance solutions to ensure lasting durability, and Demolition
        services executed with precision and safety. We specialize in Electrical
        Work, delivering efficient installations and repairs, as well as Plumbing
        Work for seamless water and drainage systems. Our Voice and Data Work
        ensures robust communication infrastructure, while our A/C Service and
        Installation provides reliable cooling solutions for any space.
      </motion.p>
      </div>

      <div className="md:px-[120px] mt-[56px] md:mt-[168px] px-4">
        {/* First Row - 4 Services */}
        <motion.div
          ref={firstRowRef}
          initial={{ opacity: 0, y: 50 }}
          animate={{
            opacity: firstRowInView ? 1 : 0,
            y: firstRowInView ? 0 : 50,
          }}
          transition={{ duration: 0.7 }}
          className="grid grid-cols-1 md:grid-cols-4 mt-[40px] md:mt-[56px] gap-y-[48px] gap-x-5"
        >
          {firstRow.map((service) => (
            <div
              key={service.id}
              className="bg-white min-h-[500px] shadow-lg overflow-hidden cursor-pointer transform transition-all hover:shadow-[0px_21px_21px_0px_rgba(0,0,0,0.16)]"
              onClick={() => navigate(service.link)}
            >
              {/* Service Image */}
              <motion.img
                src={service.image}
                alt={service.title}
                className="w-full h-[231px]"
                initial={{ opacity: 0 }}
                animate={{ opacity: firstRowInView ? 1 : 0 }}
                transition={{ duration: 0.5 }}
              />

              {/* Icon + Content */}
              <div className="p-4">
                <div className="flex justify-end translate-y-[-50px]">
                  <div className="bg-[#F3F4F6] rounded-full h-[64px] w-[64px] flex items-center justify-center shadow-md">
                    <img
                      src={service.icon}
                      alt={`${service.title} Icon`}
                      className="h-[64px] w-[64px]"
                    />
                  </div>
                </div>
                <div className="text-lg font-bold mt-[-48px] px-4 text-[#947F41] text-start">
                  {service.title}
                </div>
                <p className="text-sm font-medium text-[#947F41] p-4 text-pretty leading-[23px]">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </motion.div>

        {/* Second Row - Remaining Services */}
        {secondRow.length > 0 && (
          <motion.div
            ref={secondRowRef}
            initial={{ opacity: 0, y: 50 }}
            animate={{
              opacity: secondRowInView ? 1 : 0,
              y: secondRowInView ? 0 : 50,
            }}
            transition={{ duration: 0.7 }}
            className="grid grid-cols-1 md:px-[150px] md:grid-cols-3 mt-[40px] gap-y-[48px] gap-x-5 justify-center"
          >
            {secondRow.map((service) => (
              <div
                key={service.id}
                className="bg-white min-h-[500px] shadow-lg overflow-hidden cursor-pointer transform transition-all hover:shadow-[0px_21px_21px_0px_rgba(0,0,0,0.16)]"
                onClick={() => navigate(service.link)}
              >
                {/* Service Image */}
                <motion.img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-[231px]"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: secondRowInView ? 1 : 0 }}
                  transition={{ duration: 0.5 }}
                />

                {/* Icon + Content */}
                <div className="p-4">
                  <div className="flex justify-end translate-y-[-50px]">
                    <div className="bg-[#F3F4F6] rounded-full h-[64px] w-[64px] flex items-center justify-center shadow-md">
                      <img
                        src={service.icon}
                        alt={`${service.title} Icon`}
                        className="h-[64px] w-[64px]"
                      />
                    </div>
                  </div>
                  <div className="text-lg font-bold mt-[-48px] px-4 text-[#947F41] text-start">
                    {service.title}
                  </div>
                  <p className="text-sm font-medium text-[#947F41] p-4 text-pretty leading-[23px]">
                    {service.description}
                  </p>
                </div>
              </div>
            ))}
          </motion.div>
        )}
      </div>
      <Contact />
    </div>
  );
}

export default ServicePage;
