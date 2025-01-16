import React from 'react';

export default function TimelineItem({ title, institution, duration, score, isLast }) {
  return (
    <div className="relative pl-8 pb-8">
      {!isLast && <div className="absolute left-3 top-6 bottom-0 w-0.5 bg-gray-300 dark:bg-gray-700" />}
      <div className="absolute left-0 top-5 w-6 h-6 rounded-full border-2 border-blue-500 bg-white dark:bg-gray-800" />
      <div className="bg-white dark:bg-gray-700 rounded-lg p-6 shadow-md">
        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-1">{institution}</h3>
        <p className="text-lg text-blue-600 dark:text-blue-400">{title}</p>
        <div className="flex justify-between mt-2 text-sm text-gray-600 dark:text-gray-400">
          <span>{duration}</span>
          <span className="font-medium">{score}</span>
        </div>
      </div>
    </div>
  );
}
