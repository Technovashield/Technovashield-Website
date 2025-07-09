// ✅ src/routes/routes.js
import React from "react";
import { Route } from "react-router-dom";
import HomePage from "../pages/HomePage";
import AboutPage from "../pages/AboutPage";
import ProductsPage from "../pages/ProductsPage";
import ContactPage from "../pages/ContactPage";

const routes = [
  <Route key="home" path="/" element={<HomePage />} />,
  <Route key="about" path="/about" element={<AboutPage />} />,
  <Route key="products" path="/products" element={<ProductsPage />} />,
  <Route key="contact" path="/contact" element={<ContactPage />} />,
];

export default routes;
