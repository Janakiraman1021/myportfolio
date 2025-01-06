import React from 'react';

export default function TimelineItem({
  institution,
  degree,
  period,
  score,
  isLast = false
}) {
  return (
    <div className="relative pl-8 pb-8">
      <div className="absolute left-0 top-0 h-full w-0.5 bg-blue-600 dark:bg-blue-500">
        {!isLast && <div className="absolute bottom-0 h-full w-0.5 bg-blue-600 dark:bg-blue-500" />}
      </div>
      <div className="absolute left-0 top-0 -translate-x-1/2 h-4 w-4 rounded-full border-2 border-blue-600 dark:border-blue-500 bg-white dark:bg-gray-900" />
      <div className="group relative">
        <h3 className="text-xl font-semibold text-gray-900 dark:text-white">{institution}</h3>
        <p className="mt-1 text-gray-600 dark:text-gray-300">{degree}</p>
        <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">{period}</p>
        <p className="mt-1 text-sm font-medium text-blue-600 dark:text-blue-400">{score}</p>
      </div>
    </div>
  );
}
