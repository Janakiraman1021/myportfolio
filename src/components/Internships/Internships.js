import React, { useState, useEffect } from 'react';
import axios from 'axios';
import InternshipCard from './InternshipCard';
import { Loader, AlertCircle } from 'lucide-react';

export default function Internships() {
  const [internships, setInternships] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchInternships = async () => {
      try {
        const response = await axios.get('https://port-backend-onv7.onrender.com/api/internships');
        if (response.data.success) {
          setInternships(response.data.data);
        }
      } catch (err) {
        setError('Failed to fetch internships');
      } finally {
        setLoading(false);
      }
    };

    fetchInternships();
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-[60vh]">
        <Loader className="w-12 h-12 text-blue-500 animate-spin" />
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[60vh] px-4">
        <AlertCircle className="w-12 h-12 text-red-500 mb-4" />
        <p className="text-red-500 text-center">{error}</p>
      </div>
    );
  }

  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-12">
          Internship Experience
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {internships.map((internship) => (
            <InternshipCard
              key={internship._id}
              {...internship}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
