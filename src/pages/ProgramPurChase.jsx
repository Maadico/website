import React, { useContext, useEffect, useState } from "react";
import UserProfile from "../components/UserProfile";
import Service from "../components/Service";
import { Link, useNavigate } from "react-router-dom";
import Purchase from "../components/Purchase";
import { OrderContext, UserContext } from "../context/Mycontext";
import Loader from "../components/Loader";
import Order from "../components/Ecommerce/Order";

const ProgramPurChase = () => {
  const navigate = useNavigate();
  const { auth, setAuth, setIsAuthenticated, isAuthenticate } =
    useContext(UserContext);
  const { order } = useContext(OrderContext);
  const [currentIndex, setCurrentIndex] = useState(2);
  // useEffect(() => {
  //   if (order.length > 0) {
  //     setCurrentIndex(2);
  //   } else {
  //     setCurrentIndex(0);
  //   }
  // }, []);
  // const handleLogout = () => {
  //   setAuth({ ...auth, user: null, token: "" });
  //   setIsAuthenticated(false);
  //   localStorage.removeItem("auth");
  //   navigate("/");
  //   return;
  // };
  return !isAuthenticate ? (
    <Loader />
  ) : (
    <div style={{ backgroundColor: "rgb(246,252,252)" }}>
      <div className="container-xl px-4 ">
        <nav className="nav nav-borders">
          {["Profile", "Program", "Program Purchase", "Medical Kit"].map(
            (s, i) => (
              <>
                <span
                  //   className="nav-link active ms-0"
                  className={`nav-link ${
                    currentIndex === i ? "active ms-0" : ""
                  }`}
                  onClick={() => {
                    // if (i === 3) {
                    //   handleLogout();
                    // }
                    setCurrentIndex(i);
                  }}
                  key={i}
                  style={{ cursor: "pointer" }}
                >
                  {s}
                </span>
              </>
            )
          )}
        </nav>
        <hr className="mt-0 mb-4" />

        {currentIndex === 0 ? (
          <UserProfile />
        ) : currentIndex === 1 ? (
          <Service />
        ) : currentIndex === 2 ? (
          <Purchase />
        ) : (
          <Order />
        )}
      </div>
    </div>
  );
};
export default ProgramPurChase;
