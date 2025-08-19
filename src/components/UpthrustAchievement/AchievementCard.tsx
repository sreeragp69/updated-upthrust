// src/components/AchievementCard.tsx
"use client"

import React from "react";
import { motion } from "framer-motion";
import { AchievementCardProps } from "../../types/UpthrustAchievement.type";

const AchievementCard: React.FC<Omit<AchievementCardProps, 'id'>> = ({ title, description, imageSrc }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      whileHover={{ y: -5, boxShadow: "0 10px 25px rgba(0, 0, 0, 0.1)" }}
      className="relative bg-white rounded-xl shadow-md p-6 flex flex-col items-start w-full h-full"
    >
      {/* Top small image */}
      <motion.div 
        className="absolute -top-5 left-6 w-16 h-16 sm:w-20 sm:h-20"
        initial={{ scale: 0.8, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.3 }}
      >
        <img
          src={imageSrc}
          alt="achievement icon"
          className="w-full h-full object-cover rounded-full shadow-md"
        />
      </motion.div>

      {/* Spacing for the image */}
      <div className="mt-8 sm:mt-10"></div>

      {/* Title */}
      <motion.h3 
        initial={{ opacity: 0, x: -10 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.3, duration: 0.4 }}
        className="text-blue-600 font-semibold text-base sm:text-lg md:text-xl mb-2">
        {title}
      </motion.h3>

      {/* Description */}
      <motion.p 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.5 }}
        className="text-gray-500 text-xs sm:text-sm">
        {description}
      </motion.p>
    </motion.div>
  );
};

export default AchievementCard;
