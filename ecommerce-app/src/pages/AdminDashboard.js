
import React, { useState } from 'react';
import { products } from '../data/products';
import { FaEdit, FaTrash, FaPlus, FaChartLine, FaUsers, FaBox, FaRupeeSign } from 'react-icons/fa';
import './AdminDashboard.css';

const AdminDashboard = () => {
  const [allProducts, setAllProducts] = useState(products);
  const [showAddForm, setShowAddForm] = useState(false);
  const [newProduct, setNewProduct] = useState({
    name: '',
    price: '',
    category: 'electronics',
    image: '',
    rating: '4.0',
    discount: '',
    description: '',
    stock: '',
    features: ''
  });

  const stats = {
    totalProducts: allProducts.length,
    totalRevenue: 2500000,
    totalOrders: 1250,
    activeUsers: 500
  };

  const handleDelete = (id) => {
    if (window.confirm('Are you sure you want to delete this product?')) {
      setAllProducts(allProducts.filter(product => product.id !== id));
    }
  };

  const handleSave = () => {
    const productToAdd = {
      ...newProduct,
      id: allProducts.length + 1,
      price: parseFloat(newProduct.price) || 0,
      rating: parseFloat(newProduct.rating) || 4.0,
      discount: newProduct.discount ? parseFloat(newProduct.discount) : 0,
      stock: parseInt(newProduct.stock) || 0,
      features: newProduct.features.split(',').map(f => f.trim())
    };
    setAllProducts([...allProducts, productToAdd]);
    
    setShowAddForm(false);
    setNewProduct({
      name: '',
      price: '',
      category: 'electronics',
      image: '',
      rating: '4.0',
      discount: '',
      description: '',
      stock: '',
      features: ''
    });
  };

  return (
    <div className="admin-dashboard">
      <h1>Admin Dashboard</h1>
      
      <div className="stats-grid">
        <div className="stat-card">
          <FaBox className="stat-icon" />
          <h3>Total Products</h3>
          <p>{stats.totalProducts}</p>
        </div>
        <div className="stat-card">
          <FaRupeeSign className="stat-icon" />
          <h3>Total Revenue</h3>
          <p>₹{stats.totalRevenue.toLocaleString()}</p>
        </div>
        <div className="stat-card">
          <FaChartLine className="stat-icon" />
          <h3>Total Orders</h3>
          <p>{stats.totalOrders}</p>
        </div>
        <div className="stat-card">
          <FaUsers className="stat-icon" />
          <h3>Active Users</h3>
          <p>{stats.activeUsers}</p>
        </div>
      </div>

      <div className="admin-content">
        <div className="products-section">
          <div className="section-header">
            <h2>Products Management</h2>
            <button 
              className="add-product-btn"
              onClick={() => setShowAddForm(true)}
            >
              <FaPlus /> Add Product
            </button>
          </div>

          {showAddForm && (
            <div className="product-form">
              <h3>Add New Product</h3>
              <div className="form-grid">
                <input
                  type="text"
                  placeholder="Product Name"
                  value={newProduct.name}
                  onChange={(e) => setNewProduct({...newProduct, name: e.target.value})}
                />
                <input
                  type="number"
                  placeholder="Price"
                  value={newProduct.price}
                  onChange={(e) => setNewProduct({...newProduct, price: e.target.value})}
                />
                <select
                  value={newProduct.category}
                  onChange={(e) => setNewProduct({...newProduct, category: e.target.value})}
                >
                  <option value="electronics">Electronics</option>
                  <option value="fashion">Fashion</option>
                  <option value="home">Home & Kitchen</option>
                </select>
                <input
                  type="text"
                  placeholder="Image URL"
                  value={newProduct.image}
                  onChange={(e) => setNewProduct({...newProduct, image: e.target.value})}
                />
                <textarea
                  placeholder="Description"
                  value={newProduct.description}
                  onChange={(e) => setNewProduct({...newProduct, description: e.target.value})}
                />
                <input
                  type="text"
                  placeholder="Features (comma separated)"
                  value={newProduct.features}
                  onChange={(e) => setNewProduct({...newProduct, features: e.target.value})}
                />
              </div>
              <div className="form-actions">
                <button className="save-btn" onClick={handleSave}>
                  Save Product
                </button>
                <button 
                  className="cancel-btn"
                  onClick={() => setShowAddForm(false)}
                >
                  Cancel
                </button>
              </div>
            </div>
          )}

          <div className="products-table">
            <table>
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Image</th>
                  <th>Name</th>
                  <th>Category</th>
                  <th>Price</th>
                  <th>Stock</th>
                  <th>Rating</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {allProducts.map(product => (
                  <tr key={product.id}>
                    <td>{product.id}</td>
                    <td>
                      <img 
                        src={product.image} 
                        alt={product.name}
                        className="table-img"
                      />
                    </td>
                    <td>{product.name}</td>
                    <td>
                      <span className={`category-badge ${product.category}`}>
                        {product.category}
                      </span>
                    </td>
                    <td>₹{product.price.toFixed(2)}</td>
                    <td>
                      <span className={`stock-badge ${product.stock > 20 ? 'in-stock' : 'low-stock'}`}>
                        {product.stock > 20 ? 'In Stock' : 'Low Stock'} ({product.stock})
                      </span>
                    </td>
                    <td>
                      <div className="rating-display">
                        {product.rating} ⭐
                      </div>
                    </td>
                    <td>
                      <div className="action-buttons">
                        <button 
                          className="edit-btn"
                          onClick={() => alert(`Edit ${product.name}`)}
                        >
                          <FaEdit />
                        </button>
                        <button 
                          className="delete-btn"
                          onClick={() => handleDelete(product.id)}
                        >
                          <FaTrash />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard; 