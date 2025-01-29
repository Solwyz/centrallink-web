import React from "react";
import interiorOffice from "../../../Assets/Service/serviceDetail.png";
import interiorOfficeMob from "../../../Assets/Service/ServiceMob.png";

function ServiceVoice() {
  return (
    <div className="pt-[118px] md:px-[120px] px-4">
      {/* Main Heading */}
      <h2 className="text-[#817140] font-normal text-[40px] mt-10 font-milchella text-center">
        Voice And Data Work{" "}
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
          Our voice and data services are designed to equip your home, office,
          or business premises with cutting-edge communication systems that
          ensure seamless connectivity. From structured cabling to the
          installation of advanced telecommunication and networking solutions,
          we deliver reliable, high-performance systems that keep you connected
          in today’s fast-paced digital world.
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
              Structured Cabling Systems
            </h4>
            <p className="mt-4 text-[#252012] text-justify text-base font-normal leading-[28px]">
              We specialize in designing and installing structured cabling systems for voice and data networks. Our solutions ensure efficient data transmission, scalability, and easy maintenance, providing the backbone for modern communication and IT infrastructure.
            </p>
          </div>

          {/* Service 2 */}
          <div className="mt-10">
            <h4 className="text-[#252012] text-base font-semibold ">
              Voice Communication Systems
            </h4>
            <p className="mt-4 text-[#252012] text-justify text-base font-normal leading-[28px]">
              Our team installs and configures voice communication systems, including PBX systems, VoIP solutions, and intercom systems, to ensure clear and uninterrupted communication. We customize solutions to meet your specific operational requirements.
            </p>
          </div>

          {/* Service 3 */}
          <div className="mt-10">
            <h4 className="text-[#252012] text-base font-semibold ">
              Data Networking Solutions
            </h4>
            <p className="mt-4 text-[#252012] text-justify text-base font-normal leading-[28px]">
              We design and implement high-speed data networks, including LAN, WAN, and wireless networks. Our services ensure robust and secure connectivity for businesses of all sizes, enabling seamless data sharing and access.
            </p>
          </div>

          {/* Service 4 */}
          <div className="mt-10">
            <h4 className="text-[#252012] text-base font-semibold ">
              Fiber Optic Cabling
            </h4>
            <p className="mt-4 text-[#252012] text-justify text-base font-normal leading-[28px]">
              We provide installation and maintenance of fiber optic cabling for high-speed data transmission. Whether it’s for internet connectivity or internal communications, our fiber optic solutions are built for speed, reliability, and efficiency.
            </p>
          </div>

          {/* Service 5 */}
          <div className="mt-10">
            <h4 className="text-[#252012] text-base font-semibold ">
              Server Room Setup and Maintenance
            </h4>
            <p className="mt-4 text-[#252012] text-justify text-base font-normal leading-[28px]">
              Our team offers comprehensive server room solutions, from the installation of racks and switches to cable management and cooling systems. We ensure a well-organized and efficient IT hub for your organization.
            </p>
          </div>

          {/* Service 6 */}
          <div className="mt-10">
            <h4 className="text-[#252012] text-base font-semibold ">
              Telephone and Video Conferencing Systems
            </h4>
            <p className="mt-4 text-[#252012] text-justify text-base font-normal leading-[28px]">
              Enhance your communication with our advanced telephone and video conferencing solutions. We install systems that enable seamless collaboration, whether in the office or across multiple locations.
            </p>
          </div>

          {/* Service 7 */}
          <div className="mt-10">
            <h4 className="text-[#252012] text-base font-semibold ">
              Network Security Solutions
            </h4>
            <p className="mt-4 text-[#252012] text-base text-justify font-normal leading-[28px]">
              We implement network security measures, including firewalls, encryption, and access controls, to safeguard your voice and data systems from potential threats. Our solutions prioritize the confidentiality and integrity of your information.
            </p>
          </div>

          {/* Service 8 */}
          <div className="mt-10">
            <h4 className="text-[#252012] text-base font-semibold ">
              Maintenance and Troubleshooting
            </h4>
            <p className="mt-4 text-[#252012] text-base text-justify font-normal leading-[28px]">
              Our regular maintenance and troubleshooting services ensure your voice and data systems remain operational at all times. We provide quick and effective solutions to minimize downtime and keep your business running smoothly.
            </p>
          </div>

          {/* Service 9 */}
          <div className="mt-10">
            <h4 className="text-[#252012] text-base font-semibold ">
              Wi-Fi and Wireless Network Solutions
            </h4>
            <p className="mt-4 text-[#252012] text-base text-justify font-normal leading-[28px]">
              We design and install robust Wi-Fi and wireless networks for uninterrupted connectivity. Our solutions are optimized for both small spaces and large-scale facilities, ensuring reliable access for all users.
            </p>
          </div>

          {/* Service 10 */}
          <div className="mt-10">
            <h4 className="text-[#252012] text-base font-semibold ">
              Internet and Bandwidth Optimization
            </h4>
            <p className="mt-4 text-[#252012] text-base text-justify font-normal leading-[28px]">
              Our team helps optimize your internet connectivity and bandwidth usage to enhance performance and efficiency. From selecting the right ISP to configuring your network for optimal results, we provide end-to-end support.
            </p>
          </div>

        </div>
      </div>
    </div>
  );
}

export default ServiceVoice;
