// src/routes/AppRoutes.js
import React from "react";
import { Route } from "react-router-dom";
import HomePage from "../pages/HomePage";
import AboutPage from "../pages/AboutPage";
import ProductsPage from "../pages/ProductsPage";
import TeamPage from "../pages/TeamPage";
import ContactPage from "../pages/ContactPage";
import SupportCareSentinelAI from "../pages/SupportCareSentinelAI";
import NewsPage from "../pages/NewsPage";
import NewsPostPage from "../pages/NewsPostPage";
import NewsPostPage2 from "../pages/NewsPostPage2";
import NewsPostPage3 from "../pages/NewsPostPage3.js";
import CareersPage from "../pages/CareersPage";

const routes = [
  <Route key="home" path="/" element={<HomePage />} />,
  <Route key="about" path="/about" element={<AboutPage />} />,
  <Route key="products" path="/products" element={<ProductsPage />} />,
  <Route key="team" path="/team" element={<TeamPage />} />,
  <Route key="contact" path="/contact" element={<ContactPage />} />,
  <Route key="news" path="/news" element={<NewsPage />} />,
  <Route key="news-post" path="/news/post-1" element={<NewsPostPage />} />,
  <Route key="news-post-2" path="/news/post-2" element={<NewsPostPage2 />} />,
  <Route key="news-post-3" path="/news/post-3" element={<NewsPostPage3 />} />,
  <Route key="careers" path="/careers" element={<CareersPage />} />,
  <Route
    key="support-caresentinelai"
    path="/support-caresentinelai"
    element={<SupportCareSentinelAI />}
  />,
];

export default routes;
