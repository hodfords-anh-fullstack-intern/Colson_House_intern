import React from 'react';
import { MapPin } from 'lucide-react';

export default function LocationView() {
  return (
    <section className="section">
      <div className="container">
        <div className="section-header text-center">
          <span className="section-subtitle">Explore Brighton</span>
          <h2 className="section-title">Location & Attractions</h2>
          <p style={{ color: 'var(--gray-600)' }}>
            Located at 17 Upper Rock Gardens, Brighton. Find directions and discover what's right on our doorstep in Kemp Town.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1.2fr 0.8fr', gap: '48px', alignItems: 'start' }}>
          {/* Map Embed Container */}
          <div style={{ borderRadius: 'var(--border-radius)', overflow: 'hidden', boxShadow: 'var(--shadow-md)', height: '450px' }}>
            <iframe
              src="https://maps.google.com/maps?q=17+Upper+Rock+Gardens,+Brighton,+BN2+1QE,+UK&output=embed"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              title="Colson House Google Map"
            />
          </div>

          {/* Attractions Guide */}
          <div>
            <h3 style={{ fontSize: '28px', marginBottom: '20px' }}>Nearby Attractions</h3>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '24px' }}>
              <li style={{ display: 'flex', gap: '16px' }}>
                <div style={{ width: '40px', height: '40px', borderRadius: '50%', backgroundColor: 'var(--gray-100)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, color: 'var(--primary)' }}>
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h4 style={{ fontSize: '16px', fontWeight: '600' }}>Brighton Beach & Pier</h4>
                  <p style={{ color: 'var(--gray-600)', fontSize: '14px' }}>Just a short 5-minute walk from our doorstep. Perfect for morning strolls and sunset views.</p>
                </div>
              </li>
              <li style={{ display: 'flex', gap: '16px' }}>
                <div style={{ width: '40px', height: '40px', borderRadius: '50%', backgroundColor: 'var(--gray-100)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, color: 'var(--primary)' }}>
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h4 style={{ fontSize: '16px', fontWeight: '600' }}>The Royal Pavilion</h4>
                  <p style={{ color: 'var(--gray-600)', fontSize: '14px' }}>The spectacular exotic palace of King George IV, located 10 minutes walking distance.</p>
                </div>
              </li>
              <li style={{ display: 'flex', gap: '16px' }}>
                <div style={{ width: '40px', height: '40px', borderRadius: '50%', backgroundColor: 'var(--gray-100)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, color: 'var(--primary)' }}>
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h4 style={{ fontSize: '16px', fontWeight: '600' }}>The Lanes</h4>
                  <p style={{ color: 'var(--gray-600)', fontSize: '14px' }}>Brighton's historic quarter filled with indie boutique shops, cafes, and restaurants.</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
