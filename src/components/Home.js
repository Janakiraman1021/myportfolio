import React, { useEffect, useRef } from 'react';
import { useIntersectionObserver } from './hooks/useIntersectionObserver';

export default function Home() {
  const typewriterRef = useRef(null);
  const [sectionRef, isVisible] = useIntersectionObserver();

  useEffect(() => {
    // If you want to use the typewriter functionality with plain text update, you can use setInterval
    const textArray = ['Full Stack Blockchain Developer', 'DApp Developer', 'Web3 Enthusiast'];
    let currentIndex = 0;
    let currentText = '';
    let typing = true;

    const typeText = () => {
      if (typing) {
        currentText += textArray[currentIndex].charAt(currentText.length);
        if (typewriterRef.current) {
          typewriterRef.current.innerText = currentText;
        }

        if (currentText.length === textArray[currentIndex].length) {
          typing = false;
          setTimeout(() => {
            currentText = '';
            currentIndex = (currentIndex + 1) % textArray.length;
            typing = true;
            typeText();
          }, 2000); // Delay between texts
        } else {
          setTimeout(typeText, 100); // Speed of typing
        }
      }
    };

    typeText(); // Start typing

    return () => {
      // Clean up any ongoing typing animation if the component unmounts
      currentText = '';
    };
  }, []);

  return (
    <section 
      id="home" 
      ref={sectionRef}
      className="min-h-screen flex items-center justify-center pt-16 bg-gradient-to-br from-primary-light/10 to-secondary-light/10 dark:from-primary-dark/10 dark:to-secondary-dark/10"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          <div className={`flex-1 text-center md:text-left ${isVisible ? 'animate-slide-in' : ''}`}>
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-4 bg-clip-text text-transparent bg-gradient-to-r from-primary-light to-secondary-light dark:from-primary-dark dark:to-secondary-dark">
              Hi, I'm Janakiraman
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-6">
              <span ref={typewriterRef}></span>
            </p>
            <p className="text-lg text-gray-600 dark:text-gray-400 mb-8 max-w-2xl">
              Passionate about building decentralized applications and creating innovative blockchain solutions
              that drive the future of technology.
            </p>
            <div className="flex flex-wrap gap-4 justify-center md:justify-start">
              <a
                href="#contact"
                className="px-8 py-3 bg-gradient-to-r from-primary-light to-secondary-light dark:from-primary-dark dark:to-secondary-dark text-white rounded-lg hover:opacity-90 transition-all animate-float"
              >
                Get in Touch
              </a>
              <a
                href="#projects"
                className="px-8 py-3 border border-primary-light dark:border-primary-dark text-primary-light dark:text-primary-dark rounded-lg hover:bg-primary-light/5 dark:hover:bg-primary-dark/5 transition-all"
              >
                View Projects
              </a>
            </div>
          </div>
          <div className="flex-1 max-w-md">
            <div className="relative animate-float">
              <div className="absolute inset-0 bg-gradient-to-r from-primary-light to-secondary-light dark:from-primary-dark dark:to-secondary-dark rounded-full blur-3xl opacity-20"></div>
              <img
                src="https://jr-portfolio-gilt.vercel.app/static/media/HeroImage.f20a12b26731c4549fbc.jpg"
                alt="Janakiraman"
                className="relative rounded-full w-72 h-72 object-cover mx-auto border-4 border-white dark:border-gray-800 shadow-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
