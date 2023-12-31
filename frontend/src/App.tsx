import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"; //v6
import "./App.css";
import HomePage from "./pages/HomePage/HomePage";
import GalleryPage from "./pages/GalleryPage/GalleryPage";

// TODO:
// - routing

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/gallery" element={<GalleryPage />} />
        {/* <Route path="/storeart" element={<StoreArt />} /> */}
      </Routes>
    </Router>
  );
}

export default App;
