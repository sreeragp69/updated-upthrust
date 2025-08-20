"use client";

import type React from "react";
import { useState } from "react";
import { motion } from "framer-motion";
import type {
  SubscribeProps,
  SubscribeFormData,
} from "../../types/Subscribe.type";
import { SUBSCRIBE_DATA } from "../../constant/Subscribe.data";
import SubscribeSkeleton from "./SubscribeSkeleton";

const Subscribe: React.FC<SubscribeProps> = ({ isLoading = false }) => {
  const [formData, setFormData] = useState<SubscribeFormData>({ email: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);

  if (isLoading) {
    return <SubscribeSkeleton />;
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    await new Promise((resolve) => setTimeout(resolve, 1000));

    console.log("Subscribe:", formData);
    setIsSubmitting(false);
    setFormData({ email: "" });
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ email: e.target.value });
  };

  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="w-full max-w-6xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8 absolute z-99 bottom-[6.2%]  left-1/2 -translate-x-1/2"
    >
      <div className="bg-gradient-to-r from-themePrimary to-themePrimary rounded-3xl sm:rounded-[53px]  shadow-2xl overflow-hidden relative">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-40 sm:w-64 lg:w-96 h-40 sm:h-64 lg:h-96 bg-white rounded-full -translate-y-20 sm:-translate-y-32 lg:-translate-y-48 translate-x-20 sm:translate-x-32 lg:translate-x-48"></div>
          <div className="absolute bottom-0 left-0 w-32 sm:w-48 lg:w-64 h-32 sm:h-48 lg:h-64 bg-white rounded-full translate-y-16 sm:translate-y-24 lg:translate-y-32 -translate-x-16 sm:-translate-x-24 lg:-translate-x-32"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 xs:gap-5 sm:gap-6 lg:gap-8 items-center relative z-10">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-3 xs:space-y-4 sm:space-y-5 p-2 xs:p-3 sm:p-5 lg:p-8 order-2 lg:order-1 text-center lg:col-span-7 lg:text-left"
          >
            <div className="space-y-2 sm:space-y-3">
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="text-white text-base sm:text-lg md:text-xl font-normal leading-snug sm:leading-tight alexandria"
              >
                {SUBSCRIBE_DATA.heading}
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="text-white/90 text-base sm:text-xl lg:text-3xl font-bold"
              >
                {SUBSCRIBE_DATA.subheading}
              </motion.p>
            </div>

            {/* Subscribe Form */}
            <motion.form
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              onSubmit={handleSubmit}
              className="flex flex-col sm:flex-row gap-2 sm:gap-3 w-full max-w-md mx-auto lg:mx-0"
            >
              <div className="flex-1 relative">
                <input
                  type="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder={SUBSCRIBE_DATA.placeholder}
                  required
                  className="w-full h-10 sm:h-12 px-3 sm:px-4 rounded-lg sm:rounded-xl border-0 bg-white text-gray-900 placeholder-gray-500 focus:ring-2 focus:ring-blue-300 focus:outline-none text-sm font-medium shadow-lg"
                />
              </div>
              <motion.button
                type="submit"
                disabled={isSubmitting}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full sm:w-auto px-4 sm:px-6 h-10 sm:h-12 bg-green-500 hover:bg-green-600 text-white font-bold text-sm rounded-lg sm:rounded-xl shadow-lg transition-colors duration-200 disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {isSubmitting ? "SUBSCRIBING..." : SUBSCRIBE_DATA.buttonText}
              </motion.button>
            </motion.form>

            {/* Subscriber Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-2 pt-1"
            >
              <div className="flex -space-x-2">
                {SUBSCRIBE_DATA.stats.avatars.map((avatar, index) => (
                  <motion.img
                    key={index}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3, delay: 0.7 + index * 0.1 }}
                    src={avatar}
                    alt={`Subscriber ${index + 1}`}
                    className="w-6 h-6 sm:w-8 sm:h-8 rounded-full object-cover"
                  />
                ))}
              </div>
              <div className="text-white/90 text-xs sm:text-sm font-medium">
                <span className="font-bold text-white">
                  {SUBSCRIBE_DATA.stats.count}
                </span>{" "}
                {SUBSCRIBE_DATA.stats.label}
              </div>
            </motion.div>
          </motion.div>

          {/* Right Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="order-1 lg:order-2 w-full h-full lg:col-span-5"
          >
            <div className="relative h-full w-full flex items-center justify-center lg:justify-end">
              <img
                src="images/cards/subscribe.png"
                alt="3D Character working at computer"
                className="w-full h-full object-contain"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default Subscribe;
