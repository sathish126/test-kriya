'use client'; // Marking the file as a Client Component

import React from 'react';

const Home = () => {
  const eventDetails = {
    title: 'Kriya 2024 - Technical Symposium',
    startTime: '2025-03-06T09:00:00',
    endTime: '2025-03-08T17:00:00',
    location: 'PSG College of Technology, Coimbatore',
    description: 'Join us at the forefront of technological advancements and gain valuable insights at our upcoming technical symposium Kriya 2024.',
  };

  const handleAddToCalendar = () => {
    const eventUrl = `https://www.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(
      eventDetails.title
    )}&dates=${eventDetails.startTime.replace(/[-:]/g, '')}/${eventDetails.endTime.replace(
      /[-:]/g,
      ''
    )}&location=${encodeURIComponent(eventDetails.location)}&details=${encodeURIComponent(eventDetails.description)}`;

    window.open(eventUrl, '_blank');
  };

  return (
    <div className="p-14">
      {/* Title with gradient effect on "Calendar" */}
      <h1 className="text-5xl font-bold mb-1">
        Mark Your <span className="bg-gradient-to-r from-pink-400 to-purple-500 text-transparent bg-clip-text">Calendar!</span>
      </h1>
      
      <p className="mb-8">{eventDetails.description}</p>
      
      <div className="flex items-center space-x-4">
        <button
          onClick={handleAddToCalendar}
          className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white py-3 px-8 rounded-full font-semibold text-lg shadow-lg transform hover:scale-105 hover:shadow-xl hover:rotate-3 transition-all duration-300 ease-in-out"
        >
          Add to Calendar
        </button>
      </div>
    </div>
  );
};

export default Home;
