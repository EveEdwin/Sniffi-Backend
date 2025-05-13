import React, { useEffect, useState } from 'react';
// import axios from 'axios';

const ServicePage = () => {
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchServices = async () => {
    try {
      const response = await axios.get('http://localhost:5000/api/services'); // Adjust the URL if needed
      setServices(response.data);
    } catch (error) {
      console.error('Error fetching services:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchServices();
  }, []);

  return (
    <div className="max-w-5xl mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6 text-center">Available Services</h1>

      {loading ? (
        <p className="text-center text-gray-600">Loading services...</p>
      ) : (
        <div className="space-y-6">
          {services.length === 0 ? (
            <p className="text-center text-gray-500">No services found.</p>
          ) : (
            services.map((service, index) => (
              <div key={index} className="p-4 bg-white border rounded shadow">
                <h2 className="text-xl font-semibold text-red-500">{service.heading}</h2>
                <ul className="list-disc pl-6 mt-2">
                  {service.benefits.map((benefit, idx) => (
                    <li key={idx}>
                      <strong>{benefit.title}</strong>: {benefit.description}
                    </li>
                  ))}
                </ul>
              </div>
            ))
          )}
        </div>
      )}
    </div>
  );
};

export default ServicePage;
