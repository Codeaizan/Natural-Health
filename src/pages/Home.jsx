import { Link } from 'react-router-dom';
import { FaLeaf, FaUserMd, FaFlask, FaStar, FaArrowRight, FaPhone, FaEnvelope, FaMapMarkerAlt, FaClock } from 'react-icons/fa';
import { motion } from 'framer-motion';
import AnimatedSection from '../components/AnimatedSection';
import heroBg from '../assets/images/hero-bg.jpg';
import clinicImg from '../assets/images/clinic.jpg';
import products from '../data/products';
import testimonials from '../data/testimonials';
import './Home.css';

const features = [
  {
    icon: <FaLeaf />,
    title: '100% Natural Remedies',
    description: 'Pure Ayurvedic formulations crafted from hand-selected herbs — no chemicals, no side effects.',
  },
  {
    icon: <FaUserMd />,
    title: 'Expert Consultation',
    description: 'Personalized treatment plans by Dr. Shakir Rashid with 15+ years of Ayurvedic expertise.',
  },
  {
    icon: <FaFlask />,
    title: 'Proven Results',
    description: 'Thousands of patients healed through time-tested Ayurvedic protocols and modern diagnostics.',
  },
];

const stats = [
  { value: '10,000+', label: 'Patients Treated' },
  { value: '15+', label: 'Years Experience' },
  { value: '95%', label: 'Success Rate' },
  { value: '50+', label: 'Herbal Products' },
];

