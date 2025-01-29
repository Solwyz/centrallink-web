import React from "react";
import interiorOffice from "../../../Assets/Service/serviceDetail.png";
import interiorOfficeMob from "../../../Assets/Service/ServiceMob.png";

function ServicePlumbing() {
  return (
    <div className="pt-[118px] md:px-[120px] px-4">
      {/* Main Heading */}
      <h2 className="text-[#817140] font-normal text-[40px] mt-10 font-milchella text-center">
        Plumbing Work{" "}
      </h2>

      <div className="md:flex md:pl-[5px] mt-8 md:mt-[56px]">
        {/* Image */}
        <div className="hidden md:block">
          <img
            src={interiorOffice}
            alt="Office Interior"
            className="md:w-[584px]  md:h-[287px] "
          />
        </div>
        <div className="md:hidden block">
          <img
            src={interiorOfficeMob}
            alt="Office Interior"
            className="md:w-[361px]  md:h-[221px] "
          />
        </div>
        <p className="md:w-[590px] mt-10 md:mt-0 md:ml-5 leading-[28px] text-base text-[#252012] text-justify font-normal">
          Our professional plumbing services are designed to meet the needs of
          residential, commercial, and industrial projects. With a commitment to
          quality and reliability, we handle everything from installations to
          repairs, ensuring a seamless flow of water and efficient waste
          management. Our expert team delivers solutions that combine
          functionality, durability, and compliance with the highest standards.
        </p>
      </div>

      {/* Services Section */}
      <div className="mt-[120px] md:mt-[88px]">
        <h3 className="text-[24px] font-semibold  text-center">
          Our Comprehensive Services
        </h3>
        <div className="mt-[56px] text-start ">

          {/* Service 1 */}
          <div>
            <h4 className="text-[#252012] text-base font-semibold ">
              Plumbing System Installation
            </h4>
            <p className="mt-4 text-[#252012] text-justify text-base font-normal leading-[28px]">
              We provide end-to-end installation of plumbing systems, including water supply lines, drainage systems, and fixtures. Whether it’s a new construction project or a renovation, our team ensures precise execution for reliable performance.
            </p>
          </div>

          {/* Service 2 */}
          <div className="mt-10">
            <h4 className="text-[#252012] text-base font-semibold ">
              Pipe Repair and Replacement
            </h4>
            <p className="mt-4 text-[#252012] text-justify text-base font-normal leading-[28px]">
              Our skilled technicians quickly identify and repair leaks, cracks, or blockages in pipes. For damaged or outdated pipelines, we offer replacement services using high-quality materials to ensure long-lasting durability.
            </p>
          </div>

          {/* Service 3 */}
          <div className="mt-10">
            <h4 className="text-[#252012] text-base font-semibold ">
              Water Heater Installation and Maintenance
            </h4>
            <p className="mt-4 text-[#252012] text-justify text-base font-normal leading-[28px]">
              From installing energy-efficient water heaters to providing regular maintenance and repairs, we ensure a consistent supply of hot water tailored to your needs. Our solutions include tankless water heaters, solar heaters, and traditional systems.
            </p>
          </div>

          {/* Service 4 */}
          <div className="mt-10">
            <h4 className="text-[#252012] text-base font-semibold ">
              Bathroom and Kitchen Plumbing
            </h4>
            <p className="mt-4 text-[#252012] text-justify text-base font-normal leading-[28px]">
              We handle the installation, repair, and maintenance of plumbing fixtures in bathrooms and kitchens, including sinks, faucets, showers, bathtubs, and toilets. Our team ensures functionality while focusing on aesthetics and efficiency.
            </p>
          </div>

          {/* Service 5 */}
          <div className="mt-10">
            <h4 className="text-[#252012] text-base font-semibold ">
              Drainage System Services
            </h4>
            <p className="mt-4 text-[#252012] text-base text-justify font-normal leading-[28px]">
              Keep your drainage system in top condition with our comprehensive services, including cleaning, unclogging, and repairs. We use advanced tools and techniques to resolve blockages and prevent flooding or water damage.
            </p>
          </div>

          {/* Service 6 */}
          <div className="mt-10">
            <h4 className="text-[#252012] text-base font-semibold ">
              Sewage and Wastewater Management
            </h4>
            <p className="mt-4 text-[#252012] text-base text-justify font-normal leading-[28px]">
              Our experts provide solutions for efficient sewage and wastewater systems, including installation, repairs, and maintenance. We ensure compliance with environmental regulations and the smooth operation of your building's waste management systems.
            </p>
          </div>

          {/* Service 7 */}
          <div className="mt-10">
            <h4 className="text-[#252012] text-base font-semibold ">
              Water Filtration and Softening Systems
            </h4>
            <p className="mt-4 text-[#252012] text-base text-justify font-normal leading-[28px]">
              Enhance water quality with our installation and maintenance of water filtration and softening systems. We offer customized solutions to address hard water issues and ensure clean, safe water for your home or business.
            </p>
          </div>

          {/* Service 8 */}
          <div className="mt-10">
            <h4 className="text-[#252012] text-base font-semibold ">
              Plumbing Inspections and Maintenance
            </h4>
            <p className="mt-4 text-[#252012] text-base text-justify font-normal leading-[28px]">
              Prevent potential plumbing issues with our regular inspection and maintenance services. Our team identifies problems early, providing cost-effective solutions to extend the life of your plumbing systems.
            </p>
          </div>

          {/* Service 9 */}
          <div className="mt-10">
            <h4 className="text-[#252012] text-base font-semibold ">
              Emergency Plumbing Services
            </h4>
            <p className="mt-4 text-[#252012] text-base text-justify font-normal leading-[28px]">
              Available 24/7, our emergency plumbing services address urgent issues such as burst pipes, severe leaks, or clogged drains. We respond quickly to minimize damage and restore normalcy.
            </p>
          </div>

        </div>
      </div>
    </div>
  );
}

export default ServicePlumbing;
