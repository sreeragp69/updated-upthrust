"use client";

import type React from "react";
import { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import { ChevronLeft, ChevronRight, ChevronsRight } from "lucide-react";
import { courseSectionData } from "../../constant/CourseSection.data.js";
import type { CourseSectionProps } from "../../types/CourseSection.type";
import { CourseCard, CourseCardSkeleton } from "../ui/cards/Card";

const CourseSection: React.FC<CourseSectionProps> = ({ isLoading = false }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [swiper, setSwiper] = useState<any>(null);
  const [slidesPerView, setSlidesPerView] = useState(3);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setSlidesPerView(1);
      } else if (window.innerWidth < 1024) {
        setSlidesPerView(2);
      } else {
        setSlidesPerView(3);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const totalSlides = courseSectionData.courses.length;

  const displaySlide = currentSlide + 1;
  const displayTotal = totalSlides;



  const handleNextSlide = () => {
    if (swiper) {
      swiper.slideNext();
    }
  };

  if (isLoading) {
    return (
      <section className="py-16 px-4 bg-themeBackgroundColor">
        <div className=" mx-auto">
          <div className="text-center mb-12">
            <div className="h-12 bg-gray-200 rounded w-80 mx-auto mb-4 animate-pulse"></div>
            <div className="space-y-2">
              <div className="h-4 bg-gray-200 rounded w-96 mx-auto animate-pulse"></div>
              <div className="h-4 bg-gray-200 rounded w-80 mx-auto animate-pulse"></div>
            </div>
          </div>

          <div className="flex items-center justify-between mb-8">
            <div className="h-6 bg-gray-200 rounded w-16 animate-pulse"></div>
            <div className="flex space-x-2">
              <div className="w-10 h-10 bg-gray-200 rounded-full animate-pulse"></div>
              <div className="w-10 h-10 bg-gray-200 rounded-full animate-pulse"></div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[...Array(3)].map((_, index) => (
              <CourseCardSkeleton key={index} />
            ))}
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-16 px-4 bg-themeBackgroundColor">
      <div className=" mx-auto">
        {/* Header */}
        <div className="flex flex-col text-start items-start justify-start mb-12">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            {courseSectionData.title}
          </h2>
          <p className="text-gray-600 w-full sm:w-2/3 md:w-1/2 lg:w-[30%]">
            {courseSectionData.subtitle}
          </p>
        </div>

        {/* Navigation Controls */}
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center space-x-2 text-gray-500">
            <span className="text-base sm:text-lg font-medium">
              {displaySlide} / {displayTotal}
            </span>
            <img
              src="/images/icons/arrow.svg"
              alt=""
              className="h-4 w-4 sm:h-5 sm:w-5"
            />
          </div>

          <div className="flex space-x-2">
            <button
              onClick={handleNextSlide}
              className="w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center text-[#818181]"
            >
              <ChevronsRight className="w-6 h-6 sm:w-8 sm:h-8" />
            </button>
          </div>
        </div>

        {/* Swiper Slider */}
        <div className="w-[90vw] md:w-full px-4 overflow-hidden">
          <Swiper
            modules={[Navigation, Pagination]}
            spaceBetween={16}
            slidesPerView={1}
            loop={true}
            onSwiper={setSwiper}
            onSlideChange={(swiper) => setCurrentSlide(swiper.realIndex)}
            className="course-swiper"
            // pagination={{ clickable: true }}
            breakpoints={{
              320: {
                slidesPerView: 1,
                spaceBetween: 16,
              },
              768: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 24,
              },
            }}
          >
            {courseSectionData.courses.map((course) => (
              <SwiperSlide key={course.id}>
                <CourseCard course={course} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>

      <style>{`
      .course-swiper {
        padding-bottom: 2rem;
        width: 100%;
        max-width: 100%;
        overflow: visible;
      }
      .course-swiper .swiper-slide {
        height: auto;
        display: flex;
        width: auto;
      }
      .course-swiper .swiper-slide > div {
        width: 100%;
      }
      .course-swiper .swiper-pagination {
        bottom: 0;
      }
      @media (max-width: 640px) {
        .course-swiper {
          padding: 0 0 2rem 0;
          margin: 0 -1rem;
          width: calc(100% + 2rem);
        }
        .course-swiper .swiper-slide {
          padding: 0 1rem;
        }
      }
    `}</style>
    </section>
  );
};

export default CourseSection;
