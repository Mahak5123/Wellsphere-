import React from 'react';
import { Link } from 'react-router-dom';
import './index.css';

const Header = () => {
  return (
    <>
      {/* Header Section Start */}
      <header className="header">
        <div className="container-fluid">
          <div className="logo">
            <h1>
              <Link to="/">WELLSPHERE</Link>
            </h1>
          </div>
          <nav id="nav-menu-container">
            <ul className="nav-menu">
              <li className="menu-active">
                <Link to="/">Home</Link>
              </li>
              {/* Additional menu items can go here */}
            </ul>
          </nav>
        </div>
      </header>

      {/* Hero Section Start */}
      <section className="slider">
        <div className="slider-container">
          <div className="carousel-item active">
            <div className="carousel-background">
              <img
                src="https://img.freepik.com/free-photo/medical-banner-with-doctor-wearing-goggles_23-2149611193.jpg?ga=GA1.1.302250554.1741105577&semt=ais_hybrid&w=740"
                alt="Doctor wearing goggles"
              />
            </div>
            <div className="carousel-container">
              <div className="carousel-content">
                <h2>Revolutionizing Healthcare for Everyone</h2>
                <p>
                  WellSphere is your all-in-one healthcare companion, offering AI-powered
                  health insights, disease guides, doctor consultations, and support for
                  underprivileged communities. Join us in making quality healthcare accessible to all.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Header;
