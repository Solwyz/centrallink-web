import React, { useEffect, useState } from "react";
import interiorDetail from "../../../Assets/blogs/blogDetail.png";
import shareIcon from "../../../Assets/blogs/shareIcon.svg";
import building from "../../../Assets/blogs/building.png";
import demolition from "../../../Assets/blogs/demoliton.png";
import { Navigate, useParams } from "react-router-dom";
import { FaCopy, FaWhatsapp, FaFacebook, FaTwitter } from "react-icons/fa";
import Api from "../../../Admin/Services/Api";

export default function BlogDetails() {


  const { id } = useParams();
  const [blogs, setBlogs] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  // const token = localStorage.getItem("adminAuthToken");
  const [isOpen, setIsOpen] = useState(false);
  const [moreBlogs, setMoreBlogs] =useState([]);

  useEffect(() => {
    console.log('idd', id)
    Api.get(`api/blogs/${id}`
    )
      .then((response) => {
        console.log('id response',response.data)
        setBlogs(response.data);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching service details:", error);
        setIsLoading(false);
      });
 
      Api.get('api/blogs')  
    .then((response) =>{
      console.log(response.data)
       setMoreBlogs(response.data)
    })
    }, [id]);

  if (isLoading) {
    return <p className="text-center mt-10 text-lg text-gray-500">Loading...</p>;
  }

  if (!blogs) {
    return <p className="text-center mt-10 text-lg text-gray-500">Service not found.</p>;
  }
  // const handleBlogClick = (id) => {
  //   // navigate(`/blogs/details/${id}`);
  //   Navigate("/blogs/details");
  // };

  const handleShare = (platform) => {
    const url = window.location.href; // Use the current page URL
    switch (platform) {
      case "copy":
        navigator.clipboard.writeText(url);
        break;
      case "whatsapp":
        window.open(`https://wa.me/?text=${encodeURIComponent(url)}`, "_blank");
        break;
      case "facebook":
        window.open(
          `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
            url
          )}`,
          "_blank"
        );
        break;
      case "twitter":
        window.open(
          `https://twitter.com/intent/tweet?url=${encodeURIComponent(url)}`,
          "_blank"
        );
        break;
      default:
        break;
    }
    setIsOpen(false); // Close dropdown after action
  };
  return (
    <div className="pt-[118px] md:px-[120px] px-4">
      <div className="grid grid-cols-1 md:mt-[72px]  ">
        {/* {blogs.map((item, index) => ( */}
          <div  className="relative  rounded-lg  overflow-hidden">
            <img
              src={`data:image/png;base64,${blogs.photo}`}
              alt={blogs.title}
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
                {blogs.title}
              </h2>
              <p className="md:text-[24px] md:mt-6 font-medium leading-[24px]">
                {blogs.shortDescription}
              </p>
            </div>
            {/* Share Now Button */}
            <div className="absolute md:top-8 md:right-8 top-4 right-4">
              <button
                className="border border-white flex items-center font-bold leading-[18px] text-white text-base px-2 py-1 rounded"
                onClick={() => setIsOpen(!isOpen)}
              >
                Share now{" "}
                <img src={shareIcon} className="ml-2" alt="Share Icon" />
              </button>

              {isOpen && (
                <div className="absolute top-full mt-2 right-0 w-auto bg-white text-black rounded-lg shadow-lg z-10">
                  <ul className="flex space-x-4 py-2 px-4">
                    <li
                      className="flex items-center px-4 py-3 rounded-md cursor-pointer transition-transform duration-300 ease-in-out transform hover:scale-125"
                      onClick={() => handleShare("copy")}
                    >
                      <FaCopy />
                    </li>
                    <li
                      className="flex items-center px-4 py-3 rounded-md cursor-pointer transition-transform duration-300 ease-in-out transform hover:scale-125"
                      onClick={() => handleShare("whatsapp")}
                    >
                      <FaWhatsapp />
                    </li>
                    <li
                      className="flex items-center px-4 py-3 rounded-md cursor-pointer transition-transform duration-300 ease-in-out transform hover:scale-125"
                      onClick={() => handleShare("facebook")}
                    >
                      <FaFacebook />
                    </li>
                    <li
                      className="flex items-center px-4 py-3 rounded-md cursor-pointer transition-transform duration-300 ease-in-out transform hover:scale-125"
                      onClick={() => handleShare("twitter")}
                    >
                      <FaTwitter />
                    </li>
                  </ul>
                </div>
              )}
            </div>
            {/* Category Tag */}
            <div className="absolute bottom-4 right-4  md:bottom-8 md:right-8">
              <span className="border border-white font-medium text-xs px-2 py-1 rounded text-white">
                {blogs.categoryName}
              </span>
            </div>
          </div>
        {/* ))} */}
        {/* {blogs.map((item, index) => ( */}
          <div>
            <div className="md:mt-[72px] mt-6">
              <h3 className="text-xl font-semibold ">
                {blogs.title}
              </h3>
              <p className="md:hidden text-[#707070] text-base font-medium mt-2">
                {blogs.shortDescription}
              </p>
              <p className="text-base text-justify font-normal leading-[32px] mt-8">
                {blogs.mainDescription}
              </p>
            </div>
          </div>
        {/* ))} */}

        {/* Blog Cards */}
        <div className="md:mt-[108px] hidden md:block ">
          <h1 className="font-semibold text-base">More related blogs</h1>
          <div className="grid grid-cols-1  md:grid-cols-2 gap-[20px] mt-8 ">
            {moreBlogs.map((moreBlogs) => (
              <div
                key={moreBlogs.id}
                className="bg-white flex w-[361px] md:w-[590px] h-[136px] md:h-[190px] group cursor-pointer"
              >
                <div className="">
                  <img
                    src={`data:image/png;base64,${moreBlogs.photo}`}
                    alt={moreBlogs.title}
                    className=" w-[173px] md:w-[285px] h-[136px] md:h-[190px] md:object-cover object-fit group-hover:rounded-lg"
                  />
                </div>

                <div className="ml-[22px] w-[172px] md:w-[283px]">
                  <h2 className="md:text-[24px] text-sm leading-[16px] md:leading-[32px] md:tracking-tighter font-semibold group-hover:text-[#968A66] text-[#252012]">
                    {moreBlogs.title}
                  </h2>
                  <p className="text-[#6C6B67] text-sm md:text-base leading-[16px] mt-4 font-medium md:leading-[24px] group-hover:text-[#968A66]">
                    {moreBlogs.shortDescription}
                  </p>
                  <span className="inline-block font-medium mt-4 md:mt-[30px] px-2 py-1 text-[10px] md:text-xs text-[#252012] border border-black rounded-full">
                    {moreBlogs.categoryName}
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
