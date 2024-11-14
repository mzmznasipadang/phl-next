// src/app/components/about/index.tsx
"use client";

import { useEffect } from "react";
import Image from "next/image";
import { getDictionary } from "@/app/lib/dictionary";
import type { Locale } from "@/app/lib/types";
import styles from "./styles.module.css";

interface AboutProps {
  lang: Locale;
}

export function About({ lang }: AboutProps) {
  const dict = getDictionary(lang);

  const safeSplit = (text?: string, separator = "\n") => {
    if (!text) return [];
    try {
      return text.split(separator).filter(Boolean);
    } catch (error) {
      console.error("Error splitting text:", error);
      return [];
    }
  };

  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: "0px 0px -50px 0px",
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add(styles.visible);
        }
      });
    }, observerOptions);

    document.querySelectorAll(`.${styles.reveal}`).forEach((element) => {
      observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className={`min-h-screen bg-white ${styles.pageEntry}`}>
      {/* Hero Section */}
      <div className="relative h-[60vh] w-full">
        {/* Remove the wrapping div and apply styles directly */}
        <Image
          src="/images/about/aboutbg.jpg"
          alt="About Hero"
          fill
          sizes="100vw"
          quality={100}
          className={`object-cover brightness-50 ${styles.imageHover} transition-all duration-700`}
          priority
        />
        <div
          className={`absolute inset-0 flex flex-col justify-center items-center text-white ${styles.textReveal}`}
        >
          <p className="text-xl mb-4">{dict["about.top.title"]}</p>
          <h1 className="text-5xl font-bold">{dict["about.top.subtitle"]}</h1>
        </div>
      </div>

      {/* Craftsman Section */}
      <section
        className={`py-20 px-4 md:px-8 max-w-7xl mx-auto ${styles.reveal}`}
      >
        <div className="flex items-center mb-12">
          <div className="h-px flex-grow bg-gray-300" />
          <h2 className="text-3xl text-[#000080] font-bold px-8">
            {dict["about.hero.title"]}
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div className={styles.imageHover}>
            <Image
              src="/images/about/craftsman/craftsmanportrait.jpeg"
              alt="Craftsman Portrait"
              width={800}
              height={600}
              className="object-cover rounded-lg w-full h-[400px]"
            />
            <div className={styles.overlayFade} />
          </div>
          <div className="space-y-8">
            <p className="text-gray-700 leading-relaxed">
              {dict["about.leading.heading"]}
            </p>
            <div className={styles.imageHover}>
              <Image
                src="/images/about/craftsman/craftsmanland1.jpeg"
                alt="Craftsman Landscape"
                width={800}
                height={300}
                className="object-cover rounded-lg w-full h-[200px]"
              />
              <div className={styles.overlayFade} />
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mt-8">
          <div className={styles.imageHover}>
            <Image
              src="/images/about/craftsman/craftsmanland3.jpg"
              alt="Craftsman Landscape 3"
              width={800}
              height={400}
              className="object-cover rounded-lg w-full h-[300px]"
            />
            <div className={styles.overlayFade} />
          </div>
          <div className={styles.imageHover}>
            <Image
              src="/images/about/craftsman/craftsmanland2.jpg"
              alt="Craftsman Landscape 2"
              width={800}
              height={400}
              className="object-cover rounded-lg w-full h-[300px]"
            />
            <div className={styles.overlayFade} />
          </div>
        </div>
      </section>

      {/* Principles Section */}
      <section className={`bg-gray-100 py-20 px-4 md:px-8 ${styles.reveal}`}>
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center mb-12">
            <h2 className="text-3xl text-[#000080] font-bold px-8">
              {dict["about.steady.heading"]}
            </h2>
            <div className="h-px flex-grow bg-gray-300" />
          </div>

          {/* Vision */}
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            <div className={styles.imageHover}>
              <Image
                src="/images/about/vision.jpg"
                alt="Vision"
                width={800}
                height={600}
                className="object-cover rounded-lg w-full h-[400px]"
              />
              <div className={styles.overlayFade} />
            </div>
            <div className="flex flex-col justify-center">
              <h3 className="text-2xl text-[#000080] font-bold mb-4">
                {dict["about.steady.vision"]}
              </h3>
              <p className="text-gray-700 leading-relaxed">
                {dict["about.steady.visionleading"]}
              </p>
            </div>
          </div>

          {/* Mission */}
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            <div className="flex flex-col justify-center order-2 md:order-1">
              <h3 className="text-2xl text-[#000080] font-bold mb-4">
                {dict["about.steady.mission"]}
              </h3>
              <div className="space-y-4 text-gray-700">
                {safeSplit(dict["about.steady.missionleading"]).map(
                  (item, index) => (
                    <p key={index} className="leading-relaxed">
                      {item}
                    </p>
                  )
                )}
              </div>
            </div>
            <div className={`${styles.imageHover} order-1 md:order-2`}>
              <Image
                src="/images/about/mission.jpg"
                alt="Mission"
                width={800}
                height={600}
                className="object-cover rounded-lg w-full h-[400px]"
              />
              <div className={styles.overlayFade} />
            </div>
          </div>
        </div>
      </section>

      {/* Outstanding Remarks Section */}
      <section className={`py-20 px-4 md:px-8 ${styles.reveal}`}>
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center mb-12">
            <div className="h-px flex-grow bg-gray-300" />
            <h2 className="text-3xl text-[#000080] font-bold px-8">
              {dict["about.outstanding.title"]}
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Trophy Image */}
            <div className="flex justify-center items-center">
              <div
                className={`relative w-full max-w-md h-[500px] ${styles.imageHover}`}
              >
                <Image
                  src="/images/about/certif&award/trophy.png"
                  alt="Paramakarya Trophy"
                  fill
                  className="object-contain"
                  priority={false}
                />
                <div className={styles.overlayFade} />
              </div>
            </div>

            {/* Awards List */}
            <div className="space-y-8">
              <div className="space-y-6">
                {safeSplit(dict["about.outstanding.awards"], "\n\n").map(
                  (award, index) => (
                    <p
                      key={index}
                      className="text-gray-700 font-medium leading-relaxed"
                    >
                      {award}
                    </p>
                  )
                )}
              </div>

              {/* Award Certificates/Logos */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-8">
                {[
                  "isoukas.jpeg",
                  "paramakarya.png",
                  "pertamina.png",
                  "bki.png",
                ].map((image, index) => (
                  <div
                    key={index}
                    className={`relative aspect-square shadow-lg rounded-lg overflow-hidden bg-white ${styles.imageHover}`}
                  >
                    <Image
                      src={`/images/about/certif&award/${image}`}
                      alt={`Award Certificate ${index + 1}`}
                      fill
                      className="object-contain p-2"
                    />
                    <div className={styles.overlayFade} />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
