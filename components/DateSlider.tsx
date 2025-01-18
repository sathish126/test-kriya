'use client';

import React, { useState, useEffect } from 'react';

const DateSlider = () => {
  const dates = [
    { date: 12, day: 'WED' },
    { date: 13, day: 'THU' },
    { date: 14, day: 'FRI' },
    { date: 15, day: 'SAT' },
    { date: 16, day: 'SUN' },
    { date: 17, day: 'MON' },
    { date: 18, day: 'TUE' },
    { date: 19, day: 'WED' },
    { date: 20, day: 'THU' },
  ];

  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setIsVisible(true);
    }, 500);
  }, []);

  const highlightedDates = dates.filter(item => [14, 15, 16].includes(item.date));

  return (
    <div className="text-white top-0 overflow-hidden w-full">
      {/* Mobile View - Only Highlighted Dates */}
      <div className="md:hidden">
        <div
          className={`grid grid-cols-3 w-full transform transition-transform ease-in-out duration-[2000ms] ${
            isVisible ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          {highlightedDates.map((item) => (
            <div
              key={`${item.date}-${item.day}`}
              className="flex items-center justify-center p-1"
            >
              <div className="flex flex-col items-center justify-center">
                <div className="relative">
                  <span className="text-6xl sm:text-7xl bg-gradient-to-r from-pink-400 to-purple-500 text-transparent bg-clip-text font-bold">
                    {item.date}
                  </span>
                  <span className="absolute -top-0 -right-4 sm:-right-5 text-base sm:text-lg bg-gradient-to-r from-pink-400 to-purple-500 text-transparent bg-clip-text font-bold">
                    {item.day}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Desktop View - All Dates */}
      <div className="hidden md:block">
        <div
          className={`grid grid-cols-9 w-full transform transition-transform ease-in-out duration-[2000ms] ${
            isVisible ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          {dates.map((item) => (
            <div
              key={`${item.date}-${item.day}`}
              className="flex items-center justify-center p-1"
            >
              <div className="flex flex-col items-center justify-center">
                <div className="relative">
                  <span
                    className={`${
                      [14, 15, 16].includes(item.date)
                        ? 'text-8xl bg-gradient-to-r from-pink-400 to-purple-500 text-transparent bg-clip-text'
                        : 'text-6xl text-gray-400 hover:text-white'
                    } font-bold`}
                  >
                    {item.date}
                  </span>
                  <span
                    className={`absolute -top-0 -right-7 ${
                      [14, 15, 16].includes(item.date)
                        ? 'text-xl bg-gradient-to-r from-pink-400 to-purple-500 text-transparent bg-clip-text'
                        : 'text-sm text-gray-400 hover:text-white'
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
    </div>
  );
};

export default DateSlider;