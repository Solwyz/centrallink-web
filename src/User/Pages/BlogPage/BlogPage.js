import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import interior from "../../../Assets/blogs/interior.png";
import building from "../../../Assets/blogs/building.png";
import demolition from "../../../Assets/blogs/demoliton.png";
import electrical from "../../../Assets/blogs/electrical.png";
import officeInterior from "../../../Assets/blogs/officeInterior.png";
import voiceData from "../../../Assets/blogs/voiceData.png";

const BlogPage = () => {
  const [filter, setFilter] = useState("All");
  const navigate = useNavigate();

  const blogs = [
    {
      id: 1,
      title: "Trends in Modern Office Interiors",
      description: "Discover evolving styles shaping office spaces today.",
      category: "Interior",
      tag: "Office Interiors",
      image: interior,
    },
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
    {
      id: 4,
      title: "Optimizing Electrical Systems for Longevity",
      description:
        "Maximize performance with regular electrical maintenance tips.",
      category: "Offices",
      tag: "Electrical Work",
      image: electrical,
    },
    {
      id: 5,
      title: "The Future of Voice and Data Systems",
      description: "Learn demolition techniques ensuring safety and precision.",
      category: "Interior",
      tag: "Voice and Data Work",
      image: voiceData,
    },
    {
      id: 6,
      title: "Trends in Modern Office Interiors",
      description:
        "Maximize performance with regular electrical maintenance tips.",
      category: "Interior",
      tag: "Office Interiors",
      image: officeInterior,
    },
  ];

  const filteredBlogs =
    filter === "All" ? blogs : blogs.filter((blog) => blog.category === filter);

  const handleBlogClick = (id) => {
    // navigate(`/blogs/details/${id}`);
    navigate("/blogs/details");
  };

  return (
    <div className="pt-[118px] md:px-[120px] px-4">
      {/* Header Section */}
      <div className="text-center md:mt-[61px] mt-4 ">
        <h1 className="md:text-[40px] hidden md:block text-[32px] font-milchella leading-[48px] font-normal  text-[#947F41] ">
          Seamless Design and Build: <br /> Your Resource for Inspiration
        </h1>
        <h1 className="md:text-[40px] md:hidden text-[32px] font-milchella leading-[48px] font-normal  text-[#947F41] ">
          Seamless Design and Build: Your Resource for Inspiration
        </h1>
      </div>

      {/* Filter Buttons */}
      <div className="flex justify-center items-center font-normal text-center text-base gap-4 mt-[64px] md:mt-[72px]">
        {["All", "Interior", "Offices"].map((category) => (
          <button
            key={category}
            onClick={() => setFilter(category)}
            className={`px-4 py-[6px] h-[36px] item-center rounded-[18px] ${
              filter === category
                ? "bg-[#947F41] text-white"
                : "bg-white text-[#947F41]"
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Blog Cards */}
      {/* Blog Cards */}
      <div className="grid grid-cols-1  md:grid-cols-2 gap-[20px] mt-[72px]">
        {filteredBlogs.map((blog) => (
          <div
            key={blog.id}
            className="bg-white flex w-[361px] md:w-[590px] h-[136px] md:h-[190px] group cursor-pointer"
            onClick={() => handleBlogClick(blog.id)}
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
  );
};

export default BlogPage;
