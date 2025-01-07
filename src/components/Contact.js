import React from 'react';
import { Mail, Phone, Github, Linkedin } from 'lucide-react';

const contactInfo = {
  email: 'techie.jr21@gmail.com',
  phone: '+91 7604913189',
  github: "https://github.com/Janakiraman1021",
  linkedin: 'https://www.linkedin.com/in/janakiraman-k-28a45a257/'
};

export default function Contact() {
  return (
    <section id="contact" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-12">
          Get in Touch
        </h2>
        <div className="max-w-3xl mx-auto bg-white dark:bg-gray-900 rounded-lg shadow-lg overflow-hidden">
          <div className="p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <a
                href={`mailto:${contactInfo.email}`}
                className="flex items-center gap-4 p-4 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors group"
              >
                <div className="w-12 h-12 rounded-full bg-gradient-to-r from-primary-light to-secondary-light dark:from-primary-dark dark:to-secondary-dark p-3 group-hover:scale-110 transition-transform">
                  <Mail className="w-full h-full text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Email</h3>
                  <p className="text-gray-600 dark:text-gray-300">{contactInfo.email}</p>
                </div>
              </a>

              <a
                href={`tel:${contactInfo.phone}`}
                className="flex items-center gap-4 p-4 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors group"
              >
                <div className="w-12 h-12 rounded-full bg-gradient-to-r from-primary-light to-secondary-light dark:from-primary-dark dark:to-secondary-dark p-3 group-hover:scale-110 transition-transform">
                  <Phone className="w-full h-full text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Phone</h3>
                  <p className="text-gray-600 dark:text-gray-300">{contactInfo.phone}</p>
                </div>
              </a>

              <a
                href={contactInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors group"
              >
                <div className="w-12 h-12 rounded-full bg-gradient-to-r from-primary-light to-secondary-light dark:from-primary-dark dark:to-secondary-dark p-3 group-hover:scale-110 transition-transform">
                  <Github className="w-full h-full text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white">GitHub</h3>
                  <p className="text-gray-600 dark:text-gray-300">View Profile</p>
                </div>
              </a>

              <a
                href={contactInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors group"
              >
                <div className="w-12 h-12 rounded-full bg-gradient-to-r from-primary-light to-secondary-light dark:from-primary-dark dark:to-secondary-dark p-3 group-hover:scale-110 transition-transform">
                  <Linkedin className="w-full h-full text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white">LinkedIn</h3>
                  <p className="text-gray-600 dark:text-gray-300">Connect with Me</p>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}