import { Link } from 'react-router-dom';
import { FaLeaf, FaUserMd, FaFlask, FaStar, FaArrowRight, FaPhone, FaEnvelope, FaMapMarkerAlt, FaClock, FaShieldAlt, FaHandHoldingHeart, FaSeedling, FaMicroscope, FaCheckCircle } from 'react-icons/fa';
import { GiLungs, GiStomach, GiHealing, GiHerbsBundle, GiBrain, GiMedicines } from 'react-icons/gi';
import { motion } from 'framer-motion';
import AnimatedSection from '../components/AnimatedSection';
import heroImg from '../assets/images/home-hero.jpg';
import neurolaxxVideo from '../assets/Neurolaxx.mp4';
import clinicTourVideo from '../assets/Clinic_walkthrough_video_tour_1080p_20260921124708.mp4';
import clinicImg from '../assets/images/clinic.jpg';
import doctorImg from '../assets/images/doctor-shakir.jpg';
import products from '../data/products';
import testimonials from '../data/testimonials';
import treatments from '../data/treatments';
import './Home.css';

const features = [
  {
    icon: <FaLeaf />,
    title: '100% Natural Remedies',
    description: '100% natural card: pure ayurvedic formulation crafted from hand selected herbs from across the world',
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
  { value: '5,000+', label: 'Patients Treated' },
  { value: '15+', label: 'Years Experience' },
  { value: '95%', label: 'Success Rate' },
  { value: '60+', label: 'Herbal Products' },
];

const treatmentIconMap = {
  lungs: <GiLungs />,
  healing: <GiHealing />,
  herbs: <GiHerbsBundle />,
  stomach: <GiStomach />,
  medical: <GiMedicines />,
  medicines: <GiMedicines />,
  brain: <GiBrain />,
  leaf: <FaSeedling />,
};

const whyUsPoints = [
  { icon: <FaHandHoldingHeart />, title: 'Personalized Care', text: 'Every treatment plan is tailored to your unique body constitution (Prakriti) and health condition.' },
  { icon: <FaSeedling />, title: 'Root Cause Healing', text: 'We don\'t mask symptoms — we identify and treat the root cause for lasting, natural relief.' },
  { icon: <FaMicroscope />, title: 'Modern Diagnostics', text: 'Traditional Nadi Pariksha combined with modern lab tests for accurate, effective treatment.' },
  { icon: <FaShieldAlt />, title: 'Zero Side Effects', text: 'Pure herbal formulations that are safe, gentle, and free from synthetic chemicals.' },
];

export default function Home() {
  const featuredProducts = products.slice(0, 3);
  const featuredTestimonials = testimonials.slice(0, 2);

  return (
    <main className="home-page">
      {/* ---- Hero ---- */}
      <section className="home-hero" id="home-hero">
        <div className="home-hero-bg">
          <img
            className="home-hero-img"
            src={heroImg}
            alt="Ayurvedic treatments and natural wellness"
          />
          <div className="home-hero-overlay" />
        </div>

        <div className="container home-hero-content">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            <h1>Heal at the Root,<br />Not Just the <span className="text-accent">Symptom</span></h1>
            <p className="home-hero-subtitle">
              Pure Ayurvedic formulations crafted from hand-selected herbs{' '}
              <span className="text-accent">from across the world</span>.
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
              <p>We blend 5,000 years of Ayurvedic science with contemporary diagnostic methods to provide you the best of both worlds.</p>
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
                <img src={doctorImg} alt="Dr. Shakir Rashid" />
                <div className="about-preview-badge glass-card">
                  <FaUserMd />
                  <div>
                    <strong>Dr. Shakir Rashid</strong>
                    <span>Consultant Physician</span>
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

      {/* ---- Clinic Tour Video ---- */}
      <section className="clinic-tour-section" id="clinic-tour">
        <div className="clinic-tour-video-wrap">
          <video
            className="clinic-tour-video"
            src={clinicTourVideo}
            autoPlay
            loop
            muted
            playsInline
          />
          <div className="clinic-tour-overlay" />
        </div>
        <div className="container clinic-tour-content">
          <AnimatedSection>
            <span className="badge" style={{ background: 'rgba(255,255,255,0.18)', color: '#fff' }}>Step Inside</span>
            <h2>Experience Our Clinic</h2>
            <p>A warm, healing space where ancient Ayurvedic tradition meets modern comfort — take a virtual walk through Natural Health World.</p>
            <Link to="/book-appointment" className="btn btn-primary btn-lg" id="clinic-tour-btn">
              Book a Visit <FaArrowRight />
            </Link>
          </AnimatedSection>
        </div>
      </section>

      {/* ---- Why Us Preview ---- */}
      <section className="section section-dark" id="why-us-preview">
        <div className="container">
          <AnimatedSection>
            <div className="section-header">
              <span className="badge" style={{ background: 'rgba(255,255,255,0.15)', color: 'var(--sand)' }}>Why Natural Health World</span>
              <h2>What Makes Us Different</h2>
              <p style={{ color: 'rgba(238,236,227,0.7)' }}>We don't just treat diseases — we transform lives through authentic Ayurvedic care</p>
            </div>
          </AnimatedSection>

          <div className="grid-4 whyus-preview-grid">
            {whyUsPoints.map((point, i) => (
              <AnimatedSection key={i} delay={i * 0.1}>
                <div className="whyus-preview-card" id={`whyus-point-${i}`}>
                  <div className="whyus-preview-icon">{point.icon}</div>
                  <h4>{point.title}</h4>
                  <p>{point.text}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>

          <AnimatedSection>
            <div className="home-view-all">
              <Link to="/why-us" className="btn btn-outline" id="whyus-preview-btn">
                Discover Why Patients Trust Us <FaArrowRight />
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ---- Special Treatments ---- */}
      <section className="section section-cream" id="special-treatments">
        <div className="container">
          <AnimatedSection>
            <div className="section-header">
              <span className="badge">Special Treatments</span>
              <h2>Conditions We Specialize In</h2>
              <p>Expert Ayurvedic solutions for chronic and complex health conditions</p>
            </div>
          </AnimatedSection>

          <div className="treatments-preview-grid">
            {treatments.slice(0, 6).map((t, i) => (
              <AnimatedSection key={t.id} delay={i * 0.1}>
                <Link to="/why-us#treatments-section" className="treatment-preview-card card" id={`treatment-preview-${t.id}`}>
                  <div className="treatment-preview-icon">
                    {treatmentIconMap[t.icon]}
                  </div>
                  <div className="treatment-preview-content">
                    <h4>{t.name}</h4>
                    <p>{t.description.slice(0, 80)}...</p>
                    <span className="treatment-preview-rate">
                      <FaCheckCircle /> {t.successRate} success rate
                    </span>
                  </div>
                  <FaArrowRight className="treatment-preview-arrow" />
                </Link>
              </AnimatedSection>
            ))}
          </div>

          <AnimatedSection>
            <div className="home-view-all">
              <Link to="/why-us#treatments-section" className="btn btn-primary" id="view-all-treatments-btn">
                View All Treatments <FaArrowRight />
              </Link>
            </div>
          </AnimatedSection>
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
            {/* Neurolaxx — Video Card */}
            <AnimatedSection delay={0}>
              <div className="product-preview-card card product-video-card" id="product-preview-neurolaxx">
                <div
                  className="product-preview-image"
                  onMouseEnter={(e) => e.currentTarget.querySelector('video')?.play()}
                  onMouseLeave={(e) => { const v = e.currentTarget.querySelector('video'); v?.pause(); v.currentTime = 0; }}
                >
                  <video
                    className="product-preview-vid"
                    src={neurolaxxVideo}
                    muted
                    loop
                    playsInline
                    preload="metadata"
                  />
                  <span className="product-badge">Bestseller</span>
                  <div className="product-video-play-hint">▶ Hover to preview</div>
                </div>
                <div className="product-preview-info">
                  <span className="product-category">Mental Wellness</span>
                  <h4>Neurolaxx</h4>
                  <p>Advanced Ayurvedic formulation for neurological wellness, stress relief, and enhanced cognitive function. A natural path to mental clarity.</p>
                  <div className="product-preview-footer">
                    <Link to="/products" className="btn btn-secondary btn-sm">View Details</Link>
                  </div>
                </div>
              </div>
            </AnimatedSection>

            {/* Karishmai Oil — Image Card (from data) */}
            <AnimatedSection delay={0.15}>
              <div className="product-preview-card card" id={`product-preview-${featuredProducts[0].id}`}>
                <div className="product-preview-image">
                  <img src={featuredProducts[0].image} alt={featuredProducts[0].name} />
                  {featuredProducts[0].badge && <span className="product-badge">{featuredProducts[0].badge}</span>}
                </div>
                <div className="product-preview-info">
                  <span className="product-category">{featuredProducts[0].category}</span>
                  <h4>{featuredProducts[0].name}</h4>
                  <p>{featuredProducts[0].description}</p>
                  <div className="product-preview-footer">
                    <Link to="/products" className="btn btn-secondary btn-sm">View Details</Link>
                  </div>
                </div>
              </div>
            </AnimatedSection>

            {/* Diabo Guard — Image Card (from data) */}
            <AnimatedSection delay={0.3}>
              <div className="product-preview-card card" id={`product-preview-${featuredProducts[1].id}`}>
                <div className="product-preview-image">
                  <img src={featuredProducts[1].image} alt={featuredProducts[1].name} />
                  {featuredProducts[1].badge && <span className="product-badge">{featuredProducts[1].badge}</span>}
                </div>
                <div className="product-preview-info">
                  <span className="product-category">{featuredProducts[1].category}</span>
                  <h4>{featuredProducts[1].name}</h4>
                  <p>{featuredProducts[1].description}</p>
                  <div className="product-preview-footer">
                    <Link to="/products" className="btn btn-secondary btn-sm">View Details</Link>
                  </div>
                </div>
              </div>
            </AnimatedSection>
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
                  <a href="tel:+919007697503" className="btn btn-secondary btn-lg" id="cta-call-btn">
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
                <p>4, Circus Range, Near Mithai</p>
                <p>Beck Bagan, Kolkata — 700019</p>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.1}>
              <div className="contact-card card" id="contact-phone">
                <div className="contact-card-icon">
                  <FaPhone />
                </div>
                <h4>Phone</h4>
                <p><a href="tel:+919007697503">+91 90076 97503</a></p>
                <p><a href="tel:+919143746966">+91 91437 46966</a></p>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.2}>
              <div className="contact-card card" id="contact-email">
                <div className="contact-card-icon">
                  <FaEnvelope />
                </div>
                <h4>Email & Social</h4>
                <p><a href="mailto:naturalhealthworld99@gmail.com">naturalhealthworld99@gmail.com</a></p>
                <p><a href="https://instagram.com/naturalhealthworldkolkata" target="_blank" rel="noopener noreferrer">@naturalhealthworldkolkata</a></p>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>
    </main>
  );
}
