import React, { useState, useEffect } from 'react';
import { Plus, Trash2, Edit2 } from 'lucide-react';
import axios from 'axios';

export default function SkillsForm() {
  const [skills, setSkills] = useState([
    { name: '', level: 0, category: 'Programming Languages' }
  ]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);
  const [editMode, setEditMode] = useState(false);
  const [existingSkills, setExistingSkills] = useState([]);
  const [editingSkill, setEditingSkill] = useState(null);

  const categories = [
    'Programming Languages',
    'Blockchain Development',
    'Frameworks & Tools'
  ];

  // Fetch existing skills
  useEffect(() => {
    const fetchSkills = async () => {
      try {
        const response = await axios.get('https://port-backend-onv7.onrender.com/api/skills');
        setExistingSkills(response.data.data);
      } catch (err) {
        setError('Failed to fetch skills');
      }
    };
    fetchSkills();
  }, [success]);

  const handleAdd = () => {
    setSkills([...skills, { name: '', level: 0, category: 'Programming Languages' }]);
  };

  const handleRemove = (index) => {
    setSkills(skills.filter((_, i) => i !== index));
  };

  const handleEdit = (skill) => {
    setEditMode(true);
    setEditingSkill(skill);
    setSkills([skill]);
  };

  const handleDelete = async (skillId) => {
    try {
      await axios.delete(`https://port-backend-onv7.onrender.com/api/skills/${skillId}`);
      setExistingSkills(existingSkills.filter(skill => skill._id !== skillId));
      setSuccess(true);
      setTimeout(() => setSuccess(false), 3000);
    } catch (err) {
      setError('Failed to delete skill');
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    
    try {
      if (editMode) {
        await axios.put(`https://port-backend-onv7.onrender.com/api/skills/${editingSkill._id}`, skills[0]);
      } else {
        await axios.post('https://port-backend-onv7.onrender.com/api/skills', skills);
      }
      
      setSuccess(true);
      setTimeout(() => setSuccess(false), 3000);
      
      if (editMode) {
        setEditMode(false);
        setEditingSkill(null);
      }
      
      setSkills([{ name: '', level: 0, category: 'Programming Languages' }]);
      
      // Refresh existing skills
      const response = await axios.get('https://port-backend-onv7.onrender.com/api/skills');
      setExistingSkills(response.data.data);
    } catch (err) {
      setError(err.response?.data?.message || 'Something went wrong');
    }
    setLoading(false);
  };

  return (
    <div className="space-y-6">
      <form onSubmit={handleSubmit} className="space-y-4">
        {skills.map((skill, index) => (
          <div key={index} className="flex items-center space-x-4">
            <input
              type="text"
              placeholder="Skill name"
              value={skill.name}
              onChange={(e) => {
                const updated = [...skills];
                updated[index].name = e.target.value;
                setSkills(updated);
              }}
              className="flex-1 px-4 py-2 border rounded-lg"
            />
            <input
              type="number"
              min="0"
              max="100"
              value={skill.level}
              onChange={(e) => {
                const updated = [...skills];
                updated[index].level = parseInt(e.target.value);
                setSkills(updated);
              }}
              className="w-20 px-4 py-2 border rounded-lg"
            />
            <select
              value={skill.category}
              onChange={(e) => {
                const updated = [...skills];
                updated[index].category = e.target.value;
                setSkills(updated);
              }}
              className="px-4 py-2 border rounded-lg"
            >
              {categories.map(category => (
                <option key={category} value={category}>
                  {category}
                </option>
              ))}
            </select>
            {!editMode && (
              <button
                type="button"
                onClick={() => handleRemove(index)}
                className="text-red-500"
              >
                <Trash2 className="w-5 h-5" />
              </button>
            )}
          </div>
        ))}
        
        {!editMode && (
          <button
            type="button"
            onClick={handleAdd}
            className="flex items-center text-primary-light"
          >
            <Plus className="w-5 h-5 mr-1" />
            Add Skill
          </button>
        )}

        <button
          type="submit"
          disabled={loading}
          className="px-6 py-2 bg-primary-light text-white rounded-lg"
        >
          {loading ? 'Saving...' : editMode ? 'Update Skill' : 'Save Skills'}
        </button>
      </form>

      {/* Existing Skills List */}
      {existingSkills.length > 0 && (
        <div className="mt-8">
          <h3 className="text-lg font-medium mb-4">Existing Skills</h3>
          <div className="space-y-2">
            {existingSkills.map((skill) => (
              <div key={skill._id} className="flex items-center justify-between p-3 border rounded-lg">
                <div>
                  <span className="font-medium">{skill.name}</span>
                  <span className="ml-2 text-gray-500">({skill.category})</span>
                  <span className="ml-2">{skill.level}%</span>
                </div>
                <div className="flex space-x-2">
                  <button
                    onClick={() => handleEdit(skill)}
                    className="text-primary-light"
                  >
                    <Edit2 className="w-5 h-5" />
                  </button>
                  <button
                    onClick={() => handleDelete(skill._id)}
                    className="text-red-500"
                  >
                    <Trash2 className="w-5 h-5" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {error && (
        <div className="text-red-500 mt-4">{error}</div>
      )}
      {success && (
        <div className="text-green-500 mt-4">
          Skills {editMode ? 'updated' : 'saved'} successfully!
        </div>
      )}
    </div>
  );
}
