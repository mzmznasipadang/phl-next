// src/app/components/vessels/showcase.tsx
import Image from "next/image";
import { getDictionary } from "@/app/lib/dictionary";
import type { Locale } from "@/app/lib/types";

interface ShowcaseProps {
  lang: Locale;
}

const ShowcaseSection: React.FC<ShowcaseProps> = ({ lang }) => {
  const dict = getDictionary(lang);
  
  return (
    <section className="w-full bg-white py-24">
      <div className="max-w-[1200px] mx-auto px-4">
        {/* Showcase Title Section */}
        <div className="flex flex-col lg:flex-row items-center gap-12 mb-24">
          <div className="flex-1">
            <h2 className="text-5xl font-bold text-[#000080] mb-4">
              <span className="block">{dict['vessels.showcase.title1']}</span>
              <span className="block">{dict['vessels.showcase.title2']}</span>
            </h2>
            <div className="w-24 h-[0.3rem] bg-[#000080] rounded-[2px] my-6" />
            <p className="text-lg text-gray-700 leading-relaxed">
              {dict['vessels.showcase.description']}
            </p>
          </div>
          <div className="flex-1 relative h-[400px] w-full group overflow-hidden rounded-lg">
          <Image
            src="/images/vessels/showcase/patra1.jpeg"
            alt="TB Patra"
            fill
            className="object-cover rounded-lg transition-transform duration-500 ease-out group-hover:scale-105"
          />
          {/* Optional overlay on hover */}
          <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        </div>
        </div>

        {/* Showcase Grid */}
      {showcaseData.map((showcase, index) => (
        <div 
          key={index}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16 last:mb-0"
        >
          {/* First image with hover effect */}
          <div className={`relative h-[300px] md:h-[400px] group overflow-hidden rounded-lg ${
            showcase.layout === 'long-short' ? 'md:col-span-1' : 'md:col-span-1'
          }`}>
            <Image
              src={showcase.image1.src}
              alt={showcase.image1.title}
              fill
              className="object-cover rounded-lg transition-transform duration-500 ease-out group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            {/* Optional title on hover */}
            <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500">
              <p className="text-white text-lg font-medium">{showcase.image1.title}</p>
            </div>
          </div>

          {/* Second image with hover effect */}
          <div className={`relative h-[300px] md:h-[400px] group overflow-hidden rounded-lg ${
            showcase.layout === 'long-short' ? 'md:col-span-1' : 'md:col-span-1'
          }`}>
            <Image
              src={showcase.image2.src}
              alt={showcase.image2.title}
              fill
              className="object-cover rounded-lg transition-transform duration-500 ease-out group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            {/* Optional title on hover */}
            <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500">
              <p className="text-white text-lg font-medium">{showcase.image2.title}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  </section>
);
};

// Showcase data structure
const showcaseData = [
  {
    layout: 'long-short',
    image1: {
        src: '/images/vessels/showcase/patra2.jpeg',
        title: 'TB Patra'
      },
      image2: {
        src: '/images/vessels/showcase/patra3.jpeg',
        title: 'TB Patra'
      }
    },
    {
      layout: 'short-long',
      image1: {
        src: '/images/vessels/showcase/ame1.jpeg',
        title: 'AME II Oil Barge'
      },
      image2: {
        src: '/images/vessels/showcase/ame2.jpeg',
        title: 'AME II Oil Barge'
      }
    },
    {
      layout: 'long-short',
      image1: {
        src: '/images/vessels/showcase/ame3.jpeg',
        title: 'AME II Oil Barge'
      },
      image2: {
        src: '/images/vessels/showcase/ame4.jpeg',
        title: 'AME II Oil Barge'
      }
    },
    {
      layout: 'short-long',
      image1: {
        src: '/images/vessels/showcase/sentana1.jpeg',
        title: 'Oil Barge Sentana 4'
      },
      image2: {
        src: '/images/vessels/showcase/sentana2.jpeg',
        title: 'Oil Barge Sentana 4'
      }
    },
    {
      layout: 'long-short',
      image1: {
        src: '/images/vessels/showcase/sentana3.jpeg',
        title: 'Oil Barge Sentana 4'
      },
      image2: {
        src: '/images/vessels/showcase/sentana4.jpeg',
        title: 'Oil Barge Sentana 4'
      }
  },
];

export default ShowcaseSection;