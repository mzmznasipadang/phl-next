// src/app/components/home/clients/index.tsx
"use client";

import { useState, useEffect, useRef } from "react";
import { getDictionary } from "@/app/lib/dictionary";
import type { Locale } from "@/app/lib/types";
import styles from "./styles.module.css";
import Image from "next/image";

interface ClientsProps {
  lang: Locale;
}

type ClientType = "H" | "R";

const CUSTOMER_LOGOS = [
  { src: "/images/customers/pertamina.png", alt: "Pertamina" },
  { src: "/images/customers/pelindo1.png", alt: "Pelindo 1" },
  { src: "/images/customers/pelindo2.png", alt: "Pelindo 2" },
  { src: "/images/customers/adaro.png", alt: "Adaro" },
  { src: "/images/customers/sinarmassukses.png", alt: "Sinarmas Sukses" },
];

export function Clients({ lang }: ClientsProps) {
  const dict = getDictionary(lang);
  const [activeType, setActiveType] = useState<ClientType | null>(null);
  const [hoveredType, setHoveredType] = useState<ClientType | null>(null);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const marqueeRef = useRef<HTMLDivElement>(null);

  const legendItems = [
    { type: "H", label: dict["clients.headOffice"] },
    { type: "R", label: dict["clients.representative"] },
  ];

  // Auto-play animation
  useEffect(() => {
    if (!isAutoPlaying) return;

    const types: ClientType[] = ["H", "R"];
    let currentIndex = 0;

    const interval = setInterval(() => {
      setActiveType(types[currentIndex]);
      currentIndex = (currentIndex + 1) % types.length;
    }, 3000);

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  // Stop auto-play on user interaction
  const handleInteraction = (type: ClientType) => {
    setIsAutoPlaying(false);
    setActiveType(activeType === type ? null : type);
  };

  //Marquee Effect
  useEffect(() => {
    let animationFrameId: number;
    let startTime: number | null = null;
    const speed = 50; // Pixels per second

    const animate = (timestamp: number) => {
      if (!marqueeRef.current) return;

      if (!startTime) {
        startTime = timestamp;
      }

      const progress = timestamp - startTime;
      const translateX = -1 * (progress / 1000) * speed;

      const firstSetWidth =
        marqueeRef.current.children[0].getBoundingClientRect().width;
      const resetPosition = -firstSetWidth;

      // Create seamless loop by resetting position
      if (translateX <= resetPosition) {
        startTime = timestamp;
        marqueeRef.current.style.transform = "translateX(0)";
      } else {
        marqueeRef.current.style.transform = `translateX(${translateX}px)`;
      }

      animationFrameId = requestAnimationFrame(animate);
    };

    animationFrameId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrameId);
  }, []);

  return (
    <section className={styles.clientsSection}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-24">
        {/* Map and Legend Section */}
        <div className="flex flex-col lg:flex-row items-start gap-8 lg:gap-12">
          {/* Left side - Legend */}
          <div className="w-full lg:w-1/3">
            <h2 className="text-2xl sm:text-3xl font-bold text-[#000080] mb-6 sm:mb-10">
              {dict["clients.title"]}
            </h2>
            <div className="space-y-4 sm:space-y-6">
              {legendItems.map(({ type, label }) => (
                <button
                  key={type}
                  className={`flex items-center gap-4 w-full text-left text-[#000080] transition-all duration-300 ${
                    activeType === type || hoveredType === type
                      ? "opacity-100 translate-x-2"
                      : "opacity-70 hover:opacity-90"
                  }`}
                  onMouseEnter={() => setHoveredType(type as ClientType)}
                  onMouseLeave={() => setHoveredType(null)}
                  onClick={() => handleInteraction(type as ClientType)}
                >
                  <span
                    className={`w-4 h-4 rounded-full flex items-center justify-center text-white text-[10px] transition-transform duration-300 ${
                      activeType === type ? "scale-125" : ""
                    } ${styles.legendDot}`}
                    data-type={type}
                  >
                    {type}
                  </span>
                  <span className="text-sm sm:text-base">{label}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Right side - Map */}
          <div className="w-full lg:w-2/3 relative">
            <div className={styles.mapContainer}>
              <Image
                src="/images/clients/Map.svg"
                alt="Indonesia Map"
                width={800}
                height={400}
                className={styles.mapImage}
                priority
              />

              {/* Markers Container */}
              <div className={styles.markersContainer}>
                {/* Bangka Belitung - Head Office */}
                <div
                  className={`${styles.marker} ${
                    activeType === "H" || hoveredType === "H"
                      ? styles.active
                      : styles.inactive
                  }`}
                  style={{ left: "24%", top: "52%" }}
                  data-type="H"
                >
                  <div className={styles.markerDot}>
                    <span>H</span>
                  </div>
                  <span className={styles.markerCity}>
                    {dict["clients.headOffice"]}
                  </span>
                </div>

                {/* Jakarta - Representative */}
                <div
                  className={`${styles.marker} ${
                    activeType === "R" || hoveredType === "R"
                      ? styles.active
                      : styles.inactive
                  }`}
                  style={{ left: "25%", top: "72%" }}
                  data-type="R"
                >
                  <div className={styles.markerDot}>
                    <span>R</span>
                  </div>
                  <span className={styles.markerCity}>
                    {dict["clients.representative"]}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Customer Marquee Section */}
        <div className={styles.customerSection}>
          <h3 className="text-2xl sm:text-3xl font-bold text-[#000080] text-center mb-8">
            {dict["clients.customers.title"]}
          </h3>

          <div className={styles.marqueeContainer}>
            <div className={styles.marqueeWrapper}>
              <div ref={marqueeRef} className={styles.marqueeTrack}>
                {/* First set of logos */}
                <div className={styles.marqueeGroup}>
                  {CUSTOMER_LOGOS.map((logo, index) => (
                    <div key={`logo-1-${index}`} className={styles.logoWrapper}>
                      <Image
                        src={logo.src}
                        alt={logo.alt}
                        width={120}
                        height={60}
                        className={styles.logo}
                      />
                    </div>
                  ))}
                </div>
                {/* Duplicate set for seamless loop */}
                <div className={styles.marqueeGroup}>
                  {CUSTOMER_LOGOS.map((logo, index) => (
                    <div key={`logo-2-${index}`} className={styles.logoWrapper}>
                      <Image
                        src={logo.src}
                        alt={logo.alt}
                        width={120}
                        height={60}
                        className={styles.logo}
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
