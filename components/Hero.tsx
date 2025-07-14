import React, { useState, useEffect } from 'react';
import { ANNOUNCEMENTS } from '../constants';

const Hero: React.FC = () => {
  const [announcementIndex, setAnnouncementIndex] = useState(0);
  const [isFading, setIsFading] = useState(false);

  useEffect(() => {
    if (ANNOUNCEMENTS.length <= 1) return;

    const interval = setInterval(() => {
      setIsFading(true);
      setTimeout(() => {
        setAnnouncementIndex((prevIndex) => (prevIndex + 1) % ANNOUNCEMENTS.length);
        setIsFading(false);
      }, 500); // Fade-out duration
    }, 5000); // Time per announcement

    return () => clearInterval(interval);
  }, []);

  if (!ANNOUNCEMENTS || ANNOUNCEMENTS.length === 0) {
      return null;
  }

  return (
    <section className="bg-black/20 py-3 px-4 sm:px-6 lg:px-8 border-b-2 border-blood-red/50">
        <div className="container mx-auto text-center h-6 flex items-center justify-center overflow-hidden">
            <p className={`text-soft-silver transition-opacity duration-500 ${isFading ? 'opacity-0' : 'opacity-100'}`}>
                {ANNOUNCEMENTS[announcementIndex]}
            </p>
        </div>
    </section>
  );
};

export default Hero;