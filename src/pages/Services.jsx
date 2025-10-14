// pages/Services.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import Lottie from 'lottie-react';
import webDesignAnimation from '../assets/Maintenance web.json';
import webDevAnimation from '../assets/developer skills.json';
import responsiveAnimation from '../assets/Web Design.json';
import '../App.css'; // Import the CSS

const Services = () => {
  return (
    <div className="services">

      {/* Hero Section */}
      <section className="services-hero">
        <div className="container">
          <h1>Our Services</h1>
          <p>Comprehensive digital solutions to elevate your online presence</p>
        </div>
      </section>

      {/* Services Details Section */}
      <section className="services-details">
        <div className="container">

          {/* Service 1: Web Design */}
          <div className="service-card">
            <div className="service-detail">
              <div className="service-info">
                <h2>Web Design</h2>
                <p>We create visually stunning, user-centered designs that capture your brand essence and engage your audience. Our design process focuses on creating intuitive interfaces that guide users seamlessly.</p>
                <ul>
                  <li>User Experience (UX) Design</li>
                  <li>User Interface (UI) Design</li>
                  <li>Brand Identity Integration</li>
                  <li>Wireframing & Prototyping</li>
                </ul>
              </div>
              <div className="service-visual">
                <Lottie animationData={webDesignAnimation} loop={true} style={{ width: '100%', height: '400px' }} />
              </div>
            </div>
          </div>

          {/* Service 2: Web Development */}
          <div className="service-card">
            <div className="service-detail reverse">
              <div className="service-info">
                <h2>Web Development</h2>
                <p>Our development team builds robust, scalable websites using modern technologies. We ensure your website is fast, secure, and optimized for performance across all devices and browsers.</p>
                <ul>
                  <li>Frontend Development (React, Vue, etc.)</li>
                  <li>Backend Development</li>
                  <li>E-commerce Solutions</li>
                  <li>Content Management Systems</li>
                </ul>
              </div>
              <div className="service-visual">
                <Lottie animationData={webDevAnimation} loop={true} style={{ width: '100%', height: '400px' }} />
              </div>
            </div>
          </div>

          {/* Service 3: Responsive Design */}
          <div className="service-card">
            <div className="service-detail">
              <div className="service-info">
                <h2>Responsive Design</h2>
                <p>In today's multi-device world, your website needs to look and function perfectly across all screen sizes. We create responsive designs that provide optimal viewing experiences on desktops, tablets, and mobile devices.</p>
                <ul>
                  <li>Mobile-First Approach</li>
                  <li>Cross-Browser Compatibility</li>
                  <li>Performance Optimization</li>
                  <li>Progressive Web Apps</li>
                </ul>
              </div>
              <div className="service-visual">
                <Lottie animationData={responsiveAnimation} loop={true} style={{ width: '100%', height: '400px' }} />
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Call to Action Section */}
      <section className="services-cta">
        <div className="container">
          <h2>Ready to Get Started?</h2>
          <p>Let's discuss how we can help bring your digital vision to life.</p>
          <Link to="/contact" className="btn btn-primary">Contact Us Today</Link>
        </div>
      </section>

    </div>
  );
};

export default Services;
