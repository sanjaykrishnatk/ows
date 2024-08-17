import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import { BrowserRouter } from "react-router-dom";
import { Route, Routes } from "react-router-dom";
import Webcam from "./pages/Webcam";
import Homepage from "./pages/Homepage";
import Auth from "./pages/Auth";
import UserDashboard from "./pages/UserDashboard";
import ProductCategory from "./pages/ProductCategory";
import Cart from "./pages/Cart";
import Orders from "./pages/Orders";
import OrdersAdmin from "./pages/OrdersAdmin";
import AdminDashboard from "./pages/AdminDashboard";
import Users from "./pages/Users";
import AddProduct from "./pages/AddProduct";
import AdminLogin from "./pages/AdminLogin";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/age-verification" element={<Webcam />} />
          <Route path="/auth" element={<Auth />} />
          <Route path="/signup" element={<Auth signup={true} />} />
          <Route path="/signin" element={<Auth signin={true} />} />
          <Route path="/dashboard" element={<UserDashboard />} />
          <Route path="/allproducts" element={<ProductCategory />} />
          <Route
            path="/admin-allproducts"
            element={<ProductCategory admin={true} />}
          />
          <Route path="/cart" element={<Cart />} />
          <Route path="/Orders" element={<Orders />} />
          <Route path="/admin-orders" element={<Orders admin={true} />} />
          <Route path="/admin" element={<AdminDashboard />} />
          <Route path="/admin-users" element={<Users />} />
          <Route path="/admin-product" element={<AddProduct />} />
          <Route path="/edit-product" element={<AddProduct edit={true} />} />
          <Route path="/admin-login" element={<AdminLogin />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
