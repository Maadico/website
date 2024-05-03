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
import "./styles/product.css";

import Footer from "./components/Footer";
import Login from "./pages/Login";
import { useLocation } from "react-router-dom";
import Register from "./pages/Register";
import Profile from "./pages/Profile";
import PrivateRoute from "./router/PrivateRoute";
import ProgramView from "./pages/ProgramView";
import toast, { Toaster } from "react-hot-toast";
import ForgetPassword from "./pages/ForgetPassword";
import ResetPassword from "./pages/ResetPassword";
import Product from "./pages/Ecommerce/Product";
import ShopHeader from "./components/ShopHeader";
import ProductDetails from "./pages/Ecommerce/ProductDetails";
import Cart from "./pages/Ecommerce/Cart";

const App = () => {
  return (
    <BrowserRouter>
      <Main />
      <Toaster position="top-center" reverseOrder={false} />
    </BrowserRouter>
  );
};

const Main = () => {
  const { pathname } = useLocation();
  const isVisible = [
    "/login",
    "/register",
    "/forget",
    "/product",
    "/cart",
  ].includes(pathname);
  const dynamicIsVisible = pathname.startsWith("/product/");
  console.log(isVisible, dynamicIsVisible);
  return (
    <div>
      {!isVisible && !dynamicIsVisible && <Header />}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />

        <Route path="/forget" element={<ForgetPassword />} />
        <Route path="/resetpassword/:id" element={<ResetPassword />} />

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
        <Route path="/product" element={<Product />} />
        <Route path="/product/:id" element={<ProductDetails />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>

      {!isVisible && !dynamicIsVisible && <Footer />}
    </div>
  );
};

export default App;
