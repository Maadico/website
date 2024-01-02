import React from "react";
import Hero from "../components/Hero";
import HeroTwo from "../components/HeroTwo";
import About from "../components/About";
import Achivement from "../components/Achivement";
import Service from "../components/Service";
import WorkProcess from "../components/WorkProcess";
import Facilities from "../components/Facilities";
import Doctor from "../components/Doctor";
import Review from "../components/Review";
import { MdAddIcCall } from "react-icons/md";
import { BiSolidToTop } from "react-icons/bi";
const Home = () => {
  return (
    <div id="heroSection">
      <Hero />
      <HeroTwo />
      <About />
      <Achivement />
      <Service />
      <Review />
      <WorkProcess />
      <Facilities />
      <Doctor />

      <div className="fixIcon">
        <div className="icon1">
          <a href="tel:+9198209 52248">
            <MdAddIcCall fontSize={25} color="white" />
          </a>
        </div>
        <div className="icon1">
          <a href="#heroSection">
            <BiSolidToTop fontSize={25} color="white" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Home;
