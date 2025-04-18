import React from 'react';
import './index.css'; // Make sure styles are defined here

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="container">
          <div className="row">

            <div className="col-lg-3 col-md-6 footer-info">
              <h3>WELLSPHERE</h3>
              <p>
                Innovative healthcare platform designed to empower users with AI-driven chatbot support,
                a personalized health dashboard, a comprehensive disease guide, and seamless doctor connectivity —
                All in one place for a healthier you!
              </p>
            </div>

            <div className="col-lg-3 col-md-6 footer-links">
              <h4>About Us</h4>
              <ul>
                <li><i className="ion-md-arrow-dropright"></i> <a href="/home">Home</a></li>
                <li><i className="ion-md-arrow-dropright"></i> <a href="/about">About Us</a></li>
                <li><i className="ion-md-arrow-dropright"></i> <a href="/services">Our Services</a></li>
                <li><i className="ion-md-arrow-dropright"></i> <a href="/terms">Terms & Conditions</a></li>
                <li><i className="ion-md-arrow-dropright"></i> <a href="/privacy">Privacy Policy</a></li>
              </ul>
            </div>

            <div className="col-lg-3 col-md-6 footer-contact">
              <h4>Contact Us</h4>
              <p>
                Jaypee Institute of Information Technology<br />
                Noida, Uttar Pradesh<br />
                India <br />
                <strong>Phone:</strong> +91-9345223365<br />
                <strong>Email:</strong> mahaksalecha61@gmail.com<br />
              </p>

              <div className="social-links">
                <a href="https://twitter.com"><i className="ion-logo-twitter"></i></a>
                <a href="https://facebook.com"><i className="ion-logo-facebook"></i></a>
                <a href="https://linkedin.com"><i className="ion-logo-linkedin"></i></a>
                <a href="https://instagram.com"><i className="ion-logo-instagram"></i></a>
                <a href="https://youtube.com"><i className="ion-logo-youtube"></i></a>
              </div>
            </div>

            <div className="col-lg-3 col-md-6 footer-newsletter">
              <h4>Subscription</h4>
              <p>
                Subscribe to WellSphere and stay updated with the latest health tips, expert advice, and exclusive wellness insights.
                Join our community for a healthier tomorrow!
              </p>
              <form onSubmit={(e) => e.preventDefault()}>
                <input type="email" name="email" placeholder="Your email" required />
                <input type="submit" value="Subscribe" />
              </form>
            </div>

          </div>
        </div>
      </div>

      <div className="container">
        <div
          className="copyright"
          style={{
            textAlign: 'center',
            fontFamily: 'Arial, sans-serif',
            color: '#555'
          }}
        >
          &copy; Copyright <a
            href="https://freewebsitecode.com/"
            style={{ color: '#266819', fontWeight: 'bold' }}
          >WELLSPHERE</a> All Rights Reserved<br />
          <span style={{ fontWeight: 'bold', fontSize: '15px', color: '#777' }}>
            Crafted with <span style={{ color: 'red' }}>&#10084;</span> by Mahak and Shriya
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
