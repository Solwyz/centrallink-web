import React, { useEffect, useState } from "react";
import Location from "../../Components/LocateUs/Location";
import Api from "../../../Admin/Services/Api";

const token = localStorage.getItem("adminAuthToken");

const ProjectsPage = () => {
  const [filter, setFilter] = useState("All");
  const [projects, setProjects] = useState([]);


  // const projects = [
  //   { id: 1, category: "Offices", image: office1 },
  //   { id: 2, category: "Interior", image: interior1 },
  //   { id: 3, category: "Interior", image: interior2 },
  //   { id: 4, category: "Offices", image: office2 },
  //   { id: 5, category: "Interior", image: interior3 },
  //   { id: 6, category: "Interior", image: interior4 },
  //   { id: 7, category: "Offices", image: office3 },
  //   { id: 8, category: "Offices", image: office4 },
  // ];

  const filteredProjects =
    filter === "All"
      ? projects
      : projects.filter((project) => project.categoryName === filter);

  useEffect(() => {
    Api.get('api/project').then((response) => {
      if (response && response.data) {
        console.log('responseProjectList', response.data)
        setProjects(response.data);
      } else {
        console.error('Error fetching projects:', response)
      }
    })
  }, [])

  return (
    <div>
      <div className="pt-[118px] px-4 md:px-[120px]">
        {/* Header Section */}
        <div className="md:flex mt-4 md:mt-[71px]">
          <h2 className="text-[#817140] font-normal text-center md:text-start font-milchella text-[32px] md:text-[40px]">
            Our Leading Projects
          </h2>


          {/* Filter Tabs */}
          <div className="flex justify-center md:justify-start items-center font-normal text-center mt-10 md:mt-0 text-base md:ml-[104px]">
            <div className="flex overflow-x-auto whitespace-nowrap gap-4 px-4 py-2 w-full scrollbar-hide">
              {["All", "demolition", "interior", "miscellaneous", "electrical"].map((category) => (
                <button
                  key={category}
                  onClick={() => setFilter(category)}
                  className={`px-4 py-[6px] h-[36px] flex-shrink-0 items-center rounded-[18px] transition-all ${filter === category
                      ? "bg-[#947F41] text-white shadow-md"
                      : "bg-white text-[#947F41] border border-[#947F41] hover:bg-[#f7e6c2]"
                    }`}
                >
                  {category}
                </button>
              ))}
            </div>
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
                // src={project.image}
                src={`data:image/png;base64,${project.photo}`}
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
