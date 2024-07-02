import React from "react";
import medicine from "../../Images/maadiucoMedicine.png";
const WhyItsAwesome = ({ extraInfo }) => {
  return (
    <div className="container-fluid WhyItsAwesomeComp py-4">
      <div className="WhyItsAwesomeCompParent container">
        {extraInfo?.productOther.map((a, i) => (
          <div className="WhyItsAwesomeCompChild">
            <div className="WhyItsAwesomeCompPic">
              <img src={a?.imageUrl} alt="medicine" height="100" width="100" />
            </div>
            <div className="WhyItsAwesomeCompText">
              <h6>{a?.title}</h6>
              <p>{a?.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WhyItsAwesome;
