// components/Navbar.tsx
"use client";

import { useState, useEffect } from "react"; // Added missing imports
import Link from "next/link";
import Image from "next/image";
import { LanguageSwitcher } from "../components/LanguageSwitcher";
import { getDictionary } from "../lib/dictionary";
import type { Locale } from "../lib/types";

interface NavbarProps {
  lang: Locale;
}

export function Navbar({ lang }: NavbarProps) {
  const dict = getDictionary(lang);
  const [scrollY, setScrollY] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Calculate navbar properties based on scroll
  const isAtTop = scrollY < 50;
  const navBackground = isAtTop ? "transparent" : "bg-[#000080]/95";
  const navHeight = Math.max(80 - scrollY * 0.1, 64); // Shrink from 80px to min 64px
  const logoScale = isAtTop ? 1 : 0.9;

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 ${navBackground}`}
      style={{ height: `${navHeight}px` }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full">
        <div className="flex justify-between items-center h-full">
          {/* Logo */}
          <Link
            href={`/${lang}`}
            className="flex-shrink-0 flex items-center transition-transform duration-200"
            style={{ transform: `scale(${logoScale})` }}
          >
            <Image
              src="/images/logo.png"
              alt="Pahala Harapan Lestari"
              width={200}
              height={50}
              className="h-12 w-auto"
              priority
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8 font-['Open_Sans']">
            <Link
              href={`/${lang}`}
              className="text-white hover:text-gray-200 px-3 py-2 text-sm font-medium transition-all duration-200"
              style={{
                fontSize: isAtTop ? "0.875rem" : "0.8rem",
                opacity: isAtTop ? 1 : 0.9,
              }}
            >
              {dict["nav.home"]}
            </Link>
            <Link
              href={`/${lang}/vessels`}
              className="text-white hover:text-gray-200 px-3 py-2 text-sm font-medium transition-all duration-200"
              style={{
                fontSize: isAtTop ? "0.875rem" : "0.8rem",
                opacity: isAtTop ? 1 : 0.9,
              }}
            >
              {dict["nav.vessels"]}
            </Link>
            <Link
              href={`/${lang}/services`}
              className="text-white hover:text-gray-200 px-3 py-2 text-sm font-medium transition-all duration-200"
              style={{
                fontSize: isAtTop ? "0.875rem" : "0.8rem",
                opacity: isAtTop ? 1 : 0.9,
              }}
            >
              {dict["nav.services"]}
            </Link>
            <Link
              href={`/${lang}/about`}
              className="text-white hover:text-gray-200 px-3 py-2 text-sm font-medium transition-all duration-200"
              style={{
                fontSize: isAtTop ? "0.875rem" : "0.8rem",
                opacity: isAtTop ? 1 : 0.9,
              }}
            >
              {dict["nav.about"]}
            </Link>
            <Link
              href={`/${lang}/contact`}
              className="text-white hover:text-gray-200 px-3 py-2 text-sm font-medium transition-all duration-200"
              style={{
                fontSize: isAtTop ? "0.875rem" : "0.8rem",
                opacity: isAtTop ? 1 : 0.9,
              }}
            >
              {dict["nav.contact"]}
            </Link>
            <LanguageSwitcher />
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              type="button"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-white hover:text-gray-200 hover:bg-[#000060] focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
              aria-controls={isMenuOpen ? "mobile-menu-panel" : undefined}
              aria-expanded={isMenuOpen ? "true" : "false"}
              aria-label="Toggle menu"
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="block h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>

          {/* Mobile menu panel */}
          <div
            id="mobile-menu-panel"
            className={`md:hidden transition-all duration-300 ${
              isMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
            } overflow-hidden bg-[#000080]`}
          >
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              {[
                ["nav.home", "/"],
                ["nav.vessels", "/vessels"],
                ["nav.services", "/services"],
                ["nav.about", "/about"],
                ["nav.contact", "/contact"],
              ].map(([key, path]) => (
                <Link
                  key={key}
                  href={`/${lang}${path}`}
                  className="text-white hover:bg-[#000060] block px-3 py-2 rounded-md text-base font-medium font-['Open_Sans']"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {dict[key as keyof typeof dict]}
                </Link>
              ))}
              <div className="mt-4">
                <LanguageSwitcher />
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
