import React, { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Check, Calendar, Users } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    guests: '2',
    date: '',
    time: '18:00',
    notes: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  const handleReset = () => {
    setIsSubmitted(false);
    setFormData({
      name: '',
      email: '',
      phone: '',
      guests: '2',
      date: '',
      time: '18:00',
      notes: ''
    });
  };

  return (
    <section id="contact">
      <div className="section-header">
        <span className="section-badge">Visit & Reserve</span>
        <h2 className="section-title">Get in Touch</h2>
        <p className="section-subtitle">
          Have questions or want to host a private tasting? Drop by or secure your favorite spot in advance.
        </p>
      </div>

      <div className="contact-grid">
        {/* Left Column: Info & store photo */}
        <div className="contact-info">
          <div className="info-card">
            <div className="info-icon-box">
              <MapPin size={20} />
            </div>
            <div>
              <h3 className="info-title">Our Location</h3>
              <p className="info-text">12, Roastery Lane, Koramangala 5th Block, Bengaluru, KA 560095</p>
            </div>
          </div>

          <div className="info-card">
            <div className="info-icon-box">
              <Phone size={20} />
            </div>
            <div>
              <h3 className="info-title">Phone Reservations</h3>
              <p className="info-text">+91 80 4920 1888 | +91 98765 04321</p>
            </div>
          </div>

          <div className="info-card">
            <div className="info-icon-box">
              <Mail size={20} />
            </div>
            <div>
              <h3 className="info-title">General Inquiries</h3>
              <p className="info-text">hello@coffeeandco.in</p>
            </div>
          </div>

          <div className="info-card">
            <div className="info-icon-box">
              <Clock size={20} />
            </div>
            <div>
              <h3 className="info-title">Opening Hours</h3>
              <p className="info-text">
                Weekdays: 8:00 AM – 10:00 PM <br />
                Weekends: 7:00 AM – 11:00 PM
              </p>
            </div>
          </div>

          <div 
            className="contact-map-card"
            style={{ backgroundImage: `url('https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&w=600&q=80')` }}
          >
            <div className="map-overlay" />
          </div>
        </div>

        {/* Right Column: Inline Reservation Card */}
        <div className="booking-card">
          {!isSubmitted ? (
            <>
              <h3 className="info-title" style={{ fontSize: '1.4rem', marginBottom: '8px' }}>Book a Table</h3>
              <p className="info-text" style={{ marginBottom: '24px' }}>Reserve a table in seconds. No deposit required.</p>
              
              <form onSubmit={handleSubmit} className="booking-form">
                <div className="form-group form-group-full">
                  <label className="form-label" htmlFor="contact-name">Name</label>
                  <input
                    type="text"
                    id="contact-name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your Name"
                    className="form-input"
                  />
                </div>

                <div className="form-group">
                  <label className="form-label" htmlFor="contact-email">Email</label>
                  <input
                    type="email"
                    id="contact-email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="email@domain.com"
                    className="form-input"
                  />
                </div>

                <div className="form-group">
                  <label className="form-label" htmlFor="contact-phone">Phone</label>
                  <input
                    type="tel"
                    id="contact-phone"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+91..."
                    className="form-input"
                  />
                </div>

                <div className="form-group">
                  <label className="form-label" htmlFor="contact-guests">Guests</label>
                  <select
                    id="contact-guests"
                    name="guests"
                    value={formData.guests}
                    onChange={handleChange}
                    className="form-input"
                  >
                    <option value="1">1 Guest</option>
                    <option value="2">2 Guests</option>
                    <option value="3">3 Guests</option>
                    <option value="4">4 Guests</option>
                    <option value="5">5+ Guests</option>
                  </select>
                </div>

                <div className="form-group">
                  <label className="form-label" htmlFor="contact-date">Date</label>
                  <input
                    type="date"
                    id="contact-date"
                    name="date"
                    required
                    value={formData.date}
                    onChange={handleChange}
                    className="form-input"
                  />
                </div>

                <div className="form-group">
                  <label className="form-label" htmlFor="contact-time">Time</label>
                  <input
                    type="time"
                    id="contact-time"
                    name="time"
                    required
                    value={formData.time}
                    onChange={handleChange}
                    className="form-input"
                  />
                </div>

                <div className="form-group form-group-full">
                  <label className="form-label" htmlFor="contact-notes">Notes</label>
                  <textarea
                    id="contact-notes"
                    name="notes"
                    rows="2"
                    value={formData.notes}
                    onChange={handleChange}
                    placeholder="Special requests or allergies..."
                    className="form-input"
                    style={{ resize: 'none' }}
                  />
                </div>

                <button type="submit" className="btn btn-primary booking-submit-btn">
                  Reserve Spot
                </button>
              </form>
            </>
          ) : (
            <div className="success-message">
              <div className="success-icon-box">
                <Check size={40} />
              </div>
              <h3 className="success-title">Booking Confirmed!</h3>
              <p className="success-text" style={{ marginBottom: '20px' }}>
                Thank you, <strong>{formData.name}</strong>. We have saved a spot for <strong>{formData.guests} guests</strong> on <strong>{formData.date}</strong> at <strong>{formData.time}</strong>.
              </p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', alignItems: 'center', marginBottom: '28px', background: 'var(--color-bg-light)', padding: '16px', borderRadius: '8px' }}>
                <span style={{ fontSize: '0.9rem', color: 'var(--color-text-dark)' }}>
                  <strong>Reservation Summary:</strong>
                </span>
                <span style={{ fontSize: '0.85rem', color: 'var(--color-text-light)' }}>
                  Date: {formData.date}
                </span>
                <span style={{ fontSize: '0.85rem', color: 'var(--color-text-light)' }}>
                  Time: {formData.time}
                </span>
                <span style={{ fontSize: '0.85rem', color: 'var(--color-text-light)' }}>
                  Party: {formData.guests} guests
                </span>
              </div>
              <button className="btn btn-primary" onClick={handleReset}>
                Make Another Booking
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Contact;
