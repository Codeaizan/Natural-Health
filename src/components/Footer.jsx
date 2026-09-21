import { Link } from 'react-router-dom';
import { FaLeaf, FaPhone, FaEnvelope, FaMapMarkerAlt, FaInstagram, FaFacebook, FaYoutube, FaWhatsapp } from 'react-icons/fa';
import logoImg from '../assets/images/logo.png';
import './Footer.css';

const quickLinks = [
  { path: '/', label: 'Home' },
  { path: '/about', label: 'About Us' },
  { path: '/products', label: 'Products' },
  { path: '/why-us', label: 'Why Us' },
  { path: '/testimonials', label: 'Testimonials' },
  { path: '/book-appointment', label: 'Book Appointment' },
];

const treatments = [
  'Asthma Treatment',
  'Piles & Fistula',
  'Kidney & Urinary',
  'Joint Pain',
  'Diabetes Management',
  'Intimate Health',
  'Migraine',
];

export default function Footer() {
  return (
    <footer className="footer" id="footer">
      <div className="footer-wave">
        <svg viewBox="0 0 1440 100" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
          <path d="M0 40 C360 80, 720 0, 1080 40 C1260 60, 1380 50, 1440 40 L1440 100 L0 100Z" fill="var(--dark-green)" />
        </svg>
      </div>

      <div className="footer-main">
        <div className="container">
          <div className="footer-grid">
            {/* Brand Column */}
            <div className="footer-brand-col">
              <Link to="/" className="footer-brand">
                <div className="footer-logo">
                  <img src={logoImg} alt="Natural Health World" className="footer-logo-img" />
                </div>
                <div>
                  <h3>Natural Health World</h3>
                  <span className="footer-tagline">Ayurvedic Wellness</span>
                </div>
              </Link>
              <p className="footer-desc">
                Rooted in ancient Ayurvedic wisdom and guided by modern science, we bring you natural healing solutions for a healthier, balanced life.
              </p>
              <div className="footer-social">
                <a href="https://instagram.com/naturalhealthworldkolkata" target="_blank" rel="noopener noreferrer" className="footer-social-link" id="social-instagram" aria-label="Instagram">
                  <FaInstagram />
                </a>
                <a href="https://facebook.com/naturalhealthworldkolkata" target="_blank" rel="noopener noreferrer" className="footer-social-link" id="social-facebook" aria-label="Facebook">
                  <FaFacebook />
                </a>
                <a href="https://youtube.com/@naturalhealthworldkolkata" target="_blank" rel="noopener noreferrer" className="footer-social-link" id="social-youtube" aria-label="YouTube">
                  <FaYoutube />
                </a>
                <a href="https://wa.me/919007697503" target="_blank" rel="noopener noreferrer" className="footer-social-link" id="social-whatsapp" aria-label="WhatsApp">
                  <FaWhatsapp />
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div className="footer-col">
              <h4>Quick Links</h4>
              <ul>
                {quickLinks.map((link) => (
                  <li key={link.path}>
                    <Link to={link.path}>{link.label}</Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Treatments */}
            <div className="footer-col">
              <h4>Our Treatments</h4>
              <ul>
                {treatments.map((t) => (
                  <li key={t}>
                    <Link to="/why-us">{t}</Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div className="footer-col" id="contact">
              <h4>Contact Us</h4>
              <div className="footer-contact-list">
                <div className="footer-contact-item">
                  <FaMapMarkerAlt className="footer-contact-icon" />
                  <div>
                    <p>4, Circus Range, Near Mithai</p>
                    <p className="text-sm">Beck Bagan, Kolkata — 700019</p>
                  </div>
                </div>
                <div className="footer-contact-item">
                  <FaPhone className="footer-contact-icon" />
                  <div>
                    <a href="tel:+919007697503">+91 90076 97503</a>
                    <br />
                    <a href="tel:+919143746966">+91 91437 46966</a>
                  </div>
                </div>
                <div className="footer-contact-item">
                  <FaEnvelope className="footer-contact-icon" />
                  <div>
                    <a href="mailto:naturalhealthworld99@gmail.com">naturalhealthworld99@gmail.com</a>
                  </div>
                </div>
              </div>
              <div className="footer-hours">
                <p className="text-sm"><strong>Mon – Sat:</strong> 12:00 PM – 2:00 PM &amp; 6:30 PM – 8:30 PM</p>
                <p className="text-sm"><strong>Sunday:</strong> 11:00 AM – 2:00 PM</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="container footer-bottom-inner">
          <p>&copy; {new Date().getFullYear()} Natural Health World. All rights reserved.</p>
          <p>Designed with <FaLeaf className="footer-heart" /> for your wellness</p>
        </div>
      </div>
    </footer>
  );
}
