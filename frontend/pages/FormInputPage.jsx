import React, { useState } from 'react';
import Component1Form from '../components/Component1Form'; // Import other components as needed

const FormInputPage = () => {
  const [heading, setHeading] = useState('');
  const [benefits, setBenefits] = useState([{ title: '', description: '' }]);
  const [formData, setFormData] = useState({});

  // Handle changes in the benefits form fields
  const handleBenefitChange = (index, field, value) => {
    const updated = [...benefits];
    updated[index][field] = value;
    setBenefits(updated);
  };

  // Add a new benefit
  const addBenefit = () => {
    setBenefits([...benefits, { title: '', description: '' }]);
  };

  // Handle form submission and saving
  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Validate form
    if (!heading || benefits.some(b => !b.title || !b.description)) {
      alert('Please fill in all fields.');
      return;
    }

    // Construct the form data object
    const result = {
      heading,
      benefits
    };

    // Set the formData in state
    setFormData(result);

    // Log the result to the console
    console.log("Form Data:", result);

    // Save data to localStorage
    localStorage.setItem('petForm', JSON.stringify(result));

    // Optionally, show an alert (or any other notification)
    alert('Form data saved locally!');
  };

  return (
    <div className="max-w-4xl mx-auto p-4">
      <h1 className="text-2xl font-bold mb-6">Pet Service Form Builder</h1>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label className="block font-semibold mb-1">Heading</label>
          <input
            type="text"
            value={heading}
            onChange={(e) => setHeading(e.target.value)}
            className="w-full p-2 border rounded"
            placeholder="e.g. Why Choose At-Home Pet Care?"
            required
          />
        </div>

        <div>
          <label className="block font-semibold mb-2">Benefits</label>
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
        </div>

        {/* Single Submit Button */}
        <button type="submit" className="px-6 py-2 bg-[#FE5F62] text-white font-semibold rounded">
          Save & Submit
        </button>
      </form>

      {/* Optionally show the saved data in console for debug */}
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
