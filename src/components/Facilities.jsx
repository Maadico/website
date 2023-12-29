import React from "react";
import { FaHandHoldingMedical } from "react-icons/fa6";
import { FaLongArrowAltRight } from "react-icons/fa";
import { MdEmergencyShare } from "react-icons/md";

const Facilities = () => {
  return (
    <div className="Facilities">
      <div className="container">
        <div className="row">
          <div className="col-md-6 py-5 FacilitiesPaddingRemove">
            <div className="row h-50  py-5 FacilitiesPaddingRemove">
              <div className="row aboutHeading pt-5">
                <h5>
                  <span>
                    <FaHandHoldingMedical fontSize={25} />
                  </span>{" "}
                  <span>Our Facilities</span>
                </h5>
              </div>
              <div className="row aboutSubheading">
                <h1>
                  Facilities That We <br /> Provide
                </h1>
              </div>
              <div className="row aboutDescription">
                <p className="mt-2">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Aliquid deserunt pariatur perspiciatis quisquam nam totam,
                  esse consectetur officiis voluptas nulla? Rem minus odit
                  blanditiis veritatis alias deserunt quaerat eum quo?
                </p>
              </div>
              <div className="row FacilitiesBtn w-25 ml-1">
                <button type="button" class="btn ">
                  View All
                  <FaLongArrowAltRight />
                </button>
              </div>
            </div>
          </div>
          <div className="col-md-6 w-100">
            <div className="row">
              <div className="col-6 ">
                <div className="row flex-column ">
                  <div className="col ">
                    <div className="boxFacilities p-3 m-2">
                      <div className="row logoProcessFa text-center">
                        <span>
                          <MdEmergencyShare
                            fontSize={30}
                            color="blue"
                            className="logoSizeFac"
                          />
                        </span>
                      </div>
                      <div className=" row title FacilitiesTitle">
                        <h5>Online Session</h5>
                      </div>
                      <div className="row description FacilitiesDescription">
                        <p>
                          Lorem ipsum dolor, sit amet consectetur adipisicing
                          nulla tempore soluta
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="col ">
                    <div className="boxFacilities p-3 m-2">
                      <div className="row logoProcessFa text-center">
                        <span>
                          <MdEmergencyShare
                            fontSize={30}
                            color="blue"
                            className="logoSizeFac"
                          />
                        </span>
                      </div>
                      <div className=" row title FacilitiesTitle">
                        <h5>Online Session</h5>
                      </div>
                      <div className="row description FacilitiesDescription">
                        <p>
                          Lorem ipsum dolor, sit amet consectetur adipisicing
                          nulla tempore soluta
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-6">
                <div className="row flex-column ">
                  <div className="col ">
                    <div className="boxFacilities p-3 m-2">
                      <div className="row logoProcessFa text-center">
                        <span>
                          <MdEmergencyShare
                            fontSize={30}
                            color="blue"
                            className="logoSizeFac"
                          />
                        </span>
                      </div>
                      <div className=" row title FacilitiesTitle">
                        <h5>Online Session</h5>
                      </div>
                      <div className="row description FacilitiesDescription">
                        <p>
                          Lorem ipsum dolor, sit amet consectetur adipisicing
                          nulla tempore soluta
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col ">
                    <div className="boxFacilities p-3 m-2">
                      <div className="row logoProcessFa text-center">
                        <span>
                          <MdEmergencyShare
                            fontSize={30}
                            color="blue"
                            className="logoSizeFac"
                          />
                        </span>
                      </div>
                      <div className=" row title FacilitiesTitle">
                        <h5>Online Session</h5>
                      </div>
                      <div className="row description FacilitiesDescription">
                        <p>
                          Lorem ipsum dolor, sit amet consectetur adipisicing
                          nulla tempore soluta
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col ">
                    <div className="boxFacilities p-3 m-2">
                      <div className="row logoProcessFa text-center">
                        <span>
                          <MdEmergencyShare
                            fontSize={30}
                            color="blue"
                            className="logoSizeFac"
                          />
                        </span>
                      </div>
                      <div className=" row title FacilitiesTitle">
                        <h5>Online Session</h5>
                      </div>
                      <div className="row description FacilitiesDescription">
                        <p>
                          Lorem ipsum dolor, sit amet consectetur adipisicing
                          nulla tempore soluta
                        </p>
                      </div>
                    </div>
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

export default Facilities;
