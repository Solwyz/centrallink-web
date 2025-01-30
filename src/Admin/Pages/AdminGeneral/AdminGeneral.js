import React, { useState, useEffect } from "react";
import ArrowDownIcon from "../../../Assets/Admin/arrowDown.svg";
import ArrowUpIcon from "../../../Assets/Admin/arrowUp.svg";
import saveIcon from "../../../Assets/Admin/save.svg";
import Api from "../../Services/Api";

function AdminGeneral() {
  const [contactEmail, setContactEmail] = useState("");
  const [facebookLink, setFacebookLink] = useState("");
  const [instagramLink, setInstagramLink] = useState("");
  const [linkedinLink, setLinkedinLink] = useState("");

  const [isModified, setIsModified] = useState(false);
  const [openSection, setOpenSection] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const [settingsId, setSettingsId] = useState(null); // ID from backend
  const token = localStorage.getItem("adminAuthToken");

  // ✅ Fetch settings on component mount
  useEffect(() => {
    Api.get("api/settings", {
      Authorization: `Bearer ${token}` 
    })
      .then((response) => {
        if (response.data) {
          const { id, enquiryEmail, facebookUrl, instagramUrl, linkedinUrl } =
            response.data;
          setSettingsId(id); // Store settings ID for updates
          setContactEmail(enquiryEmail || "");
          setFacebookLink(facebookUrl || "");
          setInstagramLink(instagramUrl || "");
          setLinkedinLink(linkedinUrl || "");
        }
      })
      .catch((error) => {
        console.error("Error fetching settings", error);
      });
  }, []);

  // ✅ Handle input changes
  const handleInputChange = (setter) => (event) => {
    setter(event.target.value);
    setIsModified(true);
  };

  // ✅ Handle save (PUT or POST dynamically)
  const handleSave = () => {
    setShowModal(true);
  };

  const confirmSave = () => {
    const payload = {
      enquiryEmail: contactEmail,
      facebookUrl: facebookLink,
      instagramUrl: instagramLink,
      linkedinUrl: linkedinLink,
    }
  
   
   
  
    const apiCall = settingsId
      ? Api.put(`api/settings/${settingsId}`, payload, {      Authorization: `Bearer ${token}`, 
      })
      : Api.post("api/settings", payload, {       Authorization: `Bearer ${token}`, 
      });
  
    apiCall
      .then((response) => {
        console.log("Settings saved successfully:", response.data);
        if (response.data && response.data.id) {
          setSettingsId(response.data.id); // Avoid reading `undefined.id`
        }
        setIsModified(false);
        setShowModal(false);
      })
      .catch((error) => {
        console.error("Error saving settings:", error.response?.data || error);
      });
  };
  

  const cancelSave = () => {
    setShowModal(false);
  };

  const toggleSection = (section) => {
    setOpenSection(openSection === section ? null : section);
  };

  return (
    <div className="pr-[72px] mt-6 w-full">
      <h2 className="text-xl font-normal">General Settings</h2>

      {/* Contact Details Section */}
      <div className="bg-white custom-shadow mt-8">
        <button
          onClick={() => toggleSection("contact")}
          className="flex justify-between items-center w-full h-[54px] px-6 text-left text-[#947F41] font-normal text-sm focus:outline-none"
        >
          <span>Contact Details</span>
          <img
            src={openSection === "contact" ? ArrowUpIcon : ArrowDownIcon}
            alt="Toggle Icon"
            className="mr-4"
          />
        </button>
        {openSection === "contact" && (
          <div className="p-6">
            <label className="text-sm flex font-light">
              Enquiry receiving mail:
              <input
                type="email"
                value={contactEmail}
                onChange={handleInputChange(setContactEmail)}
                className="px-4 h-[40px] ml-2 text-[#5C5C5C] focus:outline-none text-sm font-light w-[297px] bg-[#F7F7F7] rounded-md"
              />
            </label>
          </div>
        )}
      </div>

      {/* Social Media Links Section */}
      <div className="bg-white custom-shadow mt-2">
        <button
          onClick={() => toggleSection("social")}
          className="flex justify-between items-center w-full h-[54px] px-6 text-left text-[#947F41] font-normal text-sm focus:outline-none"
        >
          <span>Social Media Links</span>
          <img
            src={openSection === "social" ? ArrowUpIcon : ArrowDownIcon}
            alt="Toggle Icon"
            className="mr-4"
          />
        </button>
        {openSection === "social" && (
          <div className="p-6 space-y-2">
            <label className="text-sm flex font-light">
              Facebook:
              <input
                type="text"
                value={facebookLink}
                onChange={handleInputChange(setFacebookLink)}
                className="px-4 h-[40px] ml-[22px] text-[#5C5C5C] focus:outline-none text-sm font-light w-[297px] bg-[#F7F7F7] rounded-md"
              />
            </label>
            <label className="text-sm flex font-light">
              Instagram:
              <input
                type="text"
                value={instagramLink}
                onChange={handleInputChange(setInstagramLink)}
                className="px-4 h-[40px] ml-5 text-[#5C5C5C] focus:outline-none text-sm font-light w-[297px] bg-[#F7F7F7] rounded-md"
              />
            </label>
            <label className="text-sm flex font-light">
              LinkedIn:
              <input
                type="text"
                value={linkedinLink}
                onChange={handleInputChange(setLinkedinLink)}
                className="px-4 h-[40px] ml-[39px] text-[#5C5C5C] focus:outline-none text-sm font-light w-[297px] bg-[#F7F7F7] rounded-md"
              />
            </label>
          </div>
        )}
      </div>

      {/* Save Button */}
      <div className="flex justify-end">
        <button
          onClick={handleSave}
          disabled={!isModified}
          className={`px-6 flex items-center h-[47px] w-[99px] font-normal text-sm rounded-md text-white mt-8 ${
            isModified ? "bg-[#947F41] cursor-pointer" : "bg-[#D0D0D0] cursor-default"
          }`}
        >
          Save
          <img src={saveIcon} className="ml-2" alt="" />
        </button>
      </div>

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white p-6 rounded-md shadow-md w-[400px]">
            <h3 className="text-lg font-normal mb-4">Confirm Save</h3>
            <p className="text-sm font-light mb-6">
              Are you sure you want to save the changes?
            </p>
            <div className="flex justify-end space-x-4">
              <button
                onClick={cancelSave}
                className="px-4 py-2 border border-[#947F41] text-[#947F41] font-normal text-sm rounded-md"
              >
                Cancel
              </button>
              <button
                onClick={confirmSave}
                className="px-4 py-2 bg-[#947F41] font-normal text-white text-sm rounded-md"
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

export default AdminGeneral;
