import React from 'react';
import CertificationCard from './CertificationCard';

const certificationsData = [
  {
    title: 'Fullstack Web Development',
    issuer: 'NIIT Sudharsanam IT Academy',
    date: 'January 2023'
  },
  {
    title: 'Advanced Python Programming',
    issuer: 'CSC',
    date: 'March 2023'
  },
  {
    title: 'Programming in C++',
    issuer: 'CSC',
    date: 'June 2023'
  },
  {
    title: 'Author of the Book : என் இதயத்தின் ஓசை',
    issuer: 'JEC Publication',
    date: 'June 2024'
  },
  {
    title: 'Co-Author of the Book : மழலையும் நானும்',
    issuer: 'Yappu Publication',
    date: 'June 2024'
  },
  {
    title: 'Co-Author of the Book : விரும்பிய வரிகள்',
    issuer: 'Yappu Publication',
    date: 'June 2024'
  },
  {
    title: 'Co-Author of the Book : வினோத உலகம்',
    issuer: 'Yappu Publication',
    date: 'June 2024'
  },
  {
    title: 'Co-Author of the Book : எனது அபிமானி',
    issuer: 'JEC Publication',
    date: 'June 2024'
  },
  {
    title: 'Co-Author of the Book : என் அழகிய தேவதை',
    issuer: 'JEC  Publication',
    date: 'June 2024'
  },
  {
    title: 'Co-Author of the Book : முகமரிய காதல்',
    issuer: 'Yappu Publication',
    date: 'June 2024'
  }
];

export default function Certifications() {
  return (
    <section id="certifications" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-12">
          Certifications
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certificationsData.map((cert) => (
            <CertificationCard key={cert.title} {...cert} />
          ))}
        </div>
      </div>
    </section>
  );
}
