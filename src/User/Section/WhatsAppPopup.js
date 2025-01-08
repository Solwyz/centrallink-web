import React from "react";
import styled from "styled-components";
import whatsapp from "../../Assets/whatsapp.svg"

const WhatsAppPopup = () => {
  const phoneNumber = "+971566977258"; // Replace with your WhatsApp number
  const message = "Hi, "; // Default message for WhatsApp link

  return (
    <StyledWrapper>
      <a
        href={`https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`}
        target="_blank"
        rel="noopener noreferrer"
        className="whatsapp-button"
      >
        <img src={whatsapp} alt="" />
        <span className="tooltip hidden md:block">Chat on whatspp</span>
      </a>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
.whatsapp-button {
  position: fixed;
  bottom: 20px;
  right: 64px; /* Default position on larger screens */
  width: 60px;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  text-decoration: none;
  cursor: pointer;
  transition: transform 0.3s ease;
}

@media (max-width: 768px) { 
  /* For mobile screens (width 768px or smaller) */
  .whatsapp-button {
    right: 16px; /* Adjust to 16px on mobile */
  }
}


  .whatsapp-button:hover {
    transform: scale(1.1);
  }

  .whatsapp-button svg {
    width: 30px;
    height: 30px;
    fill: white;
  }

  .tooltip {
    position: absolute;
    bottom: 75px;
    background-color: #29A71A;
    color: white;
    padding: 5px 20px;
    border-radius: 5px;
    opacity: 0;
    pointer-events: none;
    font-size: 12px;
    white-space: nowrap;
    box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
    transition: opacity 0.3s ease, bottom 0.3s ease;
  }

  .whatsapp-button:hover .tooltip {
    opacity: 1;
    bottom: 60px;
  }

  .tooltip::before {
    content: "";
    position: absolute;
    bottom: -5px;
    left: 50%;
    transform: translateX(-50%);
    border-width: 5px;
    border-style: solid;
    border-color: #29A71A transparent transparent transparent;
  }
`;

export default WhatsAppPopup;
