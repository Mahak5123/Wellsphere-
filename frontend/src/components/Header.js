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
                src="https://www.google.com/imgres?q=healthcare%20hd%20image&imgurl=https%3A%2F%2Fwallpapers.com%2Fimages%2Ffeatured%2Fhealthcare-oco8w27tkw40cp90.jpg&imgrefurl=https%3A%2F%2Fwallpapers.com%2Fhealthcare&docid=lVoE31tfv8V0HM&tbnid=Pdtpo4qUiLFXXM&vet=12ahUKEwjHqMKIr_uMAxX6R2cHHW-jM2QQM3oECBoQAA..i&w=1920&h=1107&hcb=2&ved=2ahUKEwjHqMKIr_uMAxX6R2cHHW-jM2QQM3oECBoQAA"
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
