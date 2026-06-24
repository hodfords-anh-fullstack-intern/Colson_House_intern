import React from 'react';
import { Helmet } from 'react-helmet-async';
import RoomCard from '../components/RoomCard';

export default function RoomsView({ rooms }) {
  return (
    <>
    <Helmet>
      <title>Rooms | Colson House Brighton</title>
      <meta name="description" content="Explore our movie-star themed boutique rooms at Colson House, Brighton. All rooms include en-suite bathrooms and 5-star linen." />
    </Helmet>
    <section className="section">
      <div className="container">
        <div className="section-header text-center">
          <span className="section-subtitle">Accommodation</span>
          <h2 className="section-title">Our Rooms & Suites</h2>
          <p style={{ color: 'var(--gray-600)' }}>
            Each room is named after an icon of cinema and beautifully decorated. Find the perfect sanctuary for your Brighton stay.
          </p>
        </div>

        <div className="grid rooms-grid">
          {rooms.map(room => (
            <RoomCard key={room.id} room={room} />
          ))}
        </div>
      </div>
    </section>
    </>
  );
}
