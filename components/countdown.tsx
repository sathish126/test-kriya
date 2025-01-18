import React, { useState, useEffect } from 'react';

const CountdownTimer = () => {
  const calculateTimeLeft = () => {
    const targetDate = new Date('2025-03-14T00:00:00');
    const now = new Date();
    const difference = targetDate - now;

    if (difference <= 0) {
      return {
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0
      };
    }

    return {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / 1000 * 60) % 60),
      seconds: Math.floor((difference / 1000) % 60)
    };
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="text-white p-10 flex items-center justify-center w-full">
      <div className="w-full max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-2 gap-2 sm:gap-4 md:gap-6 lg:gap-8 text-center">
          {/* Days */}
          <div>
            <div className="text-6xl sm:text-8xl md:text-8xl lg:text-[200px] font-bold text-gray-400 leading-none">
              {timeLeft.days}
            </div>
            <div className="text-base sm:text-lg md:text-lg lg:text-xl font-medium lg:ml-36 md:ml-24 sm:ml-16 ml-8">
              DAYS
            </div>
          </div>
          
          {/* Hours */}
          <div>
            <div className="text-6xl sm:text-8xl md:text-8xl lg:text-[200px] font-bold text-gray-400 leading-none">
              {timeLeft.hours.toString().padStart(2, '0')}
            </div>
            <div className="text-base sm:text-lg md:text-lg lg:text-xl font-medium lg:ml-36 md:ml-24 sm:ml-16 ml-8">
              HOURS
            </div>
          </div>
          
          {/* Minutes */}
          <div>
            <div className="text-6xl sm:text-8xl md:text-8xl lg:text-[200px] font-bold text-gray-400 leading-none">
              {timeLeft.minutes.toString().padStart(2, '0')}
            </div>
            <div className="text-base sm:text-lg md:text-lg lg:text-xl font-medium lg:ml-36 md:ml-24 sm:ml-16 ml-8">
              MINUTES
            </div>
          </div>
          
          {/* Seconds */}
          <div>
            <div className="text-6xl sm:text-8xl md:text-8xl lg:text-[200px] font-bold text-gray-400 leading-none">
              {timeLeft.seconds.toString().padStart(2, '0')}
            </div>
            <div className="text-base sm:text-lg md:text-lg lg:text-xl font-medium lg:ml-36 md:ml-24 sm:ml-16 ml-8">
              SECONDS
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CountdownTimer;