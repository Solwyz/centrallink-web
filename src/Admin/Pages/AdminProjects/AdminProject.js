import React, { useState } from "react";
import deleteIcon from "../../../Assets/Admin/projects/delete.svg";
import deleteWarning from "../../../Assets/Admin/projects/deleteWarning.svg";
import rightArrow from "../../../Assets/Admin/projects/right Arrow.svg";

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

  const addCategory = () => {
    setCategories([...categories, newCategoryName]);
    setNewCategoryName("");
    setCategoryModalOpen(false);
  };

  const confirmDeleteCategory = () => {
    setCategories(categories.filter((cat) => cat !== categoryToDelete));
    const updatedImages = { ...images };
    delete updatedImages[categoryToDelete];
    setImages(updatedImages);
    setDeleteModalOpen(false);
  };

  const addImage = () => {
    if (!newImage || !selectedCategory) return;
    setImages({
      ...images,
      [selectedCategory]: [...(images[selectedCategory] || []), newImage],
    });
    setNewImage(null);
    setImageModalOpen(false);
  };

  const resetSelectedCategory = () => {
    setSelectedCategory("");
  };

  return (
    <div className="pt-6 pr-[72px] w-full">
      {!selectedCategory && (
        <div className="flex items-center justify-between w-full ">
          <div className="font-normal text-[16px]">All Product Categories</div>
          <button
            onClick={() => setCategoryModalOpen(true)}
            className="px-6 py-[11px] rounded-lg bg-[#6C5C2B] text-sm hover:bg-[#947F41]  text-white font-normal text-[16px]"
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
                className="flex w-full  py-[17px] pl-6 pr-12 justify-between text-[#947F41] font-medium text-sm   items-center  border border-[#D6D6D6] p-4 rounded-lg  hover:border-[#928C8C] transition"
                onClick={() => setSelectedCategory(category)}
              >
                <span className="cursor-pointer  font-medium">{category}</span>
                <button
                  className="text-red-600  font-semibold hover:text-red-800"
                  onClick={(e) => {
                    e.stopPropagation();
                    setCategoryToDelete(category);
                    setDeleteModalOpen(true);
                  }}
                >
                  Delete
                </button>
              </div>
            ))}
          </div>
        </div>
      ) : (
        <div className="mt-8">
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
                className="bg-[#6C5C2B] text-white  items-center py-2 px-4 rounded shadow-md hover:shadow-lg transition"
                onClick={() => setImageModalOpen(true)}
              >
                Add Photo
              </button>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {(images[selectedCategory] || []).map((image, index) => (
              <div key={index} className="relative">
                <img
                  src={URL.createObjectURL(image)}
                  alt="Category Image"
                  className="w-full h-auto rounded-lg object-cover"
                />
                <button
                  className="absolute top-2 right-2 bg-red-600 text-white py-1 px-2 rounded text-sm hover:bg-red-700"
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
          <div className="bg-white p-10  w-[507px] ">
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
                className="bg-[#947F41] w-[99px] h-[47px] text-base font-medium text-white py-2 px-4 rounded-lg hover:bg-opacity-90 transition"
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
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <h2 className="text-lg font-bold mb-6">Confirm Deletion</h2>
            <p className="mb-6">
              Are you sure you want to delete the category "{categoryToDelete}"?
            </p>
            <div className="flex justify-end">
              <button
                className="bg-gray-300 py-2 px-4 rounded mr-2 hover:bg-gray-400 transition"
                onClick={() => setDeleteModalOpen(false)}
              >
                Cancel
              </button>
              <button
                className="bg-red-600 text-white py-2 px-4 rounded hover:bg-red-700 transition"
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
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <h2 className="text-lg font-bold mb-6">Add New Photo</h2>
            <input
              type="file"
              onChange={(e) => setNewImage(e.target.files[0])}
              className="border p-2 w-full mb-6 rounded focus:outline-none focus:ring-2 focus:ring-gold"
            />
            {newImage && (
              <img
                src={URL.createObjectURL(newImage)}
                alt="Preview"
                className="w-full h-auto mb-6 rounded-lg object-cover"
              />
            )}
            <div className="flex justify-end">
              <button
                className="bg-gray-300 py-2 px-4 rounded mr-2 hover:bg-gray-400 transition"
                onClick={() => setImageModalOpen(false)}
              >
                Cancel
              </button>
              <button
                className="bg-slate-950 text-white py-2 px-4 rounded hover:bg-opacity-90 transition"
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
