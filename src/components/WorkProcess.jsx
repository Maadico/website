import React from "react";
import { FaHandHoldingMedical } from "react-icons/fa6";
import { FaHeartbeat, FaLongArrowAltRight } from "react-icons/fa";
const WorkProcess = () => {
  return (
    <div className="processWork py-4">
      <div className="container">
        <div className="row">
          <div className="row serviceHeading text-center pt-3">
            <h5>
              <span>
                <FaHandHoldingMedical fontSize={25} />
              </span>{" "}
              <span>Our Work Process</span>
            </h5>
          </div>
          <div className="row serviceSubHeading text-center">
            <h1>Let`s See How We Work</h1>
          </div>
          <div className="row  text-center">
            <div className="w-50 text-center m-auto process">
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Soluta, eius. Et odio, fugit exercitationem dolor maiores, ad
              </p>
            </div>
          </div>
          <div className="row ourServices mt-4">
            <div className="col-md-4 ">
              <div className=" boxProcess m-1 text-center ">
                <div className="row logoProcess m-auto text-center">
                  <span>
                    <FaHeartbeat />
                  </span>
                </div>
                <div className="row heading">
                  <h5>Heading</h5>
                </div>
                <div className="row SubHeading">
                  <p>
                    Lorem ipsum dolor sit amet, consectetur . Lorem ipsum dolor
                    ipsum dolor sit
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-4 ">
              <div className=" boxProcess m-1 text-center ">
                <div className="row logoProcess m-auto text-center">
                  <span>
                    <FaHeartbeat />
                  </span>
                </div>
                <div className="row heading">
                  <h5>Heading</h5>
                </div>
                <div className="row SubHeading">
                  <p>
                    Lorem ipsum dolor sit amet, consectetur . Lorem ipsum dolor
                    ipsum dolor sit
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-4 ">
              <div className=" boxProcess m-1 text-center ">
                <div className="row logoProcess m-auto text-center">
                  <span>
                    <FaHeartbeat />
                  </span>
                </div>
                <div className="row heading">
                  <h5>Heading</h5>
                </div>
                <div className="row SubHeading">
                  <p>
                    Lorem ipsum dolor sit amet, consectetur . Lorem ipsum dolor
                    ipsum dolor sit
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkProcess;
