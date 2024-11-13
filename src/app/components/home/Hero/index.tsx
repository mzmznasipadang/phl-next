// src/app/components/home/hero/index.tsx
"use client";

import { useEffect, useState } from "react";
import { getDictionary } from "@/app/lib/dictionary";
import type { Locale } from "@/app/lib/types";
import { useYouTubePlayer } from "./useYouTubePlayer";
import styles from "./styles.module.css";

interface HeroProps {
  lang: Locale;
}

export function Hero({ lang }: HeroProps) {
  const dict = getDictionary(lang);
  const [scrollY, setScrollY] = useState(0);
  const { containerRef, isReady } = useYouTubePlayer({
    videoId: "KWL_GfKfEMw",
    options: {
      playerVars: {
        autoplay: 1,
        controls: 0,
        start: 82,
        end: 100,
        suggestedQuality: "hd1080",
        rel: 0,
        showinfo: 0,
        mute: 1,
        modestbranding: 1,
        loop: 1,
        playlist: "KWL_GfKfEMw",
        playsinline: 1,
      },
    },
  });

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY;
      setScrollY(scrolled);

      document.documentElement.style.setProperty(
        "--scroll-opacity",
        Math.min(scrolled / 1000, 0.75).toString()
      );
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
      document.documentElement.style.removeProperty("--scroll-opacity");
    };
  }, []);

  const scale = 1 + scrollY * 0.001;
  const textOpacity = Math.max(1 - scrollY / 500, 0);

  return (
    <>
      {/* Fixed video background */}
      <div className={styles.videoWrapper}>
        {!isReady && (
          <div className="absolute inset-0 bg-gray-900 animate-pulse" />
        )}

        <div
          className="w-full h-full"
          style={{
            transform: `scale(${scale})`,
            transition: "transform 0.1s ease-out",
          }}
        >
          <div
            ref={containerRef}
            className={`w-full h-full transition-opacity duration-1000
              ${isReady ? "opacity-100" : "opacity-0"}`}
          />
        </div>
      </div>

      {/* Static overlay */}
      <div className={`${styles.fadeOverlay} bg-black/30`} />

      {/* Scroll-based overlay */}
      <div className={styles.fadeOverlay} />

      {/* Hero section with content */}
      <section className={styles.videoContainer}>
        <div
          className="relative z-10 h-screen flex flex-col items-center justify-center text-white text-center px-4"
          style={{
            opacity: textOpacity,
            transform: `translateY(${scrollY * 0.5}px)`,
          }}
        >
          <h1 className="text-3xl md:text-5xl tracking-tight mb-6 flex items-center gap-3">
            {dict["hero.title"]}
            <span className="text-white font-bold">
              {dict["hero.titleEmphasis"]}
            </span>
          </h1>
          <p className="text-xl md:text-2xl font-light mt-4">
            {dict["hero.subtitle"]}
          </p>
        </div>
      </section>
    </>
  );
}
