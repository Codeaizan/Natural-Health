import productAshwagandha from '../assets/images/product-ashwagandha.jpg';
import productTriphala from '../assets/images/product-triphala.jpg';
import productTurmeric from '../assets/images/product-turmeric.jpg';
import productBrahmi from '../assets/images/product-brahmi.jpg';
import productNeem from '../assets/images/product-neem.jpg';
import productTulsi from '../assets/images/product-tulsi.jpg';

const products = [
  {
    id: 1,
    name: 'Ashwagandha Capsules',
    category: 'General Wellness',
    description: 'Premium Ashwagandha root extract capsules for stress relief, energy boost, and enhanced vitality. Sourced from the finest organic farms.',
    price: '₹499',
    image: productAshwagandha,
    badge: 'Bestseller',
  },
  {
    id: 2,
    name: 'Triphala Powder',
    category: 'Digestive Health',
    description: 'A classical Ayurvedic formulation of three powerful fruits — Amla, Haritaki, and Bibhitaki — for complete digestive wellness.',
    price: '₹349',
    image: productTriphala,
    badge: null,
  },
  {
    id: 3,
    name: 'Turmeric Curcumin',
    category: 'Anti-Inflammatory',
    description: 'High-potency turmeric curcumin capsules with black pepper extract for maximum absorption. Nature\'s most powerful anti-inflammatory.',
    price: '₹549',
    image: productTurmeric,
    badge: 'Popular',
  },
  {
    id: 4,
    name: 'Brahmi Brain Tonic',
    category: 'Mental Wellness',
    description: 'Traditional Brahmi (Bacopa Monnieri) liquid extract for enhanced memory, focus, and cognitive function. A time-tested brain rejuvenator.',
    price: '₹599',
    image: productBrahmi,
    badge: null,
  },
  {
    id: 5,
    name: 'Neem Capsules',
    category: 'Skin Health',
    description: 'Pure Neem leaf extract capsules for radiant skin, blood purification, and natural immunity. The ultimate detox supplement.',
    price: '₹399',
    image: productNeem,
    badge: null,
  },
  {
    id: 6,
    name: 'Tulsi Extract Drops',
    category: 'Respiratory Health',
    description: 'Holy Basil (Tulsi) concentrated extract drops for respiratory wellness, immunity, and stress relief. The queen of herbs in every drop.',
    price: '₹449',
    image: productTulsi,
    badge: 'New',
  },
];

export const categories = [
  'All',
  'General Wellness',
  'Digestive Health',
  'Anti-Inflammatory',
  'Mental Wellness',
  'Skin Health',
  'Respiratory Health',
];

export default products;
