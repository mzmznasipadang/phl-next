// app/[lang]/layout.tsx
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import { Metadata } from 'next';
import { Open_Sans } from 'next/font/google';
import { Locale } from '../lib/types';

const openSans = Open_Sans({
  subsets: ['latin'],
  display: 'swap',
  preload: true,
  weight: ['300', '400', '500', '600', '700', '800'],
});

function isValidLocale(lang: string): lang is Locale {
  return ['en', 'id', 'zh'].includes(lang as Locale);
}

type Props = {
  children: React.ReactNode;
  params: { lang: string };
};

export async function generateStaticParams() {
  return [
    { lang: 'en' },
    { lang: 'id' },
    { lang: 'zh' },
  ];
}

export async function generateMetadata(
  { params }: Props
): Promise<Metadata> {
  const validLang = isValidLocale(params.lang) ? params.lang : 'en';
  
  const descriptions: Record<Locale, string> = {
    en: 'Your Trusted Partner in Maritime Solutions',
    id: 'Mitra Terpercaya dalam Solusi Maritim',
    zh: '您值得信赖的海事解决方案伙伴',
  };

  return {
    title: 'Pahala Harapan Lestari',
    description: descriptions[validLang as Locale],
  };
}

export default async function RootLayout({
  children,
  params,
}: Props) {
  const validLang = isValidLocale(params.lang) ? params.lang : 'en';

  return (
    <html lang={validLang} className={openSans.className}>
      <body className="relative">
        <Navbar lang={validLang} />
        <main className="relative bg-transparent">
          {children}
        </main>
        <Footer lang={validLang}/>
      </body>
    </html>
  );
}