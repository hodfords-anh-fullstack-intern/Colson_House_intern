import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/components/RoomCard.css';
import AmenityIcon from './AmenityIcon';

export default function RoomCard({ room }) {
  const primaryImage =
    room.images?.find(img => img.is_primary)?.image_url ||
    room.images?.[0]?.image_url ||
    'https://images.unsplash.com/photo-1540555700478-4be289fbecef?q=80&w=600';

  const topAmenities = (room.amenities || []).slice(0, 6);

  return (
    <div className="room-card flip-card">
      <div className="flip-card-inner">

        {/* Front */}
        <div className="flip-card-front">
          <div className="room-img-container">
            <img src={primaryImage} alt={room.name} className="room-img" />
            <div className="flip-card-badge">View Room</div>
          </div>
          <div className="flip-card-front-body">
            <h3 className="room-card-title">{room.name}</h3>
            <p className="room-card-description">{room.description}</p>
          </div>
        </div>

        {/* Back */}
        <div className="flip-card-back">
          <div className="flip-card-back-image" style={{ backgroundImage: `url('${primaryImage}')` }} />
          <div className="flip-card-back-overlay" />
          <div className="flip-card-back-content">
            <h3 className="flip-card-back-title">{room.name}</h3>

            {topAmenities.length > 0 && (
              <ul className="flip-card-amenities">
                {topAmenities.map((a, i) => (
                  <li key={i} className="flip-card-amenity-item">
                    <AmenityIcon name={a.icon} className="w-4 h-4" />
                    <span>{a.name}</span>
                  </li>
                ))}
              </ul>
            )}

            <div className="flip-card-actions">
              <Link to={`/rooms/${room.slug}`} className="btn btn-outline flip-btn">
                View Details
              </Link>
              <button
                className="btn btn-primary flip-btn"
                onClick={() => window.dispatchEvent(new CustomEvent('open-booking'))}
              >
                Book Room
              </button>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
