import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Education from './components/Education';
import Skills from './components/Skills';
import Projects from './components/Projects/Projects';
import Certifications from './components/Certifications/Certifications';
import Internships from './components/Internships/Internships';
import Achievements from './components/Achievements/Achievements';
import '@fortawesome/fontawesome-free/css/all.min.css';
import Footer from './components/Footer';
import { HobbiesSection } from './components/Hobbies/Hobbies';

function App() {
  const [darkMode, setDarkMode] = useState(() => {
    const savedMode = localStorage.getItem('darkMode');
    return savedMode ? JSON.parse(savedMode) : false;
  });

  useEffect(() => {
    localStorage.setItem('darkMode', JSON.stringify(darkMode));
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className={`min-h-screen bg-white dark:bg-gray-900 transition-colors`}>
      <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      <Home />
      <About />
      <Education />
      <Skills />
      <Projects />
      <Certifications />
      <Internships />
      <Achievements />
      
      <Footer />
    </div>
  );
}

export default App;

  