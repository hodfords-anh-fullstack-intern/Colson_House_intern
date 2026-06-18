import React, { useState, useEffect } from 'react';
import { HashRouter as Router, Routes, Route, Link, useLocation, useParams } from 'react-router-dom';
import { 
  Wifi, Bath, Tv, Coffee, Wind, Flame, Laptop, Sparkles, 
  MapPin, Phone, Mail, Clock, Calendar, Star, ChevronRight, 
  Menu, X, Check, Send, ArrowRight, Compass, ShieldCheck 
} from 'lucide-react';
import logoAvif from './assets/logo/Logo_Colson.avif';
import logoSvg from './assets/logo/Logo_Colson.svg';

// Custom API base URL
const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:8000/api';

// Helper to dynamically generate mock room images based on folders and counts
const generateMockImages = (roomNum, maxCount) => {
  const folder = roomNum === 2 ? 'room2' : `room ${roomNum}`;
  const images = [{ image_url: `http://localhost:8000/storage/rooms/${folder}/room${roomNum}.webp`, is_primary: true }];
  for (let i = 1; i <= maxCount; i++) {
    images.push({ image_url: `http://localhost:8000/storage/rooms/${folder}/room${roomNum}_${i}.webp`, is_primary: false });
  }
  return images;
};

const MOCK_ROOMS = [
  {
    id: 1,
    name: 'Room 1, Deluxe Double Room',
    slug: 'room-1-deluxe-double-room',
    description: 'Guests will have a special experience as this double room offers a fireplace. Offering free toiletries, this double room includes a private bathroom with a shower and a hairdryer. This double room features a seating area, a wardrobe, flat-screen TV. The unit offers 1 bed.',
    images: generateMockImages(1, 9),
    amenities: [
      { name: 'Broadband/High Speed Internet Access', icon: 'Wifi' },
      { name: 'Central Heating', icon: 'Flame' },
      { name: 'En-suite Bathroom', icon: 'Bath' },
      { name: 'Flat Screen TV', icon: 'Tv' },
      { name: 'Tea/Coffee Facilities', icon: 'Coffee' },
      { name: 'Hairdryer', icon: 'Wind' },
      { name: 'Egyptian Cotton Linen', icon: 'Sparkles' },
      { name: 'Work Desk', icon: 'Laptop' }
    ]
  },
  {
    id: 2,
    name: 'Room 2, Four Poster Room',
    slug: 'room-2-four-poster-room',
    description: 'Guests will have a special experience as this double room offers a fireplace. Offering free toiletries, this double room includes a private bathroom with a shower and a hairdryer. This double room features a seating area, a wardrobe, flat-screen TV, as well as chocolate for guests. The unit offers a four poster bed.',
    images: generateMockImages(2, 12),
    amenities: [
      { name: 'Broadband/High Speed Internet Access', icon: 'Wifi' },
      { name: 'Central Heating', icon: 'Flame' },
      { name: 'En-suite Bathroom', icon: 'Bath' },
      { name: 'Flat Screen TV', icon: 'Tv' },
      { name: 'Tea/Coffee Facilities', icon: 'Coffee' },
      { name: 'Egyptian Cotton Linen', icon: 'Sparkles' },
      { name: 'Complimentary Toiletries', icon: 'Sparkles' }
    ]
  },
  {
    id: 3,
    name: 'Room 3, Standard Double',
    slug: 'room-3-standard-double',
    description: 'Featuring free toiletries, this double room includes a private bathroom with a shower and a hairdryer. This double room has a wardrobe, an electric kettle, flat-screen TV, as well as chocolate for guests. The unit has 1 bed.',
    images: generateMockImages(3, 18),
    amenities: [
      { name: 'Free Wi-Fi Internet Access', icon: 'Wifi' },
      { name: 'Central Heating', icon: 'Flame' },
      { name: 'Private Bathroom', icon: 'Bath' },
      { name: 'Flat Screen TV', icon: 'Tv' },
      { name: 'Electric Kettle / Tea & Coffee', icon: 'Coffee' },
      { name: 'Egyptian Cotton Linen', icon: 'Sparkles' },
      { name: 'Work Desk', icon: 'Laptop' }
    ]
  },
  {
    id: 4,
    name: 'Room 4, Deluxe Balcony Room',
    slug: 'room-4-deluxe-balcony-room',
    description: 'This double room provides a fireplace. A seating area with a flat-screen TV, a desk, a balcony and a private bathroom are provided in this double room. The unit offers 1 bed.',
    images: generateMockImages(4, 9),
    amenities: [
      { name: 'Private Balcony', icon: 'Sparkles' },
      { name: 'Broadband/High Speed Internet Access', icon: 'Wifi' },
      { name: 'Central Heating', icon: 'Flame' },
      { name: 'Private Bathroom', icon: 'Bath' },
      { name: 'Flat Screen TV', icon: 'Tv' },
      { name: 'Electric Kettle / Tea & Coffee', icon: 'Coffee' },
      { name: 'Egyptian Cotton Linen', icon: 'Sparkles' }
    ]
  },
  {
    id: 5,
    name: 'Room 5, Standard Double',
    slug: 'room-5-standard-double',
    description: 'Featuring free toiletries, this double room includes a private bathroom with a shower and a hairdryer. This double room has a wardrobe, an electric kettle, flat-screen TV, as well as chocolate for guests. The unit has 1 bed.',
    images: generateMockImages(5, 15),
    amenities: [
      { name: 'Free Wi-Fi Internet Access', icon: 'Wifi' },
      { name: 'Private Bathroom with Shower', icon: 'Bath' },
      { name: 'Flat Screen TV', icon: 'Tv' },
      { name: 'Electric Kettle / Tea & Coffee', icon: 'Coffee' },
      { name: 'Egyptian Cotton Linen', icon: 'Sparkles' },
      { name: 'Work Desk with Lamp', icon: 'Laptop' }
    ]
  },
  {
    id: 6,
    name: 'Room 6, Deluxe Double',
    slug: 'room-6-deluxe-double',
    description: 'Offering free toiletries, this double room includes a private bathroom with a shower and a hairdryer. This double room features a seating area, a wardrobe, flat-screen TV, as well as chocolate for guests. The unit offers 1 bed.',
    images: generateMockImages(6, 20),
    amenities: [
      { name: 'Broadband/High Speed Internet Access', icon: 'Wifi' },
      { name: 'Private Bathroom with Shower', icon: 'Bath' },
      { name: 'Flat Screen TV', icon: 'Tv' },
      { name: 'Electric Kettle / Tea & Coffee', icon: 'Coffee' },
      { name: 'Complimentary Toiletries', icon: 'Sparkles' },
      { name: 'Work Desk', icon: 'Laptop' }
    ]
  },
  {
    id: 7,
    name: 'Room 7, Small Single',
    slug: 'room-7-small-single',
    description: 'A TV, DVD player and tea/coffee making facilities are featured in this room.',
    images: generateMockImages(7, 5),
    amenities: [
      { name: 'Broadband/High Speed Internet Access', icon: 'Wifi' },
      { name: 'Central Heating Throughout', icon: 'Flame' },
      { name: 'En-suite Bathroom', icon: 'Bath' },
      { name: 'TV & DVD Player in Room', icon: 'Tv' },
      { name: 'Tea & Coffee Facilities', icon: 'Coffee' },
      { name: 'Egyptian Cotton Linen', icon: 'Sparkles' },
      { name: 'Work Desk & Chair', icon: 'Laptop' }
    ]
  },
  {
    id: 8,
    name: 'Room 8, Deluxe Double',
    slug: 'room-8-deluxe-double',
    description: 'Offering free toiletries, this double room includes a private bathroom with a shower and a hairdryer. This double room features a seating area, a wardrobe, flat-screen TV, as well as chocolate for guests. The unit offers 1 bed.',
    images: generateMockImages(8, 11),
    amenities: [
      { name: 'Broadband/High Speed Internet Access', icon: 'Wifi' },
      { name: 'Central Heating', icon: 'Flame' },
      { name: 'En-suite Bathroom', icon: 'Bath' },
      { name: 'Flat Screen TV', icon: 'Tv' },
      { name: 'Electric Kettle / Tea & Coffee', icon: 'Coffee' },
      { name: 'Designer Toiletries', icon: 'Sparkles' },
      { name: 'Work Desk', icon: 'Laptop' }
    ]
  },
  {
    id: 9,
    name: 'Room 9, Split Level Double',
    slug: 'room-9-split-level-double',
    description: 'Guests will have a special experience as this double room offers a fireplace. Offering free toiletries, this double room includes a private bathroom with a shower and a hairdryer. This double room features a seating area, a wardrobe, flat-screen TV, as well as chocolate for guests. The unit offers 1 bed.',
    images: generateMockImages(9, 14),
    amenities: [
      { name: 'Cosy Fireplace Feature', icon: 'Flame' },
      { name: 'Broadband/High Speed Internet Access', icon: 'Wifi' },
      { name: 'Central Heating', icon: 'Flame' },
      { name: 'En-suite Bathroom', icon: 'Bath' },
      { name: 'Flat Screen TV', icon: 'Tv' },
      { name: 'Fridge & Kettle', icon: 'Coffee' },
      { name: 'Linen & Towels Supplied', icon: 'Sparkles' },
      { name: 'Work Desk', icon: 'Laptop' }
    ]
  }
];

// Helper to render lucide icon by name string
const AmenityIcon = ({ name, className = "w-5 h-5" }) => {
  switch (name) {
    case 'Wifi': return <Wifi className={className} />;
    case 'Bath': return <Bath className={className} />;
    case 'Tv': return <Tv className={className} />;
    case 'Coffee': return <Coffee className={className} />;
    case 'Wind': return <Wind className={className} />;
    case 'Flame': return <Flame className={className} />;
    case 'Laptop': return <Laptop className={className} />;
    case 'Sparkles': return <Sparkles className={className} />;
    default: return <Check className={className} />;
  }
};

// Scroll to top on navigation change
function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

export default function App() {
  const [rooms, setRooms] = useState(MOCK_ROOMS);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Monitor scroll for header styling
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Fetch Rooms from Backend API
  useEffect(() => {
    fetch(`${API_URL}/rooms`)
      .then(res => {
        if (!res.ok) throw new Error('Network response not ok');
        return res.json();
      })
      .then(data => {
        if (data && data.length > 0) {
          setRooms(data);
        }
      })
      .catch(err => {
        console.warn('API connection failed, using offline mock data.', err);
      });
  }, []);

  return (
    <Router>
      <ScrollToTop />
      
      {/* Header & Sticky Navigation */}
      <header className={`header ${scrolled ? 'scrolled' : ''}`}>
        <div className="container header-inner">
          <Link to="/" className="logo-wrapper">
            <picture>
              <source srcSet={logoAvif} type="image/avif" />
              <img src={logoSvg} alt="Colson House Logo" />
            </picture>
          </Link>

          {/* Desktop Navigation */}
          <nav className="nav-container">
            <ul className="nav-menu">
              <li><NavLink to="/">Home</NavLink></li>
              <li><NavLink to="/rooms">Rooms</NavLink></li>
              <li><NavLink to="/location">Location</NavLink></li>
              <li><NavLink to="/reviews">Guest Reviews</NavLink></li>
              <li><NavLink to="/contact">Contact</NavLink></li>
              <li>
                <Link to="/book" className="btn btn-gold" style={{ padding: '10px 22px', fontSize: '14px' }}>
                  <Calendar className="w-4 h-4" /> Book Now
                </Link>
              </li>
            </ul>
          </nav>

          {/* Mobile Menu Toggle Button */}
          <button 
            className="mobile-toggle-btn" 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            style={{ display: 'none', background: 'none', border: 'none', cursor: 'pointer', color: 'inherit' }}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu Drawer */}
        {mobileMenuOpen && (
          <div className="mobile-drawer" style={{
            position: 'fixed', top: '70px', left: 0, width: '100%', backgroundColor: 'var(--light)', 
            boxShadow: 'var(--shadow-md)', zIndex: 999, display: 'flex', flexDirection: 'column', padding: '24px', gap: '16px'
          }}>
            <Link to="/" onClick={() => setMobileMenuOpen(false)}>Home</Link>
            <Link to="/rooms" onClick={() => setMobileMenuOpen(false)}>Rooms</Link>
            <Link to="/location" onClick={() => setMobileMenuOpen(false)}>Location</Link>
            <Link to="/reviews" onClick={() => setMobileMenuOpen(false)}>Guest Reviews</Link>
            <Link to="/contact" onClick={() => setMobileMenuOpen(false)}>Contact</Link>
            <Link to="/book" className="btn btn-gold" onClick={() => setMobileMenuOpen(false)}>
              Book Now
            </Link>
          </div>
        )}
      </header>

      {/* Main Routes */}
      <main style={{ marginTop: 'var(--header-height)' }}>
        <Routes>
          <Route path="/" element={<HomeView rooms={rooms} />} />
          <Route path="/rooms" element={<RoomsView rooms={rooms} />} />
          <Route path="/rooms/:slug" element={<RoomDetailsView rooms={rooms} />} />
          <Route path="/location" element={<LocationView />} />
          <Route path="/reviews" element={<ReviewsView />} />
          <Route path="/contact" element={<ContactView />} />
          <Route path="/book" element={<BookView />} />
        </Routes>
      </main>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <div className="footer-grid">
            <div>
              <img src={logoSvg} alt="Colson House Logo" className="footer-logo" style={{ filter: 'brightness(0) invert(1)' }} />
              <p className="footer-text">
                A warm Brighton welcome awaits you at Colson House, our unique boutique guest house named after the iconic movie star Ronald Colman.
              </p>
              <div className="footer-socials">
                <a href="#" className="footer-social-icon"><Compass className="w-4 h-4" /></a>
                <a href="#" className="footer-social-icon"><Star className="w-4 h-4" /></a>
                <a href="#" className="footer-social-icon"><ShieldCheck className="w-4 h-4" /></a>
              </div>
            </div>
            
            <div>
              <h4 className="footer-title">Navigation</h4>
              <ul className="footer-links">
                <li><Link to="/" className="footer-link">Home</Link></li>
                <li><Link to="/rooms" className="footer-link">Rooms & Suites</Link></li>
                <li><Link to="/location" className="footer-link">Location & Directions</Link></li>
                <li><Link to="/reviews" className="footer-link">Guest Reviews</Link></li>
                <li><Link to="/contact" className="footer-link">Get In Touch</Link></li>
              </ul>
            </div>

            <div>
              <h4 className="footer-title">Contact Info</h4>
              <ul className="footer-links" style={{ color: 'rgba(255,255,255,0.7)', fontSize: '15px' }}>
                <li style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
                  <MapPin className="w-4 h-4 text-secondary" /> 17 Upper Rock Gardens, Brighton, BN2 1QE
                </li>
                <li style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
                  <Phone className="w-4 h-4 text-secondary" /> +44 (0)1273 697071
                </li>
                <li style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
                  <Mail className="w-4 h-4 text-secondary" /> info@colsonhouse.co.uk
                </li>
              </ul>
            </div>
          </div>

          <div className="footer-bottom">
            <p>&copy; {new Date().getFullYear()} Colson House. All rights reserved.</p>
            <p>Designed by interns | Managed with Laravel & React</p>
          </div>
        </div>
      </footer>
    </Router>
  );
}

