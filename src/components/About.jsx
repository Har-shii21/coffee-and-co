import React from 'react';
import { Heart, Flame, Award } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="about">
      <div className="about-container">
        <span className="section-badge">Our Heritage</span>
        <h2 className="section-title">The Coffee & Co. Story</h2>
        
        <p className="about-story">
          Founded in 2018, Coffee & Co. was born out of a simple passion: to serve extraordinary coffee in an atmosphere that feels like home. We travel directly to coffee-growing regions, partnering with independent farmers who share our devotion to quality. Every single batch of beans is roasted in our custom micro-roasters to lock in its distinct regional notes, ensuring your cup is nothing short of exceptional.
        </p>

        <div className="about-features">
          <div className="feature-item">
            <div className="feature-icon-wrapper">
              <Heart size={28} />
            </div>
            <h3 className="feature-title">Ethically Sourced</h3>
            <p className="feature-desc">
              We pay premium prices directly to farmers, supporting sustainable community growth and ethical agricultural practices.
            </p>
          </div>

          <div className="feature-item">
            <div className="feature-icon-wrapper">
              <Flame size={28} />
            </div>
            <h3 className="feature-title">Artisan Roasted</h3>
            <p className="feature-desc">
              Roasted locally in small, controlled batches to highlight unique floral, fruity, and chocolatey undertones of the origin.
            </p>
          </div>

          <div className="feature-item">
            <div className="feature-icon-wrapper">
              <Award size={28} />
            </div>
            <h3 className="feature-title">Masterfully Brewed</h3>
            <p className="feature-desc">
              Our baristas are certified experts in espresso extraction, pour-over chemistry, and custom dairy/vegan frothing techniques.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
