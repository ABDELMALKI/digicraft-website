// pages/Home.jsx
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Lottie from "lottie-react";
import codingAnimation from "../assets/Coding Slide.json";

const Home = () => {
  const navigate = useNavigate();

  // Scroll smoothly to "services" section
  const scrollToServices = () => {
    const section = document.getElementById("services");
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="home">
      {/* Hero Section */}
      <section className="hero">
        <div className="container">
          <div className="hero-content">
            <h1>Beautiful & Functional Digital Presence</h1>
            <p>
              Modern, responsive websites that deliver seamless user experiences
              and make your brand stand out online.
            </p>
            <div className="hero-buttons">
              {/* This one still goes to the contact page */}
              <Link to="/contact" className="btn btn-primary">
                Create Your Website
              </Link>

              {/* This one now scrolls down to the services section */}
              <button onClick={scrollToServices} className="btn btn-secondary">
                Our Services
              </button>
            </div>
          </div>
          <div className="hero-visual">
            <div className="lottie-container">
              <Lottie animationData={codingAnimation} loop={true} />
            </div>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="services-preview" id="services">
        <div className="container">
          <h2>Our Services</h2>
          <div className="services-grid">
            <div className="service-card">
              <div className="service-icon">💻</div>
              <h3>Web Design</h3>
              <p>Stunning, user-centered designs that capture your brand essence.</p>
            </div>
            <div className="service-card">
              <div className="service-icon">⚙️</div>
              <h3>Web Development</h3>
              <p>Robust, scalable websites built with modern technologies.</p>
            </div>
            <div className="service-card">
              <div className="service-icon">📱</div>
              <h3>Responsive Design</h3>
              <p>Perfect experiences across all devices and screen sizes.</p>
            </div>
          </div>
          <div className="center-btn">
            <Link to="/services" className="btn btn-outline">View All Services</Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="container">
          <h2>Ready to Transform Your Digital Presence?</h2>
          <p>
            Let's craft a website that reflects your vision and drives your success.
          </p>
          <Link to="/contact" className="btn btn-primary">Get Started Today</Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
