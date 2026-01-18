// src/pages/Categories.js
import React from 'react';
import { Link } from 'react-router-dom';
import { FaMobile, FaTshirt, FaHome, FaFutbol, FaLaptop, FaCar, FaBook, FaUtensils } from 'react-icons/fa';
import './Categories.css';

const Categories = () => {
  const categories = [
    { id: 1, name: "Electronics", icon: <FaMobile />, count: 45, color: "#667eea" },
    { id: 2, name: "Fashion", icon: <FaTshirt />, count: 68, color: "#ff6b6b" },
    { id: 3, name: "Home & Kitchen", icon: <FaHome />, count: 52, color: "#51cf66" },
    { id: 4, name: "Sports", icon: <FaFutbol />, count: 36, color: "#ffa94d" },
    { id: 5, name: "Computers", icon: <FaLaptop />, count: 28, color: "#339af0" },
    { id: 6, name: "Automotive", icon: <FaCar />, count: 22, color: "#ff922b" },
    { id: 7, name: "Books", icon: <FaBook />, count: 85, color: "#cc5de8" },
    { id: 8, name: "Groceries", icon: <FaUtensils />, count: 120, color: "#20c997" },
  ];

  return (
    <div className="categories-page">
      <div className="categories-header">
        <h1>Shop by Categories</h1>
        <p>Browse products by your favorite categories</p>
      </div>

      <div className="categories-grid">
        {categories.map(category => (
          <Link
            to={`/products?category=${category.name.toLowerCase()}`}
            key={category.id}
            className="category-card"
            style={{ '--cat-color': category.color }}
          >
            <div className="category-icon" style={{ backgroundColor: category.color }}>
              {category.icon}
            </div>
            <div className="category-info">
              <h3>{category.name}</h3>
              <p>{category.count} Products</p>
            </div>
            <div className="category-arrow">→</div>
          </Link>
        ))}
      </div>

      <div className="categories-featured">
        <h2>Featured Categories</h2>
        <div className="featured-cards">
          <div className="featured-card" style={{ background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)' }}>
            <h3>Electronics Sale</h3>
            <p>Up to 50% OFF</p>
            <Link to="/products?category=electronics" className="featured-btn">Shop Now</Link>
          </div>
          <div className="featured-card" style={{ background: 'linear-gradient(135deg, #ff6b6b 0%, #ff8e8e 100%)' }}>
            <h3>Fashion Week</h3>
            <p>New Collection</p>
            <Link to="/products?category=fashion" className="featured-btn">Explore</Link>
          </div>
          <div className="featured-card" style={{ background: 'linear-gradient(135deg, #51cf66 0%, #8ce99a 100%)' }}>
            <h3>Home Essentials</h3>
            <p>Best Deals</p>
            <Link to="/products?category=home" className="featured-btn">Buy Now</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Categories;