// Active NavLink style helper
function NavLink({ to, children }) {
  const location = useLocation();
  const isActive = location.pathname === to;
  return (
    <Link to={to} className={`nav-link ${isActive ? 'active' : ''}`}>
      {children}
    </Link>
  );
}

// ==========================================
// VIEWS & COMPONENTS
// ==========================================

// 1. HOME VIEW
function HomeView({ rooms }) {
  return (
    <div>
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-bg" style={{ backgroundImage: `url('https://colson.hodfords.net/wp-content/uploads/2021/06/IMG_2064.jpg')` }}></div>
        <div className="hero-overlay"></div>
        <div className="container hero-content">
          <span className="hero-subtitle">Boutique Guest House • Brighton</span>
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
            <h2 className="section-title">Named After Silver Screen Icons</h2>
            <p style={{ color: 'var(--gray-600)', marginBottom: '24px', fontSize: '16px' }}>
              Built in the Regency era, our grand Victorian guest house honors legends of the golden era of cinema. From Ronald Colman to Grace Kelly, each of our boutique rooms offers a unique aesthetic, fusing vintage charm with high-end modern comforts.
            </p>
            <p style={{ color: 'var(--gray-600)', marginBottom: '32px', fontSize: '16px' }}>
              Enjoy standard comforts including direct en-suite bathrooms, high-speed Wi-Fi, 5-star linens, flat-screen Smart TVs, and delicious hospitality trays.
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

      {/* Featured Rooms Section */}
      <section className="section">
        <div className="container">
          <div className="section-header text-center">
            <span className="section-subtitle">Luxury Stay</span>
            <h2 className="section-title">Our Boutique Rooms</h2>
            <p style={{ color: 'var(--gray-600)' }}>
              Explore our boutique rooms named after movie stars of the 30s, 40s, and 50s.
            </p>
          </div>

          <div className="grid rooms-grid">
            {rooms.slice(0, 3).map(room => (
              <RoomCard key={room.id} room={room} />
            ))}
          </div>

          <div className="text-center" style={{ marginTop: '48px' }}>
            <Link to="/rooms" className="btn btn-outline">
              View All Rooms <ChevronRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

// 2. ROOMS VIEW
function RoomsView({ rooms }) {
  return (
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
  );
}

// 3. ROOM CARD COMPONENT
function RoomCard({ room }) {
  const primaryImage = room.images?.find(img => img.is_primary)?.image_url || room.images?.[0]?.image_url || 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?q=80&w=600';

  return (
    <div className="room-card">
      <div className="room-img-container">
        <img src={primaryImage} alt={room.name} className="room-img" />
      </div>
      <div className="room-details-preview">
        <Link to={`/rooms/${room.slug}`}>
          <h3 className="room-card-title">{room.name}</h3>
        </Link>
        <p className="room-card-description">{room.description}</p>
        

        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: 'auto' }}>
          <Link to={`/rooms/${room.slug}`} className="btn btn-outline" style={{ padding: '10px 20px', fontSize: '13px' }}>
            View Details
          </Link>
          <Link to="/book" className="btn btn-primary" style={{ padding: '10px 20px', fontSize: '13px' }}>
            Book Room
          </Link>
        </div>
      </div>
    </div>
  );
}

