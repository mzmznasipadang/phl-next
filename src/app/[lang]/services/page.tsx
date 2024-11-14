// src/app/[lang]/vessels/page.tsx
import Vessels from '@/app/components/services';
import type { Locale } from '@/app/lib/types';

interface Props {
  params: Promise<{ lang: string }>;
}

function isValidLocale(lang: string): lang is Locale {
  return ['en', 'id', 'zh'].includes(lang as Locale);
}

export async function generateMetadata({ 
  params 
}: Props) {
  const { lang } = await params;
  const validLang = isValidLocale(lang) ? lang : 'en';
  
  const titles = {
    en: 'Repairs - Pahala Harapan Lestari',
    id: 'Perbaikan - Pahala Harapan Lestari',
    zh: 'Belom translate - Pahala Harapan Lestari'
  };
  
  return {
    title: titles[validLang as Locale],
  };
}

export default async function VesselsPage({ params }: Props) {
  const { lang } = await params;
  const validLang = isValidLocale(lang) ? lang : 'en';
  return <Vessels lang={validLang} />;
}

export async function generateStaticParams() {
  return [
    { lang: 'en' },
    { lang: 'id' },
    { lang: 'zh' },
  ];
}