import productAshwagandha from '../assets/images/product-ashwagandha.jpg';
import productTriphala from '../assets/images/product-triphala.jpg';
import productTurmeric from '../assets/images/product-turmeric.jpg';
import productBrahmi from '../assets/images/product-brahmi.jpg';
import productNeem from '../assets/images/product-neem.jpg';
import productTulsi from '../assets/images/product-tulsi.jpg';

const products = [
  {
    id: 1,
    name: 'Karishmai Oil',
    category: 'Pain Relief',
    description: 'A powerful Ayurvedic oil blend for joint pain, muscle stiffness, and body aches. Formulated with rare herbs to provide deep, soothing relief.',
    image: productAshwagandha,
    badge: 'Bestseller',
  },
  {
    id: 2,
    name: 'Diabo Guard',
    category: 'Diabetes Care',
    description: 'Advanced herbal formulation to help manage blood sugar levels naturally. Supports healthy metabolism and pancreatic function.',
    image: productTriphala,
    badge: 'Popular',
  },
  {
    id: 3,
    name: 'Femalotone',
    category: 'Women\'s Health',
    description: 'Specially crafted for women\'s hormonal balance, menstrual wellness, and reproductive health. A natural tonic for vitality and strength.',
    image: productTurmeric,
    badge: null,
  },
  {
    id: 4,
    name: 'Heart Care',
    category: 'Cardiac Wellness',
    description: 'Ayurvedic heart health supplement with Arjuna, Guggulu, and other cardio-protective herbs to support healthy cholesterol and blood pressure.',
    image: productBrahmi,
    badge: null,
  },
  {
    id: 5,
    name: 'Shakti Wardhan',
    category: 'Vitality & Strength',
    description: 'A potent Rasayana formulation for energy, stamina, and overall vitality. Rejuvenates the body and boosts natural immunity.',
    image: productNeem,
    badge: 'New',
  },
  {
    id: 6,
    name: 'Neurolaxx',
    category: 'Mental Wellness',
    description: 'Advanced Ayurvedic formulation for neurological wellness, stress relief, and enhanced cognitive function. A natural path to mental clarity.',
    image: productTulsi,
    badge: 'Bestseller',
  },
];

export const categories = [
  'All',
  'Pain Relief',
  'Diabetes Care',
  'Women\'s Health',
  'Cardiac Wellness',
  'Vitality & Strength',
  'Mental Wellness',
];

export default products;
