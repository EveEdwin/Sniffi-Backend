import React, { useState } from 'react';
import Component1Form from '../components/Component1Form';

const FormInputPage = () => {
  const [benefits, setBenefits] = useState([{ title: '', description: '' }]);
  const [formData, setFormData] = useState([]);

  const handleBenefitChange = (index, field, value) => {
    const updated = [...benefits];
    updated[index][field] = value;
    setBenefits(updated);
  };

  const addBenefit = () => {
    setBenefits([...benefits, { title: '', description: '' }]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (benefits.some(b => !b.title || !b.description)) {
      alert('Please fill in all fields.');
      return;
    }

    setFormData(benefits);
    console.log("Form Data:", benefits);
    localStorage.setItem('petForm', JSON.stringify(benefits));
    alert('Form data saved locally!');
  };

  return (
    <div className="max-w-4xl mx-auto p-4">
      <form onSubmit={handleSubmit} className="space-y-6">
        {benefits.map((b, idx) => (
          <div key={idx} className="mb-4 border p-3 rounded">
            <input
              type="text"
              placeholder="Title"
              value={b.title}
              onChange={(e) => handleBenefitChange(idx, 'title', e.target.value)}
              className="w-full p-2 mb-2 border rounded"
              required
            />
            <textarea
              placeholder="Description"
              value={b.description}
              onChange={(e) => handleBenefitChange(idx, 'description', e.target.value)}
              className="w-full p-2 border rounded"
              required
            />
          </div>
        ))}
        <button
          type="button"
          onClick={addBenefit}
          className="px-4 py-2 bg-gray-200 rounded"
        >
          + Add Benefit
        </button>

        <button type="submit" className="px-6 py-2 bg-[#FE5F62] text-white font-semibold rounded">
          Save & Submit
        </button>
      </form>

      <div>
        <h2 className="text-lg font-semibold mt-6">Saved Data (Console View):</h2>
        <pre className="bg-gray-100 p-4 rounded text-sm whitespace-pre-wrap">
          {JSON.stringify(formData, null, 2)}
        </pre>
      </div>
    </div>
  );
};

export default FormInputPage;
