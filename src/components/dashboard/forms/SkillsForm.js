import React, { useState } from 'react';
import { Plus, Trash2 } from 'lucide-react';
import axios from 'axios';

const API_BASE_URL = 'http://localhost:5000/api/skills';

export default function SkillsForm() {
  const [skills, setSkills] = useState([
    { name: '', level: 0, category: 'Programming Languages' }
  ]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);

  const categories = [
    'Programming Languages',
    'Blockchain Development',
    'Frameworks & Tools'
  ];

  const handleAdd = () => {
    setSkills([...skills, { name: '', level: 0, category: 'Programming Languages' }]);
  };

  const handleRemove = (index) => {
    setSkills(skills.filter((_, i) => i !== index));
  };

  const handleChange = (index, field, value) => {
    const newSkills = [...skills];
    newSkills[index][field] = value;
    setSkills(newSkills);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setSuccess(false);

    try {
      // Validate fields
      if (!skills[0].name || !skills[0].level || !skills[0].category) {
        throw new Error('All fields are required');
      }

      const response = await axios.post(
        API_BASE_URL,
        {
          name: skills[0].name.trim(),
          level: parseInt(skills[0].level),
          category: skills[0].category
        }
      );

      if (response.data.success) {
        setSuccess(true);
        // Reset form
        setSkills([{ 
          name: '', 
          level: 0, 
          category: 'Programming Languages' 
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
          Skill saved successfully!
        </div>
      )}

      {skills.map((skill, index) => (
        <div key={index} className="p-4 border border-gray-200 dark:border-gray-700 rounded-lg">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                Skill Name
              </label>
              <input
                type="text"
                value={skill.name}
                onChange={(e) => handleChange(index, 'name', e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-primary-light dark:focus:ring-primary-dark bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                Proficiency Level (0-100)
              </label>
              <input
                type="number"
                min="0"
                max="100"
                value={skill.level}
                onChange={(e) => handleChange(index, 'level', parseInt(e.target.value))}
                className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-primary-light dark:focus:ring-primary-dark bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                Category
              </label>
              <select
                value={skill.category}
                onChange={(e) => handleChange(index, 'category', e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-primary-light dark:focus:ring-primary-dark bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
              >
                {categories.map((category) => (
                  <option key={category} value={category}>
                    {category}
                  </option>
                ))}
              </select>
            </div>
          </div>
          {skills.length > 1 && (
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
          Add Skill
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
