import React, { useEffect } from "react";
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from "react-icons/fa";


function Contact() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <div className="contact-container">
        <div className="contact-heading">
          <h1>Get in Touch</h1>
        </div>
        <div className="contact-main">
          <div className="contact-left">
            <p className="icon"><FaMapMarkerAlt /></p>
            <h4>Address</h4>
            <p>123 Main St, Karachi ,Pakistan</p> 
            <p className="icon"><FaPhoneAlt /></p>
            <h4>Phone</h4> 
            <p>+92 1234567890</p>
            <p className="icon"><FaEnvelope /></p>
            <h4>Email</h4> 
            <p>info@your domain.com</p>
            </div>
            <div className="contact-right">
            <form id="contact-form" action="/submit-form" method="POST">
                <div class="form-group">
                    <label for="name">Name</label>
                    <input type="text" autoComplete="none" id="name" name="name" required />
                </div>
                <div class="form-group">
                    <label for="email">Email</label>
                    <input type="email" autoComplete="none" id="email" name="email" required />
                </div>
                <div class="form-group">
                    <label for="message">Message</label>
                    <textarea id="message" name="message" rows="4" required ></textarea>
                </div>
                <button type="submit">Send Message</button>
            </form>
        
            </div>
          </div>
        </div>
    </>
  );
}

export default Contact;
