import { GiLungs, GiStomach, GiMedicines, GiHealing, GiHerbsBundle, GiBrain } from 'react-icons/gi';
import { FaHandHoldingMedical, FaLeaf } from 'react-icons/fa';

const treatments = [
  {
    id: 1,
    name: 'Asthma & Respiratory Disorders',
    icon: 'lungs',
    description: 'Chronic asthma, bronchitis, allergic rhinitis, and other respiratory conditions treated through herbal bronchodilators and Pranayama therapy.',
    approach: 'Our proprietary blend of Vasaka, Tulsi, and Kantakari along with specialized breathing exercises helps open airways naturally, reducing dependence on inhalers and steroids.',
    successRate: '85%',
    symptoms: ['Wheezing', 'Shortness of breath', 'Chronic cough', 'Chest tightness'],
  },
  {
    id: 2,
    name: 'Piles & Fistula',
    icon: 'healing',
    description: 'Non-surgical treatment for hemorrhoids, fissures, and fistula using ancient Kshara Sutra therapy and herbal formulations.',
    approach: 'We combine Kshara Sutra — a medicated thread therapy praised by WHO — with internal herbal medicines and dietary modifications for complete, surgery-free healing.',
    successRate: '92%',
    symptoms: ['Bleeding during bowel movement', 'Pain & swelling', 'Itching', 'Lumps near anus'],
  },
  {
    id: 3,
    name: 'Kidney & Urinary Issues',
    icon: 'leaf',
    description: 'Kidney stones, urinary tract infections, and renal health issues managed through diuretic herbs and detox protocols.',
    approach: 'Punarnava, Gokshura, and Varuna-based treatments help dissolve kidney stones naturally, improve urinary flow, and strengthen kidney function without invasive procedures.',
    successRate: '76%',
    symptoms: ['Painful urination', 'Kidney stones', 'Frequent UTIs', 'Lower back pain'],
  },
  {
    id: 4,
    name: 'Joint Pain & Arthritis',
    icon: 'medical',
    description: 'Rheumatoid arthritis, osteoarthritis, gout, and cervical spondylosis managed through anti-inflammatory herbs and Panchakarma.',
    approach: 'Combination of Guggulu-based internal medicines, therapeutic Abhyanga oil massage, Janu Basti therapy, and lifestyle modifications for lasting joint health.',
    successRate: '82%',
    symptoms: ['Joint stiffness', 'Swelling & pain', 'Reduced mobility', 'Morning stiffness'],
  },
  {
    id: 5,
    name: 'Diabetes Management',
    icon: 'medicines',
    description: 'Type 2 diabetes and pre-diabetic conditions managed through blood sugar regulating herbs and metabolic correction.',
    approach: 'Our Gudmar (Gymnema), Jamun, and Karela-based formulations help regulate insulin sensitivity naturally, complementing conventional care for holistic diabetes management.',
    successRate: '75%',
    symptoms: ['High blood sugar', 'Frequent urination', 'Fatigue', 'Slow wound healing'],
  },
  {
    id: 6,
    name: 'Men & Women Intimate Health',
    icon: 'herbs',
    description: 'Comprehensive Ayurvedic care for reproductive and intimate health concerns in both men and women through hormonal balance and vitality restoration.',
    approach: 'Personalized herbal formulations using Ashwagandha, Shatavari, Safed Musli, and Gokshura combined with Rasayana therapy to naturally restore vitality, hormonal balance, and overall wellness.',
    successRate: '80%',
    symptoms: ['Hormonal imbalance', 'Low vitality', 'Reproductive concerns', 'Stress-related issues'],
  },
];

export default treatments;
