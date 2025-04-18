import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Header from './components/Header';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Services from './components/Services';
import Testimonials from './components/Testimonials'; 
import UserRegistration from './components/UserRegistration';
import Login from './components/Login';     // ✅ Import Login
import Signup from './components/Signup';   // ✅ Import Signup
import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        {/* Home Page */}
        <Route
          path="/"
          element={
            <>
              <Header />
              <About />
              <Services />
              <Testimonials />
              <Contact />
              <Footer />
            </>
          }
        />

        {/* Registration Page */}
        <Route path="/register" element={<UserRegistration />} />

        {/* Login Page */}
        <Route path="/login" element={<Login />} />

        {/* Signup Page */}
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </Router>
  );
}

export default App;
