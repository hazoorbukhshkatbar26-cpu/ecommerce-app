
import React, { useState, useEffect } from 'react';
import ProductCard from '../components/ProductCard';
import { products } from '../data/products';
import './Products.css';

const Products = () => {
  const [filteredProducts, setFilteredProducts] = useState(products);
  const [category, setCategory] = useState('all');
  const [sortBy, setSortBy] = useState('featured');

  useEffect(() => {
    let filtered = products;

    if (category !== 'all') {
      filtered = filtered.filter(product => product.category === category);
    }

    switch (sortBy) {
      case 'price-low':
        filtered.sort((a, b) => a.price - b.price);
        break;
      case 'price-high':
        filtered.sort((a, b) => b.price - a.price);
        break;
      case 'rating':
        filtered.sort((a, b) => b.rating - a.rating);
        break;
      default:
        break;
    }

    setFilteredProducts(filtered);
  }, [category, sortBy]);

  return (
    <div className="products-page">
      <div className="page-header">
        <h1>Our Products</h1>
        <p>Discover amazing products at great prices</p>
      </div>

      <div className="products-container">
        <div className="filter-sidebar">
          <div className="filter-section">
            <h3>Categories</h3>
            <div className="category-list">
              {['all', 'electronics', 'fashion', 'home'].map(cat => (
                <div 
                  key={cat}
                  className="category-item"
                  onClick={() => setCategory(cat)}
                >
                  <div className={`category-checkbox ${category === cat ? 'checked' : ''}`}></div>
                  <span className="category-name">
                    {cat === 'all' ? 'All Products' : 
                     cat === 'electronics' ? 'Electronics' :
                     cat === 'fashion' ? 'Fashion' : 'Home & Kitchen'}
                  </span>
                  <span className="category-count">
                    ({cat === 'all' ? products.length : 
                      products.filter(p => p.category === cat).length})
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="products-main">
          <div className="products-toolbar">
            <div className="products-count">
              Showing {filteredProducts.length} products
            </div>
            <div className="sort-options">
              <select 
                value={sortBy} 
                onChange={(e) => setSortBy(e.target.value)}
              >
                <option value="featured">Featured</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
                <option value="rating">Customer Rating</option>
              </select>
            </div>
          </div>

          <div className="products-grid">
            {filteredProducts.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;  