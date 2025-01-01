import React from "react";
import logo from "../../../Assets/Logo.svg";
import fbIcon from "../../../Assets/icon/fb.svg";
import igIcon from "../../../Assets/icon/ig.svg";

function Footer() {
  return (
    <footer className="bg-[#FCFCFC] md:h-[472px] md:mt-[168px] mt-[120px] h-[750px] w-full  ">
      <div className="container mx-auto text-center pt-8 md:pt-[54px] ">
        {/* Logo */}
        <div className="md:flex  justify-center items-center ">
          <div className="justify-center flex mt-8 md:mt-0">
            <img src={logo} alt="Central Link Logo" className=" item-center  h-[42px] w-[187px] md:pr-4" />
          </div>
          <div className="border-l hidden md:block ml-[17px] border-black h-[40px]"></div>

          {/* Social Icons */}
          <div className="flex justify-center mt-8 md:mt-0 md:ml-[31px] space-x-4">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={fbIcon}
                alt="Facebook"
                className="h-5 hover:opacity-75"
              />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={igIcon}
                alt="Instagram"
                className="h-5 hover:opacity-75"
              />
            </a>
          </div>
        </div>

        {/* Navigation Links */}
        <nav className="flex hidden font-nunito md:block justify-center space-x-6 text-[#726E62] font-medium text-base mt-[56px]">
          <a href="/" className="hover:text-[#FFC107]">
            Home
          </a>
          <span className="border-l border-[#636363] h-[24px]" ></span>
          <a href="about" className="hover:text-[#FFC107] ">
            About
          </a>
          <span className="border-l border-[#636363] h-[24px]" ></span>
          <a href="services" className="hover:text-[#FFC107]">
            Services
          </a>
          <span className="border-l border-[#636363] h-[24px]" ></span>
          <a href="projects" className="hover:text-[#FFC107]">
            Projects
          </a>
          <span className="border-l border-[#636363] h-[24px]" ></span>
          <a href="blogs" className="hover:text-[#FFC107]">
            Blog
          </a>
          <span className="border-l border-[#636363] h-[24px]" ></span>
          <a href="contact" className="hover:text-[#FFC107]">
            Contact
          </a>
        </nav>

        {/* Description */}
        <p className="text-[#726E62] px-4 md:px-0  md:text-base text-sm font-normal leading-[28px] mt-8  max-w-2xl mx-auto md:mt-[56px]">
          "We are a leading interior construction company dedicated to
          transforming spaces into functional, aesthetic masterpieces. With a
          blend of innovation, craftsmanship, and attention to detail."
        </p>
        <div className=" md:hidden px-6 md:px-0  grid items-start text-left text-[#726E62] space-y-6 font-medium text-base mt-[56px]">
          <a href="/" className="hover:text-[#FFC107]">
            Home
          </a>
          <a href="about" className="hover:text-[#FFC107] ">
            About
          </a>
          <a href="services" className="hover:text-[#FFC107]">
            Services
          </a>
          <a href="projects" className="hover:text-[#FFC107]">
            Projects
          </a>
          <a href="blogs" className="hover:text-[#FFC107]">
            Blog
          </a>
          <a href="contact" className="hover:text-[#FFC107]">
            Contact
          </a>
        </div>

        {/* Copyright */}
        <div className="text-[#726E62] text-base font-normal mt-[80px] md:mt-[56px]">
          © {new Date().getFullYear()} All rights reserved.
        </div>
      </div>
    </footer>
  );
}

export default Footer;
