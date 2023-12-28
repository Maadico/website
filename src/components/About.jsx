import React from "react";
import { useNavigate } from "react-router-dom";
import { FaHandHoldingMedical } from "react-icons/fa6";
import { MdOutlineVerified } from "react-icons/md";
import profile from "../Images/hero.png";
const About = () => {
  const navigate = useNavigate();
  return (
    <div className="about">
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <div className="row aboutHeading">
              <h5>
                <span>
                  <FaHandHoldingMedical fontSize={25} />
                </span>{" "}
                <span>About us</span>
              </h5>
            </div>
            <div className="row aboutSubheading">
              <h1>
                Welcome to Medical <br /> Center Hospital
              </h1>
            </div>
            <div className="row aboutDescription">
              <p className="mt-2">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid
                deserunt pariatur perspiciatis quisquam nam totam, esse
                consectetur officiis voluptas nulla? Rem minus odit blanditiis
                veritatis alias deserunt quaerat eum quo?
              </p>
            </div>
            <div className="row AboutPoint mt-2">
              <div className="row">
                <div className="col-md-6">
                  <p>
                    <span>
                      <MdOutlineVerified
                        fontSize={20}
                        color="rgb(61, 203, 182)"
                      />
                    </span>
                    <span className="aboutSubPoint m-2">
                      15+ Years Of Experience
                    </span>
                  </p>
                </div>
                <div className="col-md-6">
                  <p>
                    <span>
                      <MdOutlineVerified
                        fontSize={20}
                        color="rgb(61, 203, 182)"
                      />
                    </span>
                    <span className="aboutSubPoint m-2">
                      15+ Years Of Experience
                    </span>
                  </p>
                </div>
              </div>
              <div className="row">
                <div className="col-md-6">
                  <p>
                    <span>
                      <MdOutlineVerified
                        fontSize={20}
                        color="rgb(61, 203, 182)"
                      />
                    </span>
                    <span className="aboutSubPoint m-2">
                      15+ Years Of Experience
                    </span>
                  </p>
                </div>
                <div className="col-md-6">
                  <p>
                    <span>
                      <MdOutlineVerified
                        fontSize={20}
                        color="rgb(61, 203, 182)"
                      />
                    </span>
                    <span className="aboutSubPoint m-2">
                      15+ Years Of Experience
                    </span>
                  </p>
                </div>
              </div>
            </div>
            <div className="bookAppointMentBtn mt-2">
              <div className="btnHero m-0 p-0">
                <button
                  onClick={() => navigate("/contact")}
                  className="btn Appointment "
                >
                  Book An Appointment
                </button>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="row h-100">
              <div className="row rightShift">
                <div className="imgCont w-75 px-5">
                  <div className="imgContainer  ">
                    <img src={profile} alt={"doctor"} />
                  </div>
                  {/* <div className="upperAbout "></div>
                  <div className="lowerAbout"></div> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
