import React, { useEffect } from "react";
import shop from '../assets/about-sec-img.jpeg';

function About() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <div className="about-container">
        <div className="about-header">
          <h1>About Us</h1>
        </div>
        <div className="about-section">
        <div className="about-content">
          <p>
            Our company was founded in 2021 by a group of passionate individuals
            who wanted to make a difference in the world. We started small, but
            our vision and dedication quickly grew us into a global brand.
          </p>
          <p>
            Today, we are proud to be one of the leading companies in our
            industry, with a team of talented professionals who are committed to
            delivering exceptional results. Our mission is to provide innovative
            solutions that make a positive impact on people's lives.
          </p>
          <p>
            At the heart of our company is a strong sense of community and
            social responsibility. We believe that business should be a force
            for good, and we strive to make a positive difference in the world
            around us.
          </p>
          <p>
            Our team is made up of passionate individuals who are dedicated to
            making a difference. We are committed to delivering exceptional
            results and providing innovative solutions that make a positive
            impact on people's lives.
          </p>
        </div>
        <div className="about-image">
          <img className="ab-img" src={shop} alt="About Us Image" />
        </div>
       </div>
      </div>

    </>
  );
}

export default About;
