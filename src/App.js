import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import CategoryPage from "./pages/CategoryPage";
import ProductDisplayPage from "./pages/ProductDisplayPage";

function App() {
  return (
    <Router>      
        <Navbar />
        <Routes>
          <Route path='/' element={<CategoryPage />} />
          <Route path='/:id' element={<ProductDisplayPage />} />
        </Routes>
      
    </Router>
  );
}

export default App;
