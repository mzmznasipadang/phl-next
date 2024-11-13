// components/LanguageSwitcher.tsx
'use client';

import { useState, useEffect } from 'react';
import { usePathname, useRouter } from 'next/navigation';

interface Language {
  code: string;
  label: string;
}

const languages: Language[] = [
  { code: 'en', label: 'EN' },
  { code: 'id', label: 'ID' },
  { code: 'zh', label: 'ZH' },
];

export default function LanguageSwitcher() {
  const router = useRouter();
  const pathname = usePathname();
  const [currentLanguage, setCurrentLanguage] = useState<string>('en');
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    // Extract language from pathname (/en/about -> en)
    const pathLanguage = pathname.split('/')[1];
    if (languages.some(lang => lang.code === pathLanguage)) {
      setCurrentLanguage(pathLanguage);
    }
  }, [pathname]);

  const handleLanguageChange = (languageCode: string) => {
    const pathParts = pathname.split('/');
    pathParts[1] = languageCode; // Replace language code in path
    const newPath = pathParts.join('/');
    router.push(newPath);
    setIsOpen(false);
  };

  return (
    <div className="relative inline-block text-white">
      {/* Current language button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center px-3 py-2 text-sm font-medium hover:text-gray-200"
      >
        {languages.find(lang => lang.code === currentLanguage)?.label || 'EN'}
        <svg
          className={`ml-2 h-4 w-4 transition-transform ${isOpen ? 'rotate-180' : ''}`}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </button>

      {/* Language dropdown */}
      {isOpen && (
        <>
          {/* Backdrop to close dropdown */}
          <div
            className="fixed inset-0 z-40"
            onClick={() => setIsOpen(false)}
          />
          
          {/* Dropdown menu */}
          <div className="absolute right-0 mt-2 w-24 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 z-50">
            <div className="py-1" role="menu">
              {languages.map((language) => (
                <button
                  key={language.code}
                  onClick={() => handleLanguageChange(language.code)}
                  className={`
                    block w-full text-left px-4 py-2 text-sm
                    ${currentLanguage === language.code
                      ? 'bg-gray-100 text-gray-900'
                      : 'text-gray-700 hover:bg-gray-50'
                    }
                  `}
                  role="menuitem"
                >
                  {language.label}
                </button>
              ))}
            </div>
          </div>
        </>
      )}
    </div>
  );
}

// Make sure to also export it as a named export
export { LanguageSwitcher };