import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Header from "./components/Header";

import "./styles/hero.css";
import "./styles/navbar.css";
import "./styles/footer.css";
import "./styles/heroTwo.css";
import "./styles/about.css";
import "./styles/achivement.css";
import "./styles/service.css";
import "./styles/workProcess.css";
import "./styles/facilities.css";
import "./styles/doctor.css";
import "./styles/review.css";
import "./styles/contacts.css";
import "./styles/conditionWeTreat.css";
import "./styles/auth.css";
import "./styles/Purchase.css";

import Footer from "./components/Footer";
import Login from "./pages/Login";
import { useLocation } from "react-router-dom";
import Register from "./pages/Register";
import Profile from "./pages/Profile";
import PrivateRoute from "./router/PrivateRoute";
import ProgramView from "./pages/ProgramView";
const App = () => {
  return (
    <BrowserRouter>
      <Main />
    </BrowserRouter>
  );
};

const Main = () => {
  const { pathname } = useLocation();
  const isVisible = ["/login", "/register"].includes(pathname);
  return (
    <div>
      {!isVisible && <Header />}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/program/:id" element={<ProgramView />} />

        <Route
          path="/profile"
          element={
            <PrivateRoute>
              <Profile />
            </PrivateRoute>
          }
        />
      </Routes>
      {!isVisible && <Footer />}
    </div>
  );
};

export default App;
