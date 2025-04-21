import React, { useState } from 'react';
import axios from 'axios'; // <- Add this
import './index.css';

const UserRegistration = () => {
  const [formData, setFormData] = useState({
    username: '', // Add username to formData
    email: '',
    password: '',
    confirmPassword: '',
  });

  const [mode, setMode] = useState('signup'); // "signup" or "login"

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { username, email, password, confirmPassword } = formData;

    // If in signup mode, check if passwords match
    if (mode === 'signup' && password !== confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    const endpoint = mode === 'signup'
      ? 'http://localhost:5000/api/auth/signup'
      : 'http://localhost:5000/api/auth/login';

    try {
      const res = await axios.post(endpoint, {
        username,  // Include username in the request payload for signup
        email,
        password,
      });

      console.log(`${mode} success`, res.data);
      alert(`${mode === 'signup' ? 'Signup' : 'Login'} successful!`);
      // You can redirect to a dashboard here
    } catch (err) {
      console.error(`${mode} error:`, err.response?.data || err.message);
      alert(err.response?.data?.message || 'Something went wrong.');
    }
  };

  const toggleMode = () => {
    setMode(mode === 'signup' ? 'login' : 'signup');
    setFormData({ username: '', email: '', password: '', confirmPassword: '' });
  };

  return (
    <section className="user-registration p-8">
      <div className="max-w-md mx-auto bg-white p-6 rounded shadow-md">
        <h2 className="text-2xl font-semibold text-center mb-6">
          {mode === 'signup' ? 'Sign Up' : 'Login'}
        </h2>

        <form onSubmit={handleSubmit}>
          {mode === 'signup' && (
            <div className="mb-4">
              <label htmlFor="username" className="block text-lg font-semibold">Username</label>
              <input
                type="text"
                id="username"
                name="username"
                value={formData.username}
                onChange={handleInputChange}
                required
                className="w-full p-2 border border-gray-300 rounded mt-2"
              />
            </div>
          )}

          <div className="mb-4">
            <label htmlFor="email" className="block text-lg font-semibold">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              required
              className="w-full p-2 border border-gray-300 rounded mt-2"
            />
          </div>

          <div className="mb-4">
            <label htmlFor="password" className="block text-lg font-semibold">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleInputChange}
              required
              className="w-full p-2 border border-gray-300 rounded mt-2"
            />
          </div>

          {mode === 'signup' && (
            <div className="mb-4">
              <label htmlFor="confirmPassword" className="block text-lg font-semibold">Confirm Password</label>
              <input
                type="password"
                id="confirmPassword"
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleInputChange}
                required
                className="w-full p-2 border border-gray-300 rounded mt-2"
              />
            </div>
          )}

          <button type="submit" className="w-full bg-blue-500 text-white p-2 rounded mt-4">
            {mode === 'signup' ? 'Sign Up' : 'Login'}
          </button>
        </form>

        <div className="mt-4 text-center">
          <p>
            {mode === 'signup' ? (
              <>Already have an account? <button onClick={toggleMode} className="text-blue-500 underline">Login</button></>
            ) : (
              <>Don't have an account? <button onClick={toggleMode} className="text-blue-500 underline">Sign Up</button></>
            )}
          </p>
        </div>
      </div>
    </section>
  );
};

export default UserRegistration;
