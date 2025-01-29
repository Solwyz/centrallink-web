import React from "react";
import interiorOffice from "../../../Assets/Service/serviceDetail.png";
import interiorOfficeMob from "../../../Assets/Service/ServiceMob.png";

function ServiceMaint() {
  return (
    <div className="pt-[118px] md:px-[120px] px-4">
      {/* Main Heading */}

      <h2 className="text-[#817140] font-normal text-[40px] mt-10 font-milchella text-center">
        Building Maintenance{" "}
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
          Our comprehensive building maintenance services are designed to ensure
          the longevity, safety, and functionality of your property. With a
          professional approach and a team of skilled experts, we provide
          tailored solutions to meet the unique needs of your building. From
          routine upkeep to complex repairs, we manage every detail to maintain
          your property to the highest standards.
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
              Electrical Systems Maintenance
            </h4>
            <p className="mt-4 text-[#252012] text-justify text-base font-normal leading-[28px]">
              We ensure the efficient functioning of your building’s electrical
              systems with regular inspections, repairs, and upgrades. Our
              certified electricians handle everything from lighting systems and
              wiring to circuit repairs and energy-efficient installations,
              guaranteeing safety and compliance with local regulations.
            </p>
          </div>

          {/* Service 2 */}
          <div className="mt-10">
            <h4 className="text-[#252012] text-base font-semibold ">
              Plumbing and Water Systems
            </h4>
            <p className="mt-4 text-[#252012] text-justify text-base font-normal leading-[28px]">
              Our team provides reliable plumbing services, including pipe
              repairs, leak detection, drainage cleaning, and water system
              maintenance. We use advanced tools and techniques to resolve
              issues promptly, ensuring uninterrupted water supply and efficient
              waste management for your property.
            </p>
          </div>

          {/* Service 3 */}
          <div className="mt-10">
            <h4 className="text-[#252012] text-base font-semibold ">
              HVAC Maintenance
            </h4>
            <p className="mt-4 text-[#252012] text-justify text-base font-normal leading-[28px]">
              Keep your building comfortable year-round with our HVAC
              maintenance services. From air conditioning repairs and servicing
              to ventilation and heating system checks, we ensure optimal
              performance and energy efficiency for a pleasant indoor
              environment.
            </p>
          </div>

          {/* Service 4 */}
          <div className="mt-10">
            <h4 className="text-[#252012] text-base font-semibold ">
              Structural Repairs
            </h4>
            <p className="mt-4 text-[#252012] text-justify text-base font-normal leading-[28px]">
              We specialize in maintaining the integrity of your building’s
              structure through timely repairs and reinforcements. Our services
              include crack sealing, wall reinforcements, roofing repairs, and
              addressing any wear and tear to ensure the safety and stability of
              your property.
            </p>
          </div>

          {/* Service 5 */}
          <div className="mt-10">
            <h4 className="text-[#252012] text-base font-semibold ">
              Painting and Surface Maintenance
            </h4>
            <p className="mt-4 text-[#252012] text-base text-justify font-normal leading-[28px]">
              Enhance your building’s aesthetics and protect its surfaces with
              our professional painting and surface restoration services. We use
              high-quality materials and techniques to refresh walls, facades,
              and other surfaces, maintaining a clean and polished appearance.
            </p>
          </div>

          {/* Service 6 */}
          <div className="mt-10">
            <h4 className="text-[#252012] text-base font-semibold ">
              Cleaning and Sanitization
            </h4>
            <p className="mt-4 text-[#252012] text-base text-justify font-normal leading-[28px]">
              We offer thorough cleaning and sanitization services tailored to
              your building’s needs. From common areas to specialized spaces,
              our team uses eco-friendly cleaning products and modern equipment
              to maintain a spotless and hygienic environment.
            </p>
          </div>
          <div className="mt-10">
            <h4 className="text-[#252012] text-base font-semibold ">
              Cleaning and Sanitization
            </h4>
            <p className="mt-4 text-[#252012] text-base text-justify font-normal leading-[28px]">
              We offer thorough cleaning and sanitization services tailored to
              your building’s needs. From common areas to specialized spaces,
              our team uses eco-friendly cleaning products and modern equipment
              to maintain a spotless and hygienic environment.
            </p>
          </div>
          <div className="mt-10">
            <h4 className="text-[#252012] text-base font-semibold ">
              Security and Surveillance Systems
            </h4>
            <p className="mt-4 text-[#252012] text-base text-justify font-normal leading-[28px]">
              Ensure the safety of your property with our expert security system
              maintenance services. We handle the installation, inspection, and
              repair of CCTV cameras, access control systems, alarms, and other
              security solutions to provide 24/7 protection
            </p>
          </div>
          <div className="mt-10">
            <h4 className="text-[#252012] text-base font-semibold ">
              Landscaping and Exterior Upkeep
            </h4>
            <p className="mt-4 text-[#252012] text-base text-justify font-normal leading-[28px]">
              Maintain the exterior appeal of your building with our landscaping
              and outdoor maintenance services. We manage everything from lawn
              care and tree pruning to hardscape cleaning and façade pressure
              washing, creating a welcoming and well-maintained exterior.
            </p>
          </div>
          <div className="mt-10">
            <h4 className="text-[#252012] text-base font-semibold ">
              Preventive Maintenance Programs
            </h4>
            <p className="mt-4 text-[#252012] text-base text-justify font-normal leading-[28px]">
              Our preventive maintenance programs are designed to identify and
              address potential issues before they escalate. Through regular
              inspections and scheduled servicing, we ensure your building
              operates efficiently and remains in excellent condition, reducing
              long-term costs and downtime.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ServiceMaint;
