import React from "react";
import { MdEmail, MdLocationOn } from "react-icons/md";
import { Link } from "react-router-dom";
import { IoCall } from "react-icons/io5";
const Footer = () => {
  return (
    <div className="footer ">
      <div className="container ">
        <div className="row ">
          <div className=" d-flex justify-content-between align-items-baseline atSmallFooter">
            <div className="foot ">
              <div className="row footHeading">
                <h1>Medcare</h1>
              </div>
              <div className="footDescription row">
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut
                  numquam veniam mollitia, possimus nobis nam?
                </p>
              </div>
              <div className="socialFoot row">
                <p>
                  <span>
                    <MdEmail color="rgb(129,240,224)" fontSize={25} />
                  </span>
                  <span>inf0@gmail.com</span>
                </p>
                <p>
                  <span>
                    <MdLocationOn color="rgb(129,240,224)" fontSize={25} />
                  </span>
                  <span>1365,A56 Bihar</span>
                </p>
              </div>
            </div>
            <div className="foot  ">
              <div className="footSecondHeading row ">
                <h4>Quick Links</h4>
                <h1>
                  <div className="borderSet2"></div>
                </h1>
              </div>

              <div className="footMenu row">
                <a href="#about">
                  <p>About us</p>
                </a>
                <a href="#service">
                  <p>Our Service</p>
                </a>
                <a href="#doctor">
                  <p>Our Doctors</p>
                </a>
                <Link to="/contact">
                  <p>Contact</p>
                </Link>
                <a href="#service">
                  <p>Review</p>
                </a>
              </div>
            </div>
            <div className="foot">
              <div className="footSecondHeading row">
                <h4>Our Services</h4>
                <h1>
                  <div className="borderSet2"></div>
                </h1>
              </div>
              <div className="row footMenu2">
                <p>Term of use</p>
                <p>Privacy policy</p>
                <p>contact support</p>
                <p>Carrers</p>
              </div>
            </div>
            <div className="foot ">
              <div className="footSecondHeading row">
                <h4>Quick Links</h4>
                <h1>
                  <div className="borderSet2"></div>
                </h1>
              </div>
              <div className="row lastDescription">
                <p>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  molestias?
                </p>
              </div>
              <div className="row btnFoot">
                <a href="tel:+9198209 52248" className="btn btn-outline-light">
                  <span>
                    <IoCall fontSize={20} color="rgb(129,240,224)" />
                  </span>
                  <span className="mx-2">Book An Appointment</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
