import React from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
// import logo from "../Images/logoDoctor.png";
const Header = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  console.log("location", pathname);

  // const doctorLink = pathname === "/contact" ? "/#doctor" : "#doctor";
  return (
    <div className="container-fluid" id="navbarColor">
      <div className="container p-0">
        <nav className="navbar navbar-expand-lg p-0">
          <div className="container-fluid">
            <Link className="navbar-brand brandLogo logoDoctor" to="/">
              {/* <img src={logo} alt="" /> */}
              Doctor
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
                <li className="nav-item">
                  <a className="nav-link" href="#about">
                    About
                  </a>
                </li>

                <li className="nav-item">
                  <a className="nav-link" aria-disabled="true" href="#service">
                    Service
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" aria-disabled="true" href="#doctor">
                    Doctor
                  </a>
                </li>

                <li className="nav-item">
                  <Link to="/contact" className="nav-link" aria-disabled="true">
                    Contact
                  </Link>
                </li>
                <li className="nav-item">
                  <button
                    onClick={() => navigate("/contact")}
                    className="btn  navAppointment mx-2 py-2"
                  >
                    Make Appointment
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Header;
