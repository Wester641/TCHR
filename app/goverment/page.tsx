// import NavButton from '@/component/button/nav-button'; TODO
'use client';
import Image from 'next/image';
import TeacherPhotoSmall from '../../public/images/teach2.png';
import Link from 'next/link';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';
import AnimatedNav from '@/component/toolbar/AnimatedNav';

export default function About() {
  const [isOpen, setIsOpen] = useState(false);
  // const [modalIsOpen, setModalIsOpen] = useState(false);
  const router = useRouter();

  const handleGoBack = () => {
    router.back();
  };

  return (
    <section className="min-h-[100vh] font-[family-name:var(--font-roboto-slab)]">
      <div className="relative my-auto min-h-[33vh]  bg-gradient-to-l from-[#435468] to-[#51647a]  flex flex-col justify-center">
        <div className="text-center flex flex-col items-center justify-center gap-3 box-border">
          <div className="min-h-[4vh] w-full mb-2 flex justify-between px-3">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={handleGoBack}
              className="flex flex-col justify-between py-2 bg-gradient-to-l from-gray-200 to-slate-200 items-center min-h-6 rounded-full px-2 min-w-[40px] shadow-lg hover:shadow-lg hover:opacity-90"
            >
              <Image
                src="/jasmine.svg"
                alt="Vercel logomark"
                width={20}
                height={20}
                className="relative"
              />
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="flex z-50 flex-col justify-around relative py-2 bg-[#f9f3e7] items-center min-h-6 rounded-full px-2 min-w-[40px] shadow-lg hover:shadow-lg hover:opacity-90"
              onClick={() => setIsOpen(!isOpen)}
            >
              <span
                className={`h-[4px] w-full bg-[#435468] transition-transform ${
                  isOpen ? 'rotate-45 translate-y-3' : ''
                }`}
              ></span>
              <span
                className={`h-[4px] w-full bg-[#435468] transition-transform ${
                  isOpen ? '-rotate-45 -translate-y-3' : ''
                }`}
              ></span>
              {isOpen && (
                <div className="absolute right-[2.2rem] top-[2.2rem]  min-w-[10rem] shadow-lg  rounded-md min-h-[13rem] bg-[#435468] border-2 border-[#dcdcdc]">
                  <AnimatedNav href={'#!'} />
                </div>
              )}
            </motion.button>
          </div>
          <motion.p
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 0.3 }}
            className="flex flex-row items-center justify-center gap-4 relative"
          >
            <Image
              src="/jasmine-_1_.svg"
              alt="Vercel logomark"
              width={30}
              height={30}
              className="relative bottom-2"
            />
            <span className="text-3xl">Welcome me</span>
            <Image
              src="/jasmine-_1_.svg"
              alt="Vercel logomark"
              width={30}
              height={30}
              className="relative bottom-2"
            />
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5, duration: 0.5 }}
            className="text-6xl"
          >
            English Me
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.7, duration: 0.7 }}
            className="text-2xl"
          >
            English teacher
          </motion.p>
        </div>
      </div>
      <div className="min-h-[7vh] text-[1.7rem] bg-[#2a3849] shadow-lg flex flex-col justify-center items-center">
        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.7 }}
        >
          Beginner English Lesson
        </motion.span>
      </div>
      <div className="flex flex-col justify-between box-border min-h-[60vh]  bg-gradient-to-l from-gray-200 to-slate-200  text-black">
        <div className="pt-6 pl-6 pr-3">
          <motion.h2
            initial={{ opacity: 0, y: -60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.7 }}
            className="text-3xl text-start"
          >
            Beginner English
          </motion.h2>
          <motion.ul
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.7 }}
            className="text-start list-decimal"
          >
            {/* <ol>Lorem ipsum dolor sit amet.</ol> */}
            <ol>
              Tailwind CSS is the only framework that Ive seen scale on large
              teams
            </ol>
          </motion.ul>
        </div>
        <div className="flex flex-row justify-around items-center px-3">
          <div className="flex-1">
            <motion.div
              initial={{ opacity: 0, y: -40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="flex flex-row gap-2"
            >
              <Image
                src="/jasmine.svg"
                alt="Vercel logomark"
                width={30}
                height={30}
                className="relative bottom-2"
              />
              <div className="flex flex-col">
                <span className="font-bold text-2xl">Staff Engineer</span>
                <span>a few thousand words.</span>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: -40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.5 }}
              className="flex flex-row gap-2"
            >
              <Image
                src="/jasmine.svg"
                alt="Vercel logomark"
                width={30}
                height={30}
                className="relative bottom-2"
              />
              <div className="flex flex-col">
                <span className="font-bold text-2xl">Control</span>
                <span>Collingwood, Ontario</span>
              </div>
            </motion.div>
          </div>
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="h-32 w-32 rounded-full border border-1 border-[#38495c] bg-[#38495c] shadow-md overflow-hidden object-contain"
          >
            <Image
              src={TeacherPhotoSmall}
              alt="English Teacher"
              layout="intrinsic"
            />
          </motion.div>
        </div>
        <div className="flex flex-row justify-around items-center px-[15px] gap-5">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.6, duration: 0.7 }}
            className="h-24 w-24 rounded-full border border-1 border-[#38495c] bg-[#38495c] shadow-md overflow-hidden object-contain"
          >
            <Image
              src={TeacherPhotoSmall}
              alt="English Teacher"
              layout="intrinsic"
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="flex flex-col w-[60%] grow"
          >
            <span className="font-bold text-2xl">Sarah Dayan</span>
            <span>
              It’s easy to customize, adapts to any design, and the build size
              is tiny.
            </span>
          </motion.div>
        </div>
        <div className="flex flex-row justify-center items-center">
          <motion.button
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.9, duration: 0.8 }}
            whileHover={{ scale: 1.1, transition: { duration: 0.3 } }}
            whileTap={{ scale: 0.9, transition: { duration: 0.3 } }}
            className="bg-[#f9f3e7] text-[#435468] px-4 rounded-2xl mx-auto my-3 min-w-10 shadow-lg hover:shadow-lg hover:opacity-90"
          >
            <Link href="/dashboard" className="text-[1.6rem] font-semibold">
              Back
            </Link>
          </motion.button>
          <motion.button
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1, duration: 0.7 }}
            whileHover={{ scale: 1.1, transition: { duration: 0.2 } }}
            whileTap={{ scale: 0.9, transition: { duration: 0.2 } }}
            className="bg-[#435468] text-white px-4 rounded-2xl mx-auto my-3 w-48 shadow-lg hover:shadow-md hover:opacity-90"
          >
            <Link href="/practice" className="text-[1.4rem] font-semibold">
              Best practices
            </Link>
          </motion.button>
          <motion.button
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1, duration: 0.8 }}
            whileHover={{ scale: 1.1, transition: { duration: 0.2 } }}
            whileTap={{ scale: 0.9, transition: { duration: 0.2 } }}
            className="bg-[#f9f3e7] box-border text-[#435468] px-4 rounded-2xl mx-auto my-3 min-w-10 shadow-lg hover:shadow-lg hover:opacity-90"
          >
            <Link href="/goverment" className="text-[1.6rem] font-semibold">
              <Image
                src="/jasmine.svg"
                alt="Vercel logomark"
                width={25}
                height={25}
                className="relative bottom-1"
              />
            </Link>
          </motion.button>
        </div>
      </div>
    </section>
  );
}
