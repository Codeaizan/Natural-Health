import { FaGraduationCap, FaAward, FaHeartbeat, FaUsers, FaLeaf, FaBookOpen } from 'react-icons/fa';
import HeroBanner from '../components/HeroBanner';
import AnimatedSection from '../components/AnimatedSection';
import clinicImg from '../assets/images/clinic.jpg';
import doctorImg from '../assets/images/doctor-shakir.jpg';
import './About.css';

const milestones = [
  { year: '2005', title: 'The Beginning', description: 'Dr. Shakir Rashid completed his BAMS degree and began his journey into Ayurvedic medicine, deeply inspired by his family\'s tradition of herbal healing.', icon: <FaGraduationCap /> },
  { year: '2008', title: 'Advanced Studies', description: 'Completed MD in Ayurveda with specialization in Kayachikitsa (Internal Medicine). Trained under renowned Vaidyas in Kerala for Panchakarma therapies.', icon: <FaBookOpen /> },
  { year: '2012', title: 'Clinic Founded', description: 'Natural Health World was established with a vision to make authentic Ayurvedic treatment accessible to everyone. Started with a small clinic and a big dream.', icon: <FaLeaf /> },
  { year: '2016', title: 'Product Line Launch', description: 'Launched our own range of premium Ayurvedic formulations, handcrafted with herbs sourced from trusted organic farms across India.', icon: <FaHeartbeat /> },
  { year: '2020', title: 'Recognition', description: 'Received the Excellence in Ayurvedic Practice award. Expanded to online consultations, helping patients across India and abroad.', icon: <FaAward /> },
  { year: '2024', title: '10,000+ Patients', description: 'Crossed the milestone of treating over 10,000 patients. Expanded clinic with modern diagnostic facilities while keeping Ayurvedic traditions alive.', icon: <FaUsers /> },
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
                    <strong>10,000+</strong>
                    <span>Patients Healed</span>
                  </div>
                  <div className="doctor-stat">
                    <strong>50+</strong>
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
              <h2>The Story of Natural Health World</h2>
              <p>From a small clinic to a trusted name in Ayurvedic wellness</p>
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
