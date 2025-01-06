import React from 'react';

export default function SkillBar({ name, level }) {
  return (
    <div>
      <div className="flex justify-between mb-1">
        <span className="text-sm font-medium text-gray-700 dark:text-gray-300">{name}</span>
        <span className="text-sm font-medium text-blue-600 dark:text-blue-400">{level}%</span>
      </div>
      <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
        <div
          className="bg-blue-600 dark:bg-blue-500 rounded-full h-2 transition-all duration-500"
          style={{ width: `${level}%` }}
        />
      </div>
    </div>
  );
}
