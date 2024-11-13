"use client";

import Link from "next/link";
import Image from "next/image";
import { getDictionary } from "../lib/dictionary";
import type { Locale } from "../lib/types";

interface FooterProps {
  lang: Locale;
}

export function Footer({ lang }: FooterProps) {
  const dict = getDictionary(lang);
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#000080] text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          {/* Left Column */}
          <div className="md:col-span-8">
            <div className="flex items-start mb-8">
              <Image
                src="/images/Logo.png"
                alt="Pahala Harapan Lestari Logo"
                width={200}
                height={50}
                priority={true}
                className="w-auto h-auto"
              />
            </div>
            {/* Contact Info Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4 text-sm">
              {/* Left Side */}
              <div className="space-y-4">
                <div>
                  <div className="font-semibold mb-1">
                    {dict["footer.telephone"]}:
                  </div>
                  <p>+62 (0717) 4262 666 / 777, 435914</p>
                </div>
                <div>
                  <div className="font-semibold mb-1">
                    {dict["footer.headOffice"]}:
                  </div>
                  <p>Jalan Pasir Ketapang No. 5,</p>
                  <p>Pangkalpinang - Kepulauan Bangka Belitung,</p>
                  <p>Indonesia</p>
                </div>
                <div>
                  <div className="font-semibold mb-1">
                    {dict["footer.representativeOffice"]}:
                  </div>
                  <p>The Mansion Bougenville</p>
                  <p>Tower Fontana Unit BF 33H,</p>
                  <p>Jakarta Utara, 14410</p>
                </div>
              </div>

              {/* Right Side */}
              <div className="space-y-4">
                <div>
                  <div className="font-semibold mb-1">
                    {dict["footer.fax"]}:
                  </div>
                  <p>+62 (021) 439359, 4261743</p>
                </div>
                <div>
                  <div className="font-semibold mb-1">
                    {dict["footer.email"]}:
                  </div>
                  <p>• office@pahalashipyard.com</p>
                  <p>• phl_dockyard@yahoo.co.id</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Navigation */}
          <div className="md:col-span-4 md:text-right">
            <h3 className="text-2xl font-bold mb-4">
              {dict["footer.explore"]}
            </h3>
            <nav className="space-y-2">
              <Link href={`/${lang}`} className="block hover:text-gray-300">
                {dict["footer.nav.home"]}
              </Link>
              <Link
                href={`/${lang}/vessels`}
                className="block hover:text-gray-300"
              >
                {dict["footer.nav.vessels"]}
              </Link>
              <Link
                href={`/${lang}/services`}
                className="block hover:text-gray-300"
              >
                {dict["footer.nav.services"]}
              </Link>
              <Link
                href={`/${lang}/about`}
                className="block hover:text-gray-300"
              >
                {dict["footer.nav.about"]}
              </Link>
              <Link
                href={`/${lang}/contact`}
                className="block hover:text-gray-300"
              >
                {dict["footer.nav.contact"]}
              </Link>
            </nav>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 pt-8 border-t border-white/10 text-center text-sm">
          <p className="flex items-center justify-center gap-2">
            {dict["footer.copyright"]} {currentYear} | Built with Love by{" "}
            <Link
              href="https://naspadstudio.id"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center hover:opacity-80 transition-opacity"
            >
              <Image
                src="/images/naspad-logo.png"
                alt="NasPad Studio"
                width={440} // Adjust based on your logo size
                height={120} // Adjust based on your logo size
                className="w-auto h-10" // Adjust height as needed
              />
            </Link>
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
