import React, { useState } from "react";
import interior1 from "../../../Assets/projects/interior1.png";
import interior2 from "../../../Assets/projects/interior2.png";
import interior3 from "../../../Assets/projects/interior3.png";
import interior4 from "../../../Assets/projects/interior4.png";
import office1 from "../../../Assets/projects/office1.png";
import office2 from "../../../Assets/projects/office2.png";
import office3 from "../../../Assets/projects/office3.png";
import office4 from "../../../Assets/projects/office4.png";
import Location from "../../Components/LocateUs/Location";

const ProjectsPage = () => {
  const [filter, setFilter] = useState("All");

  const projects = [
    { id: 1, category: "Offices", image: office1 },
    { id: 2, category: "Interior", image: interior1 },
    { id: 3, category: "Interior", image: interior2 },
    { id: 4, category: "Offices", image: office2 },
    { id: 5, category: "Interior", image: interior3 },
    { id: 6, category: "Interior", image: interior4 },
    { id: 7, category: "Offices", image: office3 },
    { id: 8, category: "Offices", image: office4 },
  ];

  const filteredProjects =
    filter === "All"
      ? projects
      : projects.filter((project) => project.category === filter);

  return (
    <div>
      <div className="pt-[118px] px-4 md:px-[120px]">
        {/* Header Section */}
        <div className="md:flex mt-4 md:mt-[71px]">
          <h2 className="text-[#817140] font-normal text-center md:text-start font-milchella text-[32px] md:text-[40px]">
            Our Leading Projects
          </h2>

          {/* Filter Tabs */}
          <div className="flex justify-center items-center font-normal text-center mt-10 md:mt-0 text-base md:ml-[104px] gap-4">
            {["All", "Interior", "Offices"].map((category) => (
              <button
                key={category}
                onClick={() => setFilter(category)}
                className={`px-4 py-[6px] h-[36px] items-center rounded-[18px] transition-all ${
                  filter === category
                    ? "bg-[#947F41] text-white shadow-md"
                    : "bg-white text-[#947F41] border border-[#947F41] hover:bg-[#f7e6c2]"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Gallery Section */}
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-6 md:mt-[48px] mt-10">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="overflow-hidden  shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <img
                src={project.image}
                alt={`Project ${project.id}`}
                className="w-full h-full object-cover transform transition-transform duration-500 hover:scale-105"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Location Section */}
      <Location />
    </div>
  );
};

export default ProjectsPage;
