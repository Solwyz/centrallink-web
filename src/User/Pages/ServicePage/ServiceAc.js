import React from "react";
import interiorOffice from "../../../Assets/Service/serviceDetail.png";
import interiorOfficeMob from "../../../Assets/Service/ServiceMob.png";

function ServiceAc() {
  return (
    <div className="pt-[118px] md:px-[120px] px-4">
      {/* Main Heading */}
      <h2 className="text-[#817140] font-normal text-[40px] mt-10 font-milchella text-center">
        AC Service and Installation
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
          We offer professional installation services for a wide range of air
          conditioning systems, including split, ducted, and central units. Our
          team ensures precise installation for optimal cooling performance,
          energy efficiency, and seamless operation.  
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
              AC Installation
            </h4>
            <p className="mt-4 text-[#252012] text-justify text-base font-normal leading-[28px]">
              We offer professional installation services for a wide range of air conditioning systems, including split, ducted, and central units. Our team ensures precise installation for optimal cooling performance, energy efficiency, and seamless operation.
            </p>
          </div>

          {/* Service 2 */}
          <div className="mt-10">
            <h4 className="text-[#252012] text-base font-semibold ">
              Routine AC Maintenance
            </h4>
            <p className="mt-4 text-[#252012] text-justify text-base font-normal leading-[28px]">
              Keep your air conditioning systems running smoothly with our regular maintenance services. From cleaning filters and coils to checking refrigerant levels, we conduct thorough inspections to prevent breakdowns and ensure efficient operation.
            </p>
          </div>

          {/* Service 3 */}
          <div className="mt-10">
            <h4 className="text-[#252012] text-base font-semibold ">
              AC Repair Services
            </h4>
            <p className="mt-4 text-[#252012] text-justify text-base font-normal leading-[28px]">
              Our skilled technicians provide quick and reliable repairs for all types of AC units. Whether it’s a refrigerant leak, electrical issue, or malfunctioning compressor, we resolve issues promptly to restore your cooling comfort.
            </p>
          </div>

          {/* Service 4 */}
          <div className="mt-10">
            <h4 className="text-[#252012] text-base font-semibold ">
              Ductwork Cleaning and Maintenance
            </h4>
            <p className="mt-4 text-[#252012] text-justify text-base font-normal leading-[28px]">
              We offer comprehensive duct cleaning and maintenance services to improve air quality and system efficiency. Our services eliminate dust, allergens, and debris, ensuring clean and healthy airflow throughout your space.
            </p>
          </div>

          {/* Service 5 */}
          <div className="mt-10">
            <h4 className="text-[#252012] text-base font-semibold ">
              Energy-Efficient Upgrades
            </h4>
            <p className="mt-4 text-[#252012] text-justify text-base font-normal leading-[28px]">
              Upgrade your existing air conditioning systems with energy-efficient solutions to reduce electricity consumption and lower utility bills. Our team recommends and implements cost-effective upgrades that align with your cooling needs.
            </p>
          </div>

          {/* Service 6 */}
          <div className="mt-10">
            <h4 className="text-[#252012] text-base font-semibold ">
              Smart AC Solutions
            </h4>
            <p className="mt-4 text-[#252012] text-justify text-base font-normal leading-[28px]">
              Stay ahead with smart air conditioning systems that provide remote control and automation capabilities. We install and configure smart thermostats and AC units, allowing you to optimize cooling and save energy effortlessly.
            </p>
          </div>

          {/* Service 7 */}
          <div className="mt-10">
            <h4 className="text-[#252012] text-base font-semibold ">
              Emergency AC Services
            </h4>
            <p className="mt-4 text-[#252012] text-justify text-base font-normal leading-[28px]">
              Our emergency AC services are available 24/7 to address sudden breakdowns or cooling issues. We prioritize quick response times to ensure minimal disruption to your comfort or operations.
            </p>
          </div>

          {/* Service 8 */}
          <div className="mt-10">
            <h4 className="text-[#252012] text-base font-semibold ">
              AC System Relocation
            </h4>
            <p className="mt-4 text-[#252012] text-justify text-base font-normal leading-[28px]">
              Need to relocate your air conditioning unit? Our team provides safe and efficient AC system relocation services, ensuring proper disassembly, transport, and reinstallation with minimal hassle.
            </p>
          </div>

          {/* Service 9 */}
          <div className="mt-10">
            <h4 className="text-[#252012] text-base font-semibold ">
              Commercial and Industrial Cooling Systems
            </h4>
            <p className="mt-4 text-[#252012] text-justify text-base font-normal leading-[28px]">
              We specialize in the installation and maintenance of large-scale cooling systems for offices, warehouses, factories, and other commercial or industrial facilities. Our services ensure reliable cooling for high-demand environments.
            </p>
          </div>

          {/* Service 10 */}
          <div className="mt-10">
            <h4 className="text-[#252012] text-base font-semibold ">
              Customized Cooling Solutions
            </h4>
            <p className="mt-4 text-[#252012] text-justify text-base font-normal leading-[28px]">
              Whether it’s for a single room or an entire building, we design and implement cooling solutions tailored to your specific requirements. From selecting the right unit to optimizing airflow, we deliver systems that maximize comfort and efficiency.
            </p>
          </div>

        </div>
      </div>
    </div>
  );
}

export default ServiceAc;
