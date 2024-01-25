import React from "react";
// import { MdOutlineNoFood } from "react-icons/md";
// import { IoMedkitSharp } from "react-icons/io5";
// import { RiGuideLine } from "react-icons/ri";
// import { GrYoga } from "react-icons/gr";
import { FaDroplet } from "react-icons/fa6";
import { FaLongArrowAltDown } from "react-icons/fa";
import { DiBingSmall } from "react-icons/di";
import { GiLoveInjection } from "react-icons/gi";
import { MdOutlineMonitorWeight } from "react-icons/md";
const Facilities = () => {
  return (
    // <div className="Facilities">
    //   <div className="container py-3">
    //     <div className="row m-0 g-0 p-0">
    //       <div className="col-md-6  FacilitiesPaddingRemove ">
    //         <div className="row    FacilitiesPaddingRemove">
    //           <div className="row aboutSubheading   m-0 p-0">
    //             <h1>Our Rehab Process</h1>
    //           </div>
    //           <div className="row aboutDescription m-0 p-0">
    //             <ul>
    //               <li>
    //                 <b>DIABETES REVERSAL PROGRAM </b>
    //                 <span>
    //                   Lorem ipsum dolor sit amet Lorem ipsum dolor sit, amet
    //                   consectetur adipisicing elit. Autem, debitis. Error
    //                   ratione, facilis necessitatibus non
    //                 </span>
    //               </li>
    //               <li>
    //                 <b>WEIGHT MANAGEMENT PROGRAM </b>{" "}
    //                 <span>
    //                   Lorem ipsum dolor sit amet Lorem ipsum dolor sit, amet
    //                   consectetur adipisicing elit. Autem, debitis. Error
    //                   ratione, facilis necessitatibus non
    //                 </span>
    //               </li>
    //               <li>
    //                 <b>THYROID REVERSAL PROGRAM</b>{" "}
    //                 <span>
    //                   Lorem ipsum dolor sit amet Lorem ipsum dolor sit, amet
    //                   consectetur adipisicing elit. Autem, debitis. Error
    //                   ratione, facilis necessitatibus non
    //                 </span>
    //               </li>
    //               <li>
    //                 <b>PCOD/PCOS REVERSAL PROGRAMS</b>{" "}
    //                 <span>
    //                   Lorem ipsum dolor sit amet Lorem ipsum dolor sit, amet
    //                   consectetur adipisicing elit. Autem, debitis. Error
    //                   ratione, facilis necessitatibus non
    //                 </span>
    //               </li>
    //               <li>
    //                 <b>THERAPEUTIC YOGA CLASSES</b>{" "}
    //                 <span>
    //                   Lorem ipsum dolor sit amet Lorem ipsum dolor sit, amet
    //                   consectetur adipisicing elit. Autem, debitis. Error
    //                   ratione, facilis necessitatibus non
    //                 </span>
    //               </li>
    //               <li>
    //                 <b> 1-1 CUSTOMISED DIET PLAN WITH DOCTOR CONSULTATION </b>{" "}
    //                 <span>
    //                   Lorem ipsum dolor sit amet Lorem ipsum dolor sit, amet
    //                   consectetur adipisicing elit. Autem, debitis. Error
    //                   ratione, facilis necessitatibus non
    //                 </span>
    //               </li>
    //             </ul>
    //           </div>
    //         </div>
    //       </div>
    //       <div className="col-md-6 py-5 px-2">
    //         <div className="row">
    //           <div className="col-6 ">
    //             <div className="row flex-column ">
    //               <div className="col ">
    //                 <div className="boxFacilities p-3 m-2">
    //                   <div className="row logoProcessFa text-center">
    //                     <span>
    //                       <IoMedkitSharp
    //                         fontSize={28}
    //                         color="rgb(31,87,162)"
    //                         className="logoSizeFac"
    //                       />
    //                     </span>
    //                   </div>
    //                   <div className=" row title FacilitiesTitle sessionColor">
    //                     <h5>Reversal Kits</h5>
    //                   </div>
    //                   <div className="row description FacilitiesDescription">
    //                     <p>
    //                       Your unique health solution customized for success.
    //                     </p>
    //                   </div>
    //                 </div>
    //               </div>

    //               <div className="col ">
    //                 <div className="boxFacilities p-3 m-2">
    //                   <div className="row logoProcessFa text-center">
    //                     <span>
    //                       <MdOutlineNoFood
    //                         fontSize={28}
    //                         color="rgb(31,87,162)"
    //                         className="logoSizeFac"
    //                       />
    //                     </span>
    //                   </div>
    //                   <div className="sessionColor row title FacilitiesTitle">
    //                     <h5>Diet Plans</h5>
    //                   </div>
    //                   <div className="row description FacilitiesDescription">
    //                     <p>
    //                       Personalized charts tailored for your holistic
    //                       well-being.
    //                     </p>
    //                   </div>
    //                 </div>
    //               </div>
    //             </div>
    //           </div>

    //           <div className="col-6">
    //             <div className="row flex-column ">
    //               <div className="col ">
    //                 <div className="boxFacilities  p-3 m-2">
    //                   <div className="row logoProcessFa text-center">
    //                     <span>
    //                       <RiGuideLine
    //                         fontSize={28}
    //                         color="rgb(31,87,162)"
    //                         className="logoSizeFac"
    //                       />
    //                     </span>
    //                   </div>
    //                   <div className="sessionColor row title FacilitiesTitle">
    //                     <h5>Consultation</h5>
    //                   </div>
    //                   <div className="row description FacilitiesDescription">
    //                     <p>
    //                       Consult seasoned doctors for expert well-being
    //                       guidance
    //                     </p>
    //                   </div>
    //                 </div>
    //               </div>
    //               <div className="col ">
    //                 <div className="boxFacilities p-3 m-2">
    //                   <div className="row logoProcessFa text-center">
    //                     <span>
    //                       <GrYoga
    //                         fontSize={28}
    //                         color="rgb(31,87,162)"
    //                         className="logoSizeFac"
    //                       />
    //                     </span>
    //                   </div>
    //                   <div className="sessionColor row title FacilitiesTitle">
    //                     <h5>Yoga Modules</h5>
    //                   </div>
    //                   <div className="row description FacilitiesDescription">
    //                     <p>
    //                       Individualized practices for a healthier, balanced
    //                       you.
    //                     </p>
    //                   </div>
    //                 </div>
    //               </div>
    //             </div>
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </div>
    <div className="Facilities">
      <div className="container">
        <div className="row">
          <div className="row text-center">
            <h2 className="helpingHeading">
              Helping people in <br />
              Reversal of Diabetes
            </h2>
          </div>
          <div className="row m-0 p-0 g-0">
            <div className="boxHelping ">
              <div className="drops m-auto">
                <div className="helpIcon">
                  <FaDroplet fontSize={35} color="rgb(67,204,184)" />
                </div>
                <div className="helpText">
                  <p>
                    <span>1.9%</span>
                    <span>
                      <FaLongArrowAltDown />
                    </span>
                  </p>
                  <p className="AverageHelping">Average hbA1c drop</p>
                </div>
              </div>
              <div className="drops m-auto">
                <div className="helpIcon">
                  <DiBingSmall fontSize={35} color="rgb(67,204,184)" />
                </div>
                <div className="helpText">
                  <p>
                    <span>90%</span>
                    <span>
                      <FaLongArrowAltDown />
                    </span>
                  </p>
                  <p className="AverageHelping">
                    Have reduce or eliminated medication
                  </p>
                </div>
              </div>

              <div className="drops m-auto">
                <div className="helpIcon">
                  <GiLoveInjection fontSize={35} color="rgb(67,204,184)" />
                </div>
                <div className="helpText">
                  <p>
                    <span>92%</span>
                    <span>
                      <FaLongArrowAltDown />
                    </span>
                  </p>
                  <p className="AverageHelping">
                    Have reduce or eliminated insulin
                  </p>
                </div>
              </div>

              <div className="drops m-auto">
                <div className="helpIcon">
                  <FaDroplet fontSize={35} color="rgb(67,204,184)" />
                </div>
                <div className="helpText">
                  <p>
                    <span>92%</span>
                    <span>
                      <FaLongArrowAltDown />
                    </span>
                  </p>
                  <p className="AverageHelping">
                    Have seen reduction in sugar level
                  </p>
                </div>
              </div>

              <div className="drops m-auto">
                <div className="helpIcon">
                  <MdOutlineMonitorWeight
                    fontSize={35}
                    color="rgb(67,204,184)"
                  />
                </div>
                <div className="helpText">
                  <p>
                    <span>3 + kg</span>
                    <span>
                      <FaLongArrowAltDown />
                    </span>
                  </p>
                  <p className="AverageHelping">
                    Average weight loss sustained in sugar level
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

export default Facilities;
