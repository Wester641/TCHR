'use client';
import Image from 'next/image';
import NavButton from '@/component/buttons/nav-button';
import { motion } from 'framer-motion';

export default function Practice() {
  return (
    <motion.div
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 50 }}
      transition={{ duration: 0.5 }}
      className="max-w-[375px] rounded mx-auto min-h-[90vh] bg-[#38495c] my-3 font-[family-name:var(--font-roboto-slab)]"
    >
      <div className="flex flex-col gap-8 row-start-2 items-center sm:items-start py-3">
        <NavButton link="/goverment" text="back" />
      </div>
      <div>
        <Image
          src="/images/template.png"
          alt="Vercel logomark"
          width={500}
          height={500}
        />
      </div>
    </motion.div>
  );
}
