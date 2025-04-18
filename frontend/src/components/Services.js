import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import './index.css'; // Make sure Bootstrap and your styles are included

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

        {/* Single row with 4 columns */}
        <div className="row text-center">
          <div className="col-md-3 col-sm-6 mb-4">
            <div className="single-service">
              <i className="ion-ios-desktop"></i>
              {/* Use Link component for routing */}
              <h4><Link to="/register">USER REGISTRATION</Link></h4>
              <p>Easily sign up to access personalized health services.</p>
            </div>
          </div>

          <div className="col-md-3 col-sm-6 mb-4">
            <div className="single-service">
              <i className="ion-ios-laptop"></i>
              <h4><a href="chatbot.html">CHATBOT</a></h4>
              <p>Get instant health support with our AI-powered chatbot.</p>
            </div>
          </div>

          <div className="col-md-3 col-sm-6 mb-4">
            <div className="single-service">
              <i className="ion-ios-tablet-portrait"></i>
              <h4><a href="dashboard.html">DASHBOARD</a></h4>
              <p>Track and manage your daily health activities effortlessly.</p>
            </div>
          </div>

          <div className="col-md-3 col-sm-6 mb-4">
            <div className="single-service">
              <i className="ion-ios-phone-portrait"></i>
              <h4><a href="selfcare.html">DISEASE SPECIFIC GUIDE & SELF CARE PLAN</a></h4>
              <p>Personalized self-care recommendations powered by AI.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
