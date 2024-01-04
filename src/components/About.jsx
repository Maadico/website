import React from "react";
import { MdOutlineVerified } from "react-icons/md";
import profile from "../Images/doctorAbout2.jpg";
const About = () => {
  return (
    <div className="about" id="about">
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <div className="row aboutSubheading">
              <h1>Why People Have Faith In Us</h1>
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
              <div className="row ExperienceAtSmallScreen">
                <div className="col-sm-6">
                  <p>
                    <span>
                      <MdOutlineVerified fontSize={20} color="rgb(29,99,211)" />
                    </span>
                    <span className="aboutSubPoint m-2">
                      15+ Years Of Experience
                    </span>
                  </p>
                </div>
                <div className="col-sm-6">
                  <p>
                    <span>
                      <MdOutlineVerified fontSize={20} color="rgb(29,99,211)" />
                    </span>
                    <span className="aboutSubPoint m-2">
                      15+ Years Of Experience
                    </span>
                  </p>
                </div>
              </div>

              <div className="row">
                <div className="col-sm-6">
                  <p>
                    <span>
                      <MdOutlineVerified fontSize={20} color="rgb(29,99,211)" />
                    </span>
                    <span className="aboutSubPoint m-2">
                      15+ Years Of Experience
                    </span>
                  </p>
                </div>
                <div className="col-sm-6">
                  <p>
                    <span>
                      <MdOutlineVerified fontSize={20} color="rgb(29,99,211)" />
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
                <a href="#contacts" className="btn Appointment2 aboutBtnSmall">
                  Book An Appointment
                </a>
              </div>
            </div>
          </div>
          <div className="col-md-6 noneAtSmallAbout ">
            <div className="row h-100">
              <div className="row rightShift">
                <div className="imgCont w-75 px-5">
                  <div className="imgContainer  ">
                    <img src={profile} alt={"doctor"} />
                  </div>
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
