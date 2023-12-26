import React from "react";
import { FaUserDoctor, FaCarOn, FaVirusCovid } from "react-icons/fa6";
const HeroTwo = () => {
  return (
    <div>
      <div className="container heroTwoMoveUp">
        <div className="row  borderSet bg-light">
          <div className="col-md-4 ">
            <div className="m-auto d-flex flex-row  text-center py-3">
              <div>
                <span className="logo ">
                  <FaUserDoctor fontSize={40} color=" rgb(61, 203, 182)" />
                </span>
                <h4 className="title">Qualified Doctor</h4>
                <p className="descriptionHeroTwo ">
                  Lorem ipsum dolor sit amet consectetur,consectetur
                  <br />
                  elit. Illo amet consectetur, adipisicing
                  <br />
                  consectetur, adipisicing
                </p>
              </div>
              <div id="rightBorder"></div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="m-auto  text-center py-3">
              <span className="logo ">
                <FaCarOn fontSize={40} color=" rgb(61, 203, 182)" />
              </span>
              <h4 className="title">Emergency Ambulance</h4>
              <p className="descriptionHeroTwo">
                Lorem ipsum dolor sit amet consectetur, adipisicing
                <br />
                elit. Illo amet consectetur, adipisicing
                <br />
                consectetur, adipisicing
              </p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="m-auto d-flex flex-row  text-center py-3">
              <div id="rightBorder"></div>

              <div>
                <span className="logo ">
                  <FaVirusCovid fontSize={40} color=" rgb(61, 203, 182)" />
                </span>
                <h4 className="title">Covid 19</h4>
                <p className="descriptionHeroTwo">
                  Lorem ipsum dolor sit amet consectetur, adipisicing
                  <br />
                  elit. Illo amet consectetur, adipisicing
                  <br />
                  consectetur, adipisicing
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroTwo;
