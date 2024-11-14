"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { getDictionary } from "@/app/lib/dictionary";
import type { Locale } from "@/app/lib/types";
import ShowcaseSection from "./showcase";

interface ServicesProps {
  lang: Locale;
}

export default function Services({ lang }: ServicesProps) {
  const dict = getDictionary(lang);
  const [scrollOpacity, setScrollOpacity] = useState(1);
  const [isLoaded, setIsLoaded] = useState(false);
  const [isPageLoaded, setIsPageLoaded] = useState(false);

   // Handle initial page load animation
  useEffect(() => {
    setTimeout(() => {
      setIsPageLoaded(true);
      setIsLoaded(true);
    }, 100);
  }, []);

  // Handle scroll fade effect
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const newOpacity = Math.max(
        0,
        Math.min(1, 1 - (scrollPosition - 100) / 400)
      );
      setScrollOpacity(newOpacity);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div 
      className={`min-h-screen bg-white transition-all duration-1000 ${
        isPageLoaded ? 'opacity-100' : 'opacity-0'
      }`}
    >
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="relative h-screen w-full">
        <Image
          src="/images/services/servicebg.jpeg"
          alt="Types of services"
          fill
          className="object-cover"
          priority
        />

        {/* Dark overlay with fade effect */}
        <div
          className="absolute inset-0 bg-black/50"
          style={{ opacity: Math.max(0.3, scrollOpacity) }}
        />

        {/* Content wrapper */}
        <div
          className="absolute inset-0 flex flex-col justify-center items-start px-6 md:px-16 lg:px-24"
          style={{ opacity: scrollOpacity }}
        >
          <div className="max-w-4xl">
            {/* Subtitle */}
            <h2 className="text-xl md:text-2xl text-white mb-4 font-light">
            {dict["services.hero.title"]}
            </h2>

            {/* Main title */}
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-8">
            {dict["services.hero.subtitle"]}
            </h1>

            {/* Contact button */}
            <Link
              href={`/${lang}/contact`}
              className="inline-block bg-blue-900 hover:bg-blue-800 text-white px-8 py-3 rounded transition-colors duration-300 text-lg"
            >
              {dict["vessels.hero.contact"]}
            </Link>
          </div>
        </div>
      </div>

      {/* Main Content Section */}
      <div
        className={`w-full mx-auto py-24 transition-all duration-1000 ${
          isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        <div className="max-w-[1200px] mx-auto px-4">
          {" "}
          {/* Increased max width */}
          <div className="text-center">
            <h2 className="text-2xl md:text-3xl font-medium text-[#000080] uppercase mb-4">
              {dict["services.content.main.title"]}
            </h2>
            <h3 className="text-3xl md:text-4xl font-bold text-black mb-16">
              {dict["services.content.main.subtitle"]}
            </h3>

            {/* Line container with extended width */}
            <div className="relative w-[60%] left-1/2 -translate-x-1/2 h-[0.3rem] mb-16">
              <div className="absolute inset-x-0 h-full bg-[#000080] rounded-[2px]" />
            </div>

            {/* Content with controlled width */}
            <div className="max-w-[1000px] mx-auto space-y-8">
              <p className="text-lg text-gray-700 leading-relaxed">
                {dict["services.content.main.description1"]}
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                {dict["services.content.main.description2"]}
              </p>
            </div>

            {/* Bottom line container with extended width */}
            <div className="relative w-[60%] left-1/2 -translate-x-1/2 h-[0.3rem] mt-16">
              <div className="absolute inset-x-0 h-full bg-[#000080] rounded-[2px]" />
            </div>
          </div>
        </div>

        {/* Fleet Gallery */}
        {/* Add Showcase Section */}
        <ShowcaseSection lang={lang} />
      </div>
    </div>
    </div>
  );
}
