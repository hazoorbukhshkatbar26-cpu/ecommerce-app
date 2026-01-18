import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Products from './pages/Products';
import Categories from './pages/Categories';  // ← ADD THIS
import Cart from './pages/Cart';
import Admin from './pages/Admin';
import { CartProvider } from './context/CartContext';
import './App.css';


const ProductDetail = () => (
  <div className="page">
    <h1>Product Details</h1>
    <p>Detailed product information</p>
  </div>
);

const Checkout = () => (
  <div className="page">
    <h1>Checkout</h1>
    <p>Complete your purchase</p>
  </div>
);

function App() {
  return (
    <CartProvider>
      <BrowserRouter>
        <div className="App">
          <Navbar />
          <main className="main-content">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/products" element={<Products />} />
              <Route path="/categories" element={<Categories />} />  {/* ← ADD THIS */}
              <Route path="/product/:id" element={<ProductDetail />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="/checkout" element={<Checkout />} />
              <Route path="/admin" element={<Admin />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </BrowserRouter>
    </CartProvider>
  );
}

export default App;