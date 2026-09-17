import { motion } from 'framer-motion';
import './HeroBanner.css';

export default function HeroBanner({ title, subtitle, image, overlay = true, children, compact = false }) {
  return (
    <section className={`hero-banner ${compact ? 'hero-banner-compact' : ''}`} id="hero-banner">
      <div className="hero-banner-bg">
        <img src={image} alt={title} loading="eager" />
        {overlay && <div className="hero-banner-overlay" />}
      </div>
      <div className="container hero-banner-content">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          <h1>{title}</h1>
          {subtitle && <p className="hero-banner-subtitle">{subtitle}</p>}
          {children && <div className="hero-banner-actions">{children}</div>}
        </motion.div>
      </div>

      {/* Decorative bottom curve */}
      <div className="hero-banner-curve">
        <svg viewBox="0 0 1440 80" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
          <path d="M0 80 L0 40 Q360 0 720 40 Q1080 80 1440 40 L1440 80Z" fill="var(--warm-ivory)" />
        </svg>
      </div>
    </section>
  );
}
