import React, { useState } from 'react';
import { Plus, Trash2 } from 'lucide-react';

export default function HobbiesForm() {
  const [hobbies, setHobbies] = useState([
    { title: '', description: '' }
  ]);

  const handleAdd = () => {
    setHobbies([...hobbies, { title: '', description: '' }]);
  };

  const handleRemove = (index) => {
    setHobbies(hobbies.filter((_, i) => i !== index));
  };

  const handleChange = (index, field, value) => {
    const newHobbies = [...hobbies];
    newHobbies[index][field] = value;
    setHobbies(newHobbies);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log(hobbies);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {hobbies.map((hobby, index) => (
        <div key={index} className="p-4 border border-gray-200 dark:border-gray-700 rounded-lg">
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                Hobby Title
              </label>
              <input
                type="text"
                value={hobby.title}
                onChange={(e) => handleChange(index, 'title', e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-primary-light dark:focus:ring-primary-dark bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                Description
              </label>
              <textarea
                value={hobby.description}
                onChange={(e) => handleChange(index, 'description', e.target.value)}
                rows={3}
                className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-primary-light dark:focus:ring-primary-dark bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
              />
            </div>
          </div>
          {hobbies.length > 1 && (
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
          Add Hobby
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
