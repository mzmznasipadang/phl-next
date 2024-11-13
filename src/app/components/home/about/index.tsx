// src/app/components/home/about/index.tsx
'use client';

import { useEffect, useRef } from 'react';
import Image from 'next/image';
import { getDictionary } from '@/app/lib/dictionary';
import type { Locale } from '@/app/lib/types';
import styles from './styles.module.css';

interface AboutProps {
  lang: Locale;
}

export function About({ lang }: AboutProps) {
  const dict = getDictionary(lang);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add(styles.visible);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section className={styles.aboutSection}>
      <div className={styles.container} ref={sectionRef}>
        <h2 className={styles.title}>
          {dict['about.title']}
        </h2>
        
        <div className={styles.content}>
          {/* Left side - Images */}
          <div className={styles.imagesContainer}>
            <div className={styles.mainImage}>
              <Image
                src="/images/about/ship1.jpg"
                alt="Tug boat at sunset"
                width={800}
                height={500}
                className="object-cover"
                priority
              />
            </div>
            <div className={styles.imageGrid}>
              <div className={styles.secondaryImage}>
                <Image
                  src="/images/about/ship2.jpeg"
                  alt="Tug boat construction"
                  width={500}
                  height={300}
                  className="object-cover"
                />
              </div>
              <div className={styles.smallImage}>
                <Image
                  src="/images/about/ship3.jpeg"
                  alt="Tug boat detail"
                  width={300}
                  height={300}
                  className="object-cover"
                />
              </div>
            </div>
          </div>

          {/* Right side - Text content */}
          <div className={styles.textContent}>
            <div className={styles.accentLine} />
            <div className={styles.textWrapper}>
              <h3 className={styles.subtitle}>
                {dict['about.subtitle']}
              </h3>
              <div className={styles.description}>
                <p>{dict['about.description1']}</p>
                <p>{dict['about.description2']}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}