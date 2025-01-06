import React from 'react';
import { FileDown } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-12">
          About Me
        </h2>
        <div className="max-w-3xl mx-auto">
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
            As a Full Stack Blockchain Developer, I specialize in building decentralized applications
            and implementing Web3 integrations. My passion lies in creating innovative solutions that
            bridge the gap between traditional web applications and blockchain technology.
          </p>
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
            With expertise in smart contract development, DApp architecture, and modern web frameworks,
            I strive to deliver secure, scalable, and user-centric applications that leverage the power
            of blockchain technology.
          </p>
          <div className="text-center">
            <a
              href="https://docs.google.com/document/d/1sYTG9l5H1V9MJJ7ccLP0l-ZMokXRTIetOm1Qd59jZeM/edit?usp=sharing"
              download
              className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
            >
              <FileDown className="w-5 h-5 mr-2" />
              Download CV
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
