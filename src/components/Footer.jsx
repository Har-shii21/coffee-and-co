import React, { useState } from 'react';
import { Coffee, ArrowRight } from 'lucide-react';

const Footer = () => {
  const [newsletterEmail, setNewsletterEmail] = useState('');

  const handleNewsletterSubmit = (e) => {
    e.preventDefault();
    alert(`Thank you for subscribing with ${newsletterEmail}! You have been added to our newsletter list for exclusive updates and coffee roasting workshops.`);
    setNewsletterEmail('');
  };

  const handleLinkClick = (sectionId) => {
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Brand Column */}
        <div className="footer-brand">
          <div className="footer-logo" style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <Coffee size={28} style={{ color: 'var(--color-accent)' }} />
            <span>Coffee & Co.</span>
          </div>
          <p className="footer-desc">
            Serving artisanal, hand-roasted specialty coffee in Koramangala, Bangalore. Dedicated to crafting memorable experiences one perfect cup at a time.
          </p>
          <div className="footer-socials">
            <a href="https://instagram.com" target="_blank" rel="noreferrer" className="social-icon-btn" aria-label="Instagram">
              <svg viewBox="0 0 24 24" width="18" height="18" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
              </svg>
            </a>
            <a href="https://facebook.com" target="_blank" rel="noreferrer" className="social-icon-btn" aria-label="Facebook">
              <svg viewBox="0 0 24 24" width="18" height="18" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
              </svg>
            </a>
            <a href="https://twitter.com" target="_blank" rel="noreferrer" className="social-icon-btn" aria-label="Twitter">
              <svg viewBox="0 0 24 24" width="18" height="18" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
              </svg>
            </a>
          </div>
        </div>

        {/* Quick Links Column */}
        <div className="footer-col">
          <h4 className="footer-heading">Quick Links</h4>
          <ul className="footer-links">
            <li>
              <a href="#home" className="footer-link" onClick={(e) => { e.preventDefault(); handleLinkClick('home'); }}>
                Home
              </a>
            </li>
            <li>
              <a href="#menu" className="footer-link" onClick={(e) => { e.preventDefault(); handleLinkClick('menu'); }}>
                Special Menu
              </a>
            </li>
            <li>
              <a href="#about" className="footer-link" onClick={(e) => { e.preventDefault(); handleLinkClick('about'); }}>
                About Our Café
              </a>
            </li>
            <li>
              <a href="#gallery" className="footer-link" onClick={(e) => { e.preventDefault(); handleLinkClick('gallery'); }}>
                Visual Gallery
              </a>
            </li>
            <li>
              <a href="#contact" className="footer-link" onClick={(e) => { e.preventDefault(); handleLinkClick('contact'); }}>
                Contact & Find Us
              </a>
            </li>
          </ul>
        </div>

        {/* Operating Hours Column */}
        <div className="footer-col">
          <h4 className="footer-heading">Opening Hours</h4>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
            <div className="footer-hours-row">
              <span className="footer-hours-day">Monday - Friday</span>
              <span>8:00 AM - 10:00 PM</span>
            </div>
            <div className="footer-hours-row">
              <span className="footer-hours-day">Saturday</span>
              <span>7:00 AM - 11:00 PM</span>
            </div>
            <div className="footer-hours-row">
              <span className="footer-hours-day">Sunday</span>
              <span>7:00 AM - 11:00 PM</span>
            </div>
            <div className="footer-hours-row">
              <span className="footer-hours-day">Holidays</span>
              <span>9:00 AM - 9:00 PM</span>
            </div>
          </div>
        </div>

        {/* Newsletter Column */}
        <div className="footer-col">
          <h4 className="footer-heading">Join the Club</h4>
          <p className="footer-desc" style={{ marginBottom: '10px' }}>
            Subscribe to receive specialty brew releases, farm-origin stories, and invitations to coffee cupping sessions.
          </p>
          <form onSubmit={handleNewsletterSubmit} style={{ display: 'flex', gap: '10px', width: '100%' }}>
            <input 
              type="email" 
              placeholder="Enter your email" 
              required
              value={newsletterEmail}
              onChange={(e) => setNewsletterEmail(e.target.value)}
              className="form-input"
              style={{ flexGrow: 1, padding: '10px 14px', borderRadius: '24px', border: '1px solid rgba(255, 255, 255, 0.2)', backgroundColor: 'rgba(255, 255, 255, 0.08)', color: 'var(--color-white)' }}
            />
            <button 
              type="submit" 
              className="btn btn-accent" 
              style={{ width: '40px', height: '40px', padding: 0, borderRadius: '50%', flexShrink: 0 }}
              aria-label="Subscribe to newsletter"
            >
              <ArrowRight size={18} />
            </button>
          </form>
        </div>
      </div>

      <div className="footer-bottom">
        <span>© {new Date().getFullYear()} Coffee & Co. All rights reserved.</span>
        <div>
          <a href="#privacy" className="footer-link" style={{ marginRight: '16px' }} onClick={(e) => { e.preventDefault(); alert("Privacy Policy is under formulation."); }}>Privacy Policy</a>
          <a href="#terms" className="footer-link" onClick={(e) => { e.preventDefault(); alert("Terms of Service is under formulation."); }}>Terms of Service</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
