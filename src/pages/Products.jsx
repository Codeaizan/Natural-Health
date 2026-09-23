import { useState } from 'react';
import HeroBanner from '../components/HeroBanner';
import AnimatedSection from '../components/AnimatedSection';
import { allProducts as products, categories } from '../data/products';
import productsCollectionImg from '../assets/images/products-collection.jpg';
import { FaLeaf } from 'react-icons/fa';
import './Products.css';

export default function Products() {
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredProducts = activeCategory === 'All'
    ? products
    : products.filter((p) => p.category === activeCategory);

  return (
    <main className="products-page">
      <HeroBanner
        title="Our Ayurvedic Products"
        subtitle="Pure, potent, and handcrafted with care — each product is a testament to the healing power of nature."
        image={productsCollectionImg}
        compact
      />

      <section className="section" id="products-catalog">
        <div className="container">
          <AnimatedSection>
            <div className="section-header">
              <span className="badge">Product Catalog</span>
              <h2>Nature's Pharmacy</h2>
              <p>Explore our range of premium Ayurvedic formulations for holistic wellness</p>
            </div>
          </AnimatedSection>

          {/* Category Filter */}
          <AnimatedSection>
            <div className="product-filters" id="product-filters">
              {categories.map((cat) => (
                <button
                  key={cat}
                  className={`product-filter-btn ${activeCategory === cat ? 'product-filter-active' : ''}`}
                  onClick={() => setActiveCategory(cat)}
                  id={`filter-${cat.toLowerCase().replace(/\s/g, '-')}`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </AnimatedSection>

          {/* Product Grid */}
          <div className="products-grid">
            {filteredProducts.map((product, i) => (
              <AnimatedSection key={product.id} delay={i * 0.1}>
                <div className="product-card card" id={`product-${product.id}`}>
                  <div className="product-card-image">
                    <img src={product.image} alt={product.name} />
                    {product.badge && (
                      <span className="product-card-badge">{product.badge}</span>
                    )}
                    <div className="product-card-overlay">
                      <FaLeaf className="product-card-leaf" />
                    </div>
                  </div>
                  <div className="product-card-body">
                    <span className="product-card-category">{product.category}</span>
                    <h3>{product.name}</h3>
                    <p>{product.description}</p>
                    <div className="product-card-footer">
                      <a 
                        href={`https://wa.me/919007697503?text=${encodeURIComponent(`Hi, I would like to inquire about the product: ${product.name}`)}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn-primary btn-sm" 
                        id={`inquire-${product.id}`}
                      >
                        Inquire Now
                      </a>
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>

          {filteredProducts.length === 0 && (
            <div className="products-empty">
              <FaLeaf />
              <p>No products found in this category. Try a different filter.</p>
            </div>
          )}
        </div>
      </section>

      {/* Quality Promise */}
      <section className="section section-cream" id="quality-promise">
        <div className="container">
          <AnimatedSection>
            <div className="quality-card">
              <h2>Our Quality Promise</h2>
              <div className="quality-grid">
                <div className="quality-item">
                  <span className="quality-icon">🌿</span>
                  <h4>100% Natural</h4>
                  <p>Every ingredient is sourced from nature. No synthetic chemicals or artificial additives.</p>
                </div>
                <div className="quality-item">
                  <span className="quality-icon">🧪</span>
                  <h4>Lab Tested</h4>
                  <p>Each batch undergoes rigorous quality testing for purity, potency, and safety.</p>
                </div>
                <div className="quality-item">
                  <span className="quality-icon">📜</span>
                  <h4>Classical Formulas</h4>
                  <p>Based on time-tested Ayurvedic texts with formulations refined over centuries.</p>
                </div>
                <div className="quality-item">
                  <span className="quality-icon">🤝</span>
                  <h4>Ethical Sourcing</h4>
                  <p>Herbs sourced from trusted organic farms with sustainable and fair practices.</p>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </main>
  );
}
