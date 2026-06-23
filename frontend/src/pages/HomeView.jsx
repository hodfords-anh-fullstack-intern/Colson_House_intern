import React, { useState, useEffect } from 'react';
import '../styles/pages/Home.css';
import { Link } from 'react-router-dom';
import { ArrowRight, ChevronRight, ChevronLeft } from 'lucide-react';
import { MOCK_ROOMS } from '../constants';

const HERO_SLIDES = [
  {
    url: 'https://colson.hodfords.net/wp-content/uploads/2021/06/IMG_2064.jpg',
    caption: 'Boutique Guest House • Brighton',
  },
  {
    url: 'https://colson.hodfords.net/wp-content/uploads/2021/06/IMG_1916.jpg',
    caption: 'Victorian Elegance & Seaside Charm',
  },
  {
    url: 'https://colson.hodfords.net/wp-content/uploads/2021/06/IMG_2066.jpg',
    caption: 'Movie-Star Themed Boutique Rooms',
  },
  ...MOCK_ROOMS.map(room => ({
    url: room.images.find(img => img.is_primary)?.image_url || room.images[0]?.image_url,
    caption: room.name,
  })),
];

export default function HomeView({ rooms }) {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent(prev => (prev + 1) % HERO_SLIDES.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const prev = () => setCurrent(c => (c - 1 + HERO_SLIDES.length) % HERO_SLIDES.length);
  const next = () => setCurrent(c => (c + 1) % HERO_SLIDES.length);

  return (
    <div>
      {/* Hero Slider Section */}
      <section className="hero" style={{ position: 'relative', overflow: 'hidden' }}>
        {HERO_SLIDES.map((slide, i) => (
          <div
            key={i}
            className="hero-bg"
            style={{
              backgroundImage: `url('${slide.url}')`,
              opacity: i === current ? 1 : 0,
              transition: 'opacity 0.8s ease-in-out',
              position: 'absolute',
              inset: 0,
              zIndex: 0,
            }}
          />
        ))}
        <div className="hero-overlay" style={{ zIndex: 1 }} />

        {/* Prev / Next arrows */}
        <button
          onClick={prev}
          aria-label="Previous slide"
          style={{
            position: 'absolute', left: '24px', top: '50%', transform: 'translateY(-50%)',
            zIndex: 3, background: 'rgba(0,0,0,0.35)', border: 'none', borderRadius: '50%',
            width: '44px', height: '44px', display: 'flex', alignItems: 'center', justifyContent: 'center',
            cursor: 'pointer', color: '#fff',
          }}
        >
          <ChevronLeft className="w-5 h-5" />
        </button>
        <button
          onClick={next}
          aria-label="Next slide"
          style={{
            position: 'absolute', right: '24px', top: '50%', transform: 'translateY(-50%)',
            zIndex: 3, background: 'rgba(0,0,0,0.35)', border: 'none', borderRadius: '50%',
            width: '44px', height: '44px', display: 'flex', alignItems: 'center', justifyContent: 'center',
            cursor: 'pointer', color: '#fff',
          }}
        >
          <ChevronRight className="w-5 h-5" />
        </button>

        {/* Dots */}
        <div style={{
          position: 'absolute', bottom: '24px', left: '50%', transform: 'translateX(-50%)',
          zIndex: 3, display: 'flex', gap: '8px',
        }}>
          {HERO_SLIDES.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              aria-label={`Go to slide ${i + 1}`}
              style={{
                width: i === current ? '24px' : '8px',
                height: '8px',
                borderRadius: '4px',
                background: i === current ? 'var(--primary)' : 'rgba(255,255,255,0.5)',
                border: 'none',
                cursor: 'pointer',
                padding: 0,
                transition: 'all 0.3s ease',
              }}
            />
          ))}
        </div>

        <div className="container hero-content" style={{ position: 'relative', zIndex: 2 }}>
          <span className="hero-subtitle">{HERO_SLIDES[current].caption}</span>
          <h1 className="hero-title">Experience Historic Seaside Luxury</h1>
          <p className="hero-description">
            A beautiful, movie-star themed Victorian boutique guest house nestled in the historic and vibrant heart of Kemp Town, Brighton.
          </p>
          <div className="hero-actions">
            <Link to="/book" className="btn btn-primary">
              Book Direct <ArrowRight className="w-4 h-4" />
            </Link>
            <Link to="/rooms" className="btn btn-outline" style={{ color: 'white', borderColor: 'white' }}>
              Explore Rooms
            </Link>
          </div>
        </div>
      </section>

      {/* Intro Section */}
      <section className="section" style={{ backgroundColor: 'var(--white)' }}>
        <div className="container" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '64px', alignItems: 'center' }}>
          <div>
            <span className="section-subtitle">Welcome to Colson House</span>
            <h2 className="section-title">A Friendly Guest House in the Heart of Brighton</h2>
            <p style={{ color: 'var(--gray-600)', marginBottom: '24px', fontSize: '16px' }}>
              Colson House is a friendly guest house located in Kemptown, Brighton offering a variety of rooms all with en-suite bathrooms, 5 star linen and service with a smile. Located just a few steps away from the world-famous Brighton Pier and the Royal Pavilion.
            </p>
            <p style={{ color: 'var(--gray-600)', marginBottom: '32px', fontSize: '16px' }}>
              Colson Guest House is situated in the very trendy centre of Kemptown. Guests find themselves within walking distance of many famous Brighton attractions including Brighton Pier and the Royal Pavilion, the newly opened Beach Zip Wire, or the many bespoke and hipster shops, pubs and restaurants which cater for all tastes and senses. Colson House is a 200-year old Regency property offering charm, comfort and is nestled in the heart of what makes Brighton great.
            </p>
            <Link to="/location" className="btn btn-outline">
              Attractions & Location
            </Link>
          </div>
          <div style={{ position: 'relative' }}>
            <img
              src="https://colson.hodfords.net/wp-content/uploads/2021/06/IMG_1916.jpg"
              alt="Boutique Room Setup"
              style={{ width: '100%', borderRadius: 'var(--border-radius)', boxShadow: 'var(--shadow-lg)', objectFit: 'cover', height: '450px' }}
            />
            <div style={{
              position: 'absolute', bottom: '-24px', left: '-24px', backgroundColor: 'var(--secondary)',
              padding: '24px', borderRadius: 'var(--border-radius)', boxShadow: 'var(--shadow-md)', maxWidth: '200px'
            }}>
              <h3 style={{ fontSize: '36px', color: 'var(--dark)' }}>100%</h3>
              <p style={{ fontSize: '13px', fontWeight: '600', textTransform: 'uppercase', color: 'var(--gray-800)' }}>
                En-suite Bathrooms
              </p>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
