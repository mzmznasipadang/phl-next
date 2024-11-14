// src/app/[lang]/layout.tsx
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import type { Locale } from '@/app/lib/types';

type Props = {
  children: React.ReactNode;
  params: { lang: string };
};

function isValidLocale(lang: string): lang is Locale {
  return ['en', 'id', 'zh'].includes(lang as Locale);
}

export default function LocaleLayout({ children, params }: Props) {
  const validLang = isValidLocale(params.lang) ? params.lang : 'en';
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar lang={validLang} />
      <main className="flex-grow">{children}</main>
      <Footer lang={validLang} />
    </div>
  );
}