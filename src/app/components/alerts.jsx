"use client"
import { useState } from 'react';

const AlertSection = () => {
  const [errors, setErrors] = useState([
    'Everything is Good',
    'Errors will be shown here',
  ]);

  const [warnings, setWarnings] = useState([
    'Low disk space on server.',
    'API rate limit nearing its threshold.',
  ]);

  return (
    <section className="container mx-auto px-8 py-16">
      <h2 className="text-3xl font-bold mb-4">System Alerts</h2>

      {errors.length > 0 && (
        <div className="bg-green-100 border-l-4 border-green-500 text-green-700 p-4 mb-4 rounded">
          <h3 className="font-bold text-xl mb-2">Errors</h3>
          <ul className="list-disc pl-5">
            {errors.map((error, index) => (
              <li key={index}>{error}</li>
            ))}
          </ul>
        </div>
      )}

      {warnings.length > 0 && (
        <div className="bg-yellow-100 border-l-4 border-yellow-500 text-yellow-700 p-4 mb-4 rounded">
          <h3 className="font-bold text-xl mb-2">Warnings</h3>
          <ul className="list-disc pl-5">
            {warnings.map((warning, index) => (
              <li key={index}>{warning}</li>
            ))}
          </ul>
        </div>
      )}
    </section>
  );
};

export default AlertSection;
