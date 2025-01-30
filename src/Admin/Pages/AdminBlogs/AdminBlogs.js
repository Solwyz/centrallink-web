import React, { useEffect, useState } from "react";
import deleteIcon from "../../../Assets/Admin/projects/delete.svg";
import rightArrow from "../../../Assets/Admin/projects/right Arrow.svg";
import uploadIcon from "../../../Assets/Admin/image add.svg";
import saveIcon from "../../../Assets/Admin/save.svg";
import deleteWarn from "../../../Assets/Admin/projects/deleteWarning.svg";
import Api from "../../Services/Api";

const token = localStorage.getItem("adminAuthToken");
console.log("token:", token);

function AdminBlogs() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [blogCategoryName, setBlogCategoryName] = useState("");
  const [blogCategoryName1, setBlogCategoryName1] = useState("");
  const [blogCategoryName2, setBlogCategoryName2] = useState("");
  const [blogCategoryName3, setBlogCategoryName3] = useState("");
  const [blogNmae,setBlogName] =useState('')
  const [image, setImage] = useState(null);
  const [blogCategories, setBlogCategories] = useState([]);
  const [selectedBlogCategoryIndex, setSelectedBlogCategoryIndex] = useState({});
  const [isBlogFormOpen, setIsBlogFormOpen] = useState(false);
  const [addNewImg, setAddNewImg] = useState(null)
  const [addSecondImage, setAddSecondImage] = useState(null)
  const [refreshKey, setRefreshKey] = useState(0)
  const [deleteID,setDeleteID] = useState(null)
  const [editingBlog, setEditingBlog] = useState(null)


  const [blogForm, setBlogForm] = useState({
    name: "",
    shortDescription: "",
    mainDescription: "",
    image: null,
  });
  const [previewImage, setPreviewImage] = useState(null);
  const [editingBlogIndex, setEditingBlogIndex] = useState(null);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [deleteTarget, setDeleteTarget] = useState({
    type: null, // "category" or "blog"
    index: null, // Index of the item to delete
  });

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => {
    setIsModalOpen(false);
    setBlogCategoryName("");
    setImage(null);
  };

  useEffect(() => {
    if(editingBlog) {
      setBlogForm((prevForm) => ({
        ...prevForm,
        name: editingBlog.title || "",
      }))
    }
  },[editingBlog])

  useEffect(() => {
    console.log("kk", token);
    if (token) {
      Api.get("api/blogs", {

        'Authorization': `Bearer ${token}`,

      })
        .then((response) => {
          console.log("API Response of Blog:", response.data);
          if (response.data) {
            setBlogCategories(response.data || []);
          }
        })
        .catch((error) => {
          console.error("Error fetching blogs:", error);
        });
    }
  }, [refreshKey]);


  /*category adding API*//////////////////////////////////////////////////////////

  const handleSaveBlogCategory = () => {
    const formData = new FormData();
    formData.append("photo", addNewImg)
    Api.post(`api/blogs?categoryName=${blogCategoryName}&title=${blogCategoryName1}&shortDescription=${blogCategoryName2}&mainDescription=${blogCategoryName3}`, formData, {
      'Authorization': `Bearer ${token}`,
      'Content-Type': 'multipart/form-data',
    })
    .then(response => {
      if(response && response.data) {
        console.log('blogpostttt',response)
        setRefreshKey(prev => prev + 1)
      }
    })
    
    // if (!blogCategoryName.trim()) return;
    // setBlogCategories([
    //   ...blogCategories,
    //   { blogCategoryName, image, blogs: [] },
    // ]);
    closeModal();
  };

  const handleConfirmDelete = () => {
  console.log('ddd',deleteID)
   Api.delete(`api/blogs/${deleteID}`,{
    'Authorization': `Bearer ${token}`
   })
   .then(response => {
    setIsDeleteModalOpen(false)
    console.log('hhhh',response)
   })
  };
  

  // const handleConfirmDelete = () => {
 

  //   const { type, index } = deleteTarget;

  //   if (type === "category") {
  //     setBlogCategories(blogCategories.filter((_, i) => i !== index));
  //     setSelectedBlogCategoryIndex(null);
  //   } else if (type === "blog") {
  //     const updatedCategories = blogCategories.map((category, catIndex) => {
  //       if (catIndex === selectedBlogCategoryIndex) {
  //         return {
  //           ...category,
  //           blogs: category.blogs.filter((_, i) => i !== index),
  //         };
  //       }
  //       return category;

        
  //     });
  //     setBlogCategories(updatedCategories);
  //   }
    

  //   setIsDeleteModalOpen(false);
  //   setDeleteTarget({ type: null, index: null });
  // };

  const handleDeleteBlogCategory = (id, index) => {
    console.log('', id)
    Api.delete(`api/blogs/${id}`, {
      'Authorization': `Bearer ${token}`
    })
      .then(response => {
        console.log('vvvvvvvvv', response)
        setDeleteTarget({ type: "category", id, index });
      })

    setIsDeleteModalOpen(true);
  };

  const handleDeleteBlog = (blogIndex) => {
    // setDeleteTarget({ type: "blog", index: blogIndex });
    setDeleteID(blogIndex)
    setIsDeleteModalOpen(true);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setBlogForm({ ...blogForm, [name]: value });
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setBlogForm({ ...blogForm, image: file });
    setPreviewImage(URL.createObjectURL(file));
  };

  const handleSaveBlog = () => {
    const formData = new FormData();
    formData.append("photo", addSecondImage)
    Api.post(`api/blogs?categoryName&title=${blogForm.name}&shortDescription=${blogForm.shortDescription}&mainDescription`, formData, {
      'Authorization': `Bearer ${token}`,
      'Content-Type': 'multipart/form-data',
    })
    .then(response => {
      if(response && response.data) {
        console.log('blogsubbb',response)
        setRefreshKey(prev => prev + 1)
      }
    })


    const { name, shortDescription, mainDescription, image } = blogForm;

    if (!name.trim() || !shortDescription.trim() || !mainDescription.trim())
      return;

    // const updatedCategories = blogCategories.map((catBlog, blogIndex) => {
    //   if (blogIndex === selectedBlogCategoryIndex) {
    //     const updatedBlogs =
    //       editingBlogIndex !== null
    //         ? catBlog.blogs.map((blog, i) =>
    //           i === editingBlogIndex
    //             ? { name, shortDescription, mainDescription, image }
    //             : blog
    //         )
    //         : [
    //           ...catBlog.blogs,
    //           { name, shortDescription, mainDescription, image },
    //         ];
    //     return { ...catBlog, blogs: updatedBlogs };
    //   }
    //   return catBlog;
    // });

    // setBlogCategories(updatedCategories);
    setIsBlogFormOpen(false);
    setBlogForm({
      name: "",
      shortDescription: "",
      mainDescription: "",
      image: null,
    });
    setPreviewImage(null);
    setEditingBlogIndex(null);
  };

  const editBlog = (blog, blogIndex) => {
    console.log('bblll',blog)
    setEditingBlog(blog);
    setIsBlogFormOpen({
      name: blog.name,
      shortDescription: blog.shortDescription,
      mainDescription: blog.mainDescription,
      image: blog.image,
    });
    setPreviewImage(blog.image ? URL.createObjectURL(blog.image) : null);
    setEditingBlogIndex(blogIndex);
    setIsBlogFormOpen(true);
  };

  const selectedCategory =
    selectedBlogCategoryIndex !== null
      ? blogCategories[selectedBlogCategoryIndex]
      : null;

  return (
    <div className="mt-6 pr-[72px]">
      {!selectedCategory && (
        <div className="flex justify-between items-center">
          <div className="text-base font-normal">All Blog Categories</div>
          {!isBlogFormOpen && (
            <button
              onClick={openModal}
              className="bg-[#6C5C2B] text-white px-6 h-[36px] text-sm font-normal rounded hover:bg-[#947F41]"
            >
              Create New
            </button>
          )}
        </div>
      )}

      {selectedCategory ? (
        <div>
          <div className="flex justify-between items-center">
            <div className="flex items-center">
              <button
                onClick={() => {
                  setSelectedBlogCategoryIndex(null);
                  setIsBlogFormOpen(false); // Close the form when navigating back
                }}
                className="font-normal text-[16px] text-[#8E8E8E]"
              >
                All Blog Categories
              </button>
              <h2 className="font-normal text-[16px] flex items-center ml-2">
                <img className="mr-2" src={rightArrow} alt="" />
                {selectedCategory.categoryName}
              </h2>
            </div>
            {!isBlogFormOpen && (
              <button
                onClick={() => setIsBlogFormOpen(true)}
                className="bg-[#6C5C2B] text-white px-6 h-[36px] text-sm font-normal rounded hover:bg-[#947F41]"
              >
                Create New
              </button>
            )}
          </div>

          <div className="mt-8">

            <div className="mt-8">
              {!isBlogFormOpen && (
                <div className="space-y-2 mt-3">
                {blogCategories.map((blog,blogIndex)=>(
                  <div 
                  onClick={() => editBlog(blog, blogIndex)}
                  className="w-full h-[95px] flex items-center justify-between p-4 border hover:border-[#928C8C] border-[#D6D6D6]">
                    <div className="flex items-center">
                      <img
                        src={`data:image/png;base64,${blog.photo}`}
                        alt=''
                        className="w-[95px] h-[63px] rounded-lg object-cover mr-6"
                      />
                      <div>
                        <div className="text-[#968A66] font-semibold text-[20px]">{blog.title}</div>
                        <div className="text-[16px] font-normal">{blog.shortDescription}</div>
                      </div>
                    </div>
                    <div className="flex items-center space-x-2">
                      <button className="text-[#C30303] flex items-center"
                      onClick={(e) => {
                          e.stopPropagation();
                          handleDeleteBlog(blog.id);
                        }}>
                        Delete
                        <img
                          src={deleteIcon}
                          alt="Delete"
                          className="ml-1 w-4 h-4"
                        />
                      </button>
                    </div>
                  </div>
                ))}
                </div>
              )}
            </div>
            {/* {!isBlogFormOpen && selectedCategory.blogs.length > 0 && (
              <div className="space-y-2 mt-3">
                {selectedCategory.blogs.map((blog, blogIndex) => (
                  <div
                    key={blogIndex}
                    onClick={() => editBlog(blog, blogIndex)}
                    className="w-full h-[95px] flex items-center justify-between p-4 border hover:border-[#928C8C] border-[#D6D6D6]"
                   >
                    <div className="flex items-center">
                      {blog.image && (
                        <img
                          src={URL.createObjectURL(blog.image)}
                          alt={blog.name}
                          className="w-[95px] h-[63px] rounded-lg object-cover mr-6"
                        />
                      )}
                      <div>
                        <div className="text-[#968A66] font-semibold text-[20px]">
                          {blog.name}
                        </div>
                        <div className="text-[16px] font-normal">
                          {blog.shortDescription}
                        </div>
                      </div>
                     </div>
                     <div className="flex items-center space-x-2">
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          handleDeleteBlog(blogIndex);
                        }}
                        className="text-[#C30303] flex items-center"
                       >
                        Delete
                        <img
                          src={deleteIcon}
                          alt="Delete"
                          className="ml-1 w-4 h-4"
                        />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            )} */}
          </div>

          {isBlogFormOpen && (
            <div className="flex justify-end mt-[-60px]">
              <button
                onClick={handleSaveBlog}
                disabled={
                  !blogForm.name.trim() ||
                  !blogForm.shortDescription.trim() ||
                  !blogForm.mainDescription.trim()
                }
                className={`flex items-center h-[36px] px-4 font-normal text-sm rounded-md text-white ${!blogForm.name.trim() ||
                  !blogForm.shortDescription.trim() ||
                  !blogForm.mainDescription.trim()
                  ? " bg-[#D0D0D0] cursor-not-allowed"
                  : " bg-[#947F41] cursor-pointer"
                  }`}
              >
                Save
                <img src={saveIcon} className="ml-2" alt="" />
              </button>
            </div>
          )}

          {isBlogFormOpen && (
            <div>
              <div className="flex justify-between mt-[48px]">
                <div>
                  <label className="block text-sm font-normal">
                    Blog Title
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={blogForm.name}
                    onChange={handleInputChange}
                    className="w-[717px] h-[48px] px-4 text-sm font-normal placeholder:text-[#B1B1B1] mt-2 border border-[#E8E8E8] rounded-lg focus:outline-none"
                    placeholder="Add blog name"
                  />
                  <label className="block text-sm font-normal mt-8">
                    Blog short description (8-10 words maximum)
                  </label>
                  <textarea
                    name="shortDescription"
                    value={blogForm.shortDescription}
                    onChange={handleInputChange}
                    className="w-[717px] h-[123px] resize-none px-4 py-4 text-sm font-normal placeholder:text-[#B1B1B1] mt-2 border border-[#E8E8E8] rounded-lg focus:outline-none"
                    rows="2"
                    placeholder="Add blog description"
                  ></textarea>
                </div>
                <div className="mt-4">
                  <div className="flex flex-col items-center w-fit">
                    {previewImage ? (
                      <img
                        src={previewImage}
                        alt="Profile Preview"
                        className="mb-2 w-[285px] h-[231px] object-cover"
                      />
                    ) : (
                      <div className="mb-2 w-[285px] h-[231px] border border-dashed flex items-center justify-center bg-[#F5F5F5] text-gray-400">
                        <span>
                          <img src={uploadIcon} alt="" />
                        </span>
                      </div>
                    )}
                    <label
                      htmlFor="photo-upload"
                      className="text-[#0539BC] text-[14px] font-normal flex cursor-pointer"
                    >
                      Change photo
                    </label>
                    <input
                      id="photo-upload"
                      type="file"
                      accept="image/*"
                      className="hidden"
                      onChange={(e) => setAddSecondImage(e.target.files[0] ) 
                      }
                    />
                  </div>
                </div>
              </div>
              <label className="block text-sm font-normal mt-8">
                Main description
              </label>
              <textarea
                name="mainDescription"
                value={blogForm.mainDescription}
                onChange={handleInputChange}
                className="w-full h-[395px] resize-none px-4 py-4 text-sm font-normal placeholder:text-[#B1B1B1] mt-2 border border-[#E8E8E8] rounded-lg focus:outline-none"
                rows="2"
                placeholder="Add blog description"
              ></textarea>
            </div>
          )}
        </div>
      ) : (
        <div className="mt-8">
          {blogCategories.length === 0 ? (
            <></>
          ) : (
            <div className="space-y-2">
              {blogCategories.map((category, categoryIndex) => (
                <div
                  key={categoryIndex}
                  onClick={() => setSelectedBlogCategoryIndex(categoryIndex)}
                  className="flex justify-between w-full py-[17px] pl-6 pr-12 text-[#947F41] font-medium text-sm items-center border border-[#D6D6D6] p-4 rounded-lg hover:border-[#928C8C] transition"
                >
                  <div>{category.categoryName}</div>
                  <div>
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        handleDeleteBlogCategory(category.id, categoryIndex);
                      }}
                      className="text-[#C30303] flex items-center"
                    >
                      Delete
                      <span className="ml-1">
                        <img src={deleteIcon} alt="Delete" />
                      </span>
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      )}

      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white p-10 rounded-lg w-[507px] h-auto">
            <h2 className="text-[14px] font-light">Add Blog Category Name</h2>
            <input
              type="text"
              placeholder="Blog Category Name"
              value={blogCategoryName}
              onChange={(e) => setBlogCategoryName(e.target.value)}
              className="rounded-lg px-4 py-3 mt-2 w-full text-[12px] border border-[#E8E8E8] font-normal focus:outline-none placeholder:text-[12px] placeholder:font-light"
            />
               <input
              type="text"
              placeholder="Title"
              value={blogCategoryName1}
              onChange={(e) => setBlogCategoryName1(e.target.value)}
              className="rounded-lg px-4 py-3 mt-2 w-full text-[12px] border border-[#E8E8E8] font-normal focus:outline-none placeholder:text-[12px] placeholder:font-light"
            />
               <input
              type="text"
              placeholder="Short Description"
              value={blogCategoryName2}
              onChange={(e) => setBlogCategoryName2(e.target.value)}
              className="rounded-lg px-4 py-3 mt-2 w-full text-[12px] border border-[#E8E8E8] font-normal focus:outline-none placeholder:text-[12px] placeholder:font-light"
            />
               <input
              type="text"
              placeholder="Main Description"
              value={blogCategoryName3}
              onChange={(e) => setBlogCategoryName3(e.target.value)}
              className="rounded-lg px-4 py-3 mt-2 w-full text-[12px] border border-[#E8E8E8] font-normal focus:outline-none placeholder:text-[12px] placeholder:font-light"
            />

            <div className="relative mt-6">
              {addNewImg && (
                <img
                  src={URL.createObjectURL(addNewImg)}
                  alt="Preview"
                  className="w-[196px] h-[196px] rounded-lg object-cover mx-auto shadow-md"
                />
              )}
              <input
                type="file"
                id="fileInput"
                onChange={(e) => setAddNewImg(e.target.files[0])}
                className="hidden"
              />
              <div className="flex item-center ml-[163px] mt-2">
                <label
                  htmlFor="fileInput"
                  className="cursor-pointer  py-2 px-4 text-center justify-center text-sm  text-[#947F41] rounded-lg border-2 border-[#6C5C2B]"
                >
                  Choose file
                </label>
              </div>
            </div>

            
            <div className="flex justify-end mt-10">
              <button
                onClick={closeModal}
                className="h-[47px] w-[99px] text-center border border-[#947F41] text-[#947F41] rounded-lg text-[16px] font-medium"
              >
                Cancel
              </button>
              <button
                onClick={handleSaveBlogCategory}
                className={`${!blogCategoryName.trim()
                  ? "bg-[#947F41] opacity-50 text-white cursor-not-allowed"
                  : "bg-[#947F41] text-white"
                  } rounded-lg text-[16px] font-medium h-[47px] w-[99px] ml-5`}
              >
                Save
              </button>
            </div>
          </div>
        </div>
      )}
      {isDeleteModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white p-10 rounded-2xl w-[428px] shadow">
            <img src={deleteWarn} alt="" />

            <h3 className="mt-4 text-[#947F41] font-medium text-base ">Confirm Delete?</h3>
            <p className="mt-2 font-normal text-sm text-[#818180]">Are you sure you want to delete the
              {deleteTarget.type === " category" ? " category" : " blog"} now ?</p>

            <div className="flex justify-between mt-8">
              <button
                onClick={() => setIsDeleteModalOpen(false)}
                className="w-[166px] h-[56px] rounded-lg border border-[#B3B3B3] text-[#947F41] text-base font-medium"
              >
                Cancel
              </button>
              <button
                onClick={handleConfirmDelete}
                className="w-[166px] h-[56px] rounded-lg text-white  bg-[#947F41] text-base font-medium"
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default AdminBlogs;
