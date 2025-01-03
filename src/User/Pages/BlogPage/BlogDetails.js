import React from "react";
import interiorDetail from "../../../Assets/blogs/blogDetail.png";
import shareIcon from "../../../Assets/blogs/shareIcon.svg";
import building from "../../../Assets/blogs/building.png";
import demolition from "../../../Assets/blogs/demoliton.png";
import { Navigate } from "react-router-dom";

export default function BlogDetails() {
  const blogData = [
    {
      image: interiorDetail,
      title: "Trends in Modern Office Interiors",
      description: "Discover evolving styles shaping office spaces today.",
      category: "Office Interiors",
    },
  ];

  const blogs=[
    {
        id: 2,
        title: "Essential Building Maintenance Checklist",
        description: "Tips to keep buildings functional and efficient always.",
        category: "Offices",
        tag: "Building Maintenance",
        image: building,
      },
      {
        id: 3,
        title: "Safe and Efficient Demolition Practices",
        description: "Learn demolition techniques ensuring safety and precision.",
        category: "Interior",
        tag: "Demolition Services",
        image: demolition,
      },
  ]
  const handleBlogClick = (id) => {
    // navigate(`/blogs/details/${id}`);
    Navigate("/blogs/details");
  };

  return (
    <div className="pt-[118px] md:px-[120px] px-4">
      <div className="grid grid-cols-1 md:mt-[72px]  ">
        {blogData.map((item, index) => (
          <div key={index} className="relative  rounded-lg  overflow-hidden">
            <img
              src={item.image}
              alt={item.title}
              className="w-full md:h-[533px] h-[302px] object-cover"
            />
            {/* Gradient Overlay */}
            <div
              className="absolute inset-0"
              style={{
                background:
                  "linear-gradient(360deg, rgba(0, 0, 0, 0.69) 0%, rgba(61, 61, 61, 0.52371) 24.82%, rgba(255, 255, 255, 0) 100%)",
              }}
            ></div>
            {/* Content */}
            <div className="absolute hidden md:block bottom-8 left-8 text-white">
              <h2 className="md:text-[32px] md:leading-[32px] font-semibold">
                {item.title}
              </h2>
              <p className="md:text-[24px] md:mt-6 font-medium leading-[24px]">
                {item.description}
              </p>
            </div>
            {/* Share Now Button */}
            <div className="absolute md:top-8 md:right-8 top-4 right-4">
              <button className="border border-white flex font-bold leading-[18px] text-white text-base px-2 py-1 rounded">
                Share now <img src={shareIcon} className="ml-2" alt="" />
              </button>
            </div>
            {/* Category Tag */}
            <div className="absolute bottom-4 right-4  md:bottom-8 md:right-8">
              <span className="border border-white font-medium text-xs px-2 py-1 rounded text-white">
                {item.category}
              </span>
            </div>
          </div>
        ))}
        <div>
          <div className="md:mt-[72px] mt-6">
            <h3 className="text-xl font-semibold ">
              Trends in Modern Office Interiors
            </h3>
            <p className="md:hidden text-[#707070] text-base font-medium mt-2">
              Discover evolving styles shaping office spaces today.
            </p>
            <p className="text-base text-justify font-normal leading-[32px] mt-8">
              In the ever-evolving world of office design, modern interiors are
              embracing innovation, functionality, and aesthetics to create
              spaces that inspire creativity, boost productivity, and promote
              well-being. Here are some of the top trends shaping the modern
              workplace:
            </p>
          </div>
          <div className="md:mt-10 mt-8">
            <h2 className="text-[#947F41] text-base font-semibold  ">
              1. Open and Flexible Workspaces
            </h2>
            <p className="md:mt-2 mt-4 font-normal text-base leading-[32px] text-justify">
              Gone are the days of cubicles and rigid layouts. Modern offices
              prioritize open layouts that encourage collaboration and
              communication. Flexible workstations, movable furniture, and
              modular setups allow teams to adapt the space to their needs,
              fostering a dynamic and inclusive work environment.
            </p>
          </div>
          <div className="md:mt-6 mt-8">
            <h2 className="text-[#947F41] text-base font-semibold  ">
              2. Biophilic Design
            </h2>
            <p className="md:mt-2 mt-4 font-normal text-base leading-[32px] text-justify">
              Integrating nature into the office has become a hallmark of
              contemporary design. Biophilic elements such as indoor plants,
              natural light, green walls, and organic materials like wood and
              stone create a calming atmosphere, reduce stress, and improve air
              quality, enhancing overall employee well-being.
            </p>
          </div>
          <div className="md:mt-6 mt-8">
            <h2 className="text-[#947F41] text-base font-semibold  ">
              3. Sustainable and Eco-Friendly Materials
            </h2>
            <p className="md:mt-2 mt-4 font-normal text-base leading-[32px] text-justify">
              Sustainability is at the forefront of modern office interiors.
              Recycled, upcycled, and eco-friendly materials are widely used for
              furniture, flooring, and finishes. Energy-efficient lighting,
              water-saving fixtures, and renewable energy sources are also
              integral to green office design.
            </p>
          </div>
          <div className="md:mt-6 mt-8">
            <h2 className="text-[#947F41] text-base font-semibold  ">
              4. Technology-Integrated Workspaces
            </h2>
            <p className="md:mt-2 mt-4 font-normal text-base leading-[32px] text-justify">
              Smart technology is revolutionizing how offices function. From
              touchless entry systems and interactive whiteboards to smart
              lighting and climate control, technology is seamlessly integrated
              into modern interiors to enhance efficiency and convenience.
            </p>
          </div>
          <div className="md:mt-6 mt-8">
            <h2 className="text-[#947F41] text-base font-semibold  ">
              5. Wellness-Centric Design
            </h2>
            <p className="md:mt-2 mt-4 font-normal text-base leading-[32px] text-justify">
              Employers are prioritizing health and wellness by incorporating
              features like ergonomic furniture, standing desks, and relaxation
              zones. Dedicated wellness rooms for meditation, fitness, or quiet
              reflection are becoming essential in promoting a balanced work
              environment.
            </p>
          </div>
          <div className="md:mt-6 mt-8">
            <h2 className="text-[#947F41] text-base font-semibold  ">
              6. Home-Inspired Interiors
            </h2>
            <p className="md:mt-2 mt-4 font-normal text-base leading-[32px] text-justify">
              Blurring the lines between home and office, modern workspaces are
              adopting residential design elements. Cozy lounge areas, warm
              lighting, plush furniture, and textured finishes create a
              welcoming environment that feels more like home.
            </p>
          </div>
          <div className="md:mt-6 mt-8">
            <h2 className="text-[#947F41] text-base font-semibold  ">
              7. Color Psychology
            </h2>
            <p className="md:mt-2 mt-4 font-normal text-base leading-[32px] text-justify">
              Colors play a significant role in setting the tone of a workspace.
              Modern offices are experimenting with bold, vibrant palettes to
              energize teams while using calming hues in breakout zones to
              foster relaxation and focus.
            </p>
          </div>
          <div className="md:mt-6 mt-8">
            <h2 className="text-[#947F41] text-base font-semibold  ">
              8. Multi-Functional Spaces
            </h2>
            <p className="md:mt-2 mt-4 font-normal text-base leading-[32px] text-justify">
              Space optimization is key in modern interiors. Offices are
              incorporating multi-functional zones that can serve as meeting
              rooms, brainstorming hubs, or casual lounges, maximizing utility
              without compromising aesthetics.
            </p>
          </div>
        </div>
        {/* Blog Cards */}
      <div className="md:mt-[108px] hidden md:block ">
      <h1 className="font-semibold text-base">More related blogs</h1>
            <div className="grid grid-cols-1  md:grid-cols-2 gap-[20px] mt-8 ">
              {blogs.map((blog) => (
                <div
                  key={blog.id}
                  className="bg-white flex w-[361px] md:w-[590px] h-[136px] md:h-[190px] group cursor-pointer"
                
                >
                  <div className="">
                    <img
                      src={blog.image}
                      alt={blog.title}
                      className=" w-[173px] md:w-[285px] h-[136px] md:h-[190px] md:object-cover object-fit group-hover:rounded-lg"
                    />
                  </div>
    
                  <div className="ml-[22px] w-[172px] md:w-[283px]">
                    <h2 className="md:text-[24px] text-sm leading-[16px] md:leading-[32px] font-semibold group-hover:text-[#968A66] text-[#252012]">
                      {blog.title}
                    </h2>
                    <p className="text-[#6C6B67] text-sm md:text-base leading-[16px] mt-4 font-medium md:leading-[24px] group-hover:text-[#968A66]">
                      {blog.description}
                    </p>
                    <span className="inline-block font-medium mt-4 md:mt-[30px] px-2 py-1 text-[10px] md:text-xs text-[#252012] border border-black rounded-full">
                      {blog.tag}
                    </span>
                  </div>
                </div>
              ))}
            </div>
      </div>
      </div>
    </div>
  );
}
