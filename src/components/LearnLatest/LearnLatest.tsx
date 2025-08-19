"use client";

import type React from "react";
import { useState, useEffect } from "react";
import { learnLatestData } from "../../constant/LearnLatest.data";
import {
  LearnLatestData,
  LearnLatestFeature,
  LearnLatestStatistic,
} from "../../types/LearnLatest.type";
import Button from "../ui/button/Button";

// Loading skeleton components
const FeatureSkeleton = () => (
  <div className="animate-pulse  rounded-2xl p-4 sm:p-5 md:p-6">
    <div className="h-10 sm:h-12 md:h-14 w-10 sm:w-12 md:w-14 bg-gray-200 rounded-md mb-3 sm:mb-4"></div>
    <div className="h-4 sm:h-5 bg-gray-200 rounded mb-2 w-3/4"></div>
    <div className="h-3 sm:h-4 bg-gray-200 rounded w-full"></div>
    <div className="h-3 sm:h-4 bg-gray-200 rounded w-2/3 mt-2"></div>
  </div>
);



const IllustrationSkeleton = () => (
  <div className="animate-pulse w-full flex justify-center relative">
    <div className="w-64 h-64 sm:w-72 sm:h-72 md:w-80 md:h-80 lg:w-96 lg:h-96 bg-gray-200 rounded-full"></div>
    <div className="absolute -bottom-4 sm:-bottom-8 md:-bottom-10 lg:-bottom-13 left-1/2 -translate-x-1/2 w-28 h-28 sm:w-44 sm:h-44 md:w-52 md:h-52 lg:w-64 lg:h-64 bg-gray-300 rounded-full -z-10 blur-lg"></div>
  </div>
);

// Feature component
const FeatureCard: React.FC<{ feature: LearnLatestFeature }> = ({
  feature,
}) => (
  <div className="space-y-2 max-w-sm mx-auto md:mx-0">
    <h3 className="text-lg sm:text-xl md:text-xl font-bold text-gray-900 leading-tight">
      {feature.title}
    </h3>
    <p className="text-gray-600 text-xs sm:text-sm md:text-sm">
      {feature.description}
    </p>
  </div>
);



// Main component
const LearnLatest: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState<LearnLatestData | null>(null);

  useEffect(() => {
    // Simulate loading delay
    const timer = setTimeout(() => {
      setData(learnLatestData);
      setIsLoading(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return (
      <section className="py-12 md:py-16 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Mobile/Tablet Header skeleton - only visible on smaller screens */}
          <div className="mb-8 md:mb-10 lg:hidden animate-pulse">
            <div className="text-center">
              <div className="h-8 md:h-10 bg-gray-200 rounded-md mb-4 w-3/4 sm:w-2/3 mx-auto"></div>
              <div className="space-y-2 w-full max-w-md mx-auto">
                <div className="h-4 bg-gray-200 rounded w-full"></div>
                <div className="h-4 bg-gray-200 rounded w-5/6 mx-auto"></div>
              </div>
              <div className="h-10 w-32 bg-gray-200 rounded-md mt-6 mx-auto"></div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-6 md:gap-8 items-start lg:items-center mt-8 md:mt-10 lg:mt-12">
            {/* Desktop Header skeleton - hidden on mobile/tablet */}
            <div className="hidden lg:block lg:col-span-3 animate-pulse">
              <div className="h-10 lg:h-12 bg-gray-200 rounded-md mb-4 w-3/4"></div>
              <div className="space-y-2 w-full lg:w-3/4">
                <div className="h-4 bg-gray-200 rounded w-full"></div>
                <div className="h-4 bg-gray-200 rounded w-5/6"></div>
              </div>
              <div className="h-10 w-32 bg-gray-200 rounded-md mt-6"></div>
            </div>

            {/* Center illustration skeleton - centered on all screens */}
            <div className="col-span-1 md:col-span-2 lg:col-span-6 flex justify-center order-none">
              <div className="relative w-full max-w-md mx-auto">
                <IllustrationSkeleton />
              </div>
            </div>

            {/* Features skeleton */}
            <div className="col-span-1 md:col-span-2 lg:col-span-3 space-y-6 md:space-y-8 w-full">
              <FeatureSkeleton />
              <FeatureSkeleton />
              <FeatureSkeleton />
            </div>
          </div>
        </div>
      </section>
    );
  }

  if (!data) return null;

  return (
    <section className="py-12 md:py-16 lg:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Title section - always visible, positioned at top on mobile/tablet */}
        <div className="mb-8 md:mb-10 lg:hidden">
          <div className="text-center lg:text-start">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4 md:mb-6 leading-tight">
              {data.mainTitle}
            </h2>
            <p className="text-gray-600 text-sm sm:text-base md:text-base mx-auto max-w-md">
              {data.subtitle}
            </p>
            <div className="mt-6">
              <Button children="Contact Now" />
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-6 md:gap-8 items-start lg:items-center">
          {/* Left side content - hidden on mobile/tablet, visible on desktop */}
          <div className="hidden lg:block lg:col-span-3 space-y-4 xl:space-y-8">
            {/* Left content */}
            <div className="text-start">
              <h2 className="text-2xl sm:text-3xl md:text-4xl xl:text-4xl font-bold text-gray-900 mb-4 md:mb-6 leading-tight">
                {data.mainTitle}
              </h2>
              <p className="text-gray-600 text-sm sm:text-base md:text-base w-full lg:w-3/4">
                {data.subtitle}
              </p>
            </div>

            <Button children="Contact Now" />
          </div>

          {/* Center illustration - order first on desktop, centered on all screens */}
          <div className="col-span-1 md:col-span-2 lg:col-span-6 flex justify-center order-none">
            <div className="relative w-full max-w-md mx-auto">
              <img
                src={data.illustration.src || "/placeholder.svg"}
                alt={data.illustration.alt}
                className="w-full h-auto max-w-[16rem] sm:max-w-xs md:max-w-sm lg:max-w-md xl:max-w-lg object-contain relative z-10 mx-auto"
                loading="lazy"
              />
             
            </div>
          </div>

          {/* Right side features */}
          <div className="col-span-1 md:col-span-2 lg:col-span-3 space-y-4 xl:space-y-8">
            <div className="text-center md:text-left lg:text-left">
              {data.features.map((feature) => (
                <div key={feature.id} className="mb-6 md:mb-8">
                  <FeatureCard feature={feature} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LearnLatest;
