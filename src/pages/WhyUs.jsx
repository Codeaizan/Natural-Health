import { useState } from 'react';
import { FaCheckCircle, FaTimesCircle, FaChevronDown, FaChevronUp, FaShieldAlt, FaHandHoldingHeart, FaMicroscope, FaSeedling } from 'react-icons/fa';
import { GiLungs, GiStomach, GiMedicines, GiHealing, GiHerbsBundle, GiBrain } from 'react-icons/gi';
import HeroBanner from '../components/HeroBanner';
import AnimatedSection from '../components/AnimatedSection';
import treatments from '../data/treatments';
import heroBg from '../assets/images/hero-bg.jpg';
import './WhyUs.css';

const iconMap = {
  lungs: <GiLungs />,
  healing: <GiHealing />,
  herbs: <GiHerbsBundle />,
  stomach: <GiStomach />,
  medical: <GiMedicines />,
  medicines: <GiMedicines />,
  brain: <GiBrain />,
  leaf: <FaSeedling />,
};

const usps = [
  { icon: <FaHandHoldingHeart />, title: 'Personalized Treatment', description: 'Every patient gets a customized treatment plan based on their unique Dosha constitution and health condition.' },
  { icon: <FaSeedling />, title: 'Root Cause Healing', description: "We don't just suppress symptoms — we identify and treat the root cause of your ailment for lasting relief." },
  { icon: <FaMicroscope />, title: 'Modern Diagnostics', description: 'We combine traditional Nadi Pariksha with modern lab tests for accurate diagnosis and effective treatment.' },
  { icon: <FaShieldAlt />, title: 'No Side Effects', description: 'Our natural herbal formulations are safe, gentle, and free from harmful chemicals or synthetic compounds.' },
];

const comparison = [
  { aspect: 'Approach', ayurveda: 'Treats root cause of disease', conventional: 'Often treats symptoms only' },
  { aspect: 'Side Effects', ayurveda: 'Minimal to none', conventional: 'Can be significant' },
  { aspect: 'Personalization', ayurveda: 'Customized to individual constitution', conventional: 'Standardized protocols' },
  { aspect: 'Duration', ayurveda: 'Long-term sustainable results', conventional: 'May require lifelong medication' },
  { aspect: 'Cost', ayurveda: 'Affordable natural remedies', conventional: 'Can be expensive long-term' },
  { aspect: 'Holistic Care', ayurveda: 'Treats body, mind & spirit', conventional: 'Primarily focuses on body' },
];

export default function WhyUs() {
  const [expandedId, setExpandedId] = useState(null);

  return (
    <main className="whyus-page">
      <HeroBanner
        title="Why Choose Natural Health World"
        subtitle="Discover why thousands of patients trust us for their Ayurvedic healing journey"
        image={heroBg}
        compact
      />

      {/* ---- USPs ---- */}
      <section className="section" id="usp-section">
        <div className="container">
          <AnimatedSection>
            <div className="section-header">
              <span className="badge">Our Difference</span>
              <h2>What Sets Us Apart</h2>
              <p>The Natural Health World advantage — why patients choose us over others</p>
            </div>
          </AnimatedSection>

          <div className="grid-4">
            {usps.map((usp, i) => (
              <AnimatedSection key={i} delay={i * 0.1}>
                <div className="usp-card card" id={`usp-${i}`}>
                  <div className="usp-icon">{usp.icon}</div>
                  <h4>{usp.title}</h4>
                  <p>{usp.description}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ---- Treatments ---- */}
      <section className="section section-cream" id="treatments-section">
        <div className="container">
          <AnimatedSection>
            <div className="section-header">
              <span className="badge">Specializations</span>
              <h2>Conditions We Treat</h2>
              <p>Expert Ayurvedic treatment for a wide range of health conditions</p>
            </div>
          </AnimatedSection>

          <div className="treatments-grid">
            {treatments.map((t, i) => (
              <AnimatedSection key={t.id} delay={i * 0.08}>
                <div
                  className={`treatment-card card ${expandedId === t.id ? 'treatment-expanded' : ''}`}
                  id={`treatment-${t.id}`}
                >
                  <div className="treatment-card-header" onClick={() => setExpandedId(expandedId === t.id ? null : t.id)}>
                    <div className="treatment-icon">
                      {iconMap[t.icon]}
                    </div>
                    <div className="treatment-header-content">
                      <h3>{t.name}</h3>
                      <p>{t.description}</p>
                    </div>
                    <div className="treatment-toggle">
                      {expandedId === t.id ? <FaChevronUp /> : <FaChevronDown />}
                    </div>
                  </div>

                  {expandedId === t.id && (
                    <div className="treatment-details">
                      <div className="treatment-approach">
                        <h4>Our Ayurvedic Approach</h4>
                        <p>{t.approach}</p>
                      </div>
                      <div className="treatment-meta">
                        <div className="treatment-symptoms">
                          <h4>Common Symptoms</h4>
                          <ul>
                            {t.symptoms.map((s, j) => (
                              <li key={j}>
                                <FaCheckCircle className="symptom-check" />
                                {s}
                              </li>
                            ))}
                          </ul>
                        </div>
                        <div className="treatment-success">
                          <span className="success-label">Success Rate</span>
                          <div className="success-bar">
                            <div
                              className="success-fill"
                              style={{ width: t.successRate }}
                            />
                          </div>
                          <span className="success-value">{t.successRate}</span>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ---- Comparison ---- */}
      <section className="section" id="comparison-section">
        <div className="container">
          <AnimatedSection>
            <div className="section-header">
              <span className="badge">Compare</span>
              <h2>Ayurvedic vs. Conventional</h2>
              <p>See how our holistic approach compares to conventional medicine</p>
            </div>
          </AnimatedSection>

          <AnimatedSection>
            <div className="comparison-table-wrapper">
              <table className="comparison-table" id="comparison-table">
                <thead>
                  <tr>
                    <th>Aspect</th>
                    <th className="comparison-ayurveda">🌿 Ayurvedic Approach</th>
                    <th className="comparison-conventional">💊 Conventional Approach</th>
                  </tr>
                </thead>
                <tbody>
                  {comparison.map((row, i) => (
                    <tr key={i}>
                      <td className="comparison-aspect">{row.aspect}</td>
                      <td className="comparison-good">
                        <FaCheckCircle className="comparison-icon-good" />
                        {row.ayurveda}
                      </td>
                      <td className="comparison-neutral">
                        <FaTimesCircle className="comparison-icon-neutral" />
                        {row.conventional}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </main>
  );
}
