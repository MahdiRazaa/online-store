import React from 'react';
import men from '../assets/hero.png';

function HeroSection() {
  return (
    <div className="Hero-section">
      <div className="text-container">
        <h1>Online</h1>
        <h2>Store</h2>
        <p>
          The world of fashion is ever-evolving, and staying on top of trends <br /> is key to 
          making a statement. Our fashion collections bring together <br /> the best of both worlds
        </p>
        <button className="btn1">Shop Now</button>
      </div>
      <div className="hero-img-container">
        <img src={men} alt='Fashion' />
      </div>
    </div>
  );
}

export default HeroSection;

