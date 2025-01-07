import React from 'react';
import { Camera, Pen, Book, Palette } from 'lucide-react';

const hobbiesData = [
  {
    icon: Camera,
    title: 'Photography',
    description: 'Capturing moments and exploring visual storytelling through digital photography.'
  },
  {
    icon: Pen,
    title: 'Poem Writing',
    description: 'Expressing emotions and experiences through creative verse and poetry.'
  },
  {
    icon: Book,
    title: 'Authoring',
    description: 'Writing technical articles and creative content about blockchain technology.'
  },
  {
    icon: Palette,
    title: 'Digital Art',
    description: 'Creating digital illustrations and exploring NFT art possibilities.'
  }
];

export default function Hobbies() {
  return React.createElement(
    'section',
    { id: 'hobbies', className: 'py-20 bg-gray-50 dark:bg-gray-800' },
    React.createElement(
      'div',
      { className: 'max-w-7xl mx-auto px-4 sm:px-6 lg:px-8' },
      React.createElement(
        'h2',
        { className: 'text-3xl font-bold text-center text-gray-900 dark:text-white mb-12' },
        'Hobbies & Interests'
      ),
      React.createElement(
        'div',
        { className: 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8' },
        hobbiesData.map((hobby) =>
          React.createElement(
            'div',
            {
              key: hobby.title,
              className: 'bg-white dark:bg-gray-900 rounded-lg p-6 shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1'
            },
            React.createElement(
              'div',
              { className: 'flex flex-col items-center text-center' },
              React.createElement(
                'div',
                {
                  className: 'w-16 h-16 mb-4 rounded-full bg-gradient-to-r from-primary-light to-secondary-light dark:from-primary-dark dark:to-secondary-dark p-4 animate-float'
                },
                React.createElement(hobby.icon, { className: 'w-full h-full text-white' })
              ),
              React.createElement(
                'h3',
                { className: 'text-xl font-semibold text-gray-900 dark:text-white mb-2' },
                hobby.title
              ),
              React.createElement(
                'p',
                { className: 'text-gray-600 dark:text-gray-300' },
                hobby.description
              )
            )
          )
        )
      )
    )
  );
}
