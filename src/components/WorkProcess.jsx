import React from "react";
// import { TbBrandBooking } from "react-icons/tb";
// import { BsHospital } from "react-icons/bs";
// import { MdOutlineMedicalServices } from "react-icons/md";
import { FaLongArrowAltRight } from "react-icons/fa";
import { MdOutlineVerified } from "react-icons/md";
const WorkProcess = () => {
  return (
    <div className="processWork py-4 ">
      <div className="container ">
        <div className="row ">
          <div className="row  m-0 serviceSubHeading text-center">
            <h6>How Does It Works ?</h6>
          </div>
          <div className="row m-0 text-center">
            <div className="w-50 text-center m-auto process">
              <h5>Process Flow at Maadico</h5>
            </div>
          </div>
          {/* <div className="row m-0 ourServices mt-4">
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
                    Find experts tailored to your health needs – diabetes,
                    thyroid issues, obesity, PCOD/PCOS.
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
                    Effortlessly schedule appointments at your convenience,
                    ensuring hassle-free access to healthcare.
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
                    Experience dedicated services and personalized plans,
                    guiding you towards holistic well-being.
                  </p>
                </div>
              </div>
            </div>
          </div> */}
          <div className="row m-o p-0 g-0">
            <div className="processing">
              <div className="processPart colPlate_1">
                <div className="row">
                  <div className="processUp">
                    <div className="text">
                      <h6>STEP 01</h6>
                      <p>DOCTOR CONSULTATION</p>
                    </div>
                    <div className="icons1">
                      <FaLongArrowAltRight fontSize={25} />
                    </div>
                  </div>
                </div>
                <div className="borderProcess"></div>
                <div className="row processPoint">
                  <p>
                    <span className="mx-2">
                      <MdOutlineVerified />
                    </span>
                    <span>Nutrition</span>
                  </p>
                  <p>
                    <span className="mx-2">
                      <MdOutlineVerified />
                    </span>
                    <span>Fitness</span>
                  </p>
                  <p>
                    <span className="mx-2">
                      <MdOutlineVerified />
                    </span>
                    <span>Stress</span>
                  </p>
                  <p>
                    <span className="mx-2">
                      <MdOutlineVerified />
                    </span>
                    <span>Sleep</span>
                  </p>
                </div>
              </div>
              <div className="processPart colPlate_2">
                <div className="row">
                  <div className="processUp">
                    <div className="text">
                      <h6>STEP 02</h6>
                      <p>We Analyse Our Consultation Call </p>
                    </div>
                    <div className="icons1">
                      <FaLongArrowAltRight fontSize={25} />
                    </div>
                  </div>
                </div>
                <div className="borderProcess"></div>
                <div className="row processPoint">
                  <p>
                    <span className="mx-2">
                      <MdOutlineVerified />
                    </span>
                    <span>Meal Mapping</span>
                  </p>
                  <p>
                    <span className="mx-2">
                      <MdOutlineVerified />
                    </span>
                    <span>Macro And Micronutrients Reports</span>
                  </p>
                  <p>
                    <span className="mx-2">
                      <MdOutlineVerified />
                    </span>
                    <span>Yoga Exercise Analysis</span>
                  </p>
                </div>
              </div>
              <div className="processPart colPlate_3">
                <div className="row">
                  <div className="processUp">
                    <div className="text">
                      <h6>STEP 03</h6>
                      <p>Personalised Kits Your Door Steps</p>
                    </div>
                    {/* <div className="icons1">
                      <FaLongArrowAltRight fontSize={25} />
                    </div> */}
                  </div>
                </div>
                <div className="borderProcess"></div>
                <div className="row processPoint">
                  <p>
                    <span className="mx-2">
                      <MdOutlineVerified />
                    </span>
                    <span>Personalised Herbal Remedy</span>
                  </p>
                  <p>
                    <span className="mx-2">
                      <MdOutlineVerified />
                    </span>
                    <span>Personalised Pack/Compress</span>
                  </p>
                  <p>
                    <span className="mx-2">
                      <MdOutlineVerified />
                    </span>
                    <span>Personalised Diet Charts</span>
                  </p>
                  <p>
                    <span className="mx-2">
                      <MdOutlineVerified />
                    </span>
                    <span>Special Yoga Sessions</span>
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
