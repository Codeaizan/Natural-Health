import { FaStar, FaQuoteLeft } from 'react-icons/fa';
import HeroBanner from '../components/HeroBanner';
import AnimatedSection from '../components/AnimatedSection';
import testimonials from '../data/testimonials';
import clinicImg from '../assets/images/clinic.jpg';
import './Testimonials.css';

const stats = [
  { value: '10,000+', label: 'Happy Patients', icon: '😊' },
  { value: '15+', label: 'Years of Trust', icon: '🏆' },
  { value: '95%', label: 'Success Rate', icon: '📈' },
  { value: '4.9/5', label: 'Average Rating', icon: '⭐' },
];

export default function Testimonials() {
  return (
    <main className="testimonials-page">
      <HeroBanner
        title="What Our Patients Say"
        subtitle="Real stories from real patients who found healing through the power of Ayurveda"
        image={clinicImg}
        compact
      />

      {/* ---- Stats ---- */}
      <section className="section" id="testimonial-stats">
        <div className="container">
          <AnimatedSection>
            <div className="testimonial-stats-grid">
              {stats.map((s, i) => (
                <div key={i} className="testimonial-stat-card" id={`stat-${i}`}>
                  <span className="stat-icon">{s.icon}</span>
                  <strong className="stat-value">{s.value}</strong>
                  <span className="stat-label">{s.label}</span>
                </div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ---- Testimonials Grid ---- */}
      <section className="section section-cream" id="testimonials-grid-section">
        <div className="container">
          <AnimatedSection>
            <div className="section-header">
              <span className="badge">Patient Testimonials</span>
              <h2>Voices of Healing</h2>
              <p>Every testimonial represents a life transformed through Ayurveda</p>
            </div>
          </AnimatedSection>

          <div className="testimonials-masonry">
            {testimonials.map((t, i) => (
              <AnimatedSection key={t.id} delay={i * 0.08}>
                <div className="testimonial-card card" id={`testimonial-card-${t.id}`}>
                  <div className="testimonial-card-top">
                    <FaQuoteLeft className="testimonial-quote-icon" />
                    <div className="testimonial-card-stars">
                      {[...Array(t.rating)].map((_, j) => (
                        <FaStar key={j} className="star-filled" />
                      ))}
                      {[...Array(5 - t.rating)].map((_, j) => (
                        <FaStar key={j} className="star-empty" />
                      ))}
                    </div>
                  </div>

                  <p className="testimonial-card-text">"{t.text}"</p>

                  <div className="testimonial-card-bottom">
                    <div className="testimonial-card-author">
                      <div className="testimonial-card-avatar">
                        {t.name.charAt(0)}
                      </div>
                      <div>
                        <strong>{t.name}</strong>
                        <span className="testimonial-card-location">{t.location}</span>
                      </div>
                    </div>
                    <div className="testimonial-card-tags">
                      <span className="testimonial-condition-tag">{t.condition}</span>
                      <span className="testimonial-duration-tag">{t.duration}</span>
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ---- CTA ---- */}
      <section className="section section-dark" id="testimonial-cta">
        <div className="container">
          <AnimatedSection>
            <div className="testimonial-cta-content">
              <h2>Your Healing Story Could Be Next</h2>
              <p>Join thousands of patients who have found relief and wellness through our Ayurvedic treatments.</p>
              <a href="/book-appointment" className="btn btn-primary btn-lg">
                Start Your Journey Today
              </a>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </main>
  );
}
