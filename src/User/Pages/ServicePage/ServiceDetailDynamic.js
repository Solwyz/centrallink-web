import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Api from "../../../Admin/Services/Api"; // Ensure this is correctly configured

function ServiceDetailDynamic() {
  const { id } = useParams();
  const [service, setService] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    Api.get(`/api/services/${id}`) // Ensure the backend allows access without a token
    .then((response) => {
      setService(response.data);
      setIsLoading(false);
    })
    .catch((error) => {
      console.error("Error fetching service details:", error);
      setIsLoading(false);
    });
}, [id]);

  if (isLoading) {
    return <p className="text-center pt-[140px]  text-lg text-gray-500">Loading...</p>;
  }

  if (!service) {
    return <p className="text-center pt-[140px]  text-lg text-gray-500">Service not found.</p>;
  }

  return (
    <div className="pt-[118px] md:px-[120px] px-4">
      {/* Main Heading */}
      <h2 className="text-[#817140] font-normal text-[40px] mt-10 font-milchella text-center">
        {service.title}
      </h2>

      <div className="md:flex md:pl-[5px] mt-8 md:mt-[56px]">
        {/* Image */}
        <div className="hidden md:block">
          <img
            src={`data:image/png;base64,${service.photo}`}
            alt={service.title}
            className="md:w-[584px] md:h-[287px]"
          />
        </div>
        <div className="md:hidden block">
          <img
            src={`data:image/png;base64,${service.photo}`}
            alt={service.title}
            className="w-[361px] h-[221px]"
          />
        </div>

        <p className="md:w-[590px] mt-10 md:mt-0 md:ml-5 leading-[28px] text-base text-[#252012] text-justify font-normal">
          {service.shortDescription}
        </p>
      </div>

      {/* Services Section */}
      <div className="mt-[120px] md:mt-[88px]">
        <h3 className="text-[24px] font-semibold text-center">
          Our Comprehensive Services
        </h3>
          {/* Service Description */}
          <div className="mt-[56px] ">
            <h4 className="text-[#252012] text-justify text-base font-normal">
              {service.mainDescription}
            </h4>
        </div>
      </div>
    </div>
  );
}

export default ServiceDetailDynamic;
