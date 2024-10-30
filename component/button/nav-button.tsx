import Image from 'next/image';
import Link from 'next/link';

interface ButtonProps {
  link: string;
  text: string;
  logo?: boolean;
}

export default function NavButton({ link, text, logo = true }: ButtonProps) {
  return (
    <div>
      <Link
        className="rounded-full shadow-2xl border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] text-sm sm:text-base px-4 sm:px-5 min-w-5"
        href={link}
        rel="noopener noreferrer"
      >
        {logo && (
          <Image
            className="dark:invert"
            src="/vercel.svg"
            alt="Vercel logomark"
            width={15}
            height={15}
          />
        )}
        {text}
      </Link>
    </div>
  );
}
