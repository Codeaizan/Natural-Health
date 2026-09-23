const fs = require('fs');

const productsDir = 'd:/Projects/NHW/src/assets/images/products_enhanced';
const products = fs.readdirSync(productsDir).filter(file => file.endsWith('.jpg') || file.endsWith('.jpeg'));

let imports = '';
let items = '';

products.forEach((filename, i) => {
  const name = filename.replace(/\.jpe?g$/, '');
  const varName = 'img' + i;
  imports += `import ${varName} from '../assets/images/products_enhanced/${filename}';\n`;
  
  let category = 'General Wellness';
  if (name.includes('care') || name.includes('Heart')) category = 'Cardiac Wellness';
  if (name.includes('Diabo')) category = 'Diabetes Care';
  if (name.includes('Femalotone') || name.includes('Uterex') || name.includes('Cystocare')) category = 'Women\'s Health';
  if (name.includes('Maxx') || name.includes('Shakti') || name.includes('Awaleh')) category = 'Vitality & Strength';
  if (name.includes('Neuro') || name.includes('Relaxi')) category = 'Mental Wellness';
  if (name.includes('Oil') || name.includes('Ortho') || name.includes('Cramps') || name.includes('Spondyli')) category = 'Pain Relief';
  if (name.includes('Kesh')) category = 'Hair Care';
  if (name.includes('Stoma') || name.includes('Azi') || name.includes('Livo') || name.includes('Pilex')) category = 'Digestion';
  if (name.includes('Azma')) category = 'Respiratory Care';
  if (name.includes('Sllim')) category = 'Weight Management';
  if (name.includes('Urinexa') || name.includes('Uresdi')) category = 'Urinary Health';

  const badge = i < 12 ? (i % 3 === 0 ? 'Bestseller' : (i % 4 === 0 ? 'New' : 'null')) : 'null';

  items += `  {
    id: ${i + 1},
    name: '${name}',
    category: "${category}",
    description: "Premium Ayurvedic formulation to support ${category.toLowerCase()} and natural wellness.",
    image: ${varName},
    badge: ${badge === 'null' ? 'null' : "'" + badge + "'"}
  },\n`;
});

const fileContent = `${imports}

export const allProducts = [
${items}];

// We explicitly pick the original 6 products to remain on the Home page
export const featuredProducts = allProducts.filter(p => 
  ['Karishmai Oil', 'Diabo Guard', 'Femalotone', 'Heart Care Plus', 'Shaktiwardaan', 'Neurolaxx'].includes(p.name)
);

export const categories = [
  'All',
  ...Array.from(new Set(allProducts.map(p => p.category)))
];

export default featuredProducts;
`;

fs.writeFileSync('d:/Projects/NHW/src/data/products.js', fileContent);
console.log('Done generating products.js');
