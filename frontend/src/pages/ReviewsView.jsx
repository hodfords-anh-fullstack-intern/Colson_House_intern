import React from 'react';

export default function ReviewsView() {
  return (
    <section className="section">
      <div className="container">
        <div className="section-header text-center">
          <span className="section-subtitle">Testimonials</span>
          <h2 className="section-title">What Our Guests Say</h2>
          <p style={{ color: 'var(--gray-600)' }}>
            We take pride in our service. View live, verified guest feedback embedded directly from our reservation engine.
          </p>
        </div>

        {/* Freetobook Reviews Widget Iframe */}
        <div className="freetobook-container">
          <iframe
            src="https://www.freetobook.com/reviews/all?w_id=48235&w_tkn=2FtcovmkVyAu40RKQAmygormLwDtQaaiPqUPvmBAmAEMHQRdo3lLtMhkIBSWY&embedded=1"
            className="freetobook-iframe"
            style={{ height: '1200px' }}
            title="Freetobook Verified Guest Reviews"
          />
        </div>
      </div>
    </section>
  );
}
