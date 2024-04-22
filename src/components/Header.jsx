import React, { useContext } from "react";
import { Link } from "react-router-dom";
import logo from "../Images/MaaDico Logo - Monogram_2.png";
import { CgProfile } from "react-icons/cg";
import { useLocation } from "react-router-dom";
import { UserContext } from "../context/Mycontext";
const Header = () => {
  const { pathname } = useLocation();
  const { auth, setAuth, setIsAuthenticated, isAuthenticate } =
    useContext(UserContext);
  const isVisible = ["/profile", "/program/"].includes(pathname);
  const isVisibles =
    pathname.startsWith("/profile") || pathname.startsWith("/program/");

  return (
    <div
      className="container-fluid"
      id="navbarColor"
      style={{ backgroundColor: isVisible && "rgb(246,252,252)" }}
    >
      <div className="container p-0">
        <nav className="navbar navbar-expand-lg p-0">
          <div className="container-fluid">
            <Link className="navbar-brand brandLogo logoDoctor" to="/">
              <img src={logo} alt="logo" />
              {/* Doctor */}
            </Link>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <Link className="nav-link active" aria-current="page" to="/">
                    Home
                  </Link>
                </li>
                {!isVisible && (
                  <>
                    <li className="nav-item">
                      <a className="nav-link" href="#about">
                        About
                      </a>
                    </li>

                    <li className="nav-item">
                      <a
                        className="nav-link"
                        aria-disabled="true"
                        href="#service"
                      >
                        Service
                      </a>
                    </li>
                    <li className="nav-item">
                      <a
                        className="nav-link"
                        aria-disabled="true"
                        href="#doctor"
                      >
                        Doctor
                      </a>
                    </li>

                    <li className="nav-item">
                      <a
                        href="#contacts"
                        className="nav-link"
                        aria-disabled="true"
                      >
                        Contact
                      </a>
                    </li>
                  </>
                )}
                {isAuthenticate ? (
                  <li className="nav-item">
                    <Link
                      to="/profile"
                      className="nav-link"
                      aria-disabled="true"
                    >
                      <span>
                        <strong>{auth?.user?.name}</strong>
                      </span>
                      <span className="mx-1">
                        <CgProfile fontSize={35} />
                      </span>
                    </Link>
                  </li>
                ) : (
                  <li className="nav-item">
                    <Link to="/login" className="nav-link" aria-disabled="true">
                      <span className="mx-1">
                        <CgProfile fontSize={35} />
                      </span>
                    </Link>
                  </li>
                )}
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Header;
