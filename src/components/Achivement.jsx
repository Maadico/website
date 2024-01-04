import React from "react";
import { IoPersonSharp } from "react-icons/io5";
import {
  MdOutlineWork,
  MdGeneratingTokens,
  MdRateReview,
} from "react-icons/md";
import { BsAwardFill } from "react-icons/bs";
const Achivement = () => {
  return (
    <div className="Achivement">
      <div className="container">
        <div className=" d-flex flex-row justify-content-between align-items-center">
          <div className="achievementCat">
            <span className="achiveIcon">
              <IoPersonSharp />
            </span>
            <h5>135+</h5>
            <p>Patients</p>
          </div>

          <div className="achievementCat">
            <span className="achiveIcon">
              <MdOutlineWork />
            </span>
            <h5>5+</h5>
            <p>Years of experiences</p>
          </div>

          <div className="achievementCat">
            <span className="achiveIcon">
              <MdGeneratingTokens />
            </span>
            <h5>5.0</h5>
            <p>Rating</p>
          </div>

          <div className="achievementCat">
            <span className="achiveIcon">
              <MdRateReview />
            </span>
            <h5>105+</h5>
            <p>Review</p>
          </div>
          <div className="achievementCat">
            <span className="achiveIcon">
              <BsAwardFill />
            </span>
            <h5>80+</h5>
            <p>Awards</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Achivement;
