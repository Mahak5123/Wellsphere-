// ./components/Contact.jsx
import React from 'react';
import './index.css';

const Contact = () => (
  <section className="contact">
    <div className="container">
      <div className="section-header">
        <h3 className="section-title">Contact Us</h3>
        <p>
          Our team is here to help you with health inquiries and platform support.
        </p>
      </div>
      <div className="row contact-info">
        <div className="col-md-4">
          <div className="contact-address">
            <i className="ion-md-pin"></i>
            <h3>Address</h3>
            <address>JIIT, Uttar Pradesh, India</address>
          </div>
        </div>
        <div className="col-md-4">
          <div className="contact-phone">
            <i className="ion-md-call"></i>
            <h3>Phone Number</h3>
            <p><a href="tel:+91-9345223365">+91-9345223365</a></p>
          </div>
        </div>
        <div className="col-md-4">
          <div className="contact-email">
            <i className="ion-md-mail"></i>
            <h3>Email</h3>
            <p><a href="mailto:mahaksalecha61@gmail.com">mahaksalecha61@gmail.com</a></p>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default Contact;
