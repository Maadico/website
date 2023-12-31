import React from "react";
import doctor from "../Images/heroDoctor.png";
import { useNavigate } from "react-router-dom";
import doctor2 from "../Images/mobileDoctor.png";
// import { IoCall } from "react-icons/io5";
import { MdAddIcCall } from "react-icons/md";

const Hero = () => {
  const navigate = useNavigate();

  return (
    <div className="Hero">
      <div className="container">
        <div className="row pt-1">
          <div className="col-md-6 mt-5 pt-4 atSmall ">
            <div className="row heroColor">
              <p>⚕️ WELCOME TO MEDCARE</p>
            </div>
            <div className="row heroColor">
              <h1 className="largeDevice">
                Taking Care of <br /> Your Health is our <br />
                Top Priority.
              </h1>
            </div>
            <div className="row heroColor mt-2">
              <p className="description">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magnam
                debitis vitae, dicta quasi veniam ex, magni omnis hic ea
              </p>
            </div>
            <div className="row heroColor m-0 p-0 ">
              <div className="btnHero m-0 p-0">
                <button
                  onClick={() => navigate("/contact")}
                  className="btn Appointment "
                >
                  Book An Appointment
                </button>
                <button className="btn mx-3 px-4 btn-primary">
                  <span>
                    <MdAddIcCall fontSize={20} color="#fff" />
                  </span>
                  <span
                    className="mx-2 "
                    style={{ fontSize: "medium", fontWeight: "bold" }}
                  >
                    Call
                  </span>
                </button>
              </div>
            </div>
          </div>
          <div className="col-md-6   imgDoctor ">
            <img src={doctor} alt="doctor" className="firstDoctor" />
            <img src={doctor2} alt="doctor" className="secondDoctor" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
