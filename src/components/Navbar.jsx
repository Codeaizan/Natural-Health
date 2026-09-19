import { useState, useEffect } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { HiMenu, HiX } from 'react-icons/hi';
import logoImg from '../assets/images/logo.png';
import './Navbar.css';

const navLinks = [
  { path: '/', label: 'Home' },
  { path: '/about', label: 'About Us' },
  { path: '/why-us', label: 'Why Us' },
  { path: '/products', label: 'Products' },
  { path: '/testimonials', label: 'Testimonials' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [isOpen]);

  return (
    <nav className={`navbar ${scrolled ? 'navbar-scrolled' : ''}`} id="navbar">
      <div className="container navbar-inner">
        <Link to="/" className="navbar-brand" id="nav-logo">
          <div className="navbar-logo">
            <img src={logoImg} alt="Natural Health World Logo" className="navbar-logo-img" />
          </div>
          <div className="navbar-brand-text">
            <span className="navbar-brand-name">Natural Health World</span>
            <span className="navbar-brand-tagline">Ayurvedic Wellness</span>
          </div>
        </Link>

        <div className={`navbar-links ${isOpen ? 'navbar-links-open' : ''}`}>
          {navLinks.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              className={({ isActive }) =>
                `navbar-link ${isActive ? 'navbar-link-active' : ''}`
              }
              id={`nav-${link.label.toLowerCase().replace(/\s/g, '-')}`}
              end={link.path === '/'}
            >
              {link.label}
            </NavLink>
          ))}
          <Link to="/book-appointment" className="btn btn-primary btn-sm navbar-cta" id="nav-book-btn">
            Book Appointment
          </Link>
        </div>

        <button
          className="navbar-toggle"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
          id="nav-toggle"
        >
          {isOpen ? <HiX /> : <HiMenu />}
        </button>
      </div>
    </nav>
  );
}
