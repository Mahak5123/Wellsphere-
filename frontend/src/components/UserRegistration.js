import React, { useState } from 'react';
import axios from 'axios';

const UserRegistration = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const [mode, setMode] = useState('signup'); // 'signup' or 'login'

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

    if (mode === 'signup' && password !== confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    const endpoint = mode === 'signup'
      ? 'http://localhost:5000/api/auth/signup'
      : 'http://localhost:5000/api/auth/login';

    const payload = mode === 'signup'
      ? { username, email, password }
      : { email, password };

    try {
      if (mode === 'signup') {
        // Signup
        const res = await axios.post(endpoint, payload);
        console.log('Signup success:', res.data);
        alert('Signup successful! Now logging in...');

        // Automatically login without clearing email
        const loginRes = await axios.post('http://localhost:5000/api/auth/login', { email, password });
        console.log('Login success:', loginRes.data);
        alert('Login successful!');

        // Redirect after successful login
        window.location.href = "/#services";
      } else {
        // Login
        const res = await axios.post(endpoint, payload);
        console.log('Login success:', res.data);
        alert('Login successful!');

        window.location.href = "/#services";
      }
    } catch (err) {
      console.error(`${mode} error:`, err.response?.data || err.message);
      alert(err.response?.data?.message || 'Something went wrong.');
    }
  };

  const toggleMode = () => {
    setMode(prevMode => prevMode === 'signup' ? 'login' : 'signup');
    setFormData({ username: '', email: '', password: '', confirmPassword: '' });
  };

  return (
    <div style={containerStyle}>
      <div style={cardStyle}>

        {/* Left Panel */}
        <div style={leftPanelStyle}>
          <h2 style={{ fontSize: '28px', marginBottom: '20px' }}>Welcome Friend</h2>
          <p style={{ fontSize: '16px', marginBottom: '30px', textAlign: 'center' }}>
            {mode === 'signup'
              ? 'Already have an account? Login with your credentials.'
              : 'New here? Sign up to get started.'}
          </p>
          <button onClick={toggleMode} style={toggleButtonStyle}>
            {mode === 'signup' ? 'Sign In' : 'Sign Up'}
          </button>
        </div>

        {/* Right Panel */}
        <div style={rightPanelStyle}>
          <h2 style={formTitleStyle}>
            {mode === 'signup' ? 'Create Account' : 'Login'}
          </h2>

          <form onSubmit={handleSubmit}>
            {mode === 'signup' && (
              <>
                <label htmlFor="username" style={labelStyle}>Username</label>
                <input
                  type="text"
                  id="username"
                  name="username"
                  value={formData.username}
                  onChange={handleInputChange}
                  required
                  style={inputStyle}
                />
              </>
            )}

            <label htmlFor="email" style={labelStyle}>Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              required
              style={inputStyle}
            />

            <label htmlFor="password" style={labelStyle}>Password</label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleInputChange}
              required
              style={inputStyle}
            />

            {mode === 'signup' && (
              <>
                <label htmlFor="confirmPassword" style={labelStyle}>Confirm Password</label>
                <input
                  type="password"
                  id="confirmPassword"
                  name="confirmPassword"
                  value={formData.confirmPassword}
                  onChange={handleInputChange}
                  required
                  style={inputStyle}
                />
              </>
            )}

            <button type="submit" style={submitButtonStyle}>
              {mode === 'signup' ? 'Sign Up' : 'Login'}
            </button>
          </form>

          <div style={bottomTextStyle}>
            {mode === 'signup' ? (
              <>
                Already have an account?
                <button onClick={toggleMode} style={linkButtonStyle}>Login</button>
              </>
            ) : (
              <>
                Don't have an account?
                <button onClick={toggleMode} style={linkButtonStyle}>Sign Up</button>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

// ---------- Styles ----------
const containerStyle = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  minHeight: '100vh',
  background: '#f5f7fa',
  fontFamily: 'Arial, sans-serif',
};

const cardStyle = {
  display: 'flex',
  width: '800px',
  background: 'white',
  borderRadius: '10px',
  overflow: 'hidden',
  boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
};

const leftPanelStyle = {
  background: 'linear-gradient(135deg, rgb(127, 184, 105), rgb(138, 209, 160))',
  flex: 1,
  color: 'white',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  padding: '40px',
};

const toggleButtonStyle = {
  background: 'white',
  color: '#455941',
  border: 'none',
  padding: '10px 30px',
  fontSize: '16px',
  fontWeight: 'bold',
  borderRadius: '20px',
  cursor: 'pointer',
  transition: '0.3s',
};

const rightPanelStyle = {
  flex: 1,
  padding: '40px',
  background: '#ffffff',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
};

const formTitleStyle = {
  fontSize: '26px',
  color: '#333',
  textAlign: 'center',
  marginBottom: '20px',
};

const labelStyle = {
  display: 'block',
  marginBottom: '8px',
  fontSize: '14px',
  fontWeight: 'bold',
  color: '#555',
};

const inputStyle = {
  width: '100%',
  padding: '12px',
  marginBottom: '20px',
  border: '1px solid #ccc',
  borderRadius: '8px',
  transition: '0.3s',
};

const submitButtonStyle = {
  width: '100%',
  padding: '12px',
  background: '#455941',
  color: 'white',
  fontSize: '16px',
  fontWeight: 'bold',
  border: 'none',
  borderRadius: '8px',
  cursor: 'pointer',
  transition: '0.3s',
};

const bottomTextStyle = {
  textAlign: 'center',
  marginTop: '15px',
  fontSize: '14px',
  color: '#555',
};

const linkButtonStyle = {
  background: 'none',
  color: '#455941',
  border: 'none',
  cursor: 'pointer',
  textDecoration: 'underline',
  fontSize: '14px',
  marginLeft: '5px',
};

export default UserRegistration;
