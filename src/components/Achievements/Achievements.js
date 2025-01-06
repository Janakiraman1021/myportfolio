import React from 'react';
import AchievementCard from './AchievementCard';

const achievementsData = [
  {
    title: 'Global Visionary Award',
    organization: 'International Tech Summit',
    date: 'December 2023',
    description: 'Recognized for innovative contributions in blockchain technology and decentralized applications.'
  },
  {
    title: 'Best Paper Award',
    organization: 'IEEE Conference',
    date: 'October 2023',
    description: 'Research paper on "Blockchain-based Solutions for Healthcare" received the best paper award.'
  },
  {
    title: 'Hackathon Winner',
    organization: 'ETHGlobal',
    date: 'August 2023',
    description: 'First place for developing a decentralized blood donation management system.'
  },
  {
    title: 'Innovation Excellence',
    organization: 'College Tech Fest',
    date: 'March 2023',
    description: 'Awarded for outstanding project on blockchain-based KYC verification system.'
  }
];

export default function Achievements() {
  return (
    <section id="achievements" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-12">
          Achievements
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {achievementsData.map((achievement) => (
            <AchievementCard 
              key={achievement.title} 
              {...achievement} 
            />
          ))}
        </div>
      </div>
    </section>
  );
}
