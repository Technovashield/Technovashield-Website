// ✅ src/App.js
import React from "react";
import { BrowserRouter as Router, Routes } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import routes from "./routes/AppRoutes";

function App() {
  return (
    <Router>
      <Navbar />

      {/* Main Site Layout */}
      <div className="page-wrapper">
        <Routes>{routes}</Routes>
      </div>

      {/* GLOBAL FOOTER — NOW SHOWS ON EVERY PAGE */}
      <Footer />
    </Router>
  );
}

export default App;
