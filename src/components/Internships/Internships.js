import React from 'react';
import InternshipCard from './InternshipCard';

const internshipsData = [
  {
    company: 'SecureDApp',
    role: 'Software Developer Intern',
    period: 'June 2023 - August 2023',
    responsibilities: [
      'Developed secure DApps using Solidity and Web3.js',
      'Implemented smart contracts for various blockchain applications',
      'Collaborated with the team on Web3 integrations'
    ]
  },
  {
    company: 'McZeal',
    role: 'ML Developer',
    period: 'March 2023 - May 2023',
    responsibilities: [
      'Designed ML models for predictive analytics',
      'Implemented automation solutions using Python',
      'Optimized existing ML pipelines for better performance'
    ]
  },
  {
    company: 'Techoctanet',
    role: 'Web Development Intern',
    period: 'December 2022 - February 2023',
    responsibilities: [
      'Built responsive web applications using modern frameworks',
      'Implemented UI/UX improvements',
      'Collaborated with the design team on new features'
    ]
  }
];

export default function Internships() {
  return (
    <section id="internships" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-12">
          Internships
        </h2>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {internshipsData.map((internship) => (
            <InternshipCard key={internship.company} {...internship} />
          ))}
        </div>
      </div>
    </section>
  );
}
