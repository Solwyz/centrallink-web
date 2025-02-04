import React, { useEffect, useState } from "react";
import deleteIcon from "../../../Assets/Admin/projects/delete.svg";
import deleteWarning from "../../../Assets/Admin/projects/deleteWarning.svg";
import rightArrow from "../../../Assets/Admin/projects/right Arrow.svg";
import testImage from "../../../Assets/send (1).png"
import {
  getAllProjects,
  createProject,
  deleteProject,
  addImageToProject,
} from "../../Services/Services";
import Api from "../../Services/Api";

const token = localStorage.getItem("adminAuthToken");


// const refreshToken = localStorage.getItem("refreshToken")

// const callRefreshToken = () => {
//   console.log('refresh token called at', new Date().toLocaleTimeString());
//   Api.post('api/auth/refreshtoken', {
//     "refreshToken": refreshToken
//   })
//     .then(response => {
//       console.log('refresh token response:', response)
//       if (response && response.data) {
//         localStorage.setItem("adminAuthToken", response.data.jwt);
//         localStorage.setItem("refreshToken", response.data.refreshToken);
//         return true;
//       } else {
//         return false
//       }
      
//     })
// }



function AdminProject() {
  const [categories, setCategories] = useState([]);
  const [images, setImages] = useState({});
  const [isCategoryModalOpen, setCategoryModalOpen] = useState(false);
  const [isImageModalOpen, setImageModalOpen] = useState(false);
  const [isDeleteModalOpen, setDeleteModalOpen] = useState(false);
  const [newCategoryName, setNewCategoryName] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [newImage, setNewImage] = useState(null);
  const [categoryToDelete, setCategoryToDelete] = useState("");
  const [loading, setLoading] = useState(true);
  const [deleteCategoryId, setDeleteCategoryId] = useState('')
  const [selectedCategoryId, setSelectedCategoryId] = useState('')
  const [addNewCategoryName, setAddNewCategoryName] = useState('')
  const [addNewImg, setAddNewImg] = useState(null)
  const [refreshKey, setRefreshKey] = useState(0)
  const [isAdding, setIsAdding] = useState(false);
  const [isPhotoAdding, setIsPhotoAdding] = useState(false);
  const [isDeleting, setIsDeleting] = useState(false);
  const [projectsLoading, setProjectsLoading] = useState(true);

  const [detailedProject, setDetailedProject] = useState({})


  const handleDelete = (id) => {
    // e.stopPropagation();
    // setCategoryToDelete(category);
    setDeleteModalOpen(true);
    console.log("iii", id);
    setDeleteCategoryId(id)
  };

  const handleCreateClick = () => {
    setCategoryModalOpen(true)
  }

  const handleCategoryClick = (category) => {
    setSelectedCategory(category.categoryName)
    setSelectedCategoryId(category.id)

    Api.get(`api/project/${category.id}`, {
      'Authorization': `Bearer ${token}`
    })
      .then(response => {
        if (response && response.data) {
          console.log('detailed project :', response.data)
          setDetailedProject(response.data)
        } else {
          console.error('Error fetching detailed project:', response)
        }
      })

  }

  //api/project/1?categoryName=kstringttt&id=1

  const confirmDeleteCategory = () => {
    setIsDeleting(true);
    Api.delete(`api/project/${deleteCategoryId}`, {
      'Authorization': `Bearer ${token}`
    })
      .then(response => {
        setIsDeleting(false);
        console.log('delete category response:', response)
        setDeleteCategoryId('')
        setDeleteModalOpen(false)
        setRefreshKey(prev => prev + 1)
      })
  }


  const addImage = () => {
    setIsPhotoAdding(true);
    const formData = new FormData();
    formData.append("photo", newImage);

    Api.put(`api/project/${selectedCategoryId}?categoryName=finest&id=1`, formData, {
      'Authorization': `Bearer ${token}`,
      'Content-Type': 'multipart/form-data',
    })
      .then(response => {
        setIsPhotoAdding(false);
        if (response && response.data) {
          console.log('update image response:', response.data)
          setNewImage(null)
          setImageModalOpen(false)
          setRefreshKey(prev => prev + 1)
        } else {
          console.error('Error adding image:', response)
        }
      })
  }

  // api/project?categoryName=NewCategory

  const addCategory = () => {
    setIsAdding(true);
    const formData = new FormData();
    formData.append("photo", addNewImg);

    Api.post(`api/project?categoryName=${addNewCategoryName}`, formData, {
      'Authorization': `Bearer ${localStorage.getItem("adminAuthToken")}`,
      'Content-Type': 'multipart/form-data',
    })
      .then(response => {
        setIsAdding(false);
        if (response && response.data) {
          console.log('add categoty response:', response)
          setAddNewCategoryName('')
          setAddNewImg(null)
          setCategoryModalOpen(false)
          setRefreshKey(prev => prev + 1)
        } else if (response && response.status === 401) {
          console.log('respStatus:', response.status)
          // callRefreshToken();
        } else {
          console.error('Error adding category:', response)
        }
      })
    // Api.post('api/project', {}, {'Authorization': `Bearer ${token}`})
  }

  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     callRefreshToken();
  //   },600000);

  //   return () => clearInterval(interval);
  // },[]);


  useEffect(() => {

    Api.get("api/project").then((response) => {
      setProjectsLoading(false);
      if (response) {
        if (response && response.data) {
          console.log('adminresponse2222', response.data)
          setCategories(response.data);
        } else {
          console.error('Error fetching admin projectsss:', response)
        }
      }
    });
  }, [refreshKey]);


  const resetSelectedCategory = () => {
    setSelectedCategory("");
  };

  

  return (
    <div className=" mt-6  pr-[72px]">
      {!selectedCategory && (
        <div className="flex items-center justify-between  ">
          <div className="font-normal text-[16px]">All Project Categories</div>
          <button
            onClick={handleCreateClick}
            className="px-6 h-[36px] rounded bg-[#6C5C2B] text-sm hover:bg-[#947F41]  text-white font-normal text-[16px]"
          >
            Create New
          </button>
        </div>
      )}

      {projectsLoading ? <div className="mt-32 text-center text-black">Loading projects.. Please wait..</div> :
        <div>
          {!selectedCategory ? (
            <div className="mt-12">
              <div className="space-y-2 w-full justify-between items-center">
                {Array.isArray(categories) && categories.map((category, index) => (
                  <div
                    key={index}
                    className="flex w-full  py-[17px] pl-6 pr-12 justify-between text-[#947F41] font-medium text-sm  items-center  border border-[#D6D6D6] p-4 rounded-lg  hover:border-[#928C8C] transition"
                    onClick={() => handleCategoryClick(category)}
                  >
                    <span className="cursor-pointer  font-medium">
                      {category.categoryName}
                    </span>
                    <button
                      className="text-[#C30303] mr-2 text-sm flex font-normal "
                      onClick={(e) => {
                        e.stopPropagation(); // Prevent event from bubbling to the parent div
                        handleDelete(category.id);
                      }}
                    >
                      Delete
                      <img src={deleteIcon} alt="" />
                    </button>
                  </div>
                ))}
              </div>
            </div>
          ) : (
            <div className="">
              <h2 className="text-xl font-bold mb-6">{selectedCategory}</h2>

              <div className="flex justify-between items-center">
                <div className="flex items-center">
                  <button
                    onClick={resetSelectedCategory}
                    className=" text-[#8E8E8E] font-normal text-[16px]"
                  >
                    All Projects categories
                  </button>

                  <h2 className="font-normal text-[16px] flex items-center ml-2">
                    <img src={rightArrow} className="mr-2" alt="" />
                    {selectedCategory}
                  </h2>
                </div>
                <div className="">
                  <button
                    className="bg-[#6C5C2B] text-white text-center  h-[36px] text-sm items-center px-4 rounded hover:bg-[#947F41] transition"
                    onClick={() => setImageModalOpen(true)}
                  >
                    Add Photo
                  </button>
                </div>
              </div>

              <div className="grid mt-[48px] grid-cols-5 gap-6">
                {detailedProject && (
                  <div className="relative">
                    <img
                      src={`data:image/png;base64,${detailedProject.photo}`}
                      alt="Category Image"
                      className="w-[196px] h-[196px]  object-cover"
                    />
                  </div>
                )}
              </div>

              {/* <div className="grid mt-[48px] grid-cols-5 gap-6">
            {(images[selectedCategory] || []).map((image, index) => (
              <div key={index} className="relative">
                <img
                  src={URL.createObjectURL(image)}
                  alt="Category Image"
                  className="w-[196px] h-[196px]  object-cover"
                />
                <button
                  className="absolute bottom-2 justify-center ml-[59px] bg-white text-[#EE1717] h-[35px] px-5 rounded text-sm "
                  onClick={() => {
                    const updatedImages = images[selectedCategory].filter(
                      (_, i) => i !== index
                    );
                    setImages({ ...images, [selectedCategory]: updatedImages });
                  }}
                >
                  Delete
                </button>
              </div>
            ))}
          </div> */}
            </div>
          )}

          {isCategoryModalOpen && (
            <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
              <div className="bg-white p-10 rounded-2xl  w-[507px] ">
                {isAdding ?
                  <div className="text-base font-medium py-4  text-[#947F41] ">Adding New Category. Please wait..</div> :
                  <div>
                    <h2 className="text-sm  font-medium">Add Project Category Name</h2>
                    <input
                      type="text"
                      value={addNewCategoryName}
                      onChange={(e) => setAddNewCategoryName(e.target.value)}
                      className="border p-4 w-full h-[48px] mt-2 rounded-lg focus:outline-none text-sm  border-[#E8E8E8] "
                      placeholder="Category Name"
                    />



                    <h2 className="text-base font-medium  text-[#947F41] ">
                      Add Photo
                    </h2>
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
                        className="py-2 px-4 rounded-lg mr-2 w-[99px] text-base font-medium h-[47px] border-[#947F41] text-[#947F41] border transition"
                        onClick={() => setCategoryModalOpen(false)}
                      >
                        Cancel
                      </button>
                      <button
                        className="bg-[#947F41] w-[99px] h-[47px] text-base font-medium text-white py-2 px-4 rounded-lg  transition"
                        onClick={addCategory}
                      >
                        Save
                      </button>
                    </div>
                  </div>
                }
              </div>
            </div>
          )}

          {isDeleteModalOpen && (
            <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
              <div className="bg-white p-10 w-[428px] rounded-2xl ">
                {isDeleting ? <div className="text-base font-medium py-4  text-[#947F41] ">Deleting. Please wait..</div> :
                  <div>
                    <img src={deleteWarning} alt="" />
                    <h2 className="text-base font-medium text-[#947F41] mt-6">
                      Delete Category ?
                    </h2>
                    <p className="mt-2 text-[#818180] text-sm font-normal">
                      Are you sure you want to delete the category "{categoryToDelete}"?
                    </p>
                    <div className="flex justify-center gap-4 mt-8">
                      <button
                        className="  w-[165px] rounded-lg h-[56px] text-center border font-medium text-base text-[#947F41] border-[#947F41] transition"
                        onClick={() => setDeleteModalOpen(false)}
                      >
                        Cancel
                      </button>
                      <button
                        className="bg-[#947F41] rounded-lg w-[165px] text-white h-[56px] text-center font-medium text-base transition"
                        onClick={confirmDeleteCategory}
                      >
                        Delete
                      </button>
                    </div>
                  </div>
                }
              </div>
            </div>
          )}

          {isImageModalOpen && (
            <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
              <div className="bg-white p-10 rounded-2xl w-[506px]">
                {isPhotoAdding ?
                  <div className="text-base font-medium py-4  text-[#947F41] ">Adding New Category. Please wait..</div> :
                  <div>
                    <h2 className="text-base font-medium  text-[#947F41] ">
                      Add Photo
                    </h2>
                    <div className="relative mt-6">
                      {newImage && (
                        <img
                          src={URL.createObjectURL(newImage)}
                          alt="Preview"
                          className="w-[196px] h-[196px] rounded-lg object-cover mx-auto shadow-md"
                        />
                      )}
                      <input
                        type="file"
                        id="fileInput"
                        onChange={(e) => setNewImage(e.target.files[0])}
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

                    <div className="flex justify-center mt-[48px] space-x-2">
                      <button
                        className="py-2 px-4 rounded-lg mr-2 w-[99px] text-base font-medium h-[47px] border-[#947F41] text-[#947F41] border transition"
                        onClick={() => setImageModalOpen(false)}
                      >
                        Cancel
                      </button>
                      <button
                        className="bg-[#947F41] w-[99px] h-[47px] text-base font-medium text-white py-2 px-4 rounded-lg  transition"
                        onClick={addImage}
                      >
                        Save
                      </button>
                    </div>
                  </div>
                }

              </div>
            </div>
          )}
        </div>
      }
    </div>
  );
}

export default AdminProject;
