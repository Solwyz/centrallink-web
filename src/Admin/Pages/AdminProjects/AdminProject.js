import React, { useEffect, useState } from "react";
import deleteIcon from "../../../Assets/Admin/projects/delete.svg";
import deleteWarning from "../../../Assets/Admin/projects/deleteWarning.svg";
import rightArrow from "../../../Assets/Admin/projects/right Arrow.svg";
import {
  getAllProjects,
  createProject,
  deleteProject,
  addImageToProject,
} from "../../Services/Services";


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

  // Fetch categories on component mount
  useEffect(() => {
    const fetchCategories = async () => {
      try {
        setLoading(true);
        const data = await getAllProjects();
        setCategories(data.projects); // Assume API returns an array of projects
        const imageMap = data.projects.reduce((acc, project) => {
          acc[project.name] = project.images || [];
          return acc;
        }, {});
        setImages(imageMap);
      } catch (error) {
        console.error("Error fetching projects:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchCategories();
  }, []);

  const addCategory = async () => {
    try {
      const newCategory = { name: newCategoryName, images: [] };
      const createdCategory = await createProject(newCategory);
      setCategories([...categories, createdCategory.name]);
      setImages({ ...images, [createdCategory.name]: [] });
      setNewCategoryName("");
      setCategoryModalOpen(false);
    } catch (error) {
      console.error("Error creating category:", error);
    }
  };

  const confirmDeleteCategory = async () => {
    try {
      await deleteProject(categoryToDelete);
      setCategories(categories.filter((cat) => cat !== categoryToDelete));
      const updatedImages = { ...images };
      delete updatedImages[categoryToDelete];
      setImages(updatedImages);
      setDeleteModalOpen(false);
    } catch (error) {
      console.error("Error deleting category:", error);
    }
  };

  const addImage = async () => {
    if (!newImage || !selectedCategory) return;
    try {
      const formData = new FormData();
      formData.append("image", newImage);
      const updatedImages = await addImageToProject(selectedCategory, formData);
      setImages({ ...images, [selectedCategory]: updatedImages });
      setNewImage(null);
      setImageModalOpen(false);
    } catch (error) {
      console.error("Error adding image:", error);
    }
  };

  const resetSelectedCategory = () => {
    setSelectedCategory("");
  };

  if (loading) {
    return <div className="mt-6 text-center">Loading...</div>;
  }

  return (
    <div className=" mt-6  pr-[72px]">
      {!selectedCategory && (
        <div className="flex items-center justify-between  ">
          <div className="font-normal text-[16px]">All Product Categories</div>
          <button
            onClick={() => setCategoryModalOpen(true)}
            className="px-6 h-[36px] rounded bg-[#6C5C2B] text-sm hover:bg-[#947F41]  text-white font-normal text-[16px]"
          >
            Create New
          </button>
        </div>
      )}
      {!selectedCategory ? (
        <div className="mt-12">
          <div className="space-y-2 w-full justify-between items-center">
            {categories.map((category) => (
              <div
                key={category}
                className="flex w-full  py-[17px] pl-6 pr-12 justify-between text-[#947F41] font-medium text-sm  items-center  border border-[#D6D6D6] p-4 rounded-lg  hover:border-[#928C8C] transition"
                onClick={() => setSelectedCategory(category)}
              >
                <span className="cursor-pointer  font-medium">{category}</span>
                <button
                  className="text-[#C30303] mr-2 text-sm flex font-normal "
                  onClick={(e) => {
                    e.stopPropagation();
                    setCategoryToDelete(category);
                    setDeleteModalOpen(true);
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
          {/* <h2 className="text-xl font-bold mb-6">{selectedCategory}</h2> */}

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
          </div>
        </div>
      )}

      {isCategoryModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-10 rounded-2xl  w-[507px] ">
            <h2 className="text-sm  font-medium">Add Category name</h2>
            <input
              type="text"
              value={newCategoryName}
              onChange={(e) => setNewCategoryName(e.target.value)}
              className="border p-4 w-full h-[48px] mt-2 rounded-lg focus:outline-none text-sm  border-[#E8E8E8] "
              placeholder="Category Name"
            />
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
        </div>
      )}

      {isDeleteModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-10 w-[428px] rounded-2xl ">
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
        </div>
      )}

      {isImageModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-10 rounded-2xl w-[506px]">
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
        </div>
      )}
    </div>
  );
}

export default AdminProject;
