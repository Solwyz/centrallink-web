import React, { useState } from "react";
import saveIcom from "../../../Assets/Admin/save.svg";
import rightArrow from "../../../Assets/Admin/projects/right Arrow.svg";
import uploadIcon from "../../../Assets/Admin/image add.svg";
import deleteIcon from "../../../Assets/Admin/projects/delete.svg";
import editIcon from "../../../Assets/Admin/edit.svg"


function AdminService() {
  const [showForm, setShowForm] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [modalType, setModalType] = useState("");
  const [services, setServices] = useState([]);
  const [currentService, setCurrentService] = useState(null);
  const [formData, setFormData] = useState({
    title: "",
    icon: null,
    image: null,
    shortDescription: "",
    mainDescription: "",
  });
  const [previewImage, setPreviewImage] = useState(null);
  const [previewIcon, setPreviewIcon] = useState(null);

  const toggleForm = (service = null) => {
    setShowForm(!showForm);
    setCurrentService(service);
    setFormData(
      service || {
        title: "",
        icon: null,
        image: null,
        shortDescription: "",
        mainDescription: "",
      }
    );
    setPreviewImage(service?.image || null);
    setPreviewIcon(service?.icon || null);
  };
  const resetSelectedService = () => {
    setShowForm(false);
    setCurrentService(null);
  };

  const openModal = (type) => {
    setModalType(type);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
    setModalType("");
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e, type) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        if (type === "image") {
          setPreviewImage(reader.result);
          setFormData((prev) => ({
            ...prev,
            image: reader.result,
            imageName: file.name, // Set the image name
          }));
        } else if (type === "icon") {
          setPreviewIcon(reader.result);
          setFormData((prev) => ({
            ...prev,
            icon: reader.result,
            iconName: file.name, // Set the icon name
          }));
        }
      };
      reader.readAsDataURL(file);
    }
  };
  const handleSave = () => {
    if (currentService) {
      setServices((prev) =>
        prev.map((service) =>
          service === currentService ? { ...formData } : service
        )
      );
    } else {
      setServices((prev) => [{ ...formData }, ...prev]);
    }
    toggleForm();
    closeModal();
    resetSelectedService();
  };

  const isComplete =
    formData.title &&
    formData.image &&
    formData.shortDescription &&
    formData.mainDescription;

  const isModified =
    JSON.stringify(formData) !==
    JSON.stringify(
      currentService || {
        title: "",
        icon: null,
        image: null,
        shortDescription: "",
        mainDescription: "",
      }
    );

  return (
    <div className="mt-6 pr-[72px]">
      {!showForm ? (
        <div>
          <div className="flex justify-between items-center">
            <h1 className="text-base font-normal">All Services</h1>
            <button
              onClick={() => toggleForm()}
              className="bg-[#6C5C2B] text-white px-6 h-[36px] text-sm font-normal rounded hover:bg-[#947F41]"
            >
              Create New
            </button>
          </div>

          <div className="grid grid-cols-5 gap-5 mt-12">
            {services.map((service, index) => (
              <div
                key={index}
                className="border   w-[196px] h-[254px]  bg-white shadow"
              >
                <img
                  src={service.image }
                  alt="Service"
                  className="h-[134px] p-2 w-full object-cover rounded"
                />

                {service.icon && (
                 <div className=" item-center ml-[58px] h-[64px] w-[64px] rounded-full bg-[#F6F6F6] absolute translate-y-[-34px]">
                    <img
                      src={service.icon}
                      alt="Icon"
                      className="h-[64px] w-[64px] rounded-full object-cover"
                    />
                 </div>
                )}
                <h2 className="text-base font-medium text-center mt-[40px] ">{service.title}</h2>
                <div className="flex w-full ">
                <button
                    className="text-[#EE1717] flex items-center px-4 w-[95px] h-[35px] bg-[#ECECEC] "
                    onClick={() => openModal("delete")}
                  >
                    Delete
                    <img src={deleteIcon} className="ml-2" alt="" />
                  </button>
                  <button
                    className="flex w-[95px] items-center bg-[#F6F6F6] px-4 h-[35px]"
                    onClick={() => toggleForm(service)}
                  >
                   Edit 
                    <img src={editIcon} className="ml-2" alt="" />
                  </button>
                 
                </div>
              </div>
            ))}
          </div>
        </div>
      ) : (
        <div className="">
          <div className="flex justify-between">
            <div className="flex">
              <button
                onClick={resetSelectedService}
                className=" font-normal text-[16px]"
              >
                All Services
              </button>
              {currentService && (
                <h2 className="font-normal text-[16px] flex items-center ml-2">
                  <img src={rightArrow} className="mr-2" alt="" />
                  {currentService.title}
                </h2>
              )}
            </div>

            <div className=" ">
              <button
                onClick={() => handleSave(formData)}
                disabled={!isComplete || !isModified}
                className={` flex items-center h-[36px] px-4 font-normal text-sm rounded-md text-white  ${
                  isComplete && isModified
                    ? "bg-[#947F41] cursor-pointer"
                    : "bg-[#D0D0D0] cursor-default"
                }`}
              >
                Save
                <img src={saveIcom} className="ml-2" alt="" />
              </button>
            </div>
          </div>

          <form>
            <div className="mt-12 flex justify-between">
              <div className=" ">
                <div className="flex gap-4">
                  <div className="">
                    <label className="block text-sm font-normal ">
                      Service Title
                    </label>
                    <input
                      type="text"
                      name="title"
                      value={formData.title}
                      onChange={handleInputChange}
                      className="w-[359px] h-[47px] px-4  text-sm font-normal placeholder:text-[#B1B1B1] mt-2 border border-[#E8E8E8]  rounded-lg focus:outline-none"
                      placeholder="Add service name"
                    />
                  </div>

                  <div className="">
                    <label className="block text-sm font-normal ">
                      Add Icon
                    </label>
                    <div className=" flex items-center bg-[#F0F0F0] w-[322px] rounded-lg p-3 mt-2  ">
                      <label className="border-[1px] border-[#707FDD] rounded cursor-pointer flex items-center text-[#707FDD] font-normal px-4 h-[24px] text-[14px]">
                        Choose file
                        <input
                          type="file"
                          onChange={(e) => handleFileChange(e, "icon")}
                          className="hidden"
                        />
                      </label>
                      <span className="ml-2 text-gray-500 text-sm">
                        {formData.iconName || "No file chosen"}
                      </span>
                    </div>
                  </div>
                </div>
                <div className="mt-8">
                  <label className="block text-sm font-normal">
                    Service short description (27 words max)
                  </label>
                  <textarea
                    name="shortDescription"
                    value={formData.shortDescription}
                    onChange={handleInputChange}
                    className="w-[717px] h-[123px] resize-none px-4 py-4  text-sm font-normal placeholder:text-[#B1B1B1] mt-2 border border-[#E8E8E8]  rounded-lg focus:outline-none"
                    rows="2"
                    placeholder="Add service short description"
                  ></textarea>
                </div>
              </div>
              <div className="">
                <div className="h-fit">
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
                      className=" text-[#0539BC] text-[14px] font-normal flex cursor-pointer"
                    >
                      Change photo
                    </label>

                    <input
                      id="photo-upload"
                      type="file"
                      accept="image/*"
                      className="hidden"
                      onChange={(e) => handleFileChange(e, "image")}
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-[50px]">
              <label className="block text-sm font-normal">
                Main description
              </label>
              <textarea
                name="mainDescription"
                value={formData.mainDescription}
                onChange={handleInputChange}
                className="w-full  h-[395px] px-4  py-4 resize-none  text-sm font-normal placeholder:text-[#B1B1B1] mt-2 border border-[#E8E8E8]  rounded-lg focus:outline-none"
                rows="5"
                placeholder="Add Service description"
              ></textarea>
            </div>
          </form>
        </div>
      )}

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-6 rounded shadow">
            <h3 className="text-xl font-bold">
              {modalType === "save" ? "Confirm Save" : "Confirm Delete"}
            </h3>
            <p className="mt-4">
              {modalType === "save"
                ? "Are you sure you want to save the changes?"
                : "Are you sure you want to delete this item?"}
            </p>
            <div className="flex justify-end mt-6">
              <button
                className="bg-gray-300 px-4 py-2 rounded hover:bg-gray-400 mr-2"
                onClick={closeModal}
              >
                Cancel
              </button>
              <button
                className={`$
                  {modalType === "save" ? "bg-green-500" : "bg-red-500"}
                text-white px-4 py-2 rounded hover:$
                  {modalType === "save" ? "bg-green-600" : "bg-red-600"}`}
                onClick={modalType === "save" ? handleSave : closeModal}
              >
                Confirm
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default AdminService;
