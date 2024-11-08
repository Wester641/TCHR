import { motion } from 'framer-motion';
import Link from 'next/link';
// import Image from 'next/image';
// import Link from 'next/link';

interface ButtonProps {
  href: string;
  text?: string;
}

const navVariants = {
  hidden: { opacity: 0, y: -50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.3,
      when: 'beforeChildren',
      staggerChildren: 0.2,
    },
  },
  exit: { opacity: 0, y: 50 },
};

const liVariants = {
  // hidden: { opacity: 0, y: -50 },
  // visible: { opacity: 1, y: 0, transition: { duration: 0.3 } },
  whileHover: { scale: 1.1 },
  whileTap: { scale: 0.9 },
};

const navList = [
  { id: 1, name: 'Service' },
  { id: 2, name: 'About' },
  { id: 3, name: 'Contact' },
];

export default function AnimatedNav({ href }: ButtonProps) {
  return (
    <motion.nav
      variants={navVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
      // className=" min-w-[10rem] shadow-lg rounded-md min-h-[13rem] bg-[#435468] border-2 border-[#dcdcdc]"
    >
      <motion.ul className="flex  flex-col justify-start items-start p-2 gap-2">
        {navList.map((text, index) => (
          <motion.li
            key={index}
            variants={liVariants}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="hover:bg-[#435468bc] hover:shadow-lg hover:opacity-90"
          >
            <Link href={href}>{text.name}</Link>
          </motion.li>
        ))}
      </motion.ul>
    </motion.nav>
  );
}