// 4. ROOM DETAILS VIEW (WITH FREETOBOOK EMBEDDED IFRAME)
function RoomDetailsView({ rooms }) {
  const { slug } = useParams();
  const room = rooms.find(r => r.slug === slug);
  const [activeImg, setActiveImg] = useState('');

  useEffect(() => {
    if (room && room.images?.length > 0) {
      const primary = room.images.find(img => img.is_primary)?.image_url || room.images[0].image_url;
      setActiveImg(primary);
    }
  }, [room]);

  if (!room) {
    return (
      <div className="container text-center section">
        <h2>Room Not Found</h2>
        <p>Sorry, the requested room could not be found.</p>
        <Link to="/rooms" className="btn btn-primary" style={{ marginTop: '24px' }}>Back to Rooms</Link>
      </div>
    );
  }

  return (
    <section className="section">
      <div className="container">
        <div style={{ display: 'grid', gridTemplateColumns: '1.2fr 0.8fr', gap: '48px', marginBottom: '64px' }}>
          {/* Gallery Column */}
          <div>
            <div style={{ height: '500px', borderRadius: 'var(--border-radius)', overflow: 'hidden', marginBottom: '16px', boxShadow: 'var(--shadow-md)' }}>
              <img src={activeImg} alt={room.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            </div>
            <div style={{ display: 'flex', gap: '16px' }}>
              {room.images?.map((img, idx) => (
                <button 
                  key={idx} 
                  onClick={() => setActiveImg(img.image_url)}
                  style={{ 
                    width: '100px', height: '70px', borderRadius: '8px', overflow: 'hidden', border: activeImg === img.image_url ? '2px solid var(--primary)' : 'none',
                    cursor: 'pointer', padding: 0
                  }}
                >
                  <img src={img.image_url} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                </button>
              ))}
            </div>
          </div>

          {/* Details Column */}
          <div>
            <span className="section-subtitle">Boutique Room</span>
            <h1 style={{ fontSize: '42px', marginBottom: '16px', fontFamily: 'var(--font-serif)' }}>{room.name}</h1>
            

            <p style={{ color: 'var(--gray-600)', marginBottom: '32px', fontSize: '16px' }}>{room.description}</p>
            
            <h3 style={{ fontSize: '18px', fontFamily: 'var(--font-sans)', fontWeight: '600', marginBottom: '16px' }}>Room Amenities</h3>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px', marginBottom: '32px' }}>
              {room.amenities?.map((amenity, idx) => (
                <div key={idx} style={{ display: 'flex', alignItems: 'center', gap: '12px', fontSize: '15px' }}>
                  <div style={{ color: 'var(--primary)', backgroundColor: 'var(--gray-100)', borderRadius: '50%', padding: '6px' }}>
                    <AmenityIcon name={amenity.icon} className="w-4 h-4" />
                  </div>
                  <span>{amenity.name}</span>
                </div>
              ))}
            </div>

            <Link to="/book" className="btn btn-primary" style={{ width: '100%' }}>
              Check Availability & Book Direct
            </Link>
          </div>
        </div>

        {/* Freetobook Embedded Booking Widget inside Details for direct search */}
        <div style={{ marginTop: '80px' }}>
          <div className="section-header text-center">
            <h2 className="section-title">Check Rates & Availability</h2>
            <p style={{ color: 'var(--gray-600)' }}>Select your dates using our official Freetobook reservation system below.</p>
          </div>
          <div className="freetobook-container">
            <iframe 
              src="https://widget.freetobook.com/asp/wub/direct?wubid=1910" 
              className="freetobook-iframe" 
              title="Freetobook Booking Engine"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

// 5. LOCATION VIEW
function LocationView() {
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
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m13!1d2520.672365922332!2d-0.12933748425501865!3d50.82056077952778!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4875850937a0eb5d%3A0xfe9787e9ec2d7e1!2sColson%20House!5e0!3m2!1sen!2suk!4v1624021000000!5m2!1sen!2suk" 
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

// 6. REVIEWS VIEW (EMBEDDED FREETOBOOK REVIEWS IFRAME)
function ReviewsView() {
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
            src="https://www.freetobook.com/reviews/1910/Colson_House" 
            className="freetobook-iframe" 
            style={{ height: '1200px' }}
            title="Freetobook Verified Guest Reviews"
          />
        </div>
      </div>
    </section>
  );
}

// 7. BOOK NOW VIEW (EMBEDDED FREETOBOOK BOOKING IFRAME)
function BookView() {
  return (
    <section className="section">
      <div className="container">
        <div className="section-header text-center">
          <span className="section-subtitle">Secure Booking</span>
          <h2 className="section-title">Book Direct With Us</h2>
          <p style={{ color: 'var(--gray-600)' }}>
            Get the best rates, flexible cancellation options, and exclusive benefits when you book directly with our official booking engine.
          </p>
        </div>

        {/* Freetobook Booking Engine Iframe */}
        <div className="freetobook-container">
          <iframe 
            src="https://widget.freetobook.com/asp/wub/direct?wubid=1910" 
            className="freetobook-iframe" 
            style={{ height: '1000px' }}
            title="Freetobook Online Booking engine"
          />
        </div>
      </div>
    </section>
  );
}

// 8. CONTACT VIEW
function ContactView() {
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
