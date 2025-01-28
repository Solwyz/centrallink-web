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
          At our contracting company, we provide end-to-end office interior
          solutions tailored to meet your specific needs, delivering a seamless
          and professional transformation of your workspace. From
          conceptualizing the design to handing over the keys, we ensure every
          detail is executed with precision and care, creating an inspiring and
          functional environment. 
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
              Flooring Installation
            </h4>
            <p className="mt-4 text-[#252012] text-justify text-base font-normal leading-[28px]">
              We offer premium flooring solutions designed to enhance both the
              durability and aesthetic appeal of your office. Whether you prefer
              hardwood for sophistication, vinyl for practicality, carpet for
              comfort, or tiles for a modern look, our expert team ensures
              flawless installation. We employ advanced tools and techniques for
              precision and durability, providing a sturdy and visually pleasing
              foundation for your workspace. 
            </p>
          </div>

          {/* Service 2 */}
          <div className="mt-10">
            <h4 className="text-[#252012] text-base font-semibold ">
              Wall Painting and Finishing
            </h4>
            <p className="mt-4 text-[#252012] text-justify text-base font-normal leading-[28px]">
              Our professional painting services transform your walls into a
              canvas that reflects your brand’s identity and desired ambiance.
              Using high-quality paints and specialized techniques, we achieve a
              seamless finish tailored to your needs—be it bold and dynamic or
              calm and professional. Every step, from surface preparation to the
              final coat, is managed with meticulous attention to detail,
              ensuring vibrant, long-lasting results that enhance your office
              environment. 
            </p>
          </div>

          {/* Service 3 */}
          <div className="mt-10">
            <h4 className="text-[#252012] text-base font-semibold ">
              Decorative Elements
            </h4>
            <p className="mt-4 text-[#252012] text-justify text-base font-normal leading-[28px]">
              Decorative elements bring life and character to your office space.
              We thoughtfully curate and install items such as hanging
              paintings, wall art, and other aesthetic accents to align with
              your brand’s personality and office theme. Our professional
              designers collaborate with you to select unique, high-quality
              pieces that not only enhance visual appeal but also create a
              welcoming and inspiring atmosphere. Each element is placed
              strategically to complement the overall interior design, ensuring
              a cohesive and polished look. 
            </p>
          </div>

          {/* Service 4 */}
          <div className="mt-10">
            <h4 className="text-[#252012] text-base font-semibold ">
              False Walls and Room Separators
            </h4>
            <p className="mt-4 text-[#252012] text-justify text-base font-normal leading-[28px]">
              Optimize your office layout with our expertly designed false walls
              and room separators. We use innovative designs and premium
              materials to create partitions that enhance functionality without
              compromising style. Whether you need private workspaces or open
              collaborative areas, our solutions are tailored to suit your
              workflow and aesthetic preferences. 
            </p>
          </div>

          {/* Service 5 */}
          <div className="mt-10">
            <h4 className="text-[#252012] text-base font-semibold ">
              Furniture Solutions
            </h4>
            <p className="mt-4 text-[#252012] text-base text-justify font-normal leading-[28px]">
              Stylish, ergonomic, and functional furniture is an integral part
              of a productive office. Our team provides customized furniture
              solutions that align with your office’s aesthetic and operational
              requirements. From modern workstations and conference tables to
              lounge seating and storage units, we ensure every piece combines
              comfort, durability, and visual appeal. 
            </p>
          </div>

          {/* Service 6 */}
          <div className="mt-10">
            <h4 className="text-[#252012] text-base font-semibold ">
              Aesthetic Detailing
            </h4>
            <p className="mt-4 text-[#252012] text-base text-justify font-normal leading-[28px]">
              The finishing touches make all the difference. We incorporate
              elements such as contemporary lighting fixtures, indoor plants,
              and carefully chosen accessories to create a cohesive and inviting
              office atmosphere. These details enhance the workspace's
              aesthetics, fostering a professional yet comfortable environment
              that boosts employee morale and impresses clients. 
              <p className="text-[#252012] text-base text-justify font-normal leading-[28px]">
                At every stage of the project, our professional approach ensures
                top-notch quality and a hassle-free experience. Let us handle
                every detail, from flooring to furnishings, so you can walk into
                a fully transformed office space that inspires productivity and
                success. 
              </p>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ServiceDemolition;
