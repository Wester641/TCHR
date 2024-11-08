import Image from 'next/image';
import Link from 'next/link';

export default function About() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-roboto-slab)]">
      <div className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <Link
          className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-[#435468] text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5"
          href="/"
          rel="noopener noreferrer"
        >
          <Image
            className="dark:invert"
            src="/vercel.svg"
            alt="Vercel logomark"
            width={20}
            height={20}
          />
          Come back
        </Link>
      </div>
    </div>
  );
}
