import React, { useState, useEffect } from 'react';
import TimelineItem from './TimelineItem';
import axios from 'axios';

export default function Education() {
  const [educationData, setEducationData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchEducation = async () => {
      try {
        const response = await axios.get('https://port-backend-onv7.onrender.com/api/educations');
        if (Array.isArray(response.data)) {
          setEducationData(response.data);
        } else {
          setError('Invalid data format received');
        }
      } catch (err) {
        setError('Failed to fetch education data');
      } finally {
        setLoading(false);
      }
    };

    fetchEducation();
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="text-red-500">{error}</div>
      </div>
    );
  }

  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-12">
          Education
        </h2>
        <div className="space-y-8">
          {educationData.map((edu, index) => (
            <TimelineItem
              key={edu._id}
              isLast={index === educationData.length - 1}
              title={edu.degree}
              institution={edu.institution}
              duration={edu.period}
              score={edu.score}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