export default function Home() {
  const featuredProducts = products.slice(0, 3);
  const featuredTestimonials = testimonials.slice(0, 2);

  return (
    <main className="home-page">
      {/* ---- Hero ---- */}
      <section className="home-hero" id="home-hero">
        <div className="home-hero-bg">
          <img src={heroBg} alt="Ayurvedic herbs and natural remedies" loading="eager" />
          <div className="home-hero-overlay" />
        </div>

        <div className="container home-hero-content">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            <span className="badge home-hero-badge">🌿 Trusted Ayurvedic Care</span>
            <h1>Healing Through the<br />Wisdom of <span className="text-accent">Ayurveda</span></h1>
            <p className="home-hero-subtitle">
              Experience the transformative power of ancient Ayurvedic medicine. 
              Natural Health World brings you holistic healing for body, mind, and spirit 
              — guided by Dr. Shakir Rashid's expertise.
            </p>
            <div className="home-hero-actions">
              <Link to="/book-appointment" className="btn btn-primary btn-lg" id="hero-book-btn">
                Book Consultation
                <FaArrowRight />
              </Link>
              <Link to="/products" className="btn btn-outline btn-lg" id="hero-products-btn">
                Explore Products
              </Link>
            </div>
          </motion.div>

          <motion.div
            className="home-hero-stats"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            {stats.map((stat, i) => (
              <div key={i} className="home-hero-stat">
                <span className="home-hero-stat-value">{stat.value}</span>
                <span className="home-hero-stat-label">{stat.label}</span>
              </div>
            ))}
          </motion.div>
        </div>

        <div className="home-hero-curve">
          <svg viewBox="0 0 1440 80" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
            <path d="M0 80 L0 40 Q360 0 720 40 Q1080 80 1440 40 L1440 80Z" fill="var(--warm-ivory)" />
          </svg>
        </div>
      </section>

      {/* ---- Features ---- */}
      <section className="section" id="features-section">
        <div className="container">
          <AnimatedSection>
            <div className="section-header">
              <span className="badge">Why Choose Ayurveda</span>
              <h2>Ancient Wisdom, Modern Healing</h2>
              <p>We blend 5,000 years of Ayurvedic knowledge with contemporary diagnostic methods to provide you the best of both worlds.</p>
            </div>
          </AnimatedSection>

          <div className="grid-3">
            {features.map((feature, i) => (
              <AnimatedSection key={i} delay={i * 0.15}>
                <div className="feature-card card" id={`feature-card-${i}`}>
                  <div className="feature-card-icon">{feature.icon}</div>
                  <h3>{feature.title}</h3>
                  <p>{feature.description}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ---- About Preview ---- */}
      <section className="section section-cream" id="about-preview">
        <div className="container">
          <div className="about-preview-grid">
            <AnimatedSection direction="left">
              <div className="about-preview-image">
                <img src={clinicImg} alt="Natural Health World Clinic" />
                <div className="about-preview-badge glass-card">
                  <FaUserMd />
                  <div>
                    <strong>Dr. Shakir Rashid</strong>
                    <span>Ayurvedic Physician</span>
                  </div>
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection direction="right">
              <div className="about-preview-content">
                <span className="badge">About Us</span>
                <h2>Your Journey to Natural Wellness Starts Here</h2>
                <p>
                  At Natural Health World, we believe that true healing comes from nature. 
                  Founded by Dr. Shakir Rashid, our clinic combines traditional Ayurvedic 
                  practices with compassionate care to treat the root cause of ailments — 
                  not just the symptoms.
                </p>
                <p>
                  With over 15 years of experience in Ayurvedic medicine, Dr. Rashid has 
                  helped thousands of patients overcome chronic conditions through personalized 
                  herbal formulations and holistic lifestyle guidance.
                </p>
                <Link to="/about" className="btn btn-primary" id="about-preview-btn">
                  Learn Our Story <FaArrowRight />
                </Link>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* ---- Featured Products ---- */}
      <section className="section" id="featured-products">
        <div className="container">
          <AnimatedSection>
            <div className="section-header">
              <span className="badge">Our Products</span>
              <h2>Premium Ayurvedic Formulations</h2>
              <p>Handcrafted with pure, potent herbs for your health and vitality</p>
            </div>
          </AnimatedSection>

          <div className="grid-3">
            {featuredProducts.map((product, i) => (
              <AnimatedSection key={product.id} delay={i * 0.15}>
                <div className="product-preview-card card" id={`product-preview-${product.id}`}>
                  <div className="product-preview-image">
                    <img src={product.image} alt={product.name} />
                    {product.badge && <span className="product-badge">{product.badge}</span>}
                  </div>
                  <div className="product-preview-info">
                    <span className="product-category">{product.category}</span>
                    <h4>{product.name}</h4>
                    <p>{product.description}</p>
                    <div className="product-preview-footer">
                      <span className="product-price">{product.price}</span>
                      <Link to="/products" className="btn btn-secondary btn-sm">View Details</Link>
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>

          <AnimatedSection>
            <div className="home-view-all">
              <Link to="/products" className="btn btn-primary" id="view-all-products-btn">
                View All Products <FaArrowRight />
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ---- Testimonial Highlight ---- */}
      <section className="section section-dark" id="testimonial-highlight">
        <div className="container">
          <AnimatedSection>
            <div className="section-header">
              <span className="badge" style={{ background: 'rgba(255,255,255,0.15)', color: 'var(--sand)' }}>Patient Stories</span>
              <h2>Voices of Healing</h2>
              <p style={{ color: 'rgba(238,236,227,0.7)' }}>Real stories from real patients who found relief through Ayurveda</p>
            </div>
          </AnimatedSection>

          <div className="grid-2 testimonial-highlight-grid">
            {featuredTestimonials.map((t, i) => (
              <AnimatedSection key={t.id} delay={i * 0.2}>
                <div className="testimonial-highlight-card glass-card" id={`testimonial-highlight-${t.id}`}>
                  <div className="testimonial-stars">
                    {[...Array(t.rating)].map((_, j) => <FaStar key={j} />)}
                  </div>
                  <p className="testimonial-text">"{t.text}"</p>
                  <div className="testimonial-author">
                    <div className="testimonial-avatar">
                      {t.name.charAt(0)}
                    </div>
                    <div>
                      <strong>{t.name}</strong>
                      <span>{t.condition} • {t.location}</span>
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>

          <AnimatedSection>
            <div className="home-view-all">
              <Link to="/testimonials" className="btn btn-outline" id="view-all-testimonials-btn">
                Read More Stories <FaArrowRight />
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ---- CTA Banner ---- */}
      <section className="section home-cta-section" id="cta-banner">
        <div className="container">
          <AnimatedSection>
            <div className="home-cta-card">
              <div className="home-cta-content">
                <h2>Ready to Start Your Healing Journey?</h2>
                <p>
                  Take the first step towards natural wellness. Book a consultation with 
                  Dr. Shakir Rashid and discover how Ayurveda can transform your health.
                </p>
                <div className="home-cta-actions">
                  <Link to="/book-appointment" className="btn btn-primary btn-lg" id="cta-book-btn">
                    Book Your Appointment <FaArrowRight />
                  </Link>
                  <a href="tel:+919876543210" className="btn btn-secondary btn-lg" id="cta-call-btn">
                    <FaPhone /> Call Now
                  </a>
                </div>
              </div>
              <div className="home-cta-decoration">
                <div className="home-cta-circle home-cta-circle-1" />
                <div className="home-cta-circle home-cta-circle-2" />
                <div className="home-cta-circle home-cta-circle-3" />
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ---- Contact Info Section ---- */}
      <section className="section section-cream" id="contact-section">
        <div className="container">
          <AnimatedSection>
            <div className="section-header">
              <span className="badge">Get in Touch</span>
              <h2>Visit Our Clinic</h2>
              <p>We'd love to hear from you. Reach out to us through any of these channels.</p>
            </div>
          </AnimatedSection>

          <div className="contact-grid">
            <AnimatedSection delay={0}>
              <div className="contact-card card" id="contact-address">
                <div className="contact-card-icon">
                  <FaMapMarkerAlt />
                </div>
                <h4>Our Location</h4>
                <p>Natural Health World Clinic</p>
                <p>123, Wellness Avenue, Green Park</p>
                <p>New Delhi — 110001</p>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.1}>
              <div className="contact-card card" id="contact-phone">
                <div className="contact-card-icon">
                  <FaPhone />
                </div>
                <h4>Phone</h4>
                <p><a href="tel:+919876543210">+91 98765 43210</a></p>
                <p><a href="tel:+919876543211">+91 98765 43211</a></p>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.2}>
              <div className="contact-card card" id="contact-email">
                <div className="contact-card-icon">
                  <FaEnvelope />
                </div>
                <h4>Email</h4>
                <p><a href="mailto:info@naturalhealthworld.com">info@naturalhealthworld.com</a></p>
                <p><a href="mailto:appointments@naturalhealthworld.com">appointments@nhw.com</a></p>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.3}>
              <div className="contact-card card" id="contact-hours">
                <div className="contact-card-icon">
                  <FaClock />
                </div>
                <h4>Working Hours</h4>
                <p><strong>Mon – Sat:</strong> 9:00 AM – 7:00 PM</p>
                <p><strong>Sunday:</strong> 10:00 AM – 2:00 PM</p>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>
    </main>
  );
}
