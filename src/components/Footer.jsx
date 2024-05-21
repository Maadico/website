import React from "react";
import { MdEmail, MdLocationOn } from "react-icons/md";
import { IoCall } from "react-icons/io5";
import { Link, useLocation } from "react-router-dom";
const Footer = () => {
  const { pathname } = useLocation();
  // const isVisible = ["/profile", "/program/2"].includes(pathname);
  const isVisibles =
    pathname.startsWith("/profile") || pathname.startsWith("/program/");
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
                  Doctors will be assisting you throughout your journey of
                  reversal and help achieve your goal of healthy wellbeing.
                </p>
              </div>
              <div className="socialFoot row">
                <p>
                  <span>
                    <MdEmail color="rgb(129,240,224)" fontSize={25} />
                  </span>
                  <span> maadico.in@gmail.com</span>
                </p>
                <p>
                  <span>
                    <MdLocationOn color="rgb(129,240,224)" fontSize={25} />
                  </span>
                  <span>
                    Chatrapati Shivaji Marg, Adajan Gam, Adajan, Surat, Gujarat
                    395009
                  </span>
                </p>
              </div>
            </div>

            {!isVisibles && (
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
                  <a href="#contacts">
                    <p>Contact</p>
                  </a>
                  <a href="#service">
                    <p>Review</p>
                  </a>
                </div>
              </div>
            )}

            <div className="foot">
              <div className="footSecondHeading row">
                <h4>Our Services</h4>
                <h1>
                  <div className="borderSet2"></div>
                </h1>
              </div>
              <div className="row footMenu2">
                <a href="https://shop.maadico.in" target="blank">
                  <p>Shop</p>
                </a>
                <a href="https://liveyoga.maadico.in" target="blank">
                  <p>Yoga</p>
                </a>
                <Link to="/privicy">
                  <p>Privacy policy</p>
                </Link>

                <Link to="/refund">
                  {" "}
                  <p>Refund and Cancellation Policy</p>
                </Link>
                <Link to="/shipping-policy">
                  {" "}
                  <p>Shipping Policy</p>
                </Link>
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
                  Connect with MaaDico on socials. Stay healthy, stay informed!"
                </p>
              </div>
              {!isVisibles && (
                <div className="row btnFoot">
                  <a href="#contacts" className="btn btn-outline-light">
                    <span>
                      <IoCall fontSize={20} color="rgb(129,240,224)" />
                    </span>
                    <span className="mx-2">Book An Appointment</span>
                  </a>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      <div className="row my-2 text-center developer">
        <p>
          Copyright ©️ 2024 Maadico | Developed by{" "}
          <a href="https://disneygraphics.com/" target="blank">
            Disney Graphics
          </a>
        </p>
      </div>
    </div>
  );
};

export default Footer;
