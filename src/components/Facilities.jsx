import React from "react";
import { FaLongArrowAltRight } from "react-icons/fa";
import { MdEmergencyShare } from "react-icons/md";
import { IoMedkitSharp } from "react-icons/io5";

const Facilities = () => {
  return (
    <div className="Facilities">
      <div className="container">
        <div className="row m-0 g-0 p-0">
          <div className="col-md-6 py-5 FacilitiesPaddingRemove">
            <div className="row h-50  py-5 FacilitiesPaddingRemove">
              <div className="row aboutSubheading">
                <h1>
                  Facilities That We <br /> Provide
                </h1>
              </div>
              <div className="row aboutDescription">
                <p className="mt-2">
                  Discover wellness with MaaDico Healthcare. Our expert doctors
                  lead you to vibrant well-being, using naturopathy, yoga, and a
                  holistic approach. Join us on the path to a healthier, more
                  vibrant life. Welcome to wellness redefined!
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
          <div className="col-md-6 ">
            <div className="row">
              <div className="col-6 ">
                <div className="row flex-column ">
                  <div className="col ">
                    <div className="boxFacilities p-3 m-2">
                      <div className="row logoProcessFa text-center">
                        <span>
                          <IoMedkitSharp
                            fontSize={30}
                            color="rgb(31,87,162)"
                            className="logoSizeFac"
                          />
                        </span>
                      </div>
                      <div className=" row title FacilitiesTitle sessionColor">
                        <h5>Reversal Kits</h5>
                      </div>
                      <div className="row description FacilitiesDescription">
                        <p>
                          Your unique health solution customized for success.
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
                            color="rgb(31,87,162)"
                            className="logoSizeFac"
                          />
                        </span>
                      </div>
                      <div className="sessionColor row title FacilitiesTitle">
                        <h5>Diet Plans</h5>
                      </div>
                      <div className="row description FacilitiesDescription">
                        <p>
                          Personalized charts tailored for your holistic
                          well-being.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-6">
                <div className="row flex-column ">
                  <div className="col ">
                    <div className="boxFacilities  p-3 m-2">
                      <div className="row logoProcessFa text-center">
                        <span>
                          <MdEmergencyShare
                            fontSize={30}
                            color="rgb(31,87,162)"
                            className="logoSizeFac"
                          />
                        </span>
                      </div>
                      <div className="sessionColor row title FacilitiesTitle">
                        <h5>Consultation</h5>
                      </div>
                      <div className="row description FacilitiesDescription">
                        <p>
                          Consult seasoned doctors for expert well-being
                          guidance
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
                            color="rgb(31,87,162)"
                            className="logoSizeFac"
                          />
                        </span>
                      </div>
                      <div className="sessionColor row title FacilitiesTitle">
                        <h5>Yoga Modules</h5>
                      </div>
                      <div className="row description FacilitiesDescription">
                        <p>
                          Individualized practices for a healthier, balanced
                          you.
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
