import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { Phone, Mail, Calendar, ChevronDown, ChevronUp, ChevronLeft, ChevronRight } from 'lucide-react';
import AmenityIcon from '../components/AmenityIcon';
import { openBooking } from '../utils/booking';
import '../styles/pages/RoomDetails.css';

const DESC_LIMIT = 180;
const AMENITY_LIMIT = 8;

export default function RoomDetailsView({ rooms }) {
  const { slug } = useParams();
  const room = rooms.find(r => r.slug === slug);

  const [activeIdx, setActiveIdx] = useState(0);
  const [showFullDesc, setShowFullDesc] = useState(false);
  const [showAllAmenities, setShowAllAmenities] = useState(false);

  useEffect(() => {
    if (room) {
      const idx = room.images?.findIndex(img => img.is_primary);
      setActiveIdx(idx > 0 ? idx : 0);
    }
  }, [room]);

  if (!room) {
    return (
      <div className="container text-center section">
        <h2>Room Not Found</h2>
        <Link to="/rooms" className="btn btn-primary" style={{ marginTop: '24px' }}>Back to Rooms</Link>
      </div>
    );
  }

  const images = room.images || [];
  const activeImg = images[activeIdx]?.image_url || '';
  const prev = () => setActiveIdx(i => (i - 1 + images.length) % images.length);
  const next = () => setActiveIdx(i => (i + 1) % images.length);
  const visibleAmenities = showAllAmenities ? room.amenities : (room.amenities || []).slice(0, AMENITY_LIMIT);

  return (
    <div className="room-detail-page">

      {/* ── Hero banner ── */}
      <div className="room-detail-hero">
        {activeImg && <img src={activeImg} alt={room.name} className="room-detail-hero-img" />}
        <div className="room-detail-hero-overlay" />

        {/* Nav arrows */}
        {images.length > 1 && (
          <>
            <button className="rd-arrow rd-arrow-left" onClick={prev} aria-label="Previous">
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button className="rd-arrow rd-arrow-right" onClick={next} aria-label="Next">
              <ChevronRight className="w-5 h-5" />
            </button>
            <div className="rd-counter">{activeIdx + 1} / {images.length}</div>
          </>
        )}

        {/* Room name overlay */}
        <div className="room-detail-hero-title-wrap">
          <div className="container">
            <span className="section-subtitle" style={{ color: 'var(--secondary)' }}>Boutique Room</span>
            <h1 className="room-detail-hero-title">{room.name}</h1>
          </div>
        </div>
      </div>

      {/* ── Thumbnails ── */}
      {images.length > 1 && (
        <div className="rd-thumbs-bar">
          <div className="container">
            <div className="rd-thumbs">
              {images.map((img, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveIdx(idx)}
                  className={`rd-thumb ${idx === activeIdx ? 'active' : ''}`}
                  aria-label={`Image ${idx + 1}`}
                >
                  <img src={img.image_url} alt="" />
                </button>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* ── Body: info + sidebar ── */}
      <div className="container">
        <div className="room-detail-body">

          {/* Left: description + amenities */}
          <div className="room-detail-main">

            {/* Description */}
            <div className="rd-section">
              <h2 className="rd-section-title">About this room</h2>
              <p className="rd-description">
                {showFullDesc || room.description.length <= DESC_LIMIT
                  ? room.description
                  : room.description.slice(0, DESC_LIMIT) + '…'}
              </p>
              {room.description.length > DESC_LIMIT && (
                <button className="rd-toggle-btn" onClick={() => setShowFullDesc(v => !v)}>
                  {showFullDesc ? <>Show less <ChevronUp className="w-4 h-4" /></> : <>Read more <ChevronDown className="w-4 h-4" /></>}
                </button>
              )}
            </div>

            {/* Amenities */}
            {room.amenities?.length > 0 && (
              <div className="rd-section">
                <h2 className="rd-section-title">Room Amenities</h2>
                <div className="rd-amenity-grid">
                  {visibleAmenities.map((a, i) => (
                    <div key={i} className="rd-amenity-item">
                      <div className="rd-amenity-icon">
                        <AmenityIcon name={a.icon} className="w-4 h-4" />
                      </div>
                      <span>{a.name}</span>
                    </div>
                  ))}
                </div>
                {room.amenities.length > AMENITY_LIMIT && (
                  <button className="rd-toggle-btn" onClick={() => setShowAllAmenities(v => !v)}>
                    {showAllAmenities
                      ? <>Show less <ChevronUp className="w-4 h-4" /></>
                      : <>See all {room.amenities.length} amenities <ChevronDown className="w-4 h-4" /></>}
                  </button>
                )}
              </div>
            )}
          </div>

          {/* Right: booking card */}
          <aside className="rd-sidebar">
            <div className="rd-booking-card">
              <p className="rd-booking-card-label">Book this room</p>
              <p className="rd-booking-card-sub">Best rates guaranteed when you book direct.</p>

              <button className="btn btn-primary rd-book-btn" onClick={openBooking}>
                <Calendar className="w-4 h-4" /> Check Availability
              </button>

              <div className="rd-divider" />

              <a href="tel:+441273697071" className="rd-contact-link">
                <div className="rd-contact-icon"><Phone className="w-4 h-4" /></div>
                <div>
                  <span className="rd-contact-label">Call us</span>
                  <span className="rd-contact-value">+44 (0)1273 697071</span>
                </div>
              </a>

              <a href="mailto:info@colsonhouse.co.uk" className="rd-contact-link">
                <div className="rd-contact-icon"><Mail className="w-4 h-4" /></div>
                <div>
                  <span className="rd-contact-label">Email us</span>
                  <span className="rd-contact-value">info@colsonhouse.co.uk</span>
                </div>
              </a>
            </div>
          </aside>

        </div>
      </div>

    </div>
  );
}
