import React from "react";
import { motion } from "framer-motion";
import Button from "../../components/ui/button/Button";
import { testimonialImage } from "../../constant/Home.data";
import { GAME_DEV_CARDS } from "../../constant/Home.data";
import HomeCard from "../../components/Landing/HomeCard";
import HomeSwiper from "../../components/Landing/HomeSwiper";

const LandingPage: React.FC = () => {
  return (
    <div className="min-h-screen mx-auto">
      <div className=" mt-10 mx-auto    flex flex-col items-center justify-center">
        <div className="relative text-center flex items-center justify-center flex-col w-full">
          {/* Mobile decorative dots only (removed gradient) */}
          <div className="md:hidden absolute right-4 top-6 h-10 opacity-70 rotate-6">
            <img
              className="h-full w-full"
              src="images/svg/dots.svg"
              alt="....."
            />
          </div>
          <div className="uppercase relative w-full md:w-[60%] ]text-center">
            <motion.h1
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-2xl sm:text-3xl md:text-4xl font-medium text-themeGray"
            >
              Define a <br className="md:hidden" /> new way for
            </motion.h1>
            <motion.h1
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.05 }}
              className="text-3xl sm:text-4xl md:text-6xl font-bold text-themePrimary"
            >
              Job-Oriented
            </motion.h1>
            <div className="hidden lg:flex flex-col items-center w-fit absolute uppercase lg:text-4xl -bottom-9 font-bold right-37 lg:scale-y-88 lg:px-7 lg:py-1 lg:-rotate-3 rounded-full justify-center text-white bg-[#55B700]">
              <h2>Training</h2>
            </div>
          </div>
          <div className="hidden md:block absolute right-40 top-[27%] h-24">
            <img
              className="h-full w-full"
              src="images/svg/dots.svg"
              alt="....."
            />
          </div>

          <div className="flex items-center justify-between flex-col w-full mt-6 px-1.5">
            {/* Traning text */}
            <motion.div
              animate={{
                y: [0, -10, 0],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="flex sm:hidden rotate-0  flex-col items-center w-fit uppercase text-base px-3 py-1 mb-5 font-bold rounded-full justify-center text-white bg-[#55B700] shadow-theme-xs"
            >
              <h2>Training</h2>
            </motion.div>
            {/* User Avatars */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.15 }}
              className="flex sm:absolute right-7 top-[40%] justify-center items-center flex-col lg:rotate-5 bg-white p-2 rounded-xl shadow-xl z-20 gap-1"
            >
              <p className="alexandria text-xs">20k+ Student Find Job!</p>
              <div className="flex -space-x-2">
                {testimonialImage.map((user: { id: number; image: string }) => (
                  <motion.div
                    key={user.id}
                    initial={{ scale: 0.9, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.3, delay: 0.2 + user.id * 0.03 }}
                    className="relative w-7 h-7 rounded-full ring-2 ring-white"
                  >
                    <img
                      src={user.image}
                      alt={`User ${user.id}`}
                      className="w-full h-full rounded-full object-cover"
                    />
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>

          <motion.div
         initial={{ opacity: 0, y: 16 }}
         animate={{ opacity: 1, y: 0 }}
         transition={{ duration: 0.6, delay: 0.05 }}
            className="text-center md:text-center alexandria text-[#727272] flex justify-center flex-col items-center mt-10 md:mt-20"
          >
            <p className="w-[86%] mb-3 lg:mb-0 md:w-[66%]">
              We empower aspiring creators and digital professionals with
              hands-on training, cutting-edge tools, and a collaborative
              community to bridge the gap between learning and real-world
              experience.
            </p>
            <p className="w-[80%] md:w-[80%]">
              Ready to become a confident, future-ready expert in Game
              Development, Digital Marketing, or Web & App Development? Learn,
              build, and grow with
              <span className="ml-6 lg:ml-0 text-themePrimary font-bold">
                {" "}
                THE UPTHRUST
              </span>{" "}
              — where skills meet opportunity.
            </p>
          </motion.div>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1  lg:grid-cols-3 gap-3 w-full mt-28">
          <HomeCard
            id={GAME_DEV_CARDS[0].id}
            index={0}
            backgroundImage={GAME_DEV_CARDS[0].backgroundImage}
            subtitle={GAME_DEV_CARDS[0].subtitle}
            alt={GAME_DEV_CARDS[0].alt}
            charecterTrue={GAME_DEV_CARDS[0].charecterTrue}
            characterImage={GAME_DEV_CARDS[0].characterImage}
            tilt="left"
          />
          <HomeCard
            id={GAME_DEV_CARDS[1].id}
            index={1}
            backgroundImage={GAME_DEV_CARDS[1].backgroundImage}
            subtitle={GAME_DEV_CARDS[1].subtitle}
            alt={GAME_DEV_CARDS[1].alt}
            charecterTrue={GAME_DEV_CARDS[1].charecterTrue}
            characterImage={GAME_DEV_CARDS[1].characterImage}
            tilt="none"
          />
          <HomeCard
            id={GAME_DEV_CARDS[2].id}
            index={2}
            backgroundImage={GAME_DEV_CARDS[2].backgroundImage}
            subtitle={GAME_DEV_CARDS[2].subtitle}
            alt={GAME_DEV_CARDS[2].alt}
            charecterTrue={GAME_DEV_CARDS[2].charecterTrue}
            characterImage={GAME_DEV_CARDS[2].characterImage}
            tilt="right"
          />
        </div>


        <div className="mt-24 ">
          <HomeSwiper/> 
        </div>

       
      </div>
    </div>
  );
};

export default LandingPage;
