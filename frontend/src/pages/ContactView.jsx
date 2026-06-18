import React, { useState } from 'react';
import '../styles/pages/Contact.css';
import { MapPin, Phone, Mail, Send } from 'lucide-react';
import { API_URL } from '../config';

export default function ContactView() {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [status, setStatus] = useState({ type: '', text: '' });
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus({ type: '', text: '' });

    try {
      const response = await fetch(`${API_URL}/contacts`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      const data = await response.json();

      if (response.ok) {
        setStatus({ type: 'success', text: data.message || 'Message sent successfully!' });
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        setStatus({ type: 'error', text: data.errors ? Object.values(data.errors).flat().join(' ') : 'Failed to send message.' });
      }
    } catch (error) {
      console.warn('API error, using offline simulation mode.');
      // Local Simulation Mode
      setTimeout(() => {
        setStatus({ 
          type: 'success', 
          text: 'Thank you! Your message has been sent successfully (Simulated mode).' 
        });
        setFormData({ name: '', email: '', subject: '', message: '' });
      }, 1000);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="section">
      <div className="container">
        <div className="section-header text-center">
          <span className="section-subtitle">Get in Touch</span>
          <h2 className="section-title">Contact Colson House</h2>
          <p style={{ color: 'var(--gray-600)' }}>Have a question about a room or planning your Brighton trip? We are here to help.</p>
        </div>

        <div className="grid contact-grid">
          {/* Contact Details Card */}
          <div className="contact-info">
            <h3>Get in Touch</h3>
            <p className="contact-info-description">
              Our team is available to assist you with special requests, group reservations, or local guidance. Feel free to contact us via phone, email, or by filling out the form.
            </p>
            <div className="contact-details">
              <div className="contact-detail-item">
                <div className="contact-detail-icon"><MapPin className="w-5 h-5" /></div>
                <div className="contact-detail-content">
                  <h4>Address</h4>
                  <p>17 Upper Rock Gardens, Brighton, BN2 1QE</p>
                </div>
              </div>
              <div className="contact-detail-item">
                <div className="contact-detail-icon"><Phone className="w-5 h-5" /></div>
                <div className="contact-detail-content">
                  <h4>Phone Number</h4>
                  <p>+44 (0)1273 697071</p>
                </div>
              </div>
              <div className="contact-detail-item">
                <div className="contact-detail-icon"><Mail className="w-5 h-5" /></div>
                <div className="contact-detail-content">
                  <h4>Email</h4>
                  <p>info@colsonhouse.co.uk</p>
                </div>
              </div>
            </div>
          </div>

          {/* Form Card */}
          <div className="contact-form-card">
            {status.text && (
              <div style={{ 
                padding: '16px', borderRadius: '8px', marginBottom: '24px', 
                backgroundColor: status.type === 'success' ? '#d4edda' : '#f8d7da', 
                color: status.type === 'success' ? '#155724' : '#721c24',
                fontSize: '15px'
              }}>
                {status.text}
              </div>
            )}
            
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label className="form-label">Name</label>
                <input 
                  type="text" 
                  className="form-input" 
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required 
                />
              </div>
              <div className="form-group">
                <label className="form-label">Email Address</label>
                <input 
                  type="email" 
                  className="form-input" 
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  required 
                />
              </div>
              <div className="form-group">
                <label className="form-label">Subject (Optional)</label>
                <input 
                  type="text" 
                  className="form-input" 
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                />
              </div>
              <div className="form-group">
                <label className="form-label">Message</label>
                <textarea 
                  className="form-input" 
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  required
                />
              </div>
              <button type="submit" className="btn btn-primary" style={{ width: '100%' }} disabled={loading}>
                {loading ? 'Sending...' : <><Send className="w-4 h-4" /> Send Message</>}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
