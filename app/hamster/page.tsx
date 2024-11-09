'use client';
import Link from 'next/link';
import Image from 'next/image';
import TeacherPhoto from '../../public/images/teach.png';
import Coin from '../../public/coin.svg';
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export default function Teacher() {
  const [count, setCount] = useState(() => {
    if (typeof window !== 'undefined') {
      const storedCount = localStorage.getItem('coin');
      return storedCount ? JSON.parse(storedCount) : 0;
    }
  });
  const [loading, setLoading] = useState(true);

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

  const increment = () => {
    setCount(count + 1);
  };

  useEffect(() => {
    localStorage.setItem('coin', JSON.stringify(count));
  }, [count]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <motion.div variants={container}>
      {loading ? (
        <div className="flex justify-center items-center min-h-screen bg-gradient-to-l transition-all duration-300 from-[#3c5571]  to-[#3c5571] ">
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ repeat: Infinity, duration: 1 }}
            className="w-16 h-16 border-4 border-[#38495c] border-t-transparent border-solid rounded-full"
          />
        </div>
      ) : (
        <main className="min-h-screen backdrop-sepia  transition-all duration-300 bg-gradient-to-r from-indigo-900 via-pink-900 to-purple-900 gap-5 flex flex-col items-start justify-center bg-opacity-50">
          <div className="px-6 rounded-xl w-full">
            <div className="grid grid-cols-3 gap-2">
              <div className=" bg-zinc-700 rounded-[8px] p-2">
                <div className="text-[12px] text-center text-orange-500 font-semibold">
                  Прибыль за тап
                </div>
                <div className="flex items-center justify-center gap-2 ">
                  <span className="text-2xl">
                    <Image
                      src={Coin}
                      alt="English Teacher"
                      layout="intrinsic"
                      width={20}
                      height={20}
                      className="rounded-full mx-auto  shadow-md"
                    />
                  </span>
                  <span className="text-sm font-bold">+12</span>
                </div>
              </div>
              <div className=" bg-zinc-700 rounded-[8px] p-2">
                <div className="text-[12px] text-center text-indigo-400 font-semibold">
                  Монет для холд
                </div>
                <div className="flex items-center justify-center gap-2 ">
                  <span className="text-sm font-semibold">50M</span>
                </div>
              </div>
              <div className=" bg-zinc-700 rounded-[8px] p-2">
                <div className="text-[12px] text-center text-green-500 font-semibold">
                  Прибыль в час
                </div>
                <div className="flex items-center justify-center gap-2 ">
                  <span className="text-2xl">
                    <Image
                      src={Coin}
                      alt="English Teacher"
                      layout="intrinsic"
                      width={20}
                      height={20}
                      className="rounded-full mx-auto  shadow-md"
                    />
                  </span>
                  <span className="text-sm font-semibold">+610,06K</span>
                </div>
              </div>
            </div>
            <motion.div
              initial={{ x: '-50%' }}
              animate={{ x: 0 }}
              transition={{ type: 'spring', stiffness: 100 }}
              className="my-7"
            >
              <div className="flex items-center justify-center gap-2">
                <span className="text-2xl">
                  <Image
                    src={Coin}
                    alt="English Teacher"
                    layout="intrinsic"
                    width={50}
                    height={50}
                    className="rounded-full mx-auto  shadow-md"
                  />
                </span>
                <span className="text-4xl font-bold">{count}</span>
              </div>
            </motion.div>
            <div>
              <motion.div
                initial={{ scale: 0 }}
                animate={{
                  rotate: 360,
                  scale: 1,
                }}
                transition={{
                  type: 'spring',
                  stiffness: 260,
                  damping: 20,
                  duration: 0.8,
                }}
                onClick={increment}
                whileHover={{ scale: 1, transition: { duration: 0.2 } }}
                whileTap={{ scale: 0.7, transition: { duration: 1 } }}
                className="flex justify-center min-w-[300px] min-h-[150px] rounded-full mx-auto  bg-gradient-to-r from-[#467825]  to-[#146acc] shadow-md"
              >
                <Image
                  src={TeacherPhoto}
                  width={300}
                  height={150}
                  alt="English Teacher"
                  className="rounded-full w-full h-full"
                />
              </motion.div>
            </div>
          </div>

          <motion.button
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 2.3, duration: 0.8 }}
            whileHover={{ scale: 1.1, transition: { duration: 0.3 } }}
            whileTap={{ scale: 0.9, transition: { duration: 0.3 } }}
            className="bg-gradient-to-r from-[#467825]  to-[#146acc] text-white px-4 py-1 rounded-2xl mx-auto my-4 w-52 hover:shadow-md hover:opacity-90"
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
