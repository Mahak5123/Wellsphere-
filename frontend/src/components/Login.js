// components/Login.js
import React, { useState } from 'react';
import './index.css';
import axios from 'axios'; // Import axios for making HTTP requests

const Login = () => {
  const [form, setForm] = useState({ email: '', password: '' });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:5000/api/auth/login', form);
      console.log('Login Response:', response.data);
      alert('Login successful!');
      // After successful login, you can handle actions such as redirecting to a dashboard
    } catch (error) {
      console.error('Login Error:', error.response?.data || error.message);
      alert('Login failed, please check your credentials!');
    }
  };

  return (
    <div className="form-container">
      <h2 className="form-heading">Login</h2>
      <form onSubmit={handleSubmit} className="form-content">
        <input
          type="email"
          name="email"
          placeholder="Email"
          onChange={handleChange}
          required
          className="form-input"
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          onChange={handleChange}
          required
          className="form-input"
        />
        <button type="submit" className="form-btn">
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
