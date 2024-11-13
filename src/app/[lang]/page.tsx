// src/app/[lang]/page.tsx
import { Hero } from '../components/home/Hero';
import { About } from '../components/home/about';
import { Services } from '../components/home/services';
import type { Locale } from '../lib/types';
import { Clients } from '../components/home/clients';

interface Props {
  params: { lang: string };
}

function isValidLocale(lang: string): lang is Locale {
  return ['en', 'id', 'zh'].includes(lang as Locale);
}

export default async function HomePage({ params }: Props) {
  const validLang = isValidLocale(params.lang) ? params.lang : 'en';

  return (
    <main>
      <Hero lang={validLang} />
      <div className="relative bg-white z-10">
        <Services lang={validLang} />
      </div>
      <About lang={validLang} />
      <Clients lang={validLang} />
    </main>
  );
}
