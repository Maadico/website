import React, { useContext, useState } from "react";
import UserProfile from "../components/UserProfile";
import Service from "../components/Service";
import { Link, useNavigate } from "react-router-dom";
import Purchase from "../components/Purchase";
import { UserContext } from "../context/Mycontext";
import Loader from "../components/Loader";

const Profile = () => {
  const navigate = useNavigate();
  const [currentIndex, setCurrentIndex] = useState(0);
  const { auth, setAuth, setIsAuthenticated, isAuthenticate } =
    useContext(UserContext);
  const handleLogout = () => {
    setAuth({ ...auth, user: null, token: "" });
    setIsAuthenticated(false);
    localStorage.removeItem("auth");
    navigate("/");
    return;
  };
  return !isAuthenticate ? (
    <Loader />
  ) : (
    <div style={{ backgroundColor: "rgb(246,252,252)" }}>
      <div className="container-xl px-4 ">
        <nav className="nav nav-borders">
          {["Profile", "Program", "Purchase", "Logout"].map((s, i) => (
            <>
              <span
                //   className="nav-link active ms-0"
                className={`nav-link ${
                  currentIndex === i ? "active ms-0" : ""
                }`}
                onClick={() => {
                  if (i === 3) {
                    handleLogout();
                  }
                  setCurrentIndex(i);
                }}
                key={i}
                style={{ cursor: "pointer" }}
              >
                {s}
              </span>
            </>
          ))}
        </nav>
        <hr className="mt-0 mb-4" />

        {currentIndex === 0 ? (
          <UserProfile />
        ) : currentIndex === 1 ? (
          <Service />
        ) : (
          <Purchase />
        )}
      </div>
    </div>
  );
};

export default Profile;
