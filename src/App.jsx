import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Header from "./components/Header";

import "./styles/hero.css";
import "./styles/navbar.css";
import "./styles/heroTwo.css";
import "./styles/contact.css";
import "./styles/about.css";
import "./styles/achivement.css";
import "./styles/service.css";
import "./styles/workProcess.css";
import "./styles/facilities.css";

import Contact from "./pages/Contact";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
