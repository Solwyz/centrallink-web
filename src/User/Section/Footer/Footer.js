import React from "react";
import logo from "../../../Assets/Logo.svg";
import fbIcon from "../../../Assets/icon/fb.svg";
import igIcon from "../../../Assets/icon/ig.svg";

function Footer() {
  return (
    <footer className="bg-white md:h-[472px] h-[393px] w-full  ">
      <div className="container mx-auto text-center">
        {/* Logo */}
        <div className="md:flex  justify-center items-center ">
          <div className="justify-center flex">
            <img src={logo} alt="Central Link Logo" className=" item-center mx-auto" />
          </div>
          <div className="border-l hidden md:block ml-[17px] border-black h-[40px]"></div>

          {/* Social Icons */}
          <div className="flex justify-center md:ml-[31px] space-x-4">
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
        <nav className="flex hidden md:block justify-center space-x-6 text-[#726E62] font-medium text-base mt-[56px]">
          <a href="/" className="hover:text-yellow-500">
            Home
          </a>
          <span>|</span>
          <a href="about" className="hover:text-yellow-500 ">
            About
          </a>
          <span>|</span>
          <a href="services" className="hover:text-yellow-500">
            Services
          </a>
          <span>|</span>
          <a href="projects" className="hover:text-yellow-500">
            Projects
          </a>
          <span>|</span>
          <a href="blogs" className="hover:text-yellow-500">
            Blog
          </a>
          <span>|</span>
          <a href="contact" className="hover:text-yellow-500">
            Contact
          </a>
        </nav>

        {/* Description */}
        <p className="text-[#726E62] text-base font-normal  max-w-2xl mx-auto md:mt-[56px]">
          "We are a leading interior construction company dedicated to
          transforming spaces into functional, aesthetic masterpieces. With a
          blend of innovation, craftsmanship, and attention to detail."
        </p>

        {/* Copyright */}
        <div className="text-[#726E62] text-base font-normal md:mt-[56px]">
          © {new Date().getFullYear()} All rights reserved.
        </div>
      </div>
    </footer>
  );
}

export default Footer;
