
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaShoppingCart, FaUser, FaBars, FaSearch } from 'react-icons/fa';
import './Navbar.css';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  
  return (
    <nav className="navbar">
      <div className="nav-container">
        <Link to="/" className="logo">Shop<span>Ease</span></Link>
        
        <div className="nav-menu">
          <Link to="/">Home</Link>
          <Link to="/products">Products</Link>
          <Link to="/categories">Categories</Link>
          <Link to="/admin">Admin</Link>
        </div>
        
        <div className="nav-icons">
          <Link to="/cart" className="cart-icon">
            <FaShoppingCart />
            <span className="badge">3</span>
          </Link>
          <Link to="/account"><FaUser /></Link>
          <button className="menu-btn" onClick={() => setMenuOpen(!menuOpen)}>
            <FaBars />
          </button>
        </div>
      </div>
      
      {/* Mobile Menu */}
      {menuOpen && (
        <div className="mobile-menu">
          <Link to="/">Home</Link>
          <Link to="/products">Products</Link>
          <Link to="/categories">Categories</Link>
          <Link to="/admin">Admin</Link>
          <Link to="/cart">Cart</Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;