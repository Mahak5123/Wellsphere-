import React, { useState } from 'react';
import axios from 'axios';

const Login = () => {
  const [form, setForm] = useState({ username: '', password: '' });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/api/auth/login', form);
      console.log('Login Response:', response.data);
      alert('Login successful!');
    } catch (error) {
      console.error('Login Error:', error.response?.data || error.message);
      alert('Login failed, please check your credentials!');
    }
  };

  return (
    <div style={{ display: 'flex', height: '100vh', fontFamily: 'Arial, sans-serif' }}>
      <div style={{ flex: 1, backgroundColor: '#00bcd4', color: 'white', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
        <h2>Welcome Back</h2>
        <p>To keep connected with us, please login with your personal info</p>
      </div>
      <div style={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
        <h2>Login</h2> {/* changed here */}
        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', width: '300px' }}>
          <input
            type="text" // changed from type="username" to type="text"
            name="username"
            placeholder="Username"
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
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
