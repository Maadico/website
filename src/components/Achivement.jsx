import React from "react";
import { IoPersonSharp } from "react-icons/io5";
import { IoIosPeople } from "react-icons/io";
import {
  // MdOutlineWork,
  // MdGeneratingTokens,
  MdRateReview,
} from "react-icons/md";
// import { BsAwardFill } from "react-icons/bs";
import { BiWorld } from "react-icons/bi";
const Achivement = () => {
  return (
    <div className="Achivement">
      <div className="container">
        <div className=" d-flex flex-row justify-content-between align-items-center">
          <div className="achievementCat">
            <span className="achiveIcon">
              <IoPersonSharp />
            </span>
            <h5>3000+</h5>
            <p>Patients</p>
          </div>

          <div className="achievementCat">
            <span className="achiveIcon">
              <BiWorld />
            </span>
            <h5>15+</h5>
            <p>Cities </p>
          </div>

          <div className="achievementCat">
            <span className="achiveIcon">
              <IoIosPeople />
            </span>
            <h5>10+</h5>
            <p>Expert Doctor</p>
          </div>

          <div className="achievementCat">
            <span className="achiveIcon">
              <MdRateReview />
            </span>
            <h5>5 start</h5>
            <p>Review</p>
          </div>
          {/* <div className="achievementCat">
            <span className="achiveIcon">
              <BsAwardFill />
            </span>
            <h5>80+</h5>
            <p>Awards</p>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default Achivement;
