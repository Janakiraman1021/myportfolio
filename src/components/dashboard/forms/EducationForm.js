import React, { useState } from 'react';
import { Plus, Trash2 } from 'lucide-react';
import axios from 'axios';

export default function EducationForm() {
  const [educationList, setEducationList] = useState([
    { institution: '', degree: '', period: '', score: '' }
  ]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);

  const handleAdd = () => {
    setEducationList([...educationList, { institution: '', degree: '', period: '', score: '' }]);
  };

  const handleRemove = (index) => {
    setEducationList(educationList.filter((_, i) => i !== index));
  };

  const handleChange = (index, field, value) => {
    const newList = [...educationList];
    newList[index][field] = value;
    setEducationList(newList);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setSuccess(false);

    const education = educationList[0]; // Get first education entry

    try {
      // Validate required fields
      if (!education.institution || !education.degree || 
          !education.period || !education.score) {
        throw new Error('All fields are required');
      }

      const response = await axios.post(
        'https://port-backend-onv7.onrender.com/api/educations',
        {
          institution: education.institution.trim(),
          degree: education.degree.trim(),
          period: education.period.trim(),
          score: education.score.trim()
        }
      );

      if (response.data.success) {
        setSuccess(true);
        // Reset form
        setEducationList([{
          institution: '',
          degree: '',
          period: '',
          score: ''
        }]);
      }
    } catch (err) {
      console.error('Form submission error:', err);
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
          Education details saved successfully!
        </div>
      )}

      {educationList.map((education, index) => (
        <div key={index} className="p-4 border border-gray-200 dark:border-gray-700 rounded-lg">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                Institution
              </label>
              <input
                type="text"
                value={education.institution}
                onChange={(e) => handleChange(index, 'institution', e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-primary-light dark:focus:ring-primary-dark bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                Degree
              </label>
              <input
                type="text"
                value={education.degree}
                onChange={(e) => handleChange(index, 'degree', e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-primary-light dark:focus:ring-primary-dark bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                Period
              </label>
              <input
                type="text"
                value={education.period}
                onChange={(e) => handleChange(index, 'period', e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-primary-light dark:focus:ring-primary-dark bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                Score
              </label>
              <input
                type="text"
                value={education.score}
                onChange={(e) => handleChange(index, 'score', e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-primary-light dark:focus:ring-primary-dark bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
              />
            </div>
          </div>
          {educationList.length > 1 && (
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
          Add Education
        </button>
        <button
          type="submit"
          disabled={loading}
          className="px-6 py-2 bg-primary-light dark:bg-primary-dark text-white rounded-lg hover:opacity-90 transition-opacity disabled:opacity-50"
        >
          {loading ? 'Saving...' : 'Save Changes'}
        </button>
      </div>
    </form>
  );
}
