import React from 'react';
import { Calendar, Phone, Mail } from 'lucide-react';
import '../styles/pages/Book.css';

const BOOKING_URL = 'https://booking-directly.com/widgets/2FtcovmkVyAu40RKQAmygormLwDtQaaiPqUPvmBAmAEMHQRdo3lLtMhkIBSWY/properties';
const openBooking = () => window.open(BOOKING_URL, '_blank', 'noopener,noreferrer');

export default function BookView() {

  return (
    <section className="section">
      <div className="container">
        <div className="section-header text-center">
          <span className="section-subtitle">Reserve Your Stay</span>
          <h2 className="section-title">Book Direct With Us</h2>
          <p style={{ color: 'var(--gray-600)', maxWidth: '520px', margin: '0 auto' }}>
            Get the best rates, flexible cancellation options, and exclusive benefits when you book directly with us.
          </p>
        </div>

        {/* Booking CTA */}
        <div style={{ textAlign: 'center', margin: '32px 0 48px' }}>
          <button className="btn btn-primary" style={{ fontSize: '16px', padding: '14px 36px' }} onClick={openBooking}>
            <Calendar className="w-5 h-5" /> Check Availability
          </button>
        </div>

        <div className="book-options">
          <div className="book-option-card">
            <div className="book-option-icon"><Phone className="w-8 h-8" /></div>
            <h3>Call Us</h3>
            <p>Speak directly with our team to discuss your requirements and make a reservation by phone.</p>
            <a href="tel:+441273697071" className="btn btn-outline">
              <Phone className="w-4 h-4" /> +44 (0)1273 697071
            </a>
          </div>

          <div className="book-option-card">
            <div className="book-option-icon"><Mail className="w-8 h-8" /></div>
            <h3>Email Us</h3>
            <p>Send us an enquiry and our team will get back to you with availability and rates.</p>
            <a href="mailto:info@colsonhouse.co.uk" className="btn btn-outline">
              <Mail className="w-4 h-4" /> info@colsonhouse.co.uk
            </a>
          </div>
        </div>
      </div>

    </section>
  );
}
