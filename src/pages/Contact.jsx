// pages/Contact.js
import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
    projectType: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Form will be handled by Netlify, but we'll still show success message
    console.log('Form submitted:', formData);
    alert('Thank you for your message! We will get back to you soon.');
    setFormData({
      name: '',
      email: '',
      message: '',
      projectType: ''
    });
  };

  return (
    <div className="contact">
      <section className="contact-hero">
        <div className="container">
          <h1>Contact Us</h1>
          <p>Let's start a conversation about your project</p>
        </div>
      </section>

      <section className="contact-content">
        <div className="container">
          <div className="contact-info">
            <h2>Get In Touch</h2>
            <p>Have a project in mind? We'd love to hear about it. Send us a message and we'll respond as soon as possible.</p>
            
            <div className="contact-details">
              <div className="contact-item">
                <h3>Email</h3>
                <p>digicraftc@gmail.com</p>
              </div>
              <div className="contact-item">
                <h3>Phone</h3>
                <p>+212 778938491</p>
              </div>
              <div className="contact-item">
                <h3>Social</h3>
                <div className="social-links">
                  <a href="https://www.instagram.com/digicraft.1?igsh=dmU4YTg4Z29qNWx6&utm_source=qr" aria-label="Instagram">Instagram</a>
                  <a href="https://wa.me/0778938491" aria-label="Whatssapp">Whatssapp</a>
                </div>
              </div>
            </div>
          </div>

          <div className="contact-form-container">
            <form 
              className="contact-form" 
              onSubmit={handleSubmit}
              netlify="true"
              name="contact"
              data-netlify="true"
            >
              {/* Hidden input for Netlify Forms */}
              <input type="hidden" name="form-name" value="contact" />
              
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="projectType">Project Type</label>
                <select
                  id="projectType"
                  name="projectType"
                  value={formData.projectType}
                  onChange={handleChange}
                >
                  <option value="">Select a project type</option>
                  <option value="web-design">Web Design</option>
                  <option value="web-development">Web Development</option>
                  <option value="redesign">Website Redesign</option>
                  <option value="other">Other</option>
                </select>
              </div>
              
              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  name="message"
                  rows="5"
                  value={formData.message}
                  onChange={handleChange}
                  required
                ></textarea>
              </div>
              
              <button type="submit" className="btn btn-primary">Send Message</button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;