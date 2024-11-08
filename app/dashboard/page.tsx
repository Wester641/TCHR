'use client';
import Link from 'next/link';
import Image from 'next/image';
import TeacherPhoto from '../../public/images/teach.png';
import TeacherPhotoSmall from '../../public/images/teach2.png';
import Settings from '../../public/images/slider-circle-v-svgrepo-com.svg';
import Edit from '../../public/images/edit-square-svgrepo-com.svg';
import Coin from '../../public/coin.svg';
import Earth from '../../public/images/earth-svgrepo-com.svg';
import Eye from '../../public/images/eye-slash-svgrepo-com.svg';
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import AnimatedNav from '@/component/toolbar/AnimatedNav';

export default function Teacher() {
  const [eyesIsOpen, setEyesIsOpen] = useState(false);
  const [settingsIsOpen, setSettingsIsOpen] = useState(false);
  const [count, setCount] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  const container = {
    hidden: { opacity: 1, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2,
      },
    },
  };

  const counter = () => {
    setCount(count + 1);
  };

  if (count === 100) {
    alert(
      "You've reached your daily limit. Please upgrade your plan to continue using our services.",
    );
  }

  return (
    <motion.div variants={container}>
      {loading ? (
        <div className="flex justify-center items-center min-h-screen bg-gradient-to-l transition-all duration-300 from-gray-200 to-slate-200">
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ repeat: Infinity, duration: 1 }}
            className="w-16 h-16 border-4 border-[#38495c] border-t-transparent border-solid rounded-full"
          />
        </div>
      ) : (
        <main className="min-h-screen backdrop-sepia bg-gradient-to-l hover:bg-gradient-to-r transition-all duration-300 from-gray-200 to-slate-200 gap-5 flex flex-col items-start justify-center font-[family-name:var(--font-roboto-slab)] bg-opacity-50">
          <div className="px-6 rounded-xl w-full">
            <motion.h1
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="text-[2.6rem] font-bold text-[#38495c] mb-4 text-center"
            >
              English Teacher
            </motion.h1>
            <div>
              <div className="flex justify-between">
                <motion.button
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.9, duration: 0.5 }}
                  whileHover={{ scale: 1.1, transition: { duration: 0.2 } }}
                  whileTap={{ scale: 0.9, transition: { duration: 0.2 } }}
                  className="w-10 h-10"
                  onClick={() => setEyesIsOpen(!eyesIsOpen)}
                >
                  <Image
                    src={Eye}
                    alt="English Teacher"
                    layout="intrinsic"
                    className="rounded-full border border-1 border-[#38495c] mx-auto  shadow-md"
                  />
                  {eyesIsOpen && (
                    <motion.nav className="absolute z-9999 min-w-[10rem] shadow-lg  rounded-md min-h-[13rem] bg-[#435468] border-2 border-[#dcdcdc]">
                      <AnimatedNav href={'#!'} />
                    </motion.nav>
                  )}
                </motion.button>
                <motion.button
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 1.1, duration: 0.5 }}
                  whileHover={{ scale: 1.1, transition: { duration: 0.2 } }}
                  whileTap={{ scale: 0.9, transition: { duration: 0.2 } }}
                  className="w-10 h-10"
                >
                  <Image
                    src={Edit}
                    alt="English Teacher"
                    layout="intrinsic"
                    className="rounded-full mx-auto"
                  />
                </motion.button>
              </div>
              <motion.div
                initial={{ scale: 0 }}
                animate={{ rotate: 360, scale: 1 }}
                transition={{
                  type: 'spring',
                  stiffness: 260,
                  damping: 20,
                  duration: 0.8,
                }}
                onClick={counter}
                // initial={{ opacity: 0, y: 50 }}
                // animate={{ opacity: 1, y: 0 }}
                // transition={{ delay: 0.6, duration: 0.8 }}
                whileHover={{ scale: 1.1, transition: { duration: 0.2 } }}
                whileTap={{ scale: 0.9, transition: { duration: 0.2 } }}
                className="flex justify-center min-w-[300px] min-h-[150px] rounded-full mx-auto backdrop-sepia bg-[#3c5571] shadow-md"
              >
                <Image
                  src={TeacherPhoto}
                  width={300}
                  height={150}
                  alt="English Teacher"
                  className="rounded-full w-full h-full"
                />
              </motion.div>
              <div className="flex justify-between">
                <motion.button
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.9, duration: 0.5 }}
                  whileHover={{ scale: 1.1, transition: { duration: 0.2 } }}
                  whileTap={{ scale: 0.9, transition: { duration: 0.2 } }}
                  className="w-10 h-10"
                  onClick={() => setSettingsIsOpen(!settingsIsOpen)}
                >
                  <Image
                    src={Settings}
                    alt="English Teacher"
                    layout="intrinsic"
                    className="rounded-full border border-1 border-[#38495c] mx-auto  shadow-md"
                  />
                  {settingsIsOpen && (
                    <div className="absolute  z-9999 p-2 min-w-[10rem] shadow-lg  rounded-md min-h-[5rem] bg-[#435468] border-2 border-[#dcdcdc]">
                      <motion.div
                        initial={{ x: '-100%' }}
                        animate={{ x: 0 }}
                        transition={{ type: 'spring', stiffness: 100 }}
                      >
                        <div className="flex items-center justify-center gap-2">
                          <span className="text-2xl">
                            <Image
                              src={Coin}
                              alt="English Teacher"
                              layout="intrinsic"
                              width={50}
                              height={50}
                              className="rounded-full border border-1 border-[#38495c] mx-auto  shadow-md"
                            />
                          </span>
                          <span className="text-4xl">{count}</span>
                        </div>
                      </motion.div>
                    </div>
                  )}
                </motion.button>
                <motion.button
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 1.1, duration: 0.5 }}
                  whileHover={{ scale: 1.1, transition: { duration: 0.2 } }}
                  whileTap={{ scale: 0.9, transition: { duration: 0.2 } }}
                  className="w-10 h-10"
                >
                  <Image
                    src={Earth}
                    alt="English Teacher"
                    layout="intrinsic"
                    className="rounded-full border border-1 border-[#38495c] mx-auto  shadow-md"
                  />
                </motion.button>
              </div>
            </div>
            <div className="w-full ">
              <motion.ul
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.4, duration: 0.8 }}
                className="text-gray-700 text-center"
              >
                <li className="text-4xl">Beginner Level</li>
                <li className="text-[2.6rem] ">English Teacher</li>
              </motion.ul>
            </div>
            <div className="w-full">
              <motion.ul
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.7, duration: 0.8 }}
                className="text-gray-700 text-center"
              >
                <li className="text-2xl">English Lesson</li>
                <li className="text-3xl">Beginner Lesson</li>
                <li className="text-[#38495c] text-xl ">eglish for kids</li>
              </motion.ul>
            </div>
          </div>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 2.0, duration: 0.8 }}
            className="flex mx-auto gap-5"
          >
            <div className="w-20 h-20 rounded-full border border-1 border-[#38495c] mx-auto bg-[#38495c] shadow-md overflow-hidden object-contain">
              <Image
                src={TeacherPhotoSmall}
                alt="English Teacher"
                layout="intrinsic"
              />
            </div>
            <div className="flex flex-col justify-center px-2 ">
              <span className="text-3xl text-[#38495c] border-t-2 border-[#38495c] pt-2">
                Testimonials
              </span>
              <span className=" text-[#38495c]">Beginner Lesson</span>
            </div>
          </motion.div>

          <motion.button
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 2.3, duration: 0.8 }}
            whileHover={{ scale: 1.1, transition: { duration: 0.3 } }}
            whileTap={{ scale: 0.9, transition: { duration: 0.3 } }}
            className="bg-[#38495c] text-white px-4 rounded-2xl mx-auto my-3 w-52 hover:shadow-md hover:opacity-90"
          >
            <Link href="/goverment" className="text-xl font-semibold">
              Welcome me
            </Link>
          </motion.button>
        </main>
      )}
    </motion.div>
  );
}
