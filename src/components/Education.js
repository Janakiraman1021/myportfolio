import React from 'react';
import TimelineItem from './TimelineItem';

const educationData = [
  {
    institution: 'Jaya Engineering College',
    degree: 'Bachelor of Technology in Information Technology',
    period: '2022–2026',
    score: 'CGPA: 8.89',
  },
  {
    institution: 'Bharathidasan Matriculation Higher Secondary School',
    degree: 'HSC',
    period: '2020–2022',
    score: 'Percentage: 75.62',
  },
  {
    institution: 'Jai Maruthi Vidhayala Matriculation School',
    degree: 'SSLC',
    period: '2006–2022',
    score: 'Percentage: 63.50',
  },
];

export default function Education() {
  return (
    <section id="education" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-12">
          Education
        </h2>
        <div className="max-w-3xl mx-auto">
          {educationData.map((item, index) => (
            <TimelineItem
              key={index}
              isLast={index === educationData.length - 1}
              {...item}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
