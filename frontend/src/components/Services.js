import React from 'react';
import { Link } from 'react-router-dom'; // Already imported
import './index.css';

const Services = () => {
  return (
    <section id="services" className="services">
      <div className="container">
        <header className="section-header">
          <h3>Services</h3>
          <p>
            "WellSphere offers comprehensive healthcare services, including AI-driven health insights, doctor consultations, disease guides, mental wellness support, and accessible medical aid for those in need."
          </p>
        </header>

        <div className="row text-center">
          {/* Registration */}
          <div className="col-md-3 col-sm-6 mb-4">
            <div className="single-service">
              <i className="ion-ios-desktop"></i>
              <h4><Link to="/register">USER REGISTRATION</Link></h4>
              <p>Easily sign up to access personalized health services.</p>
            </div>
          </div>

          {/* Chatbot */}
          <div className="col-md-3 col-sm-6 mb-4">
            <div className="single-service">
              <i className="ion-ios-laptop"></i>
              <h4><Link to="/chatbot">CHATBOT</Link></h4>
              <p>Get instant health support with our AI-powered chatbot.</p>
            </div>
          </div>

          {/* Dashboard */}
          <div className="col-md-3 col-sm-6 mb-4">
            <div className="single-service">
              <i className="ion-ios-tablet-portrait"></i>
              <h4><Link to="/mood-recommendation">MOOD ENHANCER</Link></h4> {/* Update this link */}
              <p>Track and manage your daily mood activities effortlessly.</p>
            </div>
          </div>

          {/* Disease Predictor (ML Model) */}
          <div className="col-md-3 col-sm-6 mb-4">
            <div className="single-service">
              <i className="ion-ios-phone-portrait"></i>
              <h4><Link to="/disease-predictor">DISEASE SPECIFIC GUIDE & SELF CARE PLAN</Link></h4>
              <p>Personalized self-care recommendations powered by AI.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
