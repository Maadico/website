import React from "react";
import doctor from "../Images/Online Doctor-bro.png";
import doctor2 from "../Images/Online Doctor-bro.png";
// import { IoCall } from "react-icons/io5";
import { MdAddIcCall } from "react-icons/md";
import { FaWhatsapp } from "react-icons/fa";
import Typewriter from "typewriter-effect";
const Hero = () => {
  return (
    <div className="Hero">
      <div className="container">
        <div className="row pt-1">
          <div className="col-md-6 mt-5 pt-4 atSmall">
            <div className="row heroColor">
              <p>⚕️ Welcome to MaaDico Healthcare </p>
            </div>
            <div className="row heroColor ">
              <h1 className="largeDevice">REVOLUTION IS REVERSAL</h1>
            </div>
            <div className="row subtitle heroTitle  flex-wrap-reverse">
              <h5>
                <Typewriter
                  className="text-center"
                  options={{
                    strings: [
                      "Diabetes Reversal",
                      "Thyroid Reversal",
                      "PCOD/PCOS Reversal",
                      "Weight Loss",
                    ],
                    autoStart: true,
                    loop: true,
                    cursor: "",
                    wrapperClassName: "typewriterpara",
                  }}
                />
              </h5>
            </div>
            <div className="row heroColor mt-2">
              <p className="description">
                MaaDico Healthcare: Committed to reversing lifestyle disorders
                like diabetes, thyroid issues, obesity, PCOD/PCOS. Your beacon
                of health and hope.
              </p>
            </div>
            <div className="row heroColor m-0 p-0 ">
              <div className="btnHero m-0 p-0 ">
                <a
                  href="https://wa.me/919833429932"
                  target="blank"
                  className="btn Appointment "
                >
                  <span>
                    <FaWhatsapp fontSize={16} />
                  </span>

                  <span
                    className="mx-2 "
                    style={{ fontSize: "small", fontWeight: "400" }}
                  >
                    Whatsapp us
                  </span>
                </a>
                <a
                  href="tel:+919833429932"
                  className="btn AppointmentCall mx-3 px-4 btn-outline-light"
                >
                  <span>
                    <MdAddIcCall fontSize={16} />
                  </span>
                  <span
                    className="mx-2 "
                    style={{ fontSize: "small", fontWeight: "400" }}
                  >
                    Call now
                  </span>
                </a>
              </div>
            </div>
          </div>
          <div className="col-md-6   imgDoctor">
            <img src={doctor} alt="doctor" className="firstDoctor" />
            <img src={doctor2} alt="doctor" className="secondDoctor" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
