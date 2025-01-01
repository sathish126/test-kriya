'use client';

import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const Countdown = () => {
  const targetDate = new Date('2025-03-06T23:59:59').getTime();

  const calculateTimeLeft = () => {
    const now = new Date().getTime();
    const difference = targetDate - now;

    if (difference <= 0) {
      return { days: 0, hours: 0, minutes: 0, seconds: 0 };
    }

    return {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / 1000 * 60) % 60),
      seconds: Math.floor((difference / 1000) % 60),
    };
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const timeUnits = [
    { label: 'Days', value: timeLeft.days },
    { label: 'Hours', value: timeLeft.hours },
    { label: 'Minutes', value: timeLeft.minutes },
    { label: 'Seconds', value: timeLeft.seconds }
  ];

  return (
    <div className="flex items-center justify-center bg-black p-9">
      <div className="flex space-x-1">
        {timeUnits.map((unit, index) => (
          <React.Fragment key={unit.label}>
            <motion.div 
              className="flex flex-col items-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <motion.span 
                key={unit.value}
                className="text-[10rem] font-bold text-white"
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ type: "spring", stiffness: 200 }}
              >
                {unit.value.toString().padStart(2, '0')}
              </motion.span>
              <motion.span 
                className="text-xl uppercase tracking-wider mt-2 text-white"
                whileHover={{ scale: 1.1 }}
              >
                {unit.label}
              </motion.span>
            </motion.div>
            {index < timeUnits.length - 1 && (
              <span className="text-[10rem] font-bold text-gray-200 self-start">:</span>
            )}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default Countdown;