import React from 'react';
import SkillCategory from './SkillCategory';

const skillsData = {
  'Programming Languages': [
    { name: 'JavaScript', level: 95 },
    { name: 'Python', level: 95 },
    { name: 'Solidity', level: 90 },
    { name: 'move', level: 90 },
    { name: 'C++', level: 75 },
    { name: 'C', level: 80 },
    { name: 'Java', level: 85 },
    { name: 'PHP', level: 75 },
    { name: 'Rust', level: 65 }
  ],
  'Blockchain Development': [
    { name: 'Smart Contracts', level: 92 },
    { name: 'Web3.js', level: 90 },
    { name: 'Ethereum', level: 95 },
    { name: 'DApp Development', level: 98 }
  ],
  'Frameworks & Tools': [
    { name: 'React.js', level: 92 },
    { name: 'Mongo DB', level: 98 },
    { name: 'Express js', level: 95 },
    { name: 'Node.js', level: 88 },
    { name: 'Hardhat', level: 85 },
    { name: 'Truffle', level: 82 },
    { name: 'Remix ', level: 90 },
    { name: 'VsCode', level: 90 }
  ]
};

export default function Skills() {
  return (
    <section id="skills" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-12">
          Skills
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {Object.entries(skillsData).map(([category, skills]) => (
            <SkillCategory key={category} title={category} skills={skills} />
          ))}
        </div>
      </div>
    </section>
  );
}
