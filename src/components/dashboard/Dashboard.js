import React, { useState } from 'react';
import EducationForm from './forms/EducationForm';
import SkillsForm from './forms/SkillsForm';
import ProjectsForm from './forms/ProjectsForm';
import InternshipsForm from './forms/InternshipsForm';
import CertificationsForm from './forms/CertificationsForm';
import AchievementsForm from './forms/AchievementsForm';
import BooksForm from './forms/BooksForm';
import HobbiesForm from './forms/HobbiesForm';
import ContactForm from './forms/ContactForm';
import { Layout } from 'lucide-react';

const sections = [
  'Education', 'Skills', 'Projects', 'Internships',
  'Certifications', 'Achievements', 'Books', 'Hobbies', 'Contact'
];

export default function Dashboard() {
  const [activeSection, setActiveSection] = useState('Education');

  const renderForm = () => {
    switch (activeSection) {
      case 'Education':
        return <EducationForm />;
      case 'Skills':
        return <SkillsForm />;
      case 'Projects':
        return <ProjectsForm />;
      case 'Internships':
        return <InternshipsForm />;
      case 'Certifications':
        return <CertificationsForm />;
      case 'Achievements':
        return <AchievementsForm />;
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-800">
      <div className="flex">
        {/* Sidebar */}
        <div className="w-64 bg-white dark:bg-gray-900 min-h-screen shadow-lg">
          <div className="p-4 border-b border-gray-200 dark:border-gray-700">
            <div className="flex items-center gap-2">
              <Layout className="w-6 h-6 text-primary-light dark:text-primary-dark" />
              <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
                Dashboard
              </h2>
            </div>
          </div>
          <nav className="p-4">
            {sections.map((section) => (
              <button
                key={section}
                onClick={() => setActiveSection(section)}
                className={`w-full text-left px-4 py-2 rounded-lg mb-1 transition-colors ${
                  activeSection === section
                    ? 'bg-primary-light/10 dark:bg-primary-dark/10 text-primary-light dark:text-primary-dark'
                    : 'text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800'
                }`}
              >
                {section}
              </button>
            ))}
          </nav>
        </div>

        {/* Main Content */}
        <div className="flex-1 p-8">
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
            Update {activeSection}
          </h1>
          <div className="bg-white dark:bg-gray-900 rounded-lg shadow-lg p-6">
            {renderForm()}
          </div>
        </div>
      </div>
    </div>
  );
}
