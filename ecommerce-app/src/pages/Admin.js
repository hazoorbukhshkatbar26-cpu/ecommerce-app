
import React, { useState } from 'react';
import { 
  FaChartLine, FaUsers, FaBox, FaRupeeSign, FaEdit, FaTrash, FaPlus, 
  FaShoppingCart, FaEye, FaDownload, FaFilter 
} from 'react-icons/fa';
import './Admin.css';

const Admin = () => {
  const [activeTab, setActiveTab] = useState('dashboard');
  
  const products = [
    { id: 1, name: "iPhone 15 Pro", category: "Electronics", price: 129999
      , stock: 50, sales: 125, status: "In Stock" },
    { id: 2, name: "Samsung S24", category: "Electronics", price: 89999, stock: 75, sales: 89, status: "In Stock" },
    { id: 3, name: "Sony Headphones", category: "Electronics", price: 29999, stock: 30, sales: 156, status: "Low Stock" },
    { id: 4, name: "Men's Shirt", category: "Fashion", price: 1599, stock: 100, sales: 234, status: "In Stock" },
    { id: 5, name: "Running Shoes", category: "Fashion", price: 3499, stock: 80, sales: 178, status: "In Stock" },
    { id: 6, name: "Smart TV 55\"", category: "Electronics", price: 54999, stock: 35, sales: 67, status: "Low Stock" },
    { id: 7, name: "Air Fryer", category: "Home", price: 4999, stock: 45, sales: 189, status: "In Stock" },
    { id: 8, name: "Coffee Maker", category: "Home", price: 3999, stock: 65, sales: 145, status: "In Stock" },
  ];

  const orders = [
    { id: "#ORD001", customer: "John Doe", date: "2024-01-14", amount: 129999, status: "Delivered" },
    { id: "#ORD002", customer: "Jane Smith", date: "2024-01-13", amount: 44999, status: "Processing" },
    { id: "#ORD003", customer: "Robert Johnson", date: "2024-01-12", amount: 29999, status: "Shipped" },
    { id: "#ORD004", customer: "Sarah Williams", date: "2024-01-11", amount: 159999, status: "Delivered" },
  ];

  const stats = [
    { title: "Total Revenue", value: "PKR 25,42,899", change: "+12.5%", icon: <FaRupeeSign />, color: "#667eea" },
    { title: "Total Orders", value: "1,248", change: "+8.2%", icon: <FaShoppingCart />, color: "#51cf66" },
    { title: "Products", value: "156", change: "+5.3%", icon: <FaBox />, color: "#ff922b" },
    { title: "Customers", value: "2,845", change: "+15.7%", icon: <FaUsers />, color: "#cc5de8" },
  ];

  const [newProduct, setNewProduct] = useState({
    name: '',
    price: '',
    category: 'electronics',
    stock: '',
    description: ''
  });

  const handleAddProduct = (e) => {
    e.preventDefault();
    alert('Product added successfully!');
    setNewProduct({ name: '', price: '', category: 'electronics', stock: '', description: '' });
  };

  return (
    <div className="admin-dashboard">
      {}
      <div className="admin-header">
        <h1>Admin Dashboard</h1>
        <div className="admin-actions">
          <button className="btn-primary">
            <FaDownload /> Export Report
          </button>
          <button className="btn-secondary">
            <FaPlus /> Add Product
          </button>
        </div>
      </div>

      {}
      <div className="stats-grid">
        {stats.map((stat, index) => (
          <div key={index} className="stat-card">
            <div className="stat-icon" style={{ backgroundColor: stat.color + '20', color: stat.color }}>
              {stat.icon}
            </div>
            <div className="stat-info">
              <h3>{stat.title}</h3>
              <div className="stat-value">{stat.value}</div>
              <div className="stat-change">{stat.change}</div>
            </div>
          </div>
        ))}
      </div>

      {}
      <div className="admin-tabs">
        <button 
          className={activeTab === 'dashboard' ? 'active' : ''}
          onClick={() => setActiveTab('dashboard')}
        >
          <FaChartLine /> Dashboard
        </button>
        <button 
          className={activeTab === 'products' ? 'active' : ''}
          onClick={() => setActiveTab('products')}
        >
          <FaBox /> Products
        </button>
        <button 
          className={activeTab === 'orders' ? 'active' : ''}
          onClick={() => setActiveTab('orders')}
        >
          <FaShoppingCart /> Orders
        </button>
        <button 
          className={activeTab === 'customers' ? 'active' : ''}
          onClick={() => setActiveTab('customers')}
        >
          <FaUsers /> Customers
        </button>
      </div>

      {}
      <div className="admin-content">
        
        {}
        {activeTab === 'products' && (
          <div className="content-section">
            <div className="section-header">
              <h2>Products Management</h2>
              <div className="section-actions">
                <button className="btn-filter">
                  <FaFilter /> Filter
                </button>
                <button className="btn-primary" onClick={() => document.getElementById('addProductForm').style.display = 'block'}>
                  <FaPlus /> Add Product
                </button>
              </div>
            </div>

            <div className="table-container">
              <table className="data-table">
                <thead>
                  <tr>
                    <th>ID</th>
                    <th>Product</th>
                    <th>Category</th>
                    <th>Price</th>
                    <th>Stock</th>
                    <th>Sales</th>
                    <th>Status</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {products.map(product => (
                    <tr key={product.id}>
                      <td>#{product.id}</td>
                      <td>
                        <div className="product-cell">
                          <div className="product-info">
                            <strong>{product.name}</strong>
                          </div>
                        </div>
                      </td>
                      <td>
                        <span className={`category-badge ${product.category.toLowerCase()}`}>
                          {product.category}
                        </span>
                      </td>
                      <td>₹{product.price.toLocaleString()}</td>
                      <td>{product.stock}</td>
                      <td>{product.sales}</td>
                      <td>
                        <span className={`status-badge ${product.status === 'In Stock' ? 'success' : 'warning'}`}>
                          {product.status}
                        </span>
                      </td>
                      <td>
                        <div className="action-buttons">
                          <button className="btn-view" title="View">
                            <FaEye />
                          </button>
                          <button className="btn-edit" title="Edit">
                            <FaEdit />
                          </button>
                          <button className="btn-delete" title="Delete">
                            <FaTrash />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {}
            <div id="addProductForm" className="modal-form" style={{ display: 'none' }}>
              <div className="modal-content">
                <h3>Add New Product</h3>
                <form onSubmit={handleAddProduct}>
                  <div className="form-group">
                    <label>Product Name</label>
                    <input 
                      type="text" 
                      value={newProduct.name}
                      onChange={(e) => setNewProduct({...newProduct, name: e.target.value})}
                      required 
                    />
                  </div>
                  <div className="form-row">
                    <div className="form-group">
                      <label>Price (₹)</label>
                      <input 
                        type="number" 
                        value={newProduct.price}
                        onChange={(e) => setNewProduct({...newProduct, price: e.target.value})}
                        required 
                      />
                    </div>
                    <div className="form-group">
                      <label>Stock</label>
                      <input 
                        type="number" 
                        value={newProduct.stock}
                        onChange={(e) => setNewProduct({...newProduct, stock: e.target.value})}
                        required 
                      />
                    </div>
                  </div>
                  <div className="form-group">
                    <label>Category</label>
                    <select 
                      value={newProduct.category}
                      onChange={(e) => setNewProduct({...newProduct, category: e.target.value})}
                    >
                      <option value="electronics">Electronics</option>
                      <option value="fashion">Fashion</option>
                      <option value="home">Home & Kitchen</option>
                      <option value="sports">Sports</option>
                    </select>
                  </div>
                  <div className="form-group">
                    <label>Description</label>
                    <textarea 
                      value={newProduct.description}
                      onChange={(e) => setNewProduct({...newProduct, description: e.target.value})}
                      rows="3"
                    />
                  </div>
                  <div className="form-actions">
                    <button type="submit" className="btn-primary">Add Product</button>
                    <button type="button" className="btn-secondary" onClick={() => document.getElementById('addProductForm').style.display = 'none'}>
                      Cancel
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        )}

        {}
        {activeTab === 'orders' && (
          <div className="content-section">
            <h2>Recent Orders</h2>
            <div className="table-container">
              <table className="data-table">
                <thead>
                  <tr>
                    <th>Order ID</th>
                    <th>Customer</th>
                    <th>Date</th>
                    <th>Amount</th>
                    <th>Status</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {orders.map(order => (
                    <tr key={order.id}>
                      <td>{order.id}</td>
                      <td>{order.customer}</td>
                      <td>{order.date}</td>
                      <td>₹{order.amount.toLocaleString()}</td>
                      <td>
                        <span className={`status-badge ${order.status === 'Delivered' ? 'success' : 'processing'}`}>
                          {order.status}
                        </span>
                      </td>
                      <td>
                        <button className="btn-view">View Details</button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {}
        {activeTab === 'dashboard' && (
          <div className="dashboard-overview">
            <div className="overview-card">
              <h3>Recent Activities</h3>
              <div className="activity-list">
                <div className="activity-item">
                  <div className="activity-icon success">✓</div>
                  <div className="activity-content">
                    <p><strong>New order #ORD012</strong> received</p>
                    <span className="activity-time">2 hours ago</span>
                  </div>
                </div>
                <div className="activity-item">
                  <div className="activity-icon warning">!</div>
                  <div className="activity-content">
                    <p><strong>Product "iPhone 15 Pro"</strong> stock is low</p>
                    <span className="activity-time">5 hours ago</span>
                  </div>
                </div>
                <div className="activity-item">
                  <div className="activity-icon info">i</div>
                  <div className="activity-content">
                    <p><strong>New customer registered</strong></p>
                    <span className="activity-time">1 day ago</span>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="overview-card">
              <h3>Top Selling Products</h3>
              <div className="top-products">
                {products.slice(0, 5).map(product => (
                  <div key={product.id} className="top-product">
                    <span className="product-name">{product.name}</span>
                    <span className="product-sales">{product.sales} sold</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

      </div>
    </div>
  );
};

export default Admin;