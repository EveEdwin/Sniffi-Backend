import { useState } from 'react';
import API from '../api/api';

function HomeUploader() {
  const [formData, setFormData] = useState({
    heading: '',
    description: ''
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    await API.post('/save', {
      pageType: 'home',
      data: formData
    });
    alert('Home data saved');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        placeholder="Heading"
        value={formData.heading}
        onChange={(e) => setFormData({ ...formData, heading: e.target.value })}
      />
      <textarea
        placeholder="Description"
        value={formData.description}
        onChange={(e) => setFormData({ ...formData, description: e.target.value })}
      />
      <button type="submit">Save</button>
    </form>
  );
}

export default HomeUploader;
