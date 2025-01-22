import React, { useState, useEffect } from 'react';
import { Plus, Trash2, Upload, Edit2 } from 'lucide-react';
import axios from 'axios';
import imageCompression from 'browser-image-compression';

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
  const [editMode, setEditMode] = useState(false);
  const [existingProjects, setExistingProjects] = useState([]);

  // Fetch existing projects
  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await axios.get('https://port-backend-onv7.onrender.com/api/projects');
        setExistingProjects(response.data.data);
      } catch (err) {
        setError('Failed to fetch projects');
      }
    };
    fetchProjects();
  }, []);

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

  const handleImageChange = async (index, e) => {
    const file = e.target.files[0];
    if (file) {
      try {
        // Compress image before upload
        const options = {
          maxSizeMB: 1,
          maxWidthOrHeight: 800
        };
        const compressedFile = await imageCompression(file, options);
        
        // Convert to base64
        const reader = new FileReader();
        reader.onloadend = () => {
          const updatedProjects = [...projects];
          updatedProjects[index].image = reader.result;
          setProjects(updatedProjects);
        };
        reader.readAsDataURL(compressedFile);
      } catch (error) {
        console.error('Error processing image:', error);
      }
    }
  };

  const handleEdit = (project) => {
    setEditMode(true);
    setProjects([{
      ...project,
      technologies: project.technologies || ['']
    }]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setSuccess(false);

    try {
      if (editMode) {
        await axios.put(`https://port-backend-onv7.onrender.com/api/projects/${projects[0]._id}`, projects[0]);
      } else {
        await axios.post('https://port-backend-onv7.onrender.com/api/projects', projects);
      }
      setSuccess(true);
      setTimeout(() => setSuccess(false), 3000);
      if (editMode) {
        setEditMode(false);
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
      setError(err.response?.data?.message || 'Something went wrong');
    }
    setLoading(false);
  };

  return (
    <div className="space-y-6">
      <form onSubmit={handleSubmit} className="space-y-6">
        {error && (
          <div className="p-4 text-red-600 bg-red-100 rounded-lg">
            {error}
          </div>
        )}
        
        {success && (
          <div className="p-4 text-green-600 bg-green-100 rounded-lg">
            Project {editMode ? 'updated' : 'saved'} successfully!
          </div>
        )}

        {projects.map((project, index) => (
          <div key={index} className="p-4 border border-gray-200 dark:border-gray-700 rounded-lg">
            <div className="space-y-4">
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Project Image
                </label>
                <div className="flex items-center space-x-4">
                  {project.image && (
                    <img 
                      src={project.image} 
                      alt="Project preview" 
                      className="w-32 h-32 object-cover rounded-lg"
                    />
                  )}
                  <label className="cursor-pointer flex items-center justify-center w-32 h-32 border-2 border-dashed rounded-lg">
                    <input
                      type="file"
                      accept="image/*"
                      onChange={(e) => handleImageChange(index, e)}
                      className="hidden"
                    />
                    <div className="text-center">
                      <Upload className="mx-auto w-6 h-6 mb-2" />
                      <span className="text-sm">Upload Image</span>
                    </div>
                  </label>
                </div>
              </div>
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
            {loading ? 'Saving...' : editMode ? 'Update Project' : 'Save Project'}
          </button>
        </div>
      </form>

      {/* Existing Projects List */}
      {existingProjects.length > 0 && (
        <div className="mt-8">
          <h3 className="text-lg font-medium mb-4">Existing Projects</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {existingProjects.map((project) => (
              <div key={project._id} className="p-4 border rounded-lg">
                {project.image && (
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-48 object-cover rounded-lg mb-4"
                  />
                )}
                <h4 className="font-medium">{project.title}</h4>
                <button
                  onClick={() => handleEdit(project)}
                  className="mt-2 text-primary-light flex items-center gap-1"
                >
                  <Edit2 className="w-4 h-4" />
                  Edit
                </button>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
