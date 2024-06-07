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
  const [currentIndex, setCurrentIndex] = useState(2);

  return !isAuthenticate ? (
    <Loader />
  ) : (
    <div style={{ backgroundColor: "rgb(246,252,252)" }}>
      <div className="container-xl px-4 ">
        <nav className="nav nav-borders">
          {["Profile", "Program", "Program Purchase", "Your Orders"].map(
            (s, i) => (
              <>
                <span
                  //   className="nav-link active ms-0"
                  className={`nav-link ${
                    currentIndex === i ? "active ms-0" : ""
                  }`}
                  onClick={() => {
                   
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
