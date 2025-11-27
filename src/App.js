// ✅ src/App.js
import React from "react";
import { BrowserRouter as Router, Routes } from "react-router-dom";

import Navbar from "./components/Navbar";
import routes from "./routes/AppRoutes.js";

// NEW SUPPORT PAGE IMPORT (in case routes file references it)


function App() {
  return (
    <Router>
      <Navbar />
      <Routes>{routes}</Routes>
    </Router>
  );
}

export default App;
