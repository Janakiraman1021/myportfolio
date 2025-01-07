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
    organization: 'ByteVerse,DuHacks3.0,',
    date: 'August 2023',
    description: 'First place for developing a decentralized blood donation management system.'
  },
  {
    title: 'Unfold 2024',
    organization: 'Participant of Unfold 2024',
    date: 'December 2024',
    description: 'First place for developing a decentralized blood donation management system.'
  },
  {
    title: 'Innovation Excellence',
    organization: 'College Tech Fest',
    date: 'March 2023',
    description: 'Awarded for outstanding project on blockchain-based KYC verification system.'
  },
  {
    title: 'Author of the Book: என் இதயத்தின் ஓசை',
    organization: 'JEC Publication',
    date: 'June 2024',
    description: 'Published the book titled "என் இதயத்தின் ஓசை," showcasing creative and heartfelt literary work.'
  },
  {
    title: 'Co-Author of the Book: மழலையும் நானும்',
    organization: 'Yappu Publication',
    date: 'June 2024',
    description: 'Contributed as a co-author to the book "மழலையும் நானும்," exploring inspiring themes and narratives.'
  },
  {
    title: 'Co-Author of the Book: விரும்பிய வரிகள்',
    organization: 'Yappu Publication',
    date: 'June 2024',
    description: 'Collaborated as a co-author for the book "விரும்பிய வரிகள்," presenting memorable and evocative writings.'
  },
  {
    title: 'Co-Author of the Book: வினோத உலகம்',
    organization: 'Yappu Publication',
    date: 'June 2024',
    description: 'Co-authored the book "வினோத உலகம்," bringing imaginative and thought-provoking content to readers.'
  },
  {
    title: 'Co-Author of the Book: எனது அபிமானி',
    organization: 'JEC Publication',
    date: 'June 2024',
    description: 'Participated as a co-author in the book "எனது அபிமானி," contributing unique perspectives and stories.'
  },
  {
    title: 'Co-Author of the Book: என் அழகிய தேவதை',
    organization: 'JEC Publication',
    date: 'June 2024',
    description: 'Contributed as a co-author to "என் அழகிய தேவதை," reflecting on beautiful and emotional narratives.'
  },
  {
    title: 'Co-Author of the Book: முகமரிய காதல்',
    organization: 'Yappu Publication',
    date: 'June 2024',
    description: 'Collaborated on the book "முகமரிய காதல்," offering compelling and heartfelt storytelling as a co-author.'
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
