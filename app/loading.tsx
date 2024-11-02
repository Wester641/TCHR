import Image from 'next/image';

export default function Loading() {
  return (
    <div className="animate-spin min-h-screen bg-[#38495c]">
      <Image
        src="/jasmine.svg"
        alt="Vercel logomark"
        width={20}
        height={20}
        className="relative"
      />
    </div>
  );
}
