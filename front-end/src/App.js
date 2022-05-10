import React from 'react';
import './App.css';
import { Routes, Route, Navigate } from 'react-router-dom';
import CustomerProducts from './pages/CustomerProducts';
import CustomerCheckout from './pages/CustomerCheckout';
import CustomerOrders from './pages/CustomerOrders';
import Login from './pages/Login';
import Register from './pages/Register';

function App() {
  return (
    <Routes>
      {/* rota Comum */}
      <Route path="/login" element={ <Login /> } />
      <Route path="/register" element={ <Register /> } />
      <Route exact path="/" element={ <Navigate to="/login" /> } />
      {/* rota Customer */}
      <Route path="/customer/products" element={ <CustomerProducts /> } />
      <Route path="/customer/checkout" element={ <CustomerCheckout /> } />
      <Route path="/customer/orders" element={ <CustomerOrders /> }>
        <Route path="/customer/orders/:orderId" element="<CustomerOrdersDetails />" />
      </Route>
      <Route exact path="/customer/" element={ <Navigate to="/customer/products" /> } />
      {/* Rota Vendor */}
      <Route path="/seller/orders" element="<SellerOrders />">
        <Route path=":orderId" element="<SellerOrderDetails />" />
      </Route>
      <Route exact path="/seller/" element={ <Navigate to="/seller/orders" /> } />
      {/* Rota Admin */}
      <Route path="/admin/manage" element="<AdminManage />" />
      <Route exact path="/admin/" element={ <Navigate to="/admin/manage" /> } />
    </Routes>
  );
}

export default App;
