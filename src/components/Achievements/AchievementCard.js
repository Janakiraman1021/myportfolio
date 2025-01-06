import React from 'react';
import { Trophy } from 'lucide-react';

export default function AchievementCard({
  title,
  organization,
  date,
  description
}) {
  return (
    <div className="bg-white dark:bg-gray-900 rounded-lg shadow-md p-6 transform hover:scale-105 transition-transform">
      <div className="flex items-start gap-4">
        <Trophy className="w-8 h-8 text-yellow-500 flex-shrink-0" />
        <div>
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{title}</h3>
          <p className="text-gray-600 dark:text-gray-300">{organization}</p>
          <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">{date}</p>
          <p className="mt-2 text-gray-600 dark:text-gray-300">{description}</p>
        </div>
      </div>
    </div>
  );
}
