import React from 'react';
import { Github, Linkedin, Mail, Phone } from 'lucide-react';

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-800 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Contact Section */}
          <div className="space-y-4">
            <h3 className="text-2xl font-semibold text-amber-400 mb-4">Contact Me</h3>
            <div className="space-y-3">
              <a
                href="mailto:techie.jr21@gmail.com"
                className="flex items-center gap-2 hover:text-amber-400 transition-colors duration-200"
              >
                <Mail size={20} />
                <span>techie.jr21@gmail.com</span>
              </a>
              <div className="flex items-center gap-2">
                <Phone size={20} />
                <span>+91 760 491 3189</span>
              </div>
            </div>
          </div>

          {/* Social Links */}
          <div className="space-y-4">
            <h3 className="text-2xl font-semibold text-amber-400 mb-4">Connect</h3>
            <div className="flex gap-4">
              <a
                href="https://github.com/Janakiraman1021"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-amber-400 transition-colors duration-200"
              >
                <Github size={24} />
              </a>
              <a
                href="https://www.linkedin.com/in/janakiraman-k-28a45a257/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-amber-400 transition-colors duration-200"
              >
                <Linkedin size={24} />
              </a>
            </div>
          </div>

          {/* Additional Info */}
          <div className="space-y-4">
            <h3 className="text-2xl font-semibold text-amber-400 mb-4">About</h3>
            <p className="text-sm leading-relaxed">
              Building digital experiences with passion and precision. Let's create something amazing together.
            </p>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 pt-8 border-t border-gray-700">
          <p className="text-center text-sm">
            © {currentYear} Janakiraman. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
