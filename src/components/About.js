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
            I am a dedicated and passionate Full Stack Blockchain Developer with a diverse skill set that spans across various facets of technology, including decentralized application (DApp) development, smart contract engineering, and Web3 integrations. My expertise is not limited to the technical domain alone; I also embrace a broad range of roles such as a learner, explorer, dreamer, achiever, and innovator. With a deep commitment to both personal and professional growth, I continuously seek to expand my horizons in the ever-evolving world of technology.
          </p>
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
            As an author, speaker, poet, blogger, and open-source contributor, I aim to inspire others by sharing my knowledge and experiences in the field of blockchain and beyond. I am deeply invested in mentoring the next generation of developers, educators, and researchers while also contributing to innovative projects that push the boundaries of what’s possible. Whether leading initiatives, volunteering for impactful causes, or freelancing on exciting projects, I am driven by a strong desire to make a meaningful difference in the world of technology and the communities I serve.
          </p>
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
            As a Web3 enthusiast and a tech enthusiast at heart, my goal is to create applications that are not only secure, scalable, and efficient but also user-centric and transformative. I specialize in building decentralized ecosystems and empowering individuals and organizations with the full potential of blockchain technology. In every project, I strive to lead with creativity, integrity, and innovation to deliver the best possible outcomes.
          </p>
          <div className="text-center">
            <a
              href="/assets/resume-JR.pdf"
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