'use client';

import { redirect } from 'next/navigation';
import { useEffect } from 'react';

export default function Home() {
  useEffect(() => {
    redirect('/dashboard');
  }, []);

  return (
    <div className="flex items-center animate-pulse justify-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-roboto-slab)] bg-[#435468]">
      <div className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center  text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5">
        Loading...
      </div>
    </div>
  );
}
