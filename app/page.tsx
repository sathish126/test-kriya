'use client';

import DateSlider from '@/components/DateSlider';
import Countdown from '@/components/countdown';
import Main from '@/components/Main';
import { motion } from 'framer-motion';

export default function Home() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100
      }
    }
  };

  return (
    <motion.main 
      className="h-screen flex flex-col bg-black p-1 overflow-hidden"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <motion.div 
        className="mb-0"
        variants={itemVariants}
      >
        <DateSlider />
      </motion.div>

      <motion.div 
        className="flex flex-1 flex-row justify-between"
        variants={itemVariants}
      >
        <motion.div 
          className="flex-1 flex justify-center items-center"
          variants={itemVariants}
        >
          <Main />
        </motion.div>
        <motion.div 
          className="flex-1 flex justify-center items-center"
          variants={itemVariants}
        >
          <Countdown />
        </motion.div>
      </motion.div>
    </motion.main>
  );
}