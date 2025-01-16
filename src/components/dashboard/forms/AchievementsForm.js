import React, { useState } from 'react';
import { Plus, Trash2 } from 'lucide-react';
import axios from 'axios';

export default function AchievementsForm() {
  const [achievements, setAchievements] = useState([
    {
      title: '',
      organization: '',
      date: '',
      description: ''
    }
  ]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleAdd = () => {
    setAchievements([...achievements, {
      title: '',
      organization: '',
      date: '',
      description: ''
    }]);
  };

  const handleRemove = (index) => {
    setAchievements(achievements.filter((_, i) => i !== index));
  };

  const handleChange = (index, field, value) => {
    const newAchievements = [...achievements];
    newAchievements[index][field] = value;
    setAchievements(newAchievements);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const response = await axios.post('https://port-backend-onv7.onrender.com/api/achievements', {
        achievements
      });

      if (response.data.success) {
        // Reset form after successful submission
        setAchievements([{
          title: '',
          organization: '',
          date: '',
          description: ''
        }]);
        alert('Achievements added successfully!');
      }
    } catch (err) {
      setError(err.response?.data?.message || 'Failed to add achievements');
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {error && (
        <div className="text-red-500 bg-red-100 p-3 rounded">{error}</div>
      )}
      {achievements.map((achievement, index) => (
        <div key={index} className="p-4 border border-gray-200 dark:border-gray-700 rounded-lg">
          <div className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Achievement Title
                </label>
                <input
                  type="text"
                  value={achievement.title}
                  onChange={(e) => handleChange(index, 'title', e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-primary-light dark:focus:ring-primary-dark bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Organization
                </label>
                <input
                  type="text"
                  value={achievement.organization}
                  onChange={(e) => handleChange(index, 'organization', e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-primary-light dark:focus:ring-primary-dark bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
                />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                Date
              </label>
              <input
                type="text"
                value={achievement.date}
                onChange={(e) => handleChange(index, 'date', e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-primary-light dark:focus:ring-primary-dark bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
                placeholder="e.g., December 2023"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                Description
              </label>
              <textarea
                value={achievement.description}
                onChange={(e) => handleChange(index, 'description', e.target.value)}
                rows={3}
                className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-primary-light dark:focus:ring-primary-dark bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
              />
            </div>
          </div>
          {achievements.length > 1 && (
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
          Add Achievement
        </button>
        <button
          type="submit"
          disabled={loading}
          className="px-6 py-2 bg-primary-light dark:bg-primary-dark text-white rounded-lg hover:opacity-90 transition-opacity disabled:opacity-50"
        >
          {loading ? 'Saving...' : 'Save Achievements'}
        </button>
      </div>
    </form>
  );
}
