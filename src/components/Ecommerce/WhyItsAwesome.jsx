import React from "react";
import medicine from "../../Images/maadiucoMedicine.png";
const WhyItsAwesome = () => {
  return (
    <div className="container-fluid WhyItsAwesomeComp py-4">
      <div className="WhyItsAwesomeCompParent container">
        {[1, 2, 3, 4, 5, 6].map((a, i) => (
          <div className="WhyItsAwesomeCompChild">
            <div className="WhyItsAwesomeCompPic">
              <img src={medicine} alt="medicine" height="100" width="100" />
            </div>
            <div className="WhyItsAwesomeCompText">
              <h6>Natural nutritional supplement</h6>
              <p>
                It contains protein, vitamins, iron, and other all-natural
                nutrients that are excellent for your health.
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WhyItsAwesome;
