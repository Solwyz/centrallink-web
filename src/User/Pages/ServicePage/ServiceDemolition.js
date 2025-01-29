import React from "react";
import interiorOffice from "../../../Assets/Service/serviceDetail.png";
import interiorOfficeMob from "../../../Assets/Service/ServiceMob.png";

function ServiceDemolition() {
  return (
    <div className="pt-[118px] md:px-[120px] px-4">
      {/* Main Heading */}

      <h2 className="text-[#817140] font-normal text-[40px] mt-10 font-milchella text-center">
        Demolition
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
          Our demolition services are designed to provide efficient, safe, and
          environmentally responsible solutions for your building removal needs.
          Whether it's a small structure or a large-scale project, our expert
          team ensures the entire process is handled with precision and
          professionalism, from planning to site clearance.
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
              Complete Building Demolition
            </h4>
            <p className="mt-4 text-[#252012] text-justify text-base font-normal leading-[28px]">
              We specialize in the complete demolition of residential,
              commercial, and industrial buildings. Using advanced machinery and
              techniques, we ensure a controlled and efficient teardown while
              adhering to all safety and regulatory requirements.
            </p>
          </div>

          {/* Service 2 */}
          <div className="mt-10">
            <h4 className="text-[#252012] text-base font-semibold ">
              Selective Demolition
            </h4>
            <p className="mt-4 text-[#252012] text-justify text-base font-normal leading-[28px]">
              When only specific parts of a structure need to be removed, our
              selective demolition services are the perfect solution. We
              carefully dismantle targeted areas, preserving the surrounding
              structure and ensuring minimal disruption to ongoing operations
            </p>
          </div>

          {/* Service 3 */}
          <div className="mt-10">
            <h4 className="text-[#252012] text-base font-semibold ">
              Interior Demolition
            </h4>
            <p className="mt-4 text-[#252012] text-justify text-base font-normal leading-[28px]">
              For renovation projects, we offer comprehensive interior
              demolition services, including the removal of walls, ceilings,
              flooring, and fixtures. Our team works with precision to clear out
              spaces while protecting the structural integrity of the building.
            </p>
          </div>

          {/* Service 4 */}
          <div className="mt-10">
            <h4 className="text-[#252012] text-base font-semibold ">
              Site Clearance and Debris Removal
            </h4>
            <p className="mt-4 text-[#252012] text-justify text-base font-normal leading-[28px]">
              After demolition, we handle the complete removal of debris and
              waste materials. Our team ensures the site is left clean and ready
              for the next phase of construction, adhering to environmentally
              responsible disposal practices.
            </p>
          </div>

          {/* Service 5 */}
          <div className="mt-10">
            <h4 className="text-[#252012] text-base font-semibold ">
              Concrete and Asphalt Removal
            </h4>
            <p className="mt-4 text-[#252012] text-base text-justify font-normal leading-[28px]">
              We provide specialized services for the demolition and removal of
              concrete slabs, foundations, and asphalt surfaces. Using advanced
              tools, we break down and remove hardscapes efficiently, preparing
              the area for new development.
            </p>
          </div>

          {/* Service 6 */}
          <div className="mt-10">
            <h4 className="text-[#252012] text-base font-semibold ">
              Hazardous Material Removal
            </h4>
            <p className="mt-4 text-[#252012] text-base text-justify font-normal leading-[28px]">
              Our team is equipped to handle the safe removal and disposal of
              hazardous materials such as asbestos, lead, and mold that may be
              encountered during demolition. We follow strict safety protocols
              and environmental guidelines to ensure a risk-free process.
            </p>
          </div>
          <div className="mt-10">
            <h4 className="text-[#252012] text-base font-semibold ">
              Industrial and Heavy Structure Demolition
            </h4>
            <p className="mt-4 text-[#252012] text-base text-justify font-normal leading-[28px]">
              We have the expertise and equipment to manage the demolition of
              heavy structures, including factories, warehouses, bridges, and
              large-scale facilities. Our team handles complex projects with
              precision and ensures minimal impact on surrounding areas.
            </p>
          </div>
          <div className="mt-10">
            <h4 className="text-[#252012] text-base font-semibold ">
              Demolition Planning and Permitting
            </h4>
            <p className="mt-4 text-[#252012] text-base text-justify font-normal leading-[28px]">
              We provide end-to-end support, including the preparation of
              detailed demolition plans and securing necessary permits from
              local authorities. Our team ensures all aspects of the project
              comply with legal and safety standards
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ServiceDemolition;
