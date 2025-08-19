import React from "react";
import Button from "../ui/button/Button";
import { motion } from "framer-motion";

const AboutSection = () => {
  return (
    <div className="mx-auto w-full border px-4 sm:px-6 lg:px-8">
      <div className=" lg:mt-20 mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 py-5">
        
        {/* Left Text Section */}
        <motion.div
          className="flex items-center"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="flex flex-col gap-5 items-start">
            <h2 className="text-[#343339] text-lg sm:text-xl font-bold">
              About The Upthrust
            </h2>
            <h1 className="text-themeGray font-bold text-2xl sm:text-3xl md:text-4xl lg:text-5xl leading-snug">
              Aims to provide Result-Oriented Training!!
            </h1>
            <p className="text-[#6D758F] text-sm sm:text-base tracking-[0.02em] leading-6">
              With our experience of 11 years in Digital Marketing training and
              Game Development, With our experience of 11 years in Digital
              Marketing training. With our experience of 11 years in Digital
              Marketing training and Game Development, With our experience of 11
              years in Digital Marketing training.
            </p>

            <Button children="More About" endIcon="" />
          </div>
        </motion.div>

        {/* Middle Images */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <div className="w-full overflow-hidden rounded-2xl bg-white/60 shadow-theme-xs">
            <img
              className="w-full h-auto object-contain"
              src="images/svg/Rectangle 6038.svg"
              alt="About section main"
              loading="lazy"
            />
          </div>
          <div className="grid grid-cols-2 gap-3 sm:gap-5 mt-4 sm:mt-5">
            <div className="w-full overflow-hidden rounded-2xl bg-white/60 shadow-theme-xs">
              <img
                className="w-full h-auto object-contain"
                src="images/svg/Rectangle 6040.svg"
                alt="About section secondary 1"
                loading="lazy"
              />
            </div>
            <div className="w-full overflow-hidden rounded-2xl bg-white/60 shadow-theme-xs">
              <img
                className="w-full h-auto object-contain"
                src="images/svg/Rectangle 6041.svg"
                alt="About section secondary 2"
                loading="lazy"
              />
            </div>
          </div>
        </motion.div>

        {/* Right Image */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <div className="w-full overflow-hidden rounded-2xl bg-white/60 shadow-theme-xs">
            <img
              className="w-full h-auto object-contain"
              src="images/svg/aboutSecimg4.svg"
              alt="About section illustration"
              loading="lazy"
            />
          </div>
        </motion.div>

      </div>
    </div>
  );
};

export default AboutSection;
