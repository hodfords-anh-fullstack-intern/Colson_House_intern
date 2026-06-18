import React, { useState, useEffect } from 'react';
import './styles/components/Button.css';
import './styles/components/Header.css';
import './styles/components/Footer.css';
import { HashRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { Calendar, Menu, X, Compass, Star, ShieldCheck, MapPin, Phone, Mail } from 'lucide-react';

import logoAvif from './assets/logo/Logo_Colson.avif';
import logoSvg from './assets/logo/Logo_Colson.svg';

import { API_URL } from './config';
import { MOCK_ROOMS } from './constants';
import ScrollToTop from './components/ScrollToTop';
import NavLink from './components/NavLink';

import HomeView from './pages/HomeView';
import RoomsView from './pages/RoomsView';
import RoomDetailsView from './pages/RoomDetailsView';
import LocationView from './pages/LocationView';
import ReviewsView from './pages/ReviewsView';
import BookView from './pages/BookView';
import ContactView from './pages/ContactView';
import PrivacyPolicyView from './pages/PrivacyPolicyView';
import TermsView from './pages/TermsView';
import BookingModal from './components/BookingModal';

export default function App() {
  const [rooms, setRooms] = useState(MOCK_ROOMS);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [showBooking, setShowBooking] = useState(false);
  const BOOKING_URL = 'https://booking-directly.com/widgets/2FtcovmkVyAu40RKQAmygormLwDtQaaiPqUPvmBAmAEMHQRdo3lLtMhkIBSWY/properties';
  const openBooking = () => window.open(BOOKING_URL, '_blank', 'noopener,noreferrer');

  // Monitor scroll for header styling
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handler = () => openBooking();
    window.addEventListener('open-booking', handler);
    return () => window.removeEventListener('open-booking', handler);
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
                <button className="btn btn-primary" style={{ padding: '10px 22px', fontSize: '14px' }} onClick={openBooking}>
                  <Calendar className="w-4 h-4" /> Check Availability
                </button>
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
            <button className="btn btn-primary" onClick={() => { setMobileMenuOpen(false); openBooking(); }}>
              Check Availability
            </button>
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
          <Route path="/privacy-policy" element={<PrivacyPolicyView />} />
          <Route path="/terms" element={<TermsView />} />
        </Routes>
      </main>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <div className="footer-grid">
            <div>
              <picture>
                <source srcSet={logoAvif} type="image/avif" />
                <img src={logoSvg} alt="Colson House Logo" className="footer-logo" />
              </picture>
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
            <p>
              &copy; 2018–{new Date().getFullYear()} Colson House &bull; Kemp Town, Brighton Guest House &bull; All Rights Reserved &bull;{' '}
              <Link to="/privacy-policy" className="footer-bottom-link">Privacy Policy</Link>
              {' '}&bull;{' '}
              <Link to="/terms" className="footer-bottom-link">Terms and Conditions</Link>
              {' '}&bull; Developed By <a href="https://hodfords.com" target="_blank" rel="noreferrer" className="footer-bottom-link footer-bottom-brand">Hodfords</a>
            </p>
          </div>
        </div>
      </footer>

    </Router>
  );
}
