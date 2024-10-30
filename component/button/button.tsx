import Image from 'next/image';
import Link from 'next/link';

interface ButtonProps {
  link: string;
  text: string;
}

export default function Button({ link, text }: ButtonProps) {
  return (
    <div>
      <Link
        className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5"
        href={link}
        rel="noopener noreferrer"
      >
        <Image
          className="dark:invert"
          src="/vercel.svg"
          alt="Vercel logomark"
          width={20}
          height={20}
        />
        {text}
      </Link>
    </div>
  );
}
