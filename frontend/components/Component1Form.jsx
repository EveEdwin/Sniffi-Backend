import React, { useState } from 'react';

const Component1Form = ({ onChange }) => {
  const [componentData, setComponentData] = useState({ title: '', description: '' });

  const handleInputChange = (field, value) => {
    const updatedData = { ...componentData, [field]: value };
    setComponentData(updatedData);
    onChange(updatedData); // Passing data up to parent component
  };

  return (
    <div className="mb-6">
      <h2 className="text-xl font-semibold">Component 1 Form</h2>
      <div>
        <label className="block font-semibold mb-1">Title</label>
        <input
          type="text"
          value={componentData.title}
          onChange={(e) => handleInputChange('title', e.target.value)}
          className="w-full p-2 mb-2 border rounded"
          placeholder="Enter Title"
        />
      </div>

      <div>
        <label className="block font-semibold mb-1">Description</label>
        <textarea
          value={componentData.description}
          onChange={(e) => handleInputChange('description', e.target.value)}
          className="w-full p-2 mb-2 border rounded"
          placeholder="Enter Description"
        />
      </div>
    </div>
  );
};

export default Component1Form;
