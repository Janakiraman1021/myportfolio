import React from 'react';
import SkillBar from './SkillBar';

export default function SkillCategory({ title, skills }) {
  return (
    <div className="bg-white dark:bg-gray-900 rounded-lg shadow-md p-6">
      <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">{title}</h3>
      <div className="space-y-4">
        {skills.map((skill) => (
          <SkillBar key={skill.name} name={skill.name} level={skill.level} />
        ))}
      </div>
    </div>
  );
}
