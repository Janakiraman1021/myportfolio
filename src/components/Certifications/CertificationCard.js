import React from 'react';
import { Award } from 'lucide-react';

export default function CertificationCard({
  title,
  issuer,
  date,
  credentialUrl
}) {
  return (
    <div className="bg-white dark:bg-gray-900 rounded-lg shadow-md p-6 flex items-start gap-4">
      <Award className="w-8 h-8 text-blue-600 dark:text-blue-400 flex-shrink-0" />
      <div>
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{title}</h3>
        <p className="text-gray-600 dark:text-gray-300">{issuer}</p>
        <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">{date}</p>
        {credentialUrl && (
          <a
            href={credentialUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-2 text-blue-600 dark:text-blue-400 hover:underline text-sm"
          >
            View Credential
          </a>
        )}
      </div>
    </div>
  );
}
