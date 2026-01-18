
import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { FaShoppingCart, FaStar, FaShippingFast, FaLock, FaHeadphones, FaArrowRight } from 'react-icons/fa';
import './Home.css';

const Home = () => {
  const heroRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (heroRef.current) {
        const x = (e.clientX / window.innerWidth - 0.5) * 20;
        const y = (e.clientY / window.innerHeight - 0.5) * 20;
        heroRef.current.style.transform = `perspective(1000px) rotateY(${x}deg) rotateX(${-y}deg)`;
      }
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const products = [
    { id: 1, name: "iPhone 15 Pro", price: 129999, discount: 10, image: "https://images.unsplash.com/photo-1695048133142-1a20484d2569?w=400&h=300&fit=crop", rating: 4.8 },
    { id: 2, name: "Samsung S24", price: 89999, image: "https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?w=400&h=300&fit=crop", rating: 4.7 },
    { id: 3, name: "Sony Headphones", price: 29999, discount: 15, image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&h=300&fit=crop", rating: 4.9 },
    { id: 4, name: "MacBook Pro", price: 199999, discount: 8, image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=400&h=300&fit=crop", rating: 4.9 },
  ];

  const categories = [
    { name: "Electronics",color: "#667eea" },
    { name: "Fashion",color: "#ff6b6b" },
    { name: "Home",color: "#51cf66" },
    { name: "Sports",color: "#ffa94d" },
  ];

  return (
    <div className="home">
      
      <section className="hero-section">
        <div className="hero-3d-container" ref={heroRef}>
          <div className="hero-content">
            <h1>Welcome to <span className="logo-text">Shop<span>Ease</span></span></h1>
            <p className="hero-subtitle">Your one-stop destination for all shopping needs</p>
            <div className="hero-btns">
              <Link to="/products" className="btn-primary">
                <FaShoppingCart /> Shop Now
              </Link>
              <Link to="/products" className="btn-secondary">
                View Deals <FaArrowRight />
              </Link>
            </div>
          </div>
          <div className="hero-image">
            <img src="https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?w=600&h=400&fit=crop" alt="Shopping" />
          </div>
        </div>
      </section>

      <section className="features">
        <div className="feature-grid">
          {[
            { icon: <FaShippingFast />, title: "Free Shipping", desc: "On orders above ₹999" },
            { icon: <FaLock />, title: "Secure Payment", desc: "100% secure payment" },
            { icon: <FaHeadphones />, title: "24/7 Support", desc: "Always here to help" },
            { icon: <FaStar />, title: "Best Quality", desc: "Premium products" }
          ].map((feature, idx) => (
            <div key={idx} className="feature-card" style={{ animationDelay: `${idx * 0.2}s` }}>
              <div className="feature-icon">{feature.icon}</div>
              <h3>{feature.title}</h3>
              <p>{feature.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="categories">
        <h2 className="section-title">Shop by Category</h2>
        <div className="category-grid">
          {categories.map((cat, idx) => (
            <Link to={`/products?category=${cat.name.toLowerCase()}`} key={idx} 
              className="category-card" style={{ '--cat-color': cat.color }}>
              <div className="category-icon" style={{ backgroundColor: cat.color }}>
                {cat.name === "Electronics" ? "💻" : 
                 cat.name === "Fashion" ? "👕" : 
                 cat.name === "Home" ? "🏠" : "⚽"}
              </div>
              <h3>{cat.name}</h3>
              <p>{cat.count} Products</p>
            </Link>
          ))}
        </div>
      </section>

      <section className="featured-products">
        <div className="section-header">
          <h2 className="section-title">Featured Products</h2>
          <Link to="/products" className="view-all">View All <FaArrowRight /></Link>
        </div>
        <div className="products-grid">
          {products.map(product => (
            <div key={product.id} className="product-card">
              <div className="product-img">
                <img src={product.image} alt={product.name} />
                {product.discount && <span className="discount">-{product.discount}%</span>}
              </div>
              <div className="product-info">
                <h3>{product.name}</h3>
                <div className="rating">
                  {[...Array(5)].map((_, i) => (
                    <FaStar key={i} className={i < Math.floor(product.rating) ? 'filled' : ''} />
                  ))}
                  <span>({product.rating})</span>
                </div>
                <div className="price">
                  <span className="current">Price {(product.price * (100 - (product.discount || 0)) / 100).toFixed(2)}</span>
                  {product.discount && <span className="old">PKR{product.price.toFixed(2)}</span>}
                </div>
                <Link to={`/product/${product.id}`} className="view-btn">View Details</Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="banner">
        <div className="banner-content">
          <h2>Summer Sale! Up to 50% OFF</h2>
          <p>Limited time offer. Shop now and save big!</p>
          <Link to="/products" className="btn-primary">Shop Sale</Link>
        </div>
      </section>

    </div>
  );
};

export default Home;