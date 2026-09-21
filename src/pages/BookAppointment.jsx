import { useState } from 'react';
import { FaCalendarAlt, FaClock, FaUser, FaPhone, FaEnvelope, FaMapMarkerAlt, FaChevronDown, FaChevronUp, FaCheckCircle } from 'react-icons/fa';
import HeroBanner from '../components/HeroBanner';
import AnimatedSection from '../components/AnimatedSection';
import clinicImg from '../assets/images/clinic.jpg';
import './BookAppointment.css';

const timeSlots = [
  '11:00 AM', '11:30 AM', '12:00 PM', '2:00 PM', '2:30 PM', '3:00 PM',
  '3:30 PM', '4:00 PM', '4:30 PM', '5:00 PM', '5:30 PM', '6:00 PM', '6:30 PM',
];

const faqs = [
  {
    q: 'What should I bring to my first consultation?',
    a: 'Please bring any previous medical reports, current medication list, and a brief history of your condition. If you have specific lab reports or diagnostic images, those are helpful too.',
  },
  {
    q: 'How long does a typical consultation last?',
    a: 'Your first consultation usually takes 30-45 minutes, as Dr. Rashid takes time to understand your complete health history, lifestyle, and constitution. Follow-up visits are typically 15-20 minutes.',
  },
  {
    q: 'Are online consultations available?',
    a: 'Yes! We offer video consultations for patients who cannot visit the clinic in person. You can select "Online Consultation" while booking your appointment.',
  },
  {
    q: 'How long before I see results from Ayurvedic treatment?',
    a: 'Results vary depending on the condition and individual. Some patients notice improvement within 2-4 weeks, while chronic conditions may take 2-3 months. Dr. Rashid will set realistic expectations during your consultation.',
  },
  {
    q: 'Is Ayurvedic treatment safe alongside my existing medication?',
    a: 'Yes, Ayurvedic treatments are generally safe to use alongside conventional medicine. Dr. Rashid carefully reviews your current medications to ensure there are no interactions.',
  },
];

