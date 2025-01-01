'use client';

import React, { useState, useEffect } from 'react';

const DateSlider = () => {
  const dates = [
    { date: 3, day: 'MON' },
    { date: 4, day: 'TUE' },
    { date: 5, day: 'WED' },
    { date: 6, day: 'THUR' },
    { date: 7, day: 'FRI' },
    { date: 8, day: 'SAT' },
    { date: 9, day: 'SUN' },
    { date: 10, day: 'MON' },
    { date: 11, day: 'TUE' },
  ];

  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setIsVisible(true);
    }, 500); // Slight delay before the animation starts
  }, []);

  return (
    <div className="text-white top-0 overflow-hidden">
      <div
        className={`grid grid-cols-9 w-full transform transition-transform ease-in-out duration-[2000ms] ${
          isVisible ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        {dates.map((item, index) => (
          <div
            key={`${item.date}-${item.day}`}
            className="flex items-center justify-center p-1"
          >
            <div
              className={`flex flex-col items-center justify-center ${
                [6, 7, 8].includes(item.date)
                  ? 'text-pink-400 hover:text-pink-300'
                  : 'text-gray-400 hover:text-white'
              }`}
            >
              <div className="relative">
                <span
                  className={`${
                    [6, 7, 8].includes(item.date) ? 'text-8xl' : 'text-6xl'
                  } font-bold`}
                >
                  {item.date}
                </span>
                <span
                  className={`absolute -top-0 -right-7 ${
                    [6, 7, 8].includes(item.date) ? 'text-xl' : 'text-sm'
                  } font-bold`}
                >
                  {item.day}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DateSlider;
