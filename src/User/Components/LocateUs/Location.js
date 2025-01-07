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
            1234 Sheikh Zayed Road, Business Bay, <br />
            Dubai, UAE, <br />
            P.O. Box 12345
          </motion.p>
        </div>
        <div>
          <img src={location} className="w-[770px] h-[441px]" alt="Location map" />
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
            <img src={mapMob} className="w-full h-[290px]" alt="Location map" />
          </div>
          {/* Animate address text when in view */}
          <motion.p
            className="leading-[24px] text-sm font-semibold mt-4"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }} // slight delay for stagger effect
            viewport={{ once: true }} // Animates only once when in view
          >
            1234 Sheikh Zayed Road, Business Bay, <br />
            Dubai, UAE, <br />
            P.O. Box 12345
          </motion.p>
        </div>
      </div>
    </div>
  );
}

export default Location;
