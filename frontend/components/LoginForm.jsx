import React, { useState } from 'react';
import axios from 'axios';

const LoginForm = ({ onLogin }) => {
  const [credentials, setCredentials] = useState({ username: '', password: '' });

  const handleChange = (e) => setCredentials({ ...credentials, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await axios.post('http://localhost:5000/api/admin/login', credentials);
    localStorage.setItem('token', res.data.token);
    onLogin();
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4 w-72 mx-auto mt-32">
      <input name="username" value={credentials.username} onChange={handleChange} placeholder="Username" className="p-2 border rounded" />
      <input type="password" name="password" value={credentials.password} onChange={handleChange} placeholder="Password" className="p-2 border rounded" />
      <button type="submit" className="bg-blue-500 text-white p-2 rounded">Login</button>
    </form>
  );
};

export default LoginForm;
