import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Header from "./components/Header";
import "./styles/hero.css";
import "./styles/navbar.css";
import "./styles/heroTwo.css";

const App = () => {
  return (
    <div className="bg-secondary">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
