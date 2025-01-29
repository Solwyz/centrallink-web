import React, { useState, useEffect } from "react";
import saveIcom from "../../../Assets/Admin/save.svg";
import rightArrow from "../../../Assets/Admin/projects/right Arrow.svg";
import uploadIcon from "../../../Assets/Admin/image add.svg";
import deleteIcon from "../../../Assets/Admin/projects/delete.svg";
import editIcon from "../../../Assets/Admin/edit.svg";
import deleteWarn from "../../../Assets/Admin/projects/deleteWarning.svg";
import saveInfo from "../../../Assets/Admin/projects/saveIcon.svg";
import Api from "../../Services/Api";

function AdminService() {
  const [showForm, setShowForm] = useState(false);
  const [showSaveModal, setShowSaveModal] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [services, setServices] = useState([]);
  const [currentService, setCurrentService] = useState(null);
  const [formData, setFormData] = useState({
    title: "",
    icon: null,
    photo: null,
    shortDescription: "",
    mainDescription: "",
  });
  const [previewImage, setPreviewImage] = useState(null);
  const [previewIcon, setPreviewIcon] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const [uploadPhoto, setUploadPhoto] = useState(null);
  const [uploadIcn, setUploadIcn] = useState(null);

  const formDataToSend = new FormData();

  // Assuming the `formData` object contains base64 strings for `icon` and `photo`
  formDataToSend.append("icon", formData.icon); // base64 encoded icon
  formDataToSend.append("photo", formData.photo); // base64 encoded photo
  formDataToSend.append("title", formData.title);
  formDataToSend.append("shortDescription", formData.shortDescription);
  formDataToSend.append("mainDescription", formData.mainDescription);
  console.log("FormData being sent:", formDataToSend);

  const token = localStorage.getItem("adminAuthToken");

  // Fetch Services
  useEffect(() => {
    console.log("Token being used:", token); // Log the token to check its value

    Api.get("api/services", {
      Authorization: `Bearer ${token}`,
    })
      .then((response) => {
        setServices(response.data);
        console.log("Fetched Services:", response.data);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching services:", error);
        setIsLoading(false);
      });
  }, [token]);

  // Toggle Form
  const toggleForm = (service = null) => {
    setShowForm(!showForm);
    setCurrentService(service);
    setFormData(
      service || {
        title: "",
        icon: null,
        photo: null,
        shortDescription: "",
        mainDescription: "",
      }
    );
    setPreviewImage(service?.photo || null);
    setPreviewIcon(service?.icon || null);
  };

  // Reset Selected Service
  const resetSelectedService = () => {
    setShowForm(false);
    setCurrentService(null);
  };

  // Modals
  const openSaveModal = () => setShowSaveModal(true);
  const closeSaveModal = () => setShowSaveModal(false);
  const openDeleteModal = () => setShowDeleteModal(true);
  const closeDeleteModal = () => setShowDeleteModal(false);

  // Handle Input Change
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e, type) => {
    const file = e.target.files[0]; // Get the first file from the FileList
    // setUploadPhoto(e.target.files[0]);
    if (file) {
      const reader = new FileReader();

      reader.onload = () => {
        // Check if the file is an image or icon and handle accordingly
        if (type === "image") {
          setUploadPhoto(e.target.files[0]);
          setPreviewImage(reader.result); // Set the image preview
          setFormData((prev) => ({
            ...prev,
            photo: reader.result, // Store the base64 image here
            photoName: file.name, // Store the image file name
          }));
        } else if (type === "icon") {
          setUploadIcn(e.target.files[0]);
          setPreviewIcon(reader.result); // Set the icon preview
          setFormData((prev) => ({
            ...prev,
            icon: reader.result, // Store the base64 icon here
            iconName: file.name, // Store the icon file name
          }));
        }
      };

      reader.readAsDataURL(file); // Converts the file to a base64 string
    }
  };

  const handleSave = () => {
    console.log("photooo", uploadPhoto);
    const formsData = new FormData();
    formsData.append("icon", uploadPhoto);
    formsData.append("photo", uploadPhoto);
    console.log("fomdataaaaa :", formData);
    Api.post(
      `api/services?title=${formData.title}&shortDescription=${formData.shortDescription}&mainDescription=${formData.mainDescription}`,
      formsData,
      {
        Authorization: `Bearer ${token}`,
        "Content-Type": "multipart/form-data",
      }
    ).then((response) => console.log("www", response));
    closeSaveModal();
  };

  const createService = async (formDataToSend, token) => {
    try {
      const response = await Api.post("api/services", formDataToSend, {
        Authorization: `Bearer ${token}`,
        // "Content-Type": "multipart/form-data", // Sometimes this header can be left out as Axios/FormData auto handles it
      });
      return response;
    } catch (error) {
      console.error(
        "Error creating service:",
        error.response?.data || error.message
      );
      throw error;
    }
  };

  const updateService = async (serviceId, formData, token) => {
    try {
      const response = await Api.put(`api/services/${serviceId}`, formData, {
        Authorization: `Bearer ${token}`,
      });
      return response;
    } catch (error) {
      console.error(
        "Error updating service:",
        error.response?.data || error.message
      );
      throw error;
    }
  };

  // Handle Delete
  const handleDelete = () => {
    Api.delete(`api/services/${currentService.id}`, {
      Authorization: `Bearer ${token}`,
    })
      .then(() => {
        setServices((prev) =>
          prev.filter((service) => service.id !== currentService.id)
        );
        closeDeleteModal();
      })
      .catch((error) => {
        console.error("Error deleting service:", error);
      });
  };

  // Validation Check
  const isComplete =
    formData.title &&
    formData.photo &&
    formData.shortDescription &&
    formData.mainDescription;

  const isModified =
    JSON.stringify(formData) !==
    JSON.stringify(
      currentService || {
        title: "",
        icon: null,
        photo: null,
        shortDescription: "",
        mainDescription: "",
      }
    );

  return (
    <div className="mt-6 pr-[72px]">
      {isLoading ? (
        <p>Loading...</p>
      ) : !showForm ? (
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
            {services &&
              Array.isArray(services) &&
              services.map((service, index) => (
                <div
                  key={index}
                  className="border w-[196px] h-[254px] bg-white shadow relative"
                >
                  <div className="p-2">
                    {/* For base64 images, no need to change the logic */}
                    <img
                      src={`data:image/png;base64,${service.photo}`} // If this is base64, this will work just fine
                      alt={typeof service.photo}
                      className="h-[134px] w-full object-cover rounded-t"
                    />
                  </div>
                  {service.icon && (
                    <div className="flex items-center justify-center ml-[66px] h-[64px] w-[64px] rounded-full bg-[#F6F6F6] absolute top-[105px]">
                      <img
                        src={`data:image/svg+xml;base64,${service.icon}`} // If this is base64, this will work just fine too
                        alt={typeof service.icon}
                        className="h-[32px] w-[32px] object-contain"
                      />
                    </div>
                  )}
                  <h2 className="text-base font-medium text-center mt-[22px]">
                    {service.title}
                  </h2>
                  <div className="flex w-full mt-[22px]">
                    {/* Delete Button */}
                    <button
                      className="text-[#EE1717] flex items-center justify-center px-2 w-full h-[35px] bg-[#ECECEC] text-sm"
                      onClick={() => {
                        setCurrentService(service);
                        openDeleteModal();
                      }}
                    >
                      Delete
                      <img
                        src={deleteIcon}
                        className="ml-1 h-4 w-4"
                        alt="Delete Icon"
                      />
                    </button>
                    {/* Edit Button */}
                    <button
                      className="flex items-center justify-center w-full h-[35px] bg-[#F6F6F6] text-sm"
                      onClick={() => toggleForm(service)}
                    >
                      Edit
                      <img
                        src={editIcon}
                        className="ml-1 h-4 w-4"
                        alt="Edit Icon"
                      />
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
                onClick={() => isComplete && isModified && openSaveModal()}
                disabled={!isComplete || !isModified}
                className={`flex items-center h-[36px] px-4 font-normal text-sm rounded-md text-white ${
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
                      // If previewImage is a base64 string, show it as an image
                      previewImage.startsWith("data:image") ? (
                        <img
                          src={previewImage}
                          alt="Profile Preview"
                          className="mb-2 w-[285px] h-[231px] object-cover"
                        />
                      ) : (
                        // If it's not a base64 string, treat it as a URL
                        <img
                          src={previewImage}
                          alt="Profile Preview"
                          className="mb-2 w-[285px] h-[231px] object-cover"
                        />
                      )
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

      {/* Save Modal */}
      {showSaveModal && (
        <div
          className="fixed inset-0 bg-gray-600 bg-opacity-50 flex justify-center items-center"
          role="dialog"
          aria-modal="true"
        >
          <div className="bg-white p-10 rounded-2xl w-[428px] shadow">
            <img src={saveInfo} alt="Save Confirmation Icon" />
            <h3 className="mt-4 text-[#947F41] font-medium text-base">
              Confirm Save?
            </h3>
            <p className="mt-2 font-normal text-sm text-[#818180]">
              Are you sure you want to confirm save now?
            </p>
            <div className="flex justify-between mt-8">
              <button
                className="w-[166px] h-[56px] rounded-lg border border-[#B3B3B3] text-[#947F41] text-base font-medium"
                onClick={closeSaveModal}
                aria-label="Cancel saving"
              >
                Cancel
              </button>
              <button
                className="w-[166px] h-[56px] rounded-lg text-white bg-[#947F41] text-base font-medium"
                onClick={handleSave}
                aria-label="Confirm save"
              >
                Confirm
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Delete Modal */}
      {showDeleteModal && (
        <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-10 rounded-2xl w-[428px] shadow">
            <img src={deleteWarn} alt="" />
            <h3 className="mt-4 text-[#947F41] font-medium text-base ">
              Confirm Delete?
            </h3>
            <p className="mt-2 font-normal text-sm text-[#818180]">
              Are you sure you want to delete the service now?
            </p>
            <div className="flex justify-between mt-8">
              <button
                className="w-[166px] h-[56px] rounded-lg border border-[#B3B3B3] text-[#947F41] text-base font-medium"
                onClick={closeDeleteModal}
              >
                Cancel
              </button>
              <button
                className="w-[166px] h-[56px] rounded-lg text-white  bg-[#947F41] text-base font-medium"
                onClick={handleDelete}
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

export default AdminService;
