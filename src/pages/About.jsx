import React from 'react';
import { FaLightbulb, FaCode, FaUsers } from 'react-icons/fa'; // Icons for values

const About = () => {
  return (
    <div className="about">
      {/* Hero Section */}
      <section className="about-hero">
        <div className="container">
          <h1>About Digicraft</h1>
          <p>Your partner in building a strong online identity</p>
        </div>
      </section>

      {/* About Content */}
      <section className="about-content">
        <div className="container about-grid">
          <div className="about-text">
            <h2>Who We Are</h2>
            <p>
              At Digicraft, we believe every brand deserves a digital presence that is both
              beautiful and functional. We craft modern, responsive websites that capture
              your brand’s essence and engage users seamlessly.
            </p>

            <h2>Our Mission</h2>
            <p>
              Transforming ideas into digital solutions is our mission. From concept to
              launch, we deliver websites optimized for performance, designed to captivate
              and tailored to your goals.
            </p>

            <h2>What Makes Us Different</h2>
            <p>
              Creativity meets technical expertise. We deliver exceptional results for
              startups, small businesses, and established brands alike, building a digital
              presence that drives measurable success.
            </p>
          </div>

          <div className="about-values">
            <div className="value-card gradient-hover">
              <FaLightbulb className="value-icon" />
              <h3>Creativity</h3>
              <p>We approach every project with fresh ideas and innovative solutions.</p>
            </div>
            <div className="value-card gradient-hover">
              <FaCode className="value-icon" />
              <h3>Technical Excellence</h3>
              <p>We use the latest technologies to build robust, scalable websites.</p>
            </div>
            <div className="value-card gradient-hover">
              <FaUsers className="value-icon" />
              <h3>Client-Focused</h3>
              <p>Your vision is our priority. We work closely with you every step of the way.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
