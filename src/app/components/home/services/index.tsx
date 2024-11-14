// src/app/components/home/services/index.tsx
'use client';

import Link from 'next/link';
import Image from 'next/image';
import { getDictionary } from '@/app/lib/dictionary';
import type { Locale } from '@/app/lib/types';
import styles from './styles.module.css';

interface ServiceCardProps {
  title: string;
  image: string;
  href: string;
  discoverMore: string; // Added for translation
}

const ServiceCard = ({ title, image, href, discoverMore }: ServiceCardProps) => {
  return (
    <Link href={href} className={styles.card}>
      <div className={styles.imageWrapper}>
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 30vw"
          priority
        />
        <div className={styles.overlay} />
      </div>
      <div className={styles.content}>
        <h3 className="text-3xl font-bold mb-2">{title}</h3>
        <span className={styles.discoverMore}>
          {discoverMore}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 ml-2"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
              clipRule="evenodd"
            />
          </svg>
        </span>
      </div>
    </Link>
  );
};

interface ServicesProps {
  lang: Locale;
}

export function Services({ lang }: ServicesProps) {
  const dict = getDictionary(lang);

  const services = [
    {
      title: dict['services.repairs'],
      image: '/images/services/repairs.png',
      href: `/${lang}/services`,
      discoverMore: dict['services.discoverMore'],
    },
    {
      title: dict['services.vessels'],
      image: '/images/services/vessels.jpeg',
      href: `/${lang}/vessels`,
      discoverMore: dict['services.discoverMore'],
    },
    {
      title: dict['services.profile'],
      image: '/images/services/profile.jpeg',
      href: `/${lang}/about`,
      discoverMore: dict['services.discoverMore'],
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className={styles.servicesContainer}>
        {services.map((service) => (
          <ServiceCard 
            key={service.title} 
            {...service}
          />
        ))}
      </div>
    </section>
  );
}