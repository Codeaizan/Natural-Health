import { FaGraduationCap, FaAward, FaHeartbeat, FaUsers, FaLeaf, FaBookOpen, FaIndustry, FaBoxOpen } from 'react-icons/fa';
import HeroBanner from '../components/HeroBanner';
import AnimatedSection from '../components/AnimatedSection';
import clinicImg from '../assets/images/clinic.jpg';
import doctorImg from '../assets/images/doctor-shakir.jpg';
import './About.css';

const milestones = [
  { year: '2011', title: 'Started the Clinic', description: 'Natural Health World was founded with a vision to bring authentic Ayurvedic and Unani healing to Kolkata. Dr. Shakir Rashid started the clinic and began his mission of natural healthcare.', icon: <FaLeaf /> },
  { year: '2015', title: 'Launched Karishmai Oil', description: 'Our flagship product, Karishmai Oil, was launched — a powerful Ayurvedic formulation that quickly gained trust among patients for its effectiveness.', icon: <FaHeartbeat /> },
  { year: '2018', title: 'Set Up Factory', description: 'Established our own manufacturing facility to ensure the highest quality standards in every product, from sourcing raw herbs to the final formulation.', icon: <FaIndustry /> },
  { year: '2024', title: '40+ Products Launched', description: 'Crossed the milestone of 40+ Ayurvedic products, each handcrafted with care. From Diabo Guard to Neurolaxx, our range continues to grow with the trust of thousands.', icon: <FaBoxOpen /> },
];

const achievements = [
  { caption: 'Receiving Acknowledgement Certificate from Hamdard at WB Doctors Meet' },
  { caption: 'With Jb. Imtiaz Sb. Registrar, State Council of Unani Medicine, WB' },
];

const values = [
  { title: 'Our Mission', description: 'To bring the healing power of Ayurveda to every household, offering natural, effective, and affordable healthcare solutions that treat the root cause of disease.', icon: '🎯' },
  { title: 'Our Vision', description: 'To be the most trusted name in Ayurvedic healthcare — a place where ancient wisdom meets modern wellness, and every patient finds their path to natural health.', icon: '🌟' },
  { title: 'Our Values', description: 'Authenticity in every formulation. Compassion in every consultation. Integrity in every interaction. We treat our patients like family, because your health is our purpose.', icon: '💚' },
];

export default function About() {
  return (
    <main className="about-page">
      <HeroBanner
        title="About Natural Health World"
        subtitle="Rooted in tradition. Driven by compassion. Committed to your natural wellness journey."
        image={clinicImg}
        compact
      />

      {/* ---- Doctor Section ---- */}
      <section className="section" id="doctor-section">
        <div className="container">
          <div className="doctor-grid">
            <AnimatedSection direction="left">
              <div className="doctor-image-wrapper">
                <img src={doctorImg} alt="Dr. Shakir Rashid" className="doctor-image" />
                <div className="doctor-image-accent" />
              </div>
            </AnimatedSection>

            <AnimatedSection direction="right">
              <div className="doctor-content">
                <span className="badge">Meet the Expert</span>
                <h2>Dr. Shakir Rashid</h2>
                <p className="doctor-title-sub">RUMP (State Council of Unani Medicine, West Bengal, Kolkata) • Consultant Physician of Ayurvedic & Unani Medicine</p>

                <p>
                  Dr. Shakir Rashid is a passionate Ayurvedic physician with over 15 years of 
                  clinical experience. Born into a family with deep roots in traditional herbal 
                  medicine, his journey into Ayurveda was as natural as the remedies he prescribes.
                </p>

                <p>
                  After completing his BAMS and MD in Ayurveda, Dr. Rashid trained extensively 
                  in Kerala — the heartland of Ayurvedic practice — mastering Panchakarma therapies 
                  and classical formulations under the guidance of legendary Vaidyas.
                </p>

                <p>
                  His unique approach combines ancient Ayurvedic wisdom with modern diagnostic 
                  methods, ensuring accurate assessment and effective treatment. Whether it's 
                  chronic asthma, persistent skin disorders, or stubborn digestive issues, 
                  Dr. Rashid has a remarkable track record of healing through nature.
                </p>

                <blockquote className="doctor-quote">
                  "Ayurveda doesn't just treat the disease — it heals the person. Every patient 
                  is unique, and so should be their path to wellness."
                  <cite>— Dr. Shakir Rashid</cite>
                </blockquote>

                <div className="doctor-stats">
                  <div className="doctor-stat">
                    <strong>15+</strong>
                    <span>Years Experience</span>
                  </div>
                  <div className="doctor-stat">
                    <strong>5,000+</strong>
                    <span>Patients Healed</span>
                  </div>
                  <div className="doctor-stat">
                    <strong>60+</strong>
                    <span>Herbal Products</span>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* ---- Timeline ---- */}
      <section className="section section-cream" id="timeline-section">
        <div className="container">
          <AnimatedSection>
            <div className="section-header">
              <span className="badge">Our Journey</span>
              <h2>Journey So Far</h2>
              <p>From a small clinic to a trusted name in Ayurvedic and Unani healthcare</p>
            </div>
          </AnimatedSection>

          <div className="timeline">
            {milestones.map((m, i) => (
              <AnimatedSection key={i} delay={i * 0.1} direction={i % 2 === 0 ? 'left' : 'right'}>
                <div className={`timeline-item ${i % 2 === 0 ? 'timeline-left' : 'timeline-right'}`} id={`timeline-${m.year}`}>
                  <div className="timeline-dot">
                    {m.icon}
                  </div>
                  <div className="timeline-card card">
                    <span className="timeline-year">{m.year}</span>
                    <h4>{m.title}</h4>
                    <p>{m.description}</p>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>

          {/* Achievements */}
          <AnimatedSection>
            <div className="achievements-section">
              <h3 className="achievements-heading">Achievements & Recognition</h3>
              <div className="achievements-grid">
                {achievements.map((a, i) => (
                  <div className="achievement-card card" key={i}>
                    <div className="achievement-icon">
                      <FaAward />
                    </div>
                    <p className="achievement-caption">{a.caption}</p>
                  </div>
                ))}
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ---- Mission, Vision, Values ---- */}
      <section className="section" id="values-section">
        <div className="container">
          <div className="grid-3">
            {values.map((v, i) => (
              <AnimatedSection key={i} delay={i * 0.15}>
                <div className="value-card card" id={`value-${i}`}>
                  <span className="value-emoji">{v.icon}</span>
                  <h3>{v.title}</h3>
                  <p>{v.description}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
