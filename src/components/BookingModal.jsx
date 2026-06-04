import React, { useState } from 'react';
import { X, Check, Calendar, Users, Clock } from 'lucide-react';

const BookingModal = ({ isOpen, onClose }) => {
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

  if (!isOpen) return null;

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

  const handleClose = () => {
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
    onClose();
  };

  return (
    <div className="modal-overlay" onClick={handleClose}>
      <div className="modal-container" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={handleClose} aria-label="Close modal">
          <X size={24} />
        </button>

        {!isSubmitted ? (
          <>
            <h2 className="modal-title">Book a Table</h2>
            <p className="modal-subtitle">Reserve your premium coffee experience with us</p>

            <form onSubmit={handleSubmit} className="booking-form">
              <div className="form-group form-group-full">
                <label className="form-label" htmlFor="modal-name">Full Name</label>
                <input
                  type="text"
                  id="modal-name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="John Doe"
                  className="form-input"
                />
              </div>

              <div className="form-group">
                <label className="form-label" htmlFor="modal-email">Email Address</label>
                <input
                  type="email"
                  id="modal-email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="john@example.com"
                  className="form-input"
                />
              </div>

              <div className="form-group">
                <label className="form-label" htmlFor="modal-phone">Phone Number</label>
                <input
                  type="tel"
                  id="modal-phone"
                  name="phone"
                  required
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="+91 98765 43210"
                  className="form-input"
                />
              </div>

              <div className="form-group">
                <label className="form-label" htmlFor="modal-guests">Guests</label>
                <select
                  id="modal-guests"
                  name="guests"
                  value={formData.guests}
                  onChange={handleChange}
                  className="form-input"
                >
                  <option value="1">1 Person</option>
                  <option value="2">2 People</option>
                  <option value="3">3 People</option>
                  <option value="4">4 People</option>
                  <option value="5">5+ People</option>
                </select>
              </div>

              <div className="form-group">
                <label className="form-label" htmlFor="modal-date">Date</label>
                <input
                  type="date"
                  id="modal-date"
                  name="date"
                  required
                  value={formData.date}
                  onChange={handleChange}
                  className="form-input"
                />
              </div>

              <div className="form-group">
                <label className="form-label" htmlFor="modal-time">Preferred Time</label>
                <input
                  type="time"
                  id="modal-time"
                  name="time"
                  required
                  value={formData.time}
                  onChange={handleChange}
                  className="form-input"
                />
              </div>

              <div className="form-group form-group-full">
                <label className="form-label" htmlFor="modal-notes">Special Requests (Optional)</label>
                <textarea
                  id="modal-notes"
                  name="notes"
                  rows="2"
                  value={formData.notes}
                  onChange={handleChange}
                  placeholder="e.g. window seat, anniversary..."
                  className="form-input"
                  style={{ resize: 'none' }}
                />
              </div>

              <button type="submit" className="btn btn-primary booking-submit-btn">
                Confirm Reservation
              </button>
            </form>
          </>
        ) : (
          <div className="success-message">
            <div className="success-icon-box">
              <Check size={40} />
            </div>
            <h2 className="success-title">Table Reserved!</h2>
            <p className="success-text">
              Thank you, <strong>{formData.name}</strong>. Your reservation for <strong>{formData.guests} guests</strong> on <strong>{formData.date}</strong> at <strong>{formData.time}</strong> is confirmed.
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', alignItems: 'center', marginBottom: '24px' }}>
              <span style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', color: 'var(--color-text-light)', fontSize: '0.9rem' }}>
                <Calendar size={16} /> Date: {formData.date}
              </span>
              <span style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', color: 'var(--color-text-light)', fontSize: '0.9rem' }}>
                <Clock size={16} /> Time: {formData.time}
              </span>
              <span style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', color: 'var(--color-text-light)', fontSize: '0.9rem' }}>
                <Users size={16} /> Party Size: {formData.guests} people
              </span>
            </div>
            <button className="btn btn-primary" onClick={handleClose}>
              Done
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default BookingModal;
