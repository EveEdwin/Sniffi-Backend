import React from 'react';
import { Routes, Route } from 'react-router-dom';
import FormInputPage from '../pages/FormInputPage';  // Make sure the path is correct
import ServicePage from '../pages/ServicePage';  // Import ServicePage
import ServiceForm from '../pages/ServiceForm';  // Import ServiceForm

const App = () => {
  return (
    <Routes>
      {/* Route for the main form input page */}
      <Route path="/" element={<FormInputPage />} />

      {/* Route for displaying services */}
      <Route path="/services" element={<ServicePage />} />

      {/* Route for adding a new service */}
      <Route path="/services/new" element={<ServiceForm />} />
    </Routes>
  );
};

export default App;
