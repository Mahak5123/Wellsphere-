import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Components
import Header from './components/Header';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Services from './components/Services';
import Testimonials from './components/Testimonials';
import UserRegistration from './components/UserRegistration';
import Login from './components/Login';
import Signup from './components/Signup';
import GroqChatbot from './components/GroqChatbot';
import DiseasePredictor from './components/DiseasePredictor';
import MoodRecommendation from './components/MoodRecommendation';

// Styles
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

        {/* Disease Predictor Page */}
        <Route path="/disease-predictor" element={<DiseasePredictor />} />

        {/* Chatbot Page */}
        <Route path="/chatbot" element={<GroqChatbot />} />

        {/* User Registration Page */}
        <Route path="/register" element={<UserRegistration />} />

        {/* Mood Recommendation Page */}
        <Route path="/mood-recommendation" element={<MoodRecommendation />} />

        {/* Login Page */}
        <Route path="/login" element={<Login />} />

        {/* Signup Page */}
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </Router>
  );
}

export default App;
