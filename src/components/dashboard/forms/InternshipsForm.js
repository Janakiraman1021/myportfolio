import React, { useState } from 'react';
import { Plus, Trash2 } from 'lucide-react';
import axios from 'axios';

export default function InternshipsForm() {
  const [internships, setInternships] = useState([
    {
      company: '',
      role: '',
      period: '',
      responsibilities: ['']
    }
  ]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);

  const handleAdd = () => {
    setInternships([
      ...internships,
      {
        company: '',
        role: '',
        period: '',
        responsibilities: ['']
      }
    ]);
  };

  const handleRemove = (index) => {
    setInternships(internships.filter((_, i) => i !== index));
  };

  const handleChange = (index, field, value) => {
    const newInternships = [...internships];
    if (field === 'responsibilities') {
      newInternships[index][field] = value.split('\n').filter((r) => r.trim() !== '');
    } else {
      newInternships[index][field] = value;
    }
    setInternships(newInternships);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setSuccess(false);

    try {
      // Validate required fields
      if (!internships[0].company || !internships[0].role || 
          !internships[0].period || !internships[0].responsibilities.length) {
        throw new Error('All fields are required');
      }

      const response = await axios.post(
        'https://port-backend-onv7.onrender.com/api/internships',
        {
          company: internships[0].company.trim(),
          role: internships[0].role.trim(),
          period: internships[0].period.trim(),
          responsibilities: internships[0].responsibilities
            .filter(resp => resp.trim())
        }
      );

      if (response.data.success) {
        setSuccess(true);
        // Reset form
        setInternships([{
          company: '',
          role: '',
          period: '',
          responsibilities: ['']
        }]);
      }
    } catch (err) {
      setError(err.response?.data?.message || err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {error && (
        <div className="p-4 text-red-600 bg-red-100 rounded-lg">
          {error}
        </div>
      )}
      
      {success && (
        <div className="p-4 text-green-600 bg-green-100 rounded-lg">
          Internship saved successfully!
        </div>
      )}

      {internships.map((internship, index) => (
        <div key={index} className="p-4 border border-gray-200 dark:border-gray-700 rounded-lg">
          <div className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Company
                </label>
                <input
                  type="text"
                  value={internship.company}
                  onChange={(e) => handleChange(index, 'company', e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-primary-light dark:focus:ring-primary-dark bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Role
                </label>
                <input
                  type="text"
                  value={internship.role}
                  onChange={(e) => handleChange(index, 'role', e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-primary-light dark:focus:ring-primary-dark bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
                />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                Period
              </label>
              <input
                type="text"
                value={internship.period}
                onChange={(e) => handleChange(index, 'period', e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-primary-light dark:focus:ring-primary-dark bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
                placeholder="e.g., June 2023 - August 2023"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                Responsibilities (one per line)
              </label>
              <textarea
                value={internship.responsibilities.join('\n')}
                onChange={(e) => handleChange(index, 'responsibilities', e.target.value)}
                rows={4}
                className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-primary-light dark:focus:ring-primary-dark bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
                placeholder="Enter responsibilities, one per line"
              />
            </div>
          </div>
          {internships.length > 1 && (
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
          className="flex items-center gap-2 text-primary-light dark:text-primary-dark"
        >
          <Plus className="w-4 h-4" />
          Add Internship
        </button>
        <button
          type="submit"
          disabled={loading}
          className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:opacity-50"
        >
          {loading ? 'Saving...' : 'Save Changes'}
        </button>
      </div>
    </form>
  );
}
