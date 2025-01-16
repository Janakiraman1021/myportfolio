import React, { useState, useEffect } from 'react';
import AchievementCard from './AchievementCard';
import axios from 'axios';

const Achievements = () => {
  const [achievements, setAchievements] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchAchievements = async () => {
      try {
        const response = await axios.get('https://port-backend-onv7.onrender.com/api/achievements');
        // Extract achievements array from nested response
        if (response.data?.success && Array.isArray(response.data.data)) {
          setAchievements(response.data.data);
        } else {
          setError('Invalid data format received');
        }
      } catch (err) {
        setError('Failed to fetch achievements');
      } finally {
        setLoading(false);
      }
    };

    fetchAchievements();
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
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
      {achievements.map((achievement) => (
        <AchievementCard
          key={achievement._id}
          title={achievement.title}
          organization={achievement.organization}
          date={achievement.date}
          description={achievement.description}
        />
      ))}
    </div>
  );
};

export default Achievements;
