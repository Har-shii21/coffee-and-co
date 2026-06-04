import React from 'react';
import heroBg from '../assets/hero-bg.png';

const Hero = ({ onOpenBooking }) => {
  const scrollToMenu = (e) => {
    e.preventDefault();
    const menuSection = document.getElementById('menu');
    if (menuSection) {
      menuSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section 
      id="home" 
      className="hero" 
      style={{ backgroundImage: `url(${heroBg})` }}
    >
      <div className="hero-overlay" />
      <div className="hero-container">
        <div className="hero-card">
          <span className="hero-badge">Welcome to Coffee & Co.</span>
          <h1 className="hero-title">Brewed Fresh, Served Warm.</h1>
          <p className="hero-subtitle">
            Indulge in a premium artisanal coffee experience. We source our beans ethically, roast them meticulously, and brew each cup with passion to perfection.
          </p>
          <div className="hero-actions">
            <a href="#menu" onClick={scrollToMenu} className="btn btn-primary">
              Explore Menu
            </a>
            <button onClick={onOpenBooking} className="btn btn-outline">
              Book a Table
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
