
import React from 'react';
import { Link } from 'react-router-dom';
import { FaStar, FaShoppingCart, FaHeart } from 'react-icons/fa';
import './ProductCard.css';

const ProductCard = ({ product }) => {
  const [isWishlisted, setIsWishlisted] = React.useState(false);

  const handleAddToCart = () => {
    alert(`Added ${product.name} to cart!`);
  };

  const toggleWishlist = () => {
    setIsWishlisted(!isWishlisted);
  };

  return (
    <div className="product-card">
      <div className="product-image">
        <Link to={`/product/${product.id}`}>
          <img src={product.image} alt={product.name} />
        </Link>
        <button 
          className={`wishlist-btn ${isWishlisted ? 'active' : ''}`}
          onClick={toggleWishlist}
        >
          <FaHeart />
        </button>
        {product.discount && (
          <span className="discount-badge">-{product.discount}%</span>
        )}
      </div>
      
      <div className="product-info">
        <div className="product-category">{product.category}</div>
        <h3 className="product-title">
          <Link to={`/product/${product.id}`}>{product.name}</Link>
        </h3>
        
        <div className="product-rating">
          {[...Array(5)].map((_, i) => (
            <FaStar 
              key={i} 
              className={i < Math.floor(product.rating) ? 'filled' : ''}
            />
          ))}
          <span className="rating-value">({product.rating})</span>
        </div>
        
        <div className="product-price">
          {product.discount ? (
            <>
              <span className="current-price">
                Price {(product.price * (100 - product.discount) / 100).toFixed(2)}
              </span>
              <span className="original-price">PKR{product.price.toFixed(2)}</span>
            </>
          ) : (
            <span className="current-price">Price {product.price.toFixed(2)}</span>
          )}
        </div>
        
        <div className="product-actions">
          <button className="add-to-cart-btn" onClick={handleAddToCart}>
            <FaShoppingCart /> Add to Cart
          </button>
          <Link to={`/product/${product.id}`} className="view-details-btn">
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProductCard; 