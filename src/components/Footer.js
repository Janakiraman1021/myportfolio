import React from 'react';
import { Heart, Mail, Phone, Github, Linkedin, ExternalLink } from 'lucide-react';

const currentYear = new Date().getFullYear();

const socialLinks = {
  email: 'techie.jr21@gmail.com',
  phone: '+91 7604913189',
  github: 'https://github.com/yourusername',
  linkedin: 'https://linkedin.com/in/yourusername'
};

const quickLinks = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Education', href: '#education' },
  { name: 'Skills', href: '#skills' },
  { name: 'Projects', href: '#projects' },
  { name: 'Internships', href: '#internships' },
  { name: 'Certifications', href: '#certifications' },
  { name: 'Achievements', href: '#achievements' },
  { name: 'Books', href: '#books' },
  { name: 'Hobbies', href: '#hobbies' },
  { name: 'Contact', href: '#contact' }
];

export default function Footer() {
  return (
    <footer className="bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* About Section */}
          <div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
              About Me
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              Full Stack Blockchain Developer passionate about creating innovative solutions
              and writing technical content.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
              Quick Links
            </h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 flex items-center gap-1"
                  >
                    <ExternalLink className="w-4 h-4" />
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
              Contact
            </h3>
            <div className="space-y-2">
              <a
                href={`mailto:${socialLinks.email}`}
                className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 flex items-center gap-2"
              >
                <Mail className="w-4 h-4" />
                {socialLinks.email}
              </a>
              <a
                href={`tel:${socialLinks.phone}`}
                className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 flex items-center gap-2"
              >
                <Phone className="w-4 h-4" />
                {socialLinks.phone}
              </a>
              <div className="flex gap-4 mt-4">
                <a
                  href={socialLinks.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
                >
                  <Github className="w-5 h-5" />
                </a>
                <a
                  href={socialLinks.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-200 dark:border-gray-700 pt-8">
          <p className="text-center text-gray-600 dark:text-gray-300 flex items-center justify-center gap-1">
            Made with <Heart className="w-4 h-4 text-red-500 animate-pulse" /> by Janakiraman © {currentYear}
          </p>
        </div>
      </div>
    </footer>
  );
}