export default function BookAppointment() {
  const [formData, setFormData] = useState({
    name: '', email: '', phone: '', date: '', timeSlot: '',
    consultationType: 'in-clinic', condition: '', message: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [openFaq, setOpenFaq] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    // In production, this would submit to a backend
  };

  if (submitted) {
    return (
      <main className="bookappointment-page">
        <HeroBanner
          title="Book Your Consultation"
          subtitle="Take the first step towards natural healing"
          image={clinicImg}
          compact
        />
        <section className="section">
          <div className="container">
            <div className="booking-success" id="booking-success">
              <div className="booking-success-icon">
                <FaCheckCircle />
              </div>
              <h2>Appointment Request Received!</h2>
              <p>
                Thank you, <strong>{formData.name}</strong>! We've received your appointment request. 
                Our team will confirm your booking via {formData.email ? 'email' : 'phone'} within 24 hours.
              </p>
              <div className="booking-summary">
                <div className="booking-summary-item">
                  <FaCalendarAlt />
                  <span>{formData.date || 'Date to be confirmed'}</span>
                </div>
                <div className="booking-summary-item">
                  <FaClock />
                  <span>{formData.timeSlot || 'Time to be confirmed'}</span>
                </div>
                <div className="booking-summary-item">
                  <FaMapMarkerAlt />
                  <span>{formData.consultationType === 'online' ? 'Online Consultation' : 'In-Clinic Visit'}</span>
                </div>
              </div>
              <button className="btn btn-primary" onClick={() => setSubmitted(false)} id="book-another-btn">
                Book Another Appointment
              </button>
            </div>
          </div>
        </section>
      </main>
    );
  }

  return (
    <main className="bookappointment-page">
      <HeroBanner
        title="Book Your Consultation"
        subtitle="Take the first step towards natural healing. Schedule a personalized consultation with Dr. Shakir Rashid."
        image={clinicImg}
        compact
      />

      <section className="section" id="booking-section">
        <div className="container">
          <div className="booking-grid">
            {/* Form */}
            <AnimatedSection direction="left">
              <div className="booking-form-wrapper card" id="booking-form-wrapper">
                <h2>Schedule Your Visit</h2>
                <p className="booking-form-subtitle">Fill in the details below and we'll get back to you shortly.</p>

                <form onSubmit={handleSubmit} className="booking-form" id="appointment-form">
                  <div className="form-row">
                    <div className="form-group">
                      <label htmlFor="name">
                        <FaUser className="form-icon" /> Full Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        placeholder="Enter your full name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="phone">
                        <FaPhone className="form-icon" /> Phone *
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        placeholder="+91 98765 43210"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                      />
                    </div>
                  </div>

                  <div className="form-group">
                    <label htmlFor="email">
                      <FaEnvelope className="form-icon" /> Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      placeholder="your@email.com"
                      value={formData.email}
                      onChange={handleChange}
                    />
                  </div>

                  <div className="form-row">
                    <div className="form-group">
                      <label htmlFor="date">
                        <FaCalendarAlt className="form-icon" /> Preferred Date *
                      </label>
                      <input
                        type="date"
                        id="date"
                        name="date"
                        value={formData.date}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="timeSlot">
                        <FaClock className="form-icon" /> Time Slot *
                      </label>
                      <select
                        id="timeSlot"
                        name="timeSlot"
                        value={formData.timeSlot}
                        onChange={handleChange}
                        required
                      >
                        <option value="">Select a time</option>
                        {timeSlots.map((slot) => (
                          <option key={slot} value={slot}>{slot}</option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div className="form-group">
                    <label>Consultation Type *</label>
                    <div className="consultation-type-options">
                      <label className={`consultation-option ${formData.consultationType === 'in-clinic' ? 'consultation-option-active' : ''}`}>
                        <input
                          type="radio"
                          name="consultationType"
                          value="in-clinic"
                          checked={formData.consultationType === 'in-clinic'}
                          onChange={handleChange}
                        />
                        <FaMapMarkerAlt />
                        <div>
                          <strong>In-Clinic</strong>
                          <span>Visit our clinic</span>
                        </div>
                      </label>
                      <label className={`consultation-option ${formData.consultationType === 'online' ? 'consultation-option-active' : ''}`}>
                        <input
                          type="radio"
                          name="consultationType"
                          value="online"
                          checked={formData.consultationType === 'online'}
                          onChange={handleChange}
                        />
                        <FaPhone />
                        <div>
                          <strong>Online</strong>
                          <span>Video consultation</span>
                        </div>
                      </label>
                    </div>
                  </div>

                  <div className="form-group">
                    <label htmlFor="condition">Health Condition / Concern</label>
                    <input
                      type="text"
                      id="condition"
                      name="condition"
                      placeholder="e.g., Asthma, Skin issues, Digestive problems"
                      value={formData.condition}
                      onChange={handleChange}
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="message">Additional Message</label>
                    <textarea
                      id="message"
                      name="message"
                      rows="4"
                      placeholder="Briefly describe your symptoms or any questions you have..."
                      value={formData.message}
                      onChange={handleChange}
                    />
                  </div>

                  <button type="submit" className="btn btn-primary btn-lg booking-submit-btn" id="submit-booking">
                    <FaCalendarAlt />
                    Confirm Appointment
                  </button>
                </form>
              </div>
            </AnimatedSection>

            {/* Sidebar */}
            <AnimatedSection direction="right">
              <div className="booking-sidebar">
                {/* Clinic Info */}
                <div className="booking-info-card card" id="clinic-info-card">
                  <h3>Clinic Information</h3>
                  <div className="booking-info-items">
                    <div className="booking-info-item">
                      <FaMapMarkerAlt />
                      <div>
                        <strong>Address</strong>
                        <p>4, Circus Range, Near Mithai<br />Beck Bagan, Kolkata — 700019</p>
                      </div>
                    </div>
                    <div className="booking-info-item">
                      <FaPhone />
                      <div>
                        <strong>Phone</strong>
                        <p>+91 90076 97503<br />+91 91437 46966</p>
                      </div>
                    </div>
                    <div className="booking-info-item">
                      <FaEnvelope />
                      <div>
                        <strong>Email</strong>
                        <p>naturalhealthworld99@gmail.com</p>
                      </div>
                  </div>
                </div>

                {/* What to Expect */}
                <div className="booking-expect-card card" id="what-to-expect">
                  <h3>What to Expect</h3>
                  <ol className="expect-list">
                    <li>
                      <span className="expect-num">1</span>
                      <div>
                        <strong>Detailed Consultation</strong>
                        <p>Dr. Rashid will assess your health history, pulse, and constitution.</p>
                      </div>
                    </li>
                    <li>
                      <span className="expect-num">2</span>
                      <div>
                        <strong>Personalized Plan</strong>
                        <p>Receive a customized treatment plan with herbal formulations.</p>
                      </div>
                    </li>
                    <li>
                      <span className="expect-num">3</span>
                      <div>
                        <strong>Ongoing Support</strong>
                        <p>Regular follow-ups and dietary guidance throughout your journey.</p>
                      </div>
                    </li>
                  </ol>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* ---- FAQ ---- */}
      <section className="section section-cream" id="faq-section">
        <div className="container">
          <AnimatedSection>
            <div className="section-header">
              <span className="badge">FAQ</span>
              <h2>Frequently Asked Questions</h2>
              <p>Everything you need to know before your visit</p>
            </div>
          </AnimatedSection>

          <div className="faq-list" id="faq-list">
            {faqs.map((faq, i) => (
              <AnimatedSection key={i} delay={i * 0.08}>
                <div
                  className={`faq-item card ${openFaq === i ? 'faq-open' : ''}`}
                  id={`faq-${i}`}
                >
                  <button
                    className="faq-question"
                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                    aria-expanded={openFaq === i}
                  >
                    <span>{faq.q}</span>
                    {openFaq === i ? <FaChevronUp /> : <FaChevronDown />}
                  </button>
                  {openFaq === i && (
                    <div className="faq-answer">
                      <p>{faq.a}</p>
                    </div>
                  )}
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
