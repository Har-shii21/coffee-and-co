import React, { useState, useEffect } from 'react';
import { Coffee, Menu, X } from 'lucide-react';

const Navbar = ({ onOpenBooking }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      // Simple active link tracker on scroll
      const sections = ['home', 'menu', 'about', 'gallery', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileNav = () => {
    setIsMobileOpen(!isMobileOpen);
  };

  const handleMobileLinkClick = (sectionId) => {
    setIsMobileOpen(false);
    // Smooth scroll trigger
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
        <div className="navbar-container">
          <a href="#home" className="nav-logo" style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <Coffee size={24} className="nav-logo-icon" style={{ color: 'var(--color-accent)' }} />
            <span>Coffee & Co.</span>
          </a>

          <ul className="nav-menu">
            <li>
              <a 
                href="#home" 
                className={`nav-link ${activeSection === 'home' ? 'active' : ''}`}
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById('home').scrollIntoView({ behavior: 'smooth' });
                }}
              >
                Home
              </a>
            </li>
            <li>
              <a 
                href="#menu" 
                className={`nav-link ${activeSection === 'menu' ? 'active' : ''}`}
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById('menu').scrollIntoView({ behavior: 'smooth' });
                }}
              >
                Menu
              </a>
            </li>
            <li>
              <a 
                href="#about" 
                className={`nav-link ${activeSection === 'about' ? 'active' : ''}`}
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById('about').scrollIntoView({ behavior: 'smooth' });
                }}
              >
                About
              </a>
            </li>
            <li>
              <a 
                href="#gallery" 
                className={`nav-link ${activeSection === 'gallery' ? 'active' : ''}`}
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById('gallery').scrollIntoView({ behavior: 'smooth' });
                }}
              >
                Gallery
              </a>
            </li>
            <li>
              <a 
                href="#contact" 
                className={`nav-link ${activeSection === 'contact' ? 'active' : ''}`}
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById('contact').scrollIntoView({ behavior: 'smooth' });
                }}
              >
                Contact
              </a>
            </li>
            <li>
              <button onClick={onOpenBooking} className="btn nav-cta">
                Book a Table
              </button>
            </li>
          </ul>

          <button className="nav-toggle" onClick={toggleMobileNav} aria-label="Toggle navigation">
            <Menu size={26} />
          </button>
        </div>
      </nav>

      {/* Mobile Nav Sidebar */}
      <div className={`mobile-nav ${isMobileOpen ? 'open' : ''}`}>
        <div className="mobile-nav-header">
          <a href="#home" className="nav-logo" style={{ display: 'flex', alignItems: 'center', gap: '8px' }} onClick={() => setIsMobileOpen(false)}>
            <Coffee size={24} style={{ color: 'var(--color-accent)' }} />
            <span>Coffee & Co.</span>
          </a>
          <button className="mobile-nav-close" onClick={toggleMobileNav} aria-label="Close menu">
            <X size={26} />
          </button>
        </div>

        <ul className="mobile-nav-menu">
          <li>
            <a 
              href="#home" 
              className="mobile-nav-link" 
              onClick={(e) => { e.preventDefault(); handleMobileLinkClick('home'); }}
            >
              Home
            </a>
          </li>
          <li>
            <a 
              href="#menu" 
              className="mobile-nav-link" 
              onClick={(e) => { e.preventDefault(); handleMobileLinkClick('menu'); }}
            >
              Menu
            </a>
          </li>
          <li>
            <a 
              href="#about" 
              className="mobile-nav-link" 
              onClick={(e) => { e.preventDefault(); handleMobileLinkClick('about'); }}
            >
              About
            </a>
          </li>
          <li>
            <a 
              href="#gallery" 
              className="mobile-nav-link" 
              onClick={(e) => { e.preventDefault(); handleMobileLinkClick('gallery'); }}
            >
              Gallery
            </a>
          </li>
          <li>
            <a 
              href="#contact" 
              className="mobile-nav-link" 
              onClick={(e) => { e.preventDefault(); handleMobileLinkClick('contact'); }}
            >
              Contact
            </a>
          </li>
          <li className="mobile-nav-cta">
            <button 
              onClick={() => { setIsMobileOpen(false); onOpenBooking(); }} 
              className="btn btn-primary"
              style={{ width: '100%' }}
            >
              Book a Table
            </button>
          </li>
        </ul>
      </div>

      {/* Overlay backdrop when mobile drawer is open */}
      <div 
        className={`mobile-overlay ${isMobileOpen ? 'visible' : ''}`}
        onClick={toggleMobileNav}
      />
    </>
  );
};

export default Navbar;
