import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Loader } from 'lucide-react';

export default function Certifications() {
  const [certificates, setCertificates] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCertificates = async () => {
      try {
        const response = await axios.get('https://port-backend-onv7.onrender.com/api/certifications');
        if (Array.isArray(response.data)) {
          setCertificates(response.data);
        } else {
          setError('Invalid data format received');
        }
      } catch (err) {
        console.error('Fetch error:', err);
        setError('Failed to fetch certificates');
      } finally {
        setLoading(false);
      }
    };

    fetchCertificates();
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
      <div className="flex justify-center items-center min-h-[60vh]">
        <div className="text-red-500">{error}</div>
      </div>
    );
  }

  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-12">
          Certifications
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certificates.map((cert) => (
            <div key={cert._id} className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                {cert.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-1">
                {cert.issuer}
              </p>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                {cert.date}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
