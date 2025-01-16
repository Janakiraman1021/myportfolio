import React, { useState } from 'react';
import { Plus, Trash2 } from 'lucide-react';
import axios from 'axios';

export default function ProjectsForm() {
  const [projects, setProjects] = useState([{
    title: '',
    description: '',
    technologies: [''],
    githubUrl: '',
    liveUrl: '',
    image: ''
  }]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);

  const handleAdd = () => {
    setProjects([
      ...projects,
      {
        title: '',
        description: '',
        technologies: [''],
        githubUrl: '',
        liveUrl: '',
        image: ''
      }
    ]);
  };

  const handleRemove = (index) => {
    setProjects(projects.filter((_, i) => i !== index));
  };

  const handleChange = (index, field, value) => {
    const newProjects = [...projects];
    if (field === 'technologies') {
      newProjects[index][field] = value.split(',').map(tech => tech.trim());
    } else {
      newProjects[index][field] = value;
    }
    setProjects(newProjects);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setSuccess(false);

    try {
      // Validate required fields
      if (!projects[0].title || !projects[0].description || !projects[0].technologies.length) {
        throw new Error('Title, description and technologies are required');
      }

      const response = await axios.post('https://port-backend-onv7.onrender.com/api/projects', {
        title: projects[0].title.trim(),
        description: projects[0].description.trim(),
        technologies: projects[0].technologies.filter(tech => tech.trim()),
        githubUrl: projects[0].githubUrl.trim(),
        liveUrl: projects[0].liveUrl.trim(),
        image: projects[0].image.trim()
      });

      if (response.data.success) {
        setSuccess(true);
        // Reset form
        setProjects([{
          title: '',
          description: '',
          technologies: [''],
          githubUrl: '',
          liveUrl: '',
          image: ''
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
          Project saved successfully!
        </div>
      )}

      {projects.map((project, index) => (
        <div key={index} className="p-4 border border-gray-200 dark:border-gray-700 rounded-lg">
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                Project Title
              </label>
              <input
                type="text"
                value={project.title}
                onChange={(e) => handleChange(index, 'title', e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-primary-light dark:focus:ring-primary-dark bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                Description
              </label>
              <textarea
                value={project.description}
                onChange={(e) => handleChange(index, 'description', e.target.value)}
                rows={3}
                className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-primary-light dark:focus:ring-primary-dark bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                Technologies (comma-separated)
              </label>
              <input
                type="text"
                value={project.technologies.join(', ')}
                onChange={(e) => handleChange(index, 'technologies', e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-primary-light dark:focus:ring-primary-dark bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
              />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  GitHub URL
                </label>
                <input
                  type="url"
                  value={project.githubUrl}
                  onChange={(e) => handleChange(index, 'githubUrl', e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-primary-light dark:focus:ring-primary-dark bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Live URL
                </label>
                <input
                  type="url"
                  value={project.liveUrl}
                  onChange={(e) => handleChange(index, 'liveUrl', e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-primary-light dark:focus:ring-primary-dark bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
                />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                Image URL
              </label>
              <input
                type="url"
                value={project.image}
                onChange={(e) => handleChange(index, 'image', e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-primary-light dark:focus:ring-primary-dark bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
              />
            </div>
          </div>
          {projects.length > 1 && (
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
          Add Project
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
