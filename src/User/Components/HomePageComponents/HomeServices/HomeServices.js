import React from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate for redirection
import interior from "../../../../Assets/Home/services/officeInterior.png";
import Maintenance from "../../../../Assets/Home/services/buildingMaint.png";
import Demolition from "../../../../Assets/Home/services/demolition.png";
import Electrical from "../../../../Assets/Home/services/electricalWork.png";
import Plumbing from "../../../../Assets/Home/services/plumbing.png";
import Voice from "../../../../Assets/Home/services/voiceandData.png";
import Ac from "../../../../Assets/Home/services/Ac.png";
import iconInt from "../../../../Assets/Home/services/interiorIcon.png";

const servicesData = [
  {
    id: 1,
    title: "Office Interior",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, typesetting industry.",
    icon: iconInt,
    image: interior,
    link: "/services/office-interior", // Add link for each service
  },
  {
    id: 2,
    title: "Building Maintenance",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, typesetting industry.",
    icon: iconInt,
    image: Maintenance,
    link: "/services/building-maintenance",
  },
  {
    id: 3,
    title: "Demolition",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, typesetting industry.",
    icon: iconInt,
    image: Demolition,
    link: "/services/demolition",
  },
  {
    id: 4,
    title: "Electrical Work",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, typesetting industry.",
    icon: iconInt,
    image: Electrical,
    link: "/services/electrical-work",
  },
  {
    id: 5,
    title: "Plumbing Work",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, typesetting industry.",
    icon: iconInt,
    image: Plumbing,
    link: "/services/plumbing-work",
  },
  {
    id: 6,
    title: "Voice and Data Work",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, typesetting industry.",
    icon: iconInt,
    image: Voice,
    link: "/services/voice-and-data-work",
  },
  {
    id: 7,
    title: "AC Service and Installation",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, typesetting industry.",
    icon: iconInt,
    image: Ac,
    link: "/services/ac-service-installation",
  },
  {
    id: 8,
    title: "AC Service and Installation",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, typesetting industry.",
    icon: iconInt,
    image: Ac,
    link: "/services/ac-service-installation",
  },
];

function HomeServices() {
  const navigate = useNavigate(); // Initialize useNavigate for navigation

  return (
    <div className="md:mt-[168px] mt-[120px] px-4 md:px-[120px]">
      <h2 className="text-center text-[32px] font-milchella font-normal md:text-[40px] text-[#817140]">
        Our Best Services
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-4 mt-[40px] md:mt-[56px] gap-y-[48px] gap-x-5 place-items-center">
        {servicesData.map((service) => (
          <div
            key={service.id}
            className="bg-white shadow-lg overflow-hidden cursor-pointer"
            onClick={() => navigate(service.link)} // Redirect on click
          >
            {/* Service Image */}
            <img
              src={service.image}
              alt={service.title}
              className="w-full h-[231px]"
            />

            {/* Icon + Content */}
            <div className="p-4">
              <div className="flex justify-end translate-y-[-50px]">
                <div className="bg-[#F3F4F6] rounded-full h-[64px] w-[64px] flex items-center justify-center shadow-md">
                  <img
                    src={service.icon}
                    alt={`${service.title} Icon`}
                    className="h-[32px] w-[32px]"
                  />
                </div>
              </div>
              <div className="text-lg font-bold mt-[-48px] text-[#947F41] text-start">
                {service.title}
              </div>
              <p className="text-sm font-medium text-[#947F41] text-justify mt-3">
                {service.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default HomeServices;
