// pages/Cart.js
import React from 'react';
import { Link } from 'react-router-dom';
import { FaTrash, FaPlus, FaMinus } from 'react-icons/fa';
import './Cart.css';

// Temporary cart data
const cartItems = [
  {
    id: 1,
    name: "iPhone 15 Pro",
    price: 250000,
    discount: 10,
    category: "electronics",
    image: "https://images.unsplash.com/photo-1695048133142-1a20484d2569?w=400&h=400&fit=crop",
    quantity: 1
  },
  {
    id: 2,
    name: "Sony WH-1000XM5",
    price: 30000,
    category: "electronics",
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&h=400&fit=crop",
    quantity: 2
  }
];

const Cart = () => {
  const [cart, setCart] = React.useState(cartItems);

  const updateQuantity = (id, quantity) => {
    if (quantity <= 0) {
      setCart(cart.filter(item => item.id !== id));
      return;
    }
    setCart(cart.map(item => 
      item.id === id ? { ...item, quantity } : item
    ));
  };

  const removeFromCart = (id) => {
    setCart(cart.filter(item => item.id !== id));
  };

  const clearCart = () => {
    setCart([]);
  };

  const getCartTotal = () => {
    return cart.reduce((total, item) => {
      const price = item.discount 
        ? item.price * (100 - item.discount) / 100 
        : item.price;
      return total + (price * item.quantity);
    }, 0);
  };

  if (cart.length === 0) {
    return (
      <div className="empty-cart">
        <h2>Your cart is empty</h2>
        <p>Add some products to your cart</p>
        <Link to="/products" className="shop-btn">
          Continue Shopping
        </Link>
      </div>
    );
  }

  return (
    <div className="cart-page">
      <h1>Shopping Cart</h1>
      
      <div className="cart-container">
        <div className="cart-items">
          {cart.map(item => {
            const discountedPrice = item.discount 
              ? item.price * (100 - item.discount) / 100 
              : item.price;

            return (
              <div key={item.id} className="cart-item">
                <div className="cart-item-image">
                  <img src={item.image} alt={item.name} />
                </div>
                
                <div className="cart-item-details">
                  <h3>{item.name}</h3>
                  <p className="category">{item.category}</p>
                  <div className="price-info">
                    <span className="current-price">₹{discountedPrice.toFixed(2)}</span>
                    {item.discount && (
                      <>
                        <span className="original-price">₹{item.price.toFixed(2)}</span>
                        <span className="discount">Save {item.discount}%</span>
                      </>
                    )}
                  </div>
                </div>

                <div className="cart-item-quantity">
                  <button 
                    onClick={() => updateQuantity(item.id, item.quantity - 1)}
                    className="quantity-btn"
                  >
                    <FaMinus />
                  </button>
                  <span className="quantity">{item.quantity}</span>
                  <button 
                    onClick={() => updateQuantity(item.id, item.quantity + 1)}
                    className="quantity-btn"
                  >
                    <FaPlus />
                  </button>
                </div>

                <div className="cart-item-total">
                  ₹{(discountedPrice * item.quantity).toFixed(2)}
                </div>

                <button 
                  onClick={() => removeFromCart(item.id)}
                  className="remove-btn"
                >
                  <FaTrash />
                </button>
              </div>
            );
          })}

          <div className="cart-actions">
            <button onClick={clearCart} className="clear-cart-btn">
              Clear Cart
            </button>
            <Link to="/products" className="continue-shopping">
              Continue Shopping
            </Link>
          </div>
        </div>

        <div className="cart-summary">
          <h2>Order Summary</h2>
          
          <div className="summary-item">
            <span>Subtotal</span>
            <span>₹{getCartTotal().toFixed(2)}</span>
          </div>
          
          <div className="summary-item">
            <span>Shipping</span>
            <span>₹{getCartTotal() > 5000 ? '0.00' : '99.00'}</span>
          </div>
          
          <div className="summary-item">
            <span>Tax (18%)</span>
            <span>₹{(getCartTotal() * 0.18).toFixed(2)}</span>
          </div>
          
          <div className="summary-item total">
            <span>Total</span>
            <span>
              ₹{(
                getCartTotal() + 
                (getCartTotal() * 0.18) + 
                (getCartTotal() > 5000 ? 0 : 99)
              ).toFixed(2)}
            </span>
          </div>

          <Link to="/checkout" className="checkout-btn">
            Proceed to Checkout
          </Link>

          <div className="payment-methods">
            <p>We accept:</p>
            <div className="payment-icons">
              <span>💳</span>
              <span>📱</span>
              <span>🏦</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart; 