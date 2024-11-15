// src/app/[lang]/about/page.tsx
import { About } from '@/app/components/about';
import { locales, type Locale } from '@/app/lib/types';
import type { Metadata } from 'next';

type Props = {
  params: Promise<{ lang: string }>;
}

function isValidLocale(lang: string): lang is Locale {
  return locales.includes(lang as Locale);
}

export async function generateMetadata(
  { params }: Props
): Promise<Metadata> {
  const { lang } = await params;
  const validLang = isValidLocale(lang) ? lang : 'en';
  
  const titles: Record<Locale, string> = {
    en: 'About Us - Pahala Harapan Lestari',
    id: 'Tentang Kami - Pahala Harapan Lestari',
    zh: '关于我们 - Pahala Harapan Lestari'
  };
  
  return {
    title: titles[validLang],
  };
}

export default async function AboutPage({ params }: Props) {
  const { lang } = await params;
  const validLang = isValidLocale(lang) ? lang : 'en';

  return <About lang={validLang} />;
}

export function generateStaticParams() {
  return locales.map((lang) => ({
    lang,
  }));
}