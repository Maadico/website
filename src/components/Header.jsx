import React from "react";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <div className="container-fluid" id="navbarColor">
      <div className="container">
        <nav className="navbar navbar-expand-lg ">
          <div className="container-fluid">
            <Link className="navbar-brand brandLogo" to="/">
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
                  <Link className="nav-link active" aria-current="page" to="#">
                    Home
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="#">
                    About
                  </Link>
                </li>

                <li className="nav-item">
                  <Link className="nav-link" aria-disabled="true">
                    Service
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" aria-disabled="true">
                    Doctor
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" aria-disabled="true">
                    Blog
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" aria-disabled="true">
                    Contact
                  </Link>
                </li>
                <li className="nav-item">
                  <button className="btn  navAppointment mx-2">
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
