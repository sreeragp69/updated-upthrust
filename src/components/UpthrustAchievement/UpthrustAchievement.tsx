import React from "react";
import { motion } from "framer-motion";
import Button from "../ui/button/Button";
import AchievementCard from "./AchievementCard";
import { upthrustAchievementData } from "../../constant/UpthrustAchievement.data";

const UpthrustAchievement = () => {
  const { title, subtitle, description, buttonText, achievements } = upthrustAchievementData;
  
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };
  
  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 }
    }
  };

  return (
    <section className="py-12 md:py-16 lg:py-24 bg-themeBackgroundColor overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-full gap-8 lg:gap-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <motion.div 
            className="w-full px-4 sm:px-6 md:px-0 mb-8 md:mb-0"
            variants={itemVariants}
          >
            {/* Trophy div */}
            <motion.div 
              className="flex flex-col items-start space-y-4"
              variants={itemVariants}
            >
              <div className="flex items-baseline">
                <motion.h2 
                  className="text-2xl sm:text-3xl md:text-4xl font-bold"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  {title}
                </motion.h2>
                <motion.img 
                  className="h-24 sm:h-28 md:h-36" 
                  src="/images/svg/trophy.svg" 
                  alt="Trophy" 
                  initial={{ opacity: 0, scale: 0.8, rotate: -10 }}
                  whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  whileHover={{ rotate: 5, scale: 1.05 }}
                />
              </div>
              <motion.h1 
                className="text-4xl sm:text-5xl md:text-6xl font-bold"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                {subtitle}
              </motion.h1>
              <motion.p
                className="text-sm sm:text-base md:text-lg max-w-md"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                {description}
              </motion.p>
            </motion.div>

            <motion.div
              className="mt-6 sm:mt-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              <Button children={buttonText} />
            </motion.div>
          </motion.div>

          <motion.div 
            className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6 md:gap-8 lg:col-span-2"
            variants={containerVariants}
          >
            {achievements.map((achievement) => (
              <motion.div key={achievement.id} variants={itemVariants}>
                <AchievementCard
                  title={achievement.title}
                  description={achievement.description}
                  imageSrc={achievement.imageSrc}
                />
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default UpthrustAchievement;
