import React from "react";
import location from "../../../Assets/contact/location.png";
import mapMob from "../../../Assets/contact/Group 1000005777.png";
import { motion } from "framer-motion"; // Import motion for animations

function Location() {
  return (
    <div className="mt-[120px] px-4 md:px-[120px]">
      {/* Desktop version */}
      <div className="md:flex justify-between hidden">
        <div className="mt-[137px]">
          {/* Animate "Locate Us" text when in view */}
          <motion.h3
            className="text-[#947F41] font-normal font-milchella text-[40px]"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }} // Animates only once when in view
          >
            Locate Us
          </motion.h3>
          {/* Animate address text when in view */}
          <motion.p
            className="leading-[24px] text-base font-semibold mt-6"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }} // slight delay to stagger the animation
            viewport={{ once: true }} // Animates only once when in view
          >
            Khalifa city A, street number 35,<br /> building number,23 flat number 202 <br />Abudhabi, UAE
          </motion.p>
        </div>
        <div>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d6629.174868609207!2d54.575180701561145!3d24.401365435871586!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjTCsDI0JzE0LjciTiA1NMKwMzQnNDQuMCJF!5e0!3m2!1sen!2sin!4v1736315646431!5m2!1sen!2sin"
            className="w-[770px] h-[441px] border-2"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Location Map"
          ></iframe>
        </div>
      </div>

      {/* Mobile version */}
      <div className="md:hidden">
        <div>
          {/* Animate "Locate Us" text when in view */}
          <motion.h3
            className="text-[#947F41] font-normal font-milchella text-[40px]"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }} // Animates only once when in view
          >
            Locate Us
          </motion.h3>
          <div className="mt-8">
  <iframe
    src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d6629.174868609207!2d54.575180701561145!3d24.401365435871586!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjTCsDI0JzE0LjciTiA1NMKwMzQnNDQuMCJF!5e0!3m2!1sen!2sin!4v1736315646431!5m2!1sen!2sin"
    className="w-full h-[290px] border-2"
    allowFullScreen=""
    loading="lazy"
    referrerPolicy="no-referrer-when-downgrade"
    title="Location Map"
  ></iframe>

          </div>
          {/* Animate address text when in view */}
          <motion.p
            className="leading-[24px] text-sm font-semibold mt-4"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }} // slight delay for stagger effect
            viewport={{ once: true }} // Animates only once when in view
          >
            Khalifa city A, street number 35, <br />
            building number,23 flat number 202 <br />
            Abudhabi, UAE
          </motion.p>
        </div>
      </div>
    </div>
  );
}

export default Location;
