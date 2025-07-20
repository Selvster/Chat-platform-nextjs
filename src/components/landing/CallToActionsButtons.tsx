'use client';

import React from 'react';
import { useRouter } from 'next/navigation';

export default function CallToActionButtons() {
  const router = useRouter();

  const handleGetStarted = () => {
    router.push('/auth'); 
  };


  return (
    <div className="flex flex-col sm:flex-row gap-4 mt-8">
      <button
        onClick={handleGetStarted}
        className="bg-white text-blue-600 font-bold py-3 px-8 rounded-full shadow-lg hover:bg-blue-50 transition duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-300 focus:ring-offset-2 cursor-pointer"
      >
        Get Started
      </button>

    </div>
  );
};

