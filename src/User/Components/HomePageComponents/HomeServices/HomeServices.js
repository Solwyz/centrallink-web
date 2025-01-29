import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Api from "../../../../Admin/Services/Api"; // Ensure this is correctly configured

function HomeServices() {
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

  return (
    <div className="md:mt-[168px] mt-[120px] px-4 md:px-[120px]">
      <h2 className="text-center text-[32px] font-milchella font-normal md:text-[40px] text-[#817140]">
        Our Best Services
      </h2>

      {isLoading ? (
        <p className="text-center mt-10 text-lg text-gray-500">Loading services...</p>
      ) : services.length === 0 ? (
        <p className="text-center mt-10 text-lg text-gray-500">No services available.</p>
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
  );
}

export default HomeServices;
