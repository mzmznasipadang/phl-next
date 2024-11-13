// middleware.ts
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

// List of supported languages
const languages = ['en', 'id', 'zh'];
type Language = typeof languages[number];

// Check if a given string is a supported language
function isValidLanguage(lang: string): lang is Language {
  return languages.includes(lang as Language);
}

export function middleware(request: NextRequest) {
  // Get the pathname of the request (e.g. /blog)
  const pathname = request.nextUrl.pathname;

  // Get the first segment after /
  const segment = pathname.split('/')[1];

  // Check if the first segment is a supported language
  if (!isValidLanguage(segment)) {
    // If it's not a supported language, redirect to the default language (en)
    const url = new URL(`/en${pathname}`, request.url);
    return NextResponse.redirect(url);
  }

  // If it is a supported language, continue with the request
  return NextResponse.next();
}

// Config to match all paths except certain ones
export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     * - public folder
     */
    '/((?!api|_next/static|_next/image|favicon.ico|public).*)',
  ],
};