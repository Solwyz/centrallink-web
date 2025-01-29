import React from "react";
import interiorOffice from "../../../Assets/Service/serviceDetail.png";
import interiorOfficeMob from "../../../Assets/Service/ServiceMob.png";

function ServiceElectrical() {
  return (
    <div className="pt-[118px] md:px-[120px] px-4">
      {/* Main Heading */}
      <h2 className="text-[#817140] font-normal text-[40px] mt-10 font-milchella text-center">
        Electrical Work{" "}
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
          Our comprehensive electrical services are tailored to meet the diverse
          needs of residential, commercial, and industrial projects. From
          initial wiring to final installations, we ensure every aspect of your
          electrical system is designed and executed with precision, safety, and
          efficiency. With a focus on innovation and compliance, we deliver
          solutions that power your spaces seamlessly.
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
              Electrical System Installation
            </h4>
            <p className="mt-4 text-[#252012] text-justify text-base font-normal leading-[28px]">
              We specialize in the design and installation of electrical systems for new buildings and renovations. From wiring and circuit breakers to switchboards and distribution panels, we ensure every component is installed with meticulous attention to detail for optimal functionality and safety.
            </p>
          </div>

          {/* Service 2 */}
          <div className="mt-10">
            <h4 className="text-[#252012] text-base font-semibold ">
              Lighting Solutions
            </h4>
            <p className="mt-4 text-[#252012] text-justify text-base font-normal leading-[28px]">
              Our team provides energy-efficient and aesthetically pleasing lighting solutions for all types of spaces. Whether it’s ambient lighting for offices, decorative lighting for interiors, or outdoor illumination, we deliver tailored designs that enhance your environment while reducing energy consumption.
            </p>
          </div>

          {/* Service 3 */}
          <div className="mt-10">
            <h4 className="text-[#252012] text-base font-semibold ">
              Electrical Upgrades and Renovations
            </h4>
            <p className="mt-4 text-[#252012] text-justify text-base font-normal leading-[28px]">
              We handle upgrades to existing electrical systems to meet the demands of modern appliances and technologies. From increasing system capacity to replacing outdated wiring and panels, we ensure your system is safe, efficient, and future-ready.
            </p>
          </div>

          {/* Service 4 */}
          <div className="mt-10">
            <h4 className="text-[#252012] text-base font-semibold ">
              Troubleshooting and Repairs
            </h4>
            <p className="mt-4 text-[#252012] text-justify text-base font-normal leading-[28px]">
              Our expert electricians quickly diagnose and repair electrical issues, minimizing downtime and restoring functionality. Whether it’s flickering lights, tripped circuits, or faulty outlets, we provide prompt and effective solutions to keep your systems running smoothly.
            </p>
          </div>

          {/* Service 5 */}
          <div className="mt-10">
            <h4 className="text-[#252012] text-base font-semibold ">
              Power Backup Systems
            </h4>
            <p className="mt-4 text-[#252012] text-base text-justify font-normal leading-[28px]">
              We install and maintain power backup systems, including generators, UPS systems, and inverter setups, ensuring uninterrupted power supply during outages. Our solutions are designed to meet your specific energy needs with reliability and efficiency.
            </p>
          </div>

          {/* Service 6 */}
          <div className="mt-10">
            <h4 className="text-[#252012] text-base font-semibold ">
              Smart Home and Automation Solutions
            </h4>
            <p className="mt-4 text-[#252012] text-base text-justify font-normal leading-[28px]">
              We bring convenience and innovation to your home or office with smart electrical solutions. From automated lighting and temperature controls to integrated security systems, we design and install systems that enhance comfort and efficiency.
            </p>
          </div>

          {/* Service 7 */}
          <div className="mt-10">
            <h4 className="text-[#252012] text-base font-semibold ">
              Electrical Safety Inspections
            </h4>
            <p className="mt-4 text-[#252012] text-base text-justify font-normal leading-[28px]">
              Ensure the safety and compliance of your property with our comprehensive electrical safety inspections. We identify potential hazards, provide detailed reports, and recommend corrective measures to safeguard your building and its occupants.
            </p>
          </div>

          {/* Service 8 */}
          <div className="mt-10">
            <h4 className="text-[#252012] text-base font-semibold ">
              Energy Management and Efficiency
            </h4>
            <p className="mt-4 text-[#252012] text-base text-justify font-normal leading-[28px]">
              Our team offers energy-saving solutions, including the installation of LED lighting, solar panels, and energy monitoring systems. We help you reduce electricity costs while minimizing your environmental footprint.
            </p>
          </div>

          {/* Service 9 */}
          <div className="mt-10">
            <h4 className="text-[#252012] text-base font-semibold ">
              Emergency Electrical Services
            </h4>
            <p className="mt-4 text-[#252012] text-base text-justify font-normal leading-[28px]">
              Available 24/7, our emergency electrical services ensure that critical issues are addressed promptly and professionally. Whether it’s a sudden power failure or a critical repair, we’re just a call away.
            </p>
          </div>

        </div>
      </div>
    </div>
  );
}

export default ServiceElectrical;
