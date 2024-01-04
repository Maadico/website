import React from "react";
import { TbBrandBooking } from "react-icons/tb";
import { BsHospital } from "react-icons/bs";
import { MdOutlineMedicalServices } from "react-icons/md";
const WorkProcess = () => {
  return (
    <div className="processWork py-4 ">
      <div className="container ">
        <div className="row ">
          <div className="row  m-0 serviceSubHeading text-center">
            <h1>How It Works!</h1>
          </div>
          <div className="row m-0 text-center">
            <div className="w-50 text-center m-auto process">
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Soluta, eius. Et odio, fugit exercitationem dolor maiores, ad
              </p>
            </div>
          </div>
          <div className="row m-0 ourServices mt-4">
            <div className="col-md-4 ">
              <div className=" boxProcess m-1 text-center ">
                <div className="row logoProcess m-auto text-center">
                  <span>
                    <BsHospital />
                  </span>
                  <div className="NumberIcon">1</div>
                </div>
                <div className="row heading">
                  <h5>Find A Doctor</h5>
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
                    <TbBrandBooking />
                  </span>
                  <div className="NumberIcon">2</div>
                </div>
                <div className="row heading">
                  <h5>Book An Appointment</h5>
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
                    <MdOutlineMedicalServices />
                  </span>
                  <div className="NumberIcon">3</div>
                </div>
                <div className="row heading">
                  <h5>Get Service</h5>
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
