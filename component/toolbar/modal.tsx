import { motion } from 'framer-motion';
import Link from 'next/link';

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
  whileHover: { scale: 1.1 },
  whileTap: { scale: 0.9 },
};

const navList = [
  { id: 1, name: 'Service', link: '/#!' },
  { id: 2, name: 'About', link: '/#!' },
  { id: 3, name: 'Contact', link: '/#!' },
  { id: 4, name: 'Hamster Combat', link: '/hamster' },
];

export default function Modal() {
  return (
    <motion.nav
      variants={navVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
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
            <Link href={text.link}>{text.name}</Link>
          </motion.li>
        ))}
      </motion.ul>
    </motion.nav>
  );
}
