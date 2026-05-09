'use client';

import React from 'react';
import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <div className="text-center">
        <h1 className="text-9xl font-black gradient-text mb-4">404</h1>
        <h2 className="text-2xl font-bold mb-6">Oops! Page not found.</h2>
        <p className="text-gray-500 mb-10 max-w-sm mx-auto">
          The page you are looking for might have been removed or is temporarily unavailable.
        </p>
        <Link href="/" className="gradient-bg px-8 py-3 rounded-xl font-bold text-white inline-block">
          Go Home
        </Link>
      </div>
    </div>
  );
}
