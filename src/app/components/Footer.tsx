'use client';

import Link from 'next/link';
import Image from 'next/image';
import { getDictionary } from '../lib/dictionary';
import type { Locale } from '../lib/types';

interface FooterProps {
  lang: Locale;
}

export function Footer({ lang }: FooterProps) {
  const dict = getDictionary(lang);
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-[#000080] text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Company Info */}
          <div className="space-y-6">
            <div className="flex items-start">
              <Image
                src="/logo.png"
                alt="Pahala Harapan Lestari"
                width={200}
                height={50}
                className="h-12 w-auto"
              />
            </div>
            <div className="space-y-4 text-sm">
              <div>
                <div className="font-semibold mb-1">{dict['footer.telephone']}:</div>
                <p>+62 (0717) 4262 666 / 777, 435914</p>
              </div>
              <div>
                <div className="font-semibold mb-1">{dict['footer.fax']}:</div>
                <p>+62 (021) 439359, 4261743</p>
              </div>
              <div>
                <div className="font-semibold mb-1">{dict['footer.email']}:</div>
                <p>• office@pahalashipyard.com</p>
                <p>• phl_dockyard@yahoo.co.id</p>
              </div>
              <div>
                <div className="font-semibold mb-1">{dict['footer.headOffice']}:</div>
                <p>Jalan Pasir Ketapang No. 5,</p>
                <p>Pangkalpinang - Kepulauan Bangka Belitung,</p>
                <p>Indonesia</p>
              </div>
              <div>
                <div className="font-semibold mb-1">{dict['footer.representativeOffice']}:</div>
                <p>The Mansion Bougenville</p>
                <p>Tower Fontana Unit BF 33H,</p>
                <p>Jakarta Utara, 14410</p>
              </div>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="md:text-right">
            <h3 className="text-lg font-bold mb-4">{dict['footer.explore']}</h3>
            <nav className="space-y-2">
              <Link href={`/${lang}`} className="block hover:text-gray-300">
                {dict['footer.nav.home']}
              </Link>
              <Link href={`/${lang}/vessels`} className="block hover:text-gray-300">
                {dict['footer.nav.vessels']}
              </Link>
              <Link href={`/${lang}/services`} className="block hover:text-gray-300">
                {dict['footer.nav.services']}
              </Link>
              <Link href={`/${lang}/about`} className="block hover:text-gray-300">
                {dict['footer.nav.about']}
              </Link>
              <Link href={`/${lang}/contact`} className="block hover:text-gray-300">
                {dict['footer.nav.contact']}
              </Link>
            </nav>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 pt-8 border-t border-white/10 text-center text-sm">
          <p>
            {dict['footer.copyright']} {currentYear} | {dict['footer.builtBy']}
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;