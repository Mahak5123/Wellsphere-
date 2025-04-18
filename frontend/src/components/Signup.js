import React, { useState } from 'react';
import './index.css';
import axios from 'axios';

const Signup = () => {
  const [form, setForm] = useState({ username: '', email: '', password: '' });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:5000/api/auth/signup', form);
      console.log('Signup Response:', response.data);
      alert('Signup successful!');
    } catch (error) {
      console.error('Signup Error:', error.response?.data || error.message);
      alert('Signup failed, please check your input!');
    }
  };

  return (
    <div className="form-container">
      <h2 className="form-heading">Sign Up</h2>
      <form onSubmit={handleSubmit} className="form-content">
        <input
          type="text"
          name="username"
          placeholder="Name"
          onChange={handleChange}
          required
          className="form-input"
        />
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
          Sign Up
        </button>
      </form>
    </div>
  );
};

export default Signup;
