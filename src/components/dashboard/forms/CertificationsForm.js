import React, { useState } from 'react';
import { Plus, Trash2 } from 'lucide-react';

export default function CertificationsForm() {
  const [certifications, setCertifications] = useState([
    {
      title: '',
      issuer: '',
      date: '',
      credentialUrl: ''
    }
  ]);

  const handleAdd = () => {
    setCertifications([...certifications, {
      title: '',
      issuer: '',
      date: '',
      credentialUrl: ''
    }]);
  };

  const handleRemove = (index) => {
    setCertifications(certifications.filter((_, i) => i !== index));
  };

  const handleChange = (index, field, value) => {
    const newCertifications = [...certifications];
    newCertifications[index][field] = value;
    setCertifications(newCertifications);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log(certifications);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {certifications.map((certification, index) => (
        <div key={index} className="p-4 border border-gray-200 dark:border-gray-700 rounded-lg">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                Certification Title
              </label>
              <input
                type="text"
                value={certification.title}
                onChange={(e) => handleChange(index, 'title', e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-primary-light dark:focus:ring-primary-dark bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                Issuing Organization
              </label>
              <input
                type="text"
                value={certification.issuer}
                onChange={(e) => handleChange(index, 'issuer', e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-primary-light dark:focus:ring-primary-dark bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                Date
              </label>
              <input
                type="text"
                value={certification.date}
                onChange={(e) => handleChange(index, 'date', e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-primary-light dark:focus:ring-primary-dark bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
                placeholder="e.g., January 2023"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                Credential URL
              </label>
              <input
                type="url"
                value={certification.credentialUrl}
                onChange={(e) => handleChange(index, 'credentialUrl', e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-primary-light dark:focus:ring-primary-dark bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
              />
            </div>
          </div>
          {certifications.length > 1 && (
            <button
              type="button"
              onClick={() => handleRemove(index)}
              className="mt-4 text-red-600 dark:text-red-400 hover:text-red-700 dark:hover:text-red-300 flex items-center gap-1"
            >
              <Trash2 className="w-4 h-4" />
              Remove
            </button>
          )}
        </div>
      ))}
      <div className="flex justify-between">
        <button
          type="button"
          onClick={handleAdd}
          className="flex items-center gap-2 text-primary-light dark:text-primary-dark hover:text-primary-light/80 dark:hover:text-primary-dark/80"
        >
          <Plus className="w-4 h-4" />
          Add Certification
        </button>
        <button
          type="submit"
          className="px-6 py-2 bg-primary-light dark:bg-primary-dark text-white rounded-lg hover:opacity-90 transition-opacity"
        >
          Save Changes
        </button>
      </div>
    </form>
  );
}
    