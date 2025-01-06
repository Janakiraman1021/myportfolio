import React from 'react';
import { Building2 } from 'lucide-react';

export default function InternshipCard({
  company,
  role,
  period,
  responsibilities
}) {
  return (
    <div className="bg-white dark:bg-gray-900 rounded-lg shadow-md p-6">
      <div className="flex items-center gap-4 mb-4">
        <Building2 className="w-8 h-8 text-blue-600 dark:text-blue-400" />
        <div>
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white">{role}</h3>
          <p className="text-gray-600 dark:text-gray-300">{company}</p>
          <p className="text-sm text-gray-500 dark:text-gray-400">{period}</p>
        </div>
      </div>
      <ul className="space-y-2">
        {responsibilities.map((item, index) => (
          <li key={index} className="text-gray-600 dark:text-gray-300 flex items-start">
            <span className="mr-2">•</span>
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
