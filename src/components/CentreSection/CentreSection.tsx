import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const CentreSectionCard1 = {
  image: "images/cards/centreSectionImg1.svg",
  alt: "SAGA University Indore",
};
const CentreSectionCard2 = {
  image: "images/cards/centreSectionImg2.svg",
  alt: "Prashanti Groups of Institutes",
  title: "Prashanti Groups of Institutes, Ujjain (M.P.)",
};

const CentreSection = () => {
  const [isLoading, setIsLoading] = useState(true);

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.6 },
    },
    hover: {
      scale: 1.03,
      boxShadow: "0px 10px 30px rgba(0, 0, 0, 0.1)",
      transition: { duration: 0.3 },
    },
  };

  useEffect(() => {
    if (isLoading) {
      const timer = setTimeout(() => {
        setIsLoading(false);
      }, 2000);
      return () => clearTimeout(timer);
    }
  }, [isLoading]);

  return (
    <motion.section
      className="py-16 mb-[300px]  container mx-auto  overflow-hidden"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      variants={containerVariants}
    >
      <div className="mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Trophy div */}
          <motion.div
            className="flex flex-col items-start space-y-3 xs:space-y-4"
            variants={itemVariants}
          >
            <div className="flex items-baseline flex-wrap gap-2">
              <motion.h2
                className="text-xl xs:text-2xl sm:text-3xl md:text-4xl font-bold"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
              >
                Our Centre of
              </motion.h2>
            </div>
            <motion.h1
              className="text-3xl xs:text-4xl sm:text-5xl md:text-6xl font-bold leading-tight"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              Innovation
            </motion.h1>
            <motion.p
              className="text-xs xs:text-sm sm:text-base md:text-lg max-w-xs xs:max-w-sm sm:max-w-md alexandria text-[#6D758F]"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              With our experience of 11 years in Digital Marketing training and
              Game Development, With our experience of 11 years in Digital
              Marketing training.
            </motion.p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 gap-6 lg:gap-8"
            variants={itemVariants}
          >
            <motion.div
              className="bg-white p-10 rounded-4xl shadow-theme-xs flex flex-col justify-between
                 aspect-[415/298] w-full max-w-[415px] mx-auto"
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <div className="flex-1 flex -h-[70%] items-center justify-center ">
                <img
                  src={CentreSectionCard1.image}
                  alt={CentreSectionCard1.alt}
                  className="max-w-[70%]  object-contain"
                />
              </div>

              <p className="text-lg sm:text-xl font-bold text-center">
                {/* {item.title} */}
              </p>
            </motion.div>
            <motion.div
              className="bg-white p-10 rounded-4xl shadow-theme-xs flex flex-col justify-between
                 aspect-[415/298] w-full max-w-[415px] mx-auto"
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <div className="flex- flex h-20 items-center justify-center ">
                <img
                  src={CentreSectionCard2.image}
                  alt={CentreSectionCard2.alt}
                  className="max-w-[70%] h-full object-contain"
                />
              </div>

              <p className="text-lg sm:text-xl font-bold text-center">
                {CentreSectionCard2.title}
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default CentreSection;
