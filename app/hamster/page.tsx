'use client';
import Link from 'next/link';
import Image from 'next/image';
import TeacherPhoto from '../../public/images/teach.png';
import Coin from '../../public/coin.svg';
import energyIcon from '../../public/energyicon.svg';
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export default function Teacher() {
  const [count, setCount] = useState(() => {
    if (typeof window !== 'undefined') {
      const storedCount = localStorage.getItem('coin');
      return storedCount ? JSON.parse(storedCount) : 0;
    }
  });
  const [energy, setEnergy] = useState(1500);
  const [loading, setLoading] = useState(true);
  const [premiumCheckbox, setPremiumCheckbox] = useState(false);

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
    setCount(premiumCheckbox ? count + 7 : count + 1);
    setEnergy(premiumCheckbox ? energy - 2 : energy - 1);
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

  useEffect(() => {
    const energyTimeout = setTimeout(() => {
      if (energy > count * 2) {
        setEnergy((prevEnergy) => prevEnergy - 1);
      }
    }, 500);

    return () => clearTimeout(energyTimeout);
  }, [count, energy]);

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
            <div className="grid grid-cols-3 gap-2 mt-3">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8, duration: 0.8 }}
                className=" bg-zinc-700 rounded-[8px] p-2"
              >
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
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8, duration: 0.8 }}
                className=" bg-zinc-700 rounded-[8px] p-2"
              >
                <div className="text-[12px] text-center text-indigo-400 font-semibold">
                  Монет для холд
                </div>
                <div className="flex items-center justify-center gap-2 ">
                  <span className="text-sm font-semibold">50M</span>
                </div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8, duration: 0.8 }}
                className=" bg-zinc-700 rounded-[8px] p-2"
              >
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
              </motion.div>
            </div>
            <div className="flex justify-end w-full my-2">
              <motion.label
                htmlFor="checkboxPremium"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.3, duration: 0.8 }}
                whileHover={{ scale: 1.1, transition: { duration: 0.3 } }}
                whileTap={{ scale: 0.9, transition: { duration: 0.3 } }}
                className="flex items-center gap-1 justify-center font-semibold text-sm rounded-[8px] p-2 bg-gradient-to-r from-orange-500 via-pink-500 to-purple-500"
              >
                {premiumCheckbox ? 'Выкл' : 'Вкл'} премиум
                <input
                  type="checkbox"
                  id="checkboxPremium"
                  checked={premiumCheckbox}
                  onChange={() => setPremiumCheckbox(!premiumCheckbox)}
                  className="hidden"
                />
              </motion.label>
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

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.3, duration: 0.8 }}
              className="flex items-center justify-start mt-2"
            >
              <span className="text-xl">
                <Image
                  src={energyIcon}
                  alt="English Teacher"
                  layout="intrinsic"
                  width={30}
                  height={30}
                  className="rounded-full mx-auto"
                />
              </span>
              <span className="text-xl font-bold">{energy} / 1500</span>
            </motion.div>
          </div>

          <motion.button
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.3, duration: 0.8 }}
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
