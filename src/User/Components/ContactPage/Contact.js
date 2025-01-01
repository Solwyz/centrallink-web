import React, { useState } from "react";
import { useForm } from "react-hook-form";
import fbicon from "../../../Assets/contact/fb.svg";
import downArrow from "../../../Assets/contact/arrowDown.svg";
import upArrow from "../../../Assets/contact/upArrow.svg";
import instaIcon from "../../../Assets/contact/insta.svg";
import mailicon from "../../../Assets/contact/mail.svg";
import callIcon from "../../../Assets/contact/call.svg";

function Contact() {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({ mode: "onChange" });

  const onSubmit = (data) => {
    console.log("Form Submitted: ", data);
 
  };

  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="bg-contactBgMob md:bg-contactBg bg-cover h-[1420px] px-4 pt-[56px] mt-[120px] w-full md:h-[900px] md:px-[120px] md:pt-[64px] md:mt-[168px] md:flex">
      {/* Left Section */}
      <div className="text-white md:w-1/2 md:pt-[120px]">
        <h2 className="text-[40px] font-milchella md:text-start text-center font-normal">
          Contact Us
        </h2>

        <p className="hidden md:block leading-[56px] mt-6 md:text-[48px] font-semibold">
          Let’s Talk about <br /> your Project
        </p>
        <p className="text-[24px] md:hidden mt-[88px] font-semibold">
          Let’s Talk about your Project
        </p>

        <div className="md:mt-8 mt-6">
          <div className="flex items-center">
            <img src={mailicon} alt="Mail Icon" className="w-5 h-5 mr-2" />
            <a
              className="text-base font-semibold"
              href="mailto:centrallinkinfo@gmail.com"
            >
              centrallinkinfo@gmail.com
            </a>
          </div>
          <div className="flex items-center mt-6">
            <img src={callIcon} alt="Call Icon" className="w-5 h-5 mr-2" />
            <p className="text-sm font-semibold">+1 456 6985 6532 45</p>
          </div>
        </div>
        <div className="flex mt-6 md:mt-8 space-x-4">
          <img src={fbicon} alt="Facebook Icon" className="w-5 h-5" />
          <img src={instaIcon} alt="Instagram Icon" className="w-5 h-5" />
        </div>
        <div className="mt-[88px] md:mt-[96px]">
          <p className="text-sm font-semibold leading-[24px]">
            Address: <br />
            1234 Sheikh Zayed Road, Business Bay,
            <br />
            Dubai, UAE. <br /> P.O. Box 12345
          </p>
        </div>
      </div>

      {/* Right Section */}
      <div className="md:w-1/2">
        <h3 className="text-xl md:text-[32px] hidden md:block font-normal font-milchella text-center text-white">
          Contact Form
        </h3>

        <div className="bg-white bg-opacity-[14%] backdrop-blur-sm md:w-[524px] md:h-[750px] px-4 md:px-10 pt-10 md:pt-8 w-full h-[775px] mt-[76px] rounded-2xl md:pb-8 md:mt-6 mx-auto space-y-6">
          <h3 className="text-[32px] md:hidden font-normal font-milchella text-center text-white">
            Contact Form
          </h3>

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            {/* Name Field */}
            <div>
              <label
                htmlFor="Name"
                className="text-white font-medium text-sm"
              >
                Name
              </label>
              <input
                {...register("name", { required: "Name is required" })}
                placeholder="Enter your Name"
                className={`w-full px-6 py-4 mt-2 focus:outline-none text-[#333333] text-sm font-medium rounded-lg ${
                  errors.name ? "border-red-500" : ""
                }`}
              />
              <div className="h-4">
                {errors.name && (
                  <p className="text-red-500 text-sm">{errors.name.message}</p>
                )}
              </div>
            </div>

            {/* Email Field */}
            <div>
              <label
                className="text-white font-medium text-sm"
              >
                Email
              </label>
              <input
                {...register("email", {
                  required: "Email is required",
                  pattern: {
                    value:
                      /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                    message: "Enter a valid email address",
                  },
                })}
                placeholder="Enter your Email"
                className={`w-full px-6 py-4 mt-2 focus:outline-none text-[#333333] text-sm font-medium rounded-lg ${
                  errors.email ? "border-red-500" : ""
                }`}
              />
              <div className="h-4">
                {errors.email && (
                  <p className="text-red-500 text-sm">{errors.email.message}</p>
                )}
              </div>
            </div>

          {/* Select Service */}
<div>
  <label className="block text-white font-medium text-sm">Select Service</label>
  <div className="relative">
    <select
      name="service"
      className={`w-full text-gray-600 text-sm  mt-2   h-[48px] px-4 py-2 focus:outline-none rounded-lg appearance-none ${
        errors.service ? "border-red-500" : ""
      }`}
     
      onClick={() => setIsOpen(!isOpen)}
      onBlur={() => setIsOpen(false)}
    >
      <option value="">Select Service</option>
      <option value="Construction">Construction</option>
      <option value="Interior Design">Interior Design</option>
      <option value="Demolition">Demolition</option>
    </select>
    <div className="absolute right-4 top-1/2 transform -translate-y-1/2 pointer-events-none">
      <img
        src={isOpen ? upArrow : downArrow}
        alt="Dropdown Arrow"
      />
    </div>
  </div>
  <div className="h-4">
    {errors.service && (
      <p className="text-red-500 text-sm">{errors.service.message}</p>
    )}
  </div>
</div>


            {/* Message Field */}
            <div>
              <label
                htmlFor="message"
                className="text-white font-medium text-sm"
              >
                Write Message
              </label>
              <textarea
                {...register("message", { required: "Message is required" })}
                placeholder="Write your message here..."
                className={`h-[176px] w-full px-6 py-4 mt-2 focus:outline-none text-[#333333] text-sm font-medium resize-none rounded-lg ${
                  errors.message ? "border-red-500" : ""
                }`}
                rows="4"
              ></textarea>
              <div className="h-4">
                {errors.message && (
                  <p className="text-red-500 text-sm">{errors.message.message}</p>
                )}
              </div>
            </div>

           {/* Submit Button */}
           <div>
              <button
                type="submit"
                disabled={!isValid}
                className={`w-full h-[48px] text-white text-sm font-bold rounded-lg ${
                  isValid
                    ? "bg-[#FFC107] hover:bg-[#E2B737]"
                    : "bg-[#D2D2D2] cursor-not-allowed"
                }`}
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;