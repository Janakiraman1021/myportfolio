import React from 'react';
import ProjectCard from './ProjectCard';

const projectsData = [
  {
    title: 'Virtual Controllers',
    description: 'A decentralized platform for managing virtual game controllers with blockchain integration.',
    technologies: ['React', 'Solidity', 'Web3.js', 'Node.js'],
    githubUrl: 'https://github.com/username/virtual-controllers',
    liveUrl: 'https://virtual-controllers.demo',
    image: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=800&q=80'
  },
  {
    title: 'KYC 3.0',
    description: 'Blockchain-based KYC verification system for secure identity management.',
    technologies: ['Ethereum', 'React', 'Node.js', 'IPFS'],
    githubUrl: 'https://github.com/username/kyc-3.0',
    image: 'https://images.unsplash.com/photo-1639762681485-074b7f938ba0?auto=format&fit=crop&w=800&q=80'
  },
  {
    title: 'Blood Bridge',
    description: 'Decentralized blood donation management system using blockchain.',
    technologies: ['Solidity', 'React', 'Hardhat', 'TypeScript'],
    githubUrl: 'https://github.com/username/blood-bridge',
    liveUrl: 'https://blood-bridge.demo',
    image: 'https://images.unsplash.com/photo-1615461066841-6116e61058f4?auto=format&fit=crop&w=800&q=80'
  }
];

export default function Projects() {
  return (
    <section id="projects" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-12">
          Projects
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectsData.map((project) => (
            <ProjectCard key={project.title} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
}
