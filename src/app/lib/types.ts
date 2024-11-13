// src/app/lib/types.ts
export const locales = ['en', 'id', 'zh'] as const;
export type Locale = (typeof locales)[number];

export interface Dictionary {
    [key: string]: string;
  }
  
  export type Dictionaries = {
    en: Dictionary;
    id: Dictionary;
    zh: Dictionary;
  };