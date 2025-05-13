import { useState } from 'react';
import API from '../api/api';

function ServiceUploader() {
  const [services, setServices] = useState([
    { title: '', desc: '', route: '' }
  ]);

  const handleChange = (index, field, value) => {
    const updated = [...services];
    updated[index][field] = value;
    setServices(updated);
  };

  const addService = () => {
    setServices([...services, { title: '', desc: '', route: '' }]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await API.post('/save', {
      pageType: 'services',
      data: services
    });
    alert('Service data saved');
  };

  return (
    <form onSubmit={handleSubmit}>
      {services.map((service, index) => (
        <div key={index}>
          <input
            placeholder="Title"
            value={service.title}
            onChange={(e) => handleChange(index, 'title', e.target.value)}
          />
          <input
            placeholder="Description"
            value={service.desc}
            onChange={(e) => handleChange(index, 'desc', e.target.value)}
          />
          <input
            placeholder="Route"
            value={service.route}
            onChange={(e) => handleChange(index, 'route', e.target.value)}
          />
        </div>
      ))}
      <button type="button" onClick={addService}>+ Add Service</button>
      <button type="submit">Save</button>
    </form>
  );
}

export default ServiceUploader;
