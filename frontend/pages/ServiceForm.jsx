import React, { useState, useEffect } from 'react';

const ServiceForm = () => {
  const [serviceData, setServiceData] = useState({
    title: '',
    desc: '',
    status: 'Explore →', // Default value for status
    route: '/services/wellness', // Default value for route
  });

  const handleInputChange = (field, value) => {
    const updatedData = { ...serviceData, [field]: value };
    setServiceData(updatedData);
  };

  // Update the route based on the title when the title changes
  useEffect(() => {
    if (serviceData.title) {
      // Convert spaces to hyphens and lowercase the title
      const routeValue = `/services/${serviceData.title.replace(/\s+/g, '-').toLowerCase()}`;
      setServiceData((prevData) => ({ ...prevData, route: routeValue }));
    }
  }, [serviceData.title]);

  const handleSubmit = () => {
    // Save data to localStorage
    localStorage.setItem('serviceData', JSON.stringify(serviceData));
  
    // You can also log the data to the console
    console.log('Service Data:', serviceData);
  };
  

  return (
    <div className="max-w-2xl mx-auto p-6 bg-gray-100 rounded-lg shadow-md">
      <h2 className="text-2xl font-semibold text-center text-gray-800 mb-6">Add New Service</h2>

      <div className="mb-4">
        <label className="block font-medium text-gray-700 mb-2">Title</label>
        <input
          type="text"
          value={serviceData.title}
          onChange={(e) => handleInputChange('title', e.target.value)}
          placeholder="Enter Service Title"
          className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      <div className="mb-4">
        <label className="block font-medium text-gray-700 mb-2">Description</label>
        <textarea
          value={serviceData.desc}
          onChange={(e) => handleInputChange('desc', e.target.value)}
          placeholder="Enter Service Description"
          className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
        />
      </div>

      <div className="mb-4">
        <label className="block font-medium text-gray-700 mb-2">Status</label>
        <input
          type="text"
          value={serviceData.status}
          onChange={(e) => handleInputChange('status', e.target.value)}
          placeholder="Enter Service Status"
          className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          style={{ display: 'none' }} // Hiding the input field
        />
      </div>

      <div className="mb-6">
        <label className="block font-medium text-gray-700 mb-2">Route</label>
        <input
          type="text"
          value={serviceData.route}
          onChange={(e) => handleInputChange('route', e.target.value)}
          placeholder="Enter Service Route"
          className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          disabled
          style={{ display: 'none' }} // Hiding the input field
        />
      </div>

      <button
        onClick={handleSubmit}
        className="w-full py-3 bg-red-500 text-white font-semibold rounded-lg hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-400"
      >
        Add Service
      </button>
    </div>
  );
};

export default ServiceForm;
