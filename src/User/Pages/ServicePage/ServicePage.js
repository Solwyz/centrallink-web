import React, { useEffect, useState } from "react";
import Contact from "../../Components/ContactPage/Contact";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import ServiceBg from "../../../Assets/Service/Rectangle 5537.png";
import serviceMob from "../../../Assets/Service/Rectangle 5537 (1).png";
import Api from "../../../Admin/Services/Api"; // Ensure this is correctly configured
import { useNavigate } from "react-router-dom";

function ServicePage() {
  const navigate = useNavigate();
  const { ref, inView } = useInView({ triggerOnce: true });

  const [services, setServices] = useState([]); // Initialize as an empty array
  const [isLoading, setIsLoading] = useState(true);
  const token = localStorage.getItem("adminAuthToken");

  // Fetch Services from API
  useEffect(() => {
    Api.get("api/services")
      .then((response) => {
        setServices(response.data || []); // Ensure it's an array
        setIsLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching services:", error);
        setIsLoading(false);
      });
  }, []);
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
          At Central Link, we take pride in offering a diverse range of
          exceptional services tailored to meet your unique needs. Our expertise
          includes Office Interior design that blends functionality and
          aesthetics, Building Maintenance solutions to ensure lasting
          durability, and Demolition services executed with precision and
          safety. We specialize in Electrical Work, delivering efficient
          installations and repairs, as well as Plumbing Work for seamless water
          and drainage systems. Our Voice and Data Work ensures robust
          communication infrastructure, while our A/C Service and Installation
          provides reliable cooling solutions for any space.
        </motion.p>
      </div>

      <div className="md:px-[120px] mt-[56px] md:mt-[168px] px-4">
        {isLoading ? (
          <p className="text-center mt-10 text-lg text-gray-500">
            Loading services...
          </p>
        ) : services.length === 0 ? (
          <p className="text-center mt-10 text-lg text-gray-500">
            No services available.
          </p>
        ) : (
          <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 50 }}
            transition={{ duration: 0.7 }}
            className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 mt-[40px] gap-y-[48px] gap-x-5"
          >
            {services.map((service) => (
              <div
                key={service.id}
                className="bg-white min-h-[500px] shadow-lg overflow-hidden cursor-pointer transform transition-all hover:shadow-[0px_21px_21px_0px_rgba(0,0,0,0.16)]"
                onClick={() => navigate(`/services/details/${service.id}`)}
              >
                <motion.img
                  src={`data:image/png;base64,${service.photo}`}
                  alt={service.title}
                  className="w-full h-[231px]"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: inView ? 1 : 0 }}
                  transition={{ duration: 0.5 }}
                />

                <div className="p-4">
                  <div className="flex justify-end translate-y-[-50px]">
                    <div className="bg-[#F3F4F6] rounded-full h-[64px] w-[64px] flex items-center justify-center shadow-md">
                      <img
                        src={`data:image/${service.iconType};base64,${service.icon}`}
                        alt={`${service.title} Icon`}
                        className="h-[64px] w-[64px] rounded-full"
                      />
                    </div>
                  </div>
                  <div className="text-lg font-bold mt-[-48px] px-4 text-[#947F41] text-start">
                    {service.title}
                  </div>
                  <p className="text-sm font-medium text-[#947F41] p-4 text-pretty leading-[23px]">
                    {service.shortDescription}
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
