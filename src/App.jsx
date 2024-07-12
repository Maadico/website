import React, { useContext, useEffect, useState } from "react";
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
import ProgramPurChase from "./pages/ProgramPurChase";

import PrivateRoute from "./router/PrivateRoute";
import ProgramView from "./pages/ProgramView";
import toast, { Toaster } from "react-hot-toast";
import ForgetPassword from "./pages/ForgetPassword";
import ResetPassword from "./pages/ResetPassword";
import Product from "./pages/Ecommerce/Product";
import ShopHeader from "./components/ShopHeader";
import ProductDetails from "./pages/Ecommerce/ProductDetails";
import Cart from "./pages/Ecommerce/Cart";
import Privacy from "./pages/rule/Privicy";
import Terms from "./pages/rule/Terms";
import { productContext, UserContext } from "./context/Mycontext";
import Refund from "./pages/rule/Refund";
import ShippingPolicy from "./pages/rule/ShippingPolicy";
import Orders from "./pages/Orders";
import UpHeader from "./components/UpHeader";

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
  const resetPass = pathname.startsWith("/resetpassword/");

  console.log(isVisible, dynamicIsVisible);
  const { auth } = useContext(UserContext);

  const { cartGet, productGet } = useContext(productContext);
  useEffect(() => {
    const fetchedProduct = async () => {
      if (auth?.user && auth?.token) {
        try {
          await cartGet(auth);
        } catch (e) {
          console.log(e);
        }
      }
    };
    fetchedProduct();
  }, [auth]);

  const [isVisibles, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY;
      const windowHeight = window.innerHeight;
      const windowWidth = window.innerWidth;
      if (windowWidth >= 768) {
        setIsVisible(scrolled > windowHeight);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  useEffect(() => {
    setIsVisible(window.innerWidth < 768);
  }, []);

  useEffect(() => {
    const fetchedProduct = async () => {
      await productGet(auth);
    };
    fetchedProduct();
  }, []);

  return (
    <div>
      {pathname === "/" && isVisibles && <UpHeader />}
      {!isVisible && !dynamicIsVisible && !resetPass && <Header />}

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
        <Route
          path="/program-purChase"
          element={
            <PrivateRoute>
              <ProgramPurChase />
            </PrivateRoute>
          }
        />
        <Route
          path="/orders"
          element={
            <PrivateRoute>
              <Orders />
            </PrivateRoute>
          }
        />
        <Route path="/product" element={<Product />} />
        <Route path="/privicy" element={<Privacy />} />

        <Route path="/terms" element={<Terms />} />
        <Route path="/refund" element={<Refund />} />
        <Route path="/shipping-policy" element={<ShippingPolicy />} />

        <Route path="/product/:id" element={<ProductDetails />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>

      {!isVisible && !dynamicIsVisible && !resetPass && <Footer />}
    </div>
  );
};

export default App;
