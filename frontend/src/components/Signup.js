import React, { useState } from 'react';
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
    <div style={{ display: 'flex', height: '100vh', fontFamily: 'Arial, sans-serif' }}>
      <div style={{ flex: 1, backgroundColor: '#00bcd4', color: 'white', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
        <h2>Welcome Friend</h2>
        <p>To keep connected with us, please login with your personal info</p>
        <button style={{ marginTop: '20px', padding: '10px 20px', backgroundColor: 'white', color: '#00bcd4', border: 'none', borderRadius: '20px', cursor: 'pointer' }}>
          Sign In
        </button>
      </div>
      <div style={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
        <h2>Create Account</h2>
        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', width: '300px' }}>
          <input
            type="text"
            name="username"
            placeholder="Name"
            onChange={handleChange}
            required
            style={{ margin: '10px 0', padding: '10px', borderRadius: '20px', border: '1px solid #ccc' }}
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            onChange={handleChange}
            required
            style={{ margin: '10px 0', padding: '10px', borderRadius: '20px', border: '1px solid #ccc' }}
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            onChange={handleChange}
            required
            style={{ margin: '10px 0', padding: '10px', borderRadius: '20px', border: '1px solid #ccc' }}
          />
          <button type="submit" style={{ marginTop: '10px', padding: '10px', borderRadius: '20px', backgroundColor: '#00bcd4', color: 'white', border: 'none', cursor: 'pointer' }}>
            Sign Up
          </button>
        </form>
      </div>
    </div>
  );
};

export default Signup;
