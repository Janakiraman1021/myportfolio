import React, { useEffect, useRef, useMemo } from 'react';
import { AnimatePresence, domAnimation, LazyMotion } from 'framer-motion';
import { m as motion } from "framer-motion";
import { useIntersectionObserver } from './hooks/useIntersectionObserver';

export default function Home() {
  const typewriterRef = useRef(null);
  const [sectionRef, isVisible] = useIntersectionObserver();
  const [currentText, setCurrentText] = React.useState('');
  const [currentIndex, setCurrentIndex] = React.useState(0);

  const textArray = useMemo(() => [
    'Learner', 'Explorer', 'Dreamer', 'Achiever',
    'Full Stack Blockchain Developer', 'DApp Developer',
    'Web3 Enthusiast', 'Author', 'Speaker', 'Poet',
    'Blogger', 'Innovator', 'Tech Enthusiast',
    'Open Source Contributor', 'Mentor', 'Educator',
    'Researcher', 'Leader', 'Volunteer', 'Freelancer'
  ], []); // Empty dependency array since this array never changes

  useEffect(() => {
    let timeout;
    if (currentText.length < textArray[currentIndex].length) {
      timeout = setTimeout(() => {
        setCurrentText(prev => textArray[currentIndex].slice(0, prev.length + 1));
      }, 100);
    } else {
      timeout = setTimeout(() => {
        setCurrentText('');
        setCurrentIndex((prev) => (prev + 1) % textArray.length);
      }, 2000);
    }
    return () => clearTimeout(timeout);
  }, [currentText, currentIndex, textArray]); // Added textArray to dependencies

  return (
    <LazyMotion features={domAnimation}>
      <motion.div
        ref={sectionRef}
        initial={{ opacity: 0 }}
        animate={{ opacity: isVisible ? 1 : 0 }}
        transition={{ duration: 0.5 }}
        className="home-container"
      >
        <motion.div
          ref={typewriterRef}
          className="typewriter"
        >
          <AnimatePresence mode="wait">
            <motion.span
              key={currentText}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              {currentText}
              <motion.span
                animate={{ opacity: [0, 1] }}
                transition={{ duration: 0.5, repeat: Infinity, repeatType: "reverse" }}
                className="cursor"
              >
                |
              </motion.span>
            </motion.span>
          </AnimatePresence>
        </motion.div>
        <section 
          id="home" 
          className="min-h-screen flex items-center justify-center pt-16 bg-gradient-to-br from-primary-light/10 to-secondary-light/10 dark:from-primary-dark/10 dark:to-secondary-dark/10"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <div className="flex flex-col md:flex-row items-center justify-between gap-12">
              <div className={`flex-1 text-center md:text-left ${isVisible ? 'animate-slide-in' : ''}`}>
                <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-4 bg-clip-text text-transparent bg-gradient-to-r from-primary-light to-secondary-light dark:from-primary-dark dark:to-secondary-dark">
                  Hi, I'm Janakiraman
                </h1>
                <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-6">
                  <motion.span
                    style={{ display: 'inline-block' }}
                  >
                    <AnimatePresence mode="wait">
                      <motion.span
                        key={currentText}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.2 }}
                      >
                        {currentText}
                      </motion.span>
                    </AnimatePresence>
                    <motion.span
                      animate={{ opacity: [1, 0] }}
                      transition={{ duration: 0.5, repeat: Infinity, repeatType: "reverse" }}
                    >
                      |
                    </motion.span>
                  </motion.span>
                </p>
                <p className="text-lg text-gray-600 dark:text-gray-400 mb-8 max-w-2xl">
                  Passionate about building decentralized applications and creating innovative blockchain solutions
                  that drive the future of technology.
                </p>
                <div className="flex flex-wrap gap-4 justify-center md:justify-start">
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
      </motion.div>
    </LazyMotion>
  );
}
