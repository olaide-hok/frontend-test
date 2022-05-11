import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import CategoryPage from "./pages/CategoryPage";

function App() {
  return (
    <Router>      
        <Navbar />
        <Routes>
          <Route path='/' element={<CategoryPage />} />
        </Routes>
      
    </Router>
  );
}

export default App;
