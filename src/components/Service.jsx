import React from "react";
import { FaLongArrowAltRight } from "react-icons/fa";
import { TbBrandSugarizer } from "react-icons/tb";
import { FaWeight } from "react-icons/fa";
import { GiFeatherNecklace } from "react-icons/gi";
import { TbReport } from "react-icons/tb";
import { GrYoga } from "react-icons/gr";
import { SiGooglemeet } from "react-icons/si";
import { useNavigate } from "react-router-dom";
import pcod from "../Images/pcod.PNG";
import thyroid from "../Images/thyroid.PNG";
import diabetes from "../Images/diabetes.PNG";
import weightLoss from "../Images/weightLoss.PNG";
import yoga from "../Images/yoga.JPG";

const Service = () => {
  const navigate = useNavigate();
  return (
    <div className="service py-5 " id="service">
      <div className="container ">
        <div className="row ">
          <div className="row m-0 py-3 g-0 serviceSubHeading text-center">
            <h2>Our Programs</h2>
          </div>
          {/* all services section */}

          <div className="row m-0 p-0 g-0 ourServices">
            <div
              className="col-md-4 space"
              onClick={() => navigate("/program/1")}
            >
              <div className="box m-1 text-center">
                <div className="row logo m-0 p-0 g-0">
                  <span>
                    {/* <TbBrandSugarizer /> */}
                    <img
                      src={diabetes}
                      alt="diabetes"
                      className="img-fluid"
                      style={{
                        width: "100px",
                        height: "100px",
                        objectFit: "contain",
                        borderRadius: "50%",
                      }}
                    />
                  </span>
                </div>
                <div className="row m-0 p-0 heading">
                  <h5>DIABETES REVERSAL </h5>
                </div>
                <div className="row SubHeading m-0 p-0">
                  <p>
                    MaaDico's Diabetes Harmony: Naturopathy, personalized diets,
                    yoga fusion.
                  </p>
                </div>
                <div className="row readMore m-0 p-0">
                  <span>
                    Read More <FaLongArrowAltRight />
                  </span>
                </div>
              </div>
            </div>
            <div
              className="col-md-4 space"
              onClick={() => navigate("/program/2")}
            >
              <div className="box m-1 text-center">
                <div className="row logo m-0 p-0 g-0">
                  <span>
                    {/* <FaWeight /> */}
                    <img
                      src={weightLoss}
                      alt="diabetes"
                      className="img-fluid"
                      style={{
                        width: "100px",
                        height: "100px",
                        objectFit: "contain",
                        borderRadius: "50%",
                      }}
                    />
                  </span>
                </div>
                <div className="row m-0 p-0 heading">
                  <h5>WEIGHT MANAGEMENT</h5>
                </div>
                <div className="row SubHeading m-0 p-0">
                  <p>
                    Tailored plans, expert consultations, and yoga for
                    sustainable weight control.
                  </p>
                </div>
                <div className="row readMore m-0 p-0">
                  <span>
                    Read More <FaLongArrowAltRight />
                  </span>
                </div>
              </div>
            </div>
            <div
              className="col-md-4 space"
              onClick={() => navigate("/program/3")}
            >
              <div className="box m-1 text-center">
                <div className="row logo m-0 p-0 g-0">
                  <span>
                    {/* <GiFeatherNecklace /> */}
                    <img
                      src={thyroid}
                      alt="thyroid"
                      className="img-fluid"
                      style={{
                        width: "100px",
                        height: "100px",
                        objectFit: "contain",
                        borderRadius: "50%",
                      }}
                    />
                  </span>
                </div>
                <div className="row m-0 p-0 heading">
                  <h5>THYROID REVERSAL</h5>
                </div>
                <div className="row SubHeading m-0 p-0">
                  <p>
                    Naturopathy, diets, and yoga to restore thyroid health
                    naturally.
                  </p>
                </div>
                <div className="row readMore m-0 p-0">
                  <span>
                    Read More <FaLongArrowAltRight />
                  </span>
                </div>
              </div>
            </div>
            <div className="d-flex programSectionCard2 ">
              <div
                className="col-md-4 space"
                onClick={() => navigate("/program/4")}
              >
                <div className="box m-1 text-center">
                  <div className="row logo m-0 p-0 g-0">
                    <span>
                      {/* <TbReport /> */}
                      <img
                        src={pcod}
                        alt="pcod"
                        className="img-fluid"
                        style={{
                          width: "100px",
                          height: "100px",
                          objectFit: "contain",
                          borderRadius: "50%",
                        }}
                      />
                    </span>
                  </div>
                  <div className="row m-0 p-0 heading">
                    <h5>PCOD/PCOS REVERSAL</h5>
                  </div>
                  <div className="row SubHeading m-0 p-0">
                    <p>
                      Integrated approach targeting symptoms and hormonal
                      balance.
                    </p>
                  </div>
                  <div className="row readMore m-0 p-0">
                    <span>
                      Read More <FaLongArrowAltRight />
                    </span>
                  </div>
                </div>
              </div>

              <div
                className="col-md-4 space"
                onClick={() => navigate("/program/5")}
              >
                <div className="box m-1 text-center">
                  <div className="row logo m-0 p-0 g-0">
                    <span>
                      <SiGooglemeet />
                    </span>
                  </div>
                  <div className="row m-0 p-0 heading">
                    <h5>1-1 Doctor Consultation for Personalised Diet Plans</h5>
                  </div>
                  <div className="row SubHeading m-0 p-0">
                    <p>
                      Personalized diet plans with doctor consultations for
                      lasting well-being.
                    </p>
                  </div>
                  <div className="row readMore m-0 p-0">
                    <span>
                      Read More <FaLongArrowAltRight />
                    </span>
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

export default Service;
