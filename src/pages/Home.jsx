import React, { useState, useEffect } from "react";
import Hero from "../components/Hero";
// import HeroTwo from "../components/HeroTwo";
import About from "../components/About";
import Achivement from "../components/Achivement";
import Service from "../components/Service";
import WorkProcess from "../components/WorkProcess";
import Facilities from "../components/Facilities";
import Doctor from "../components/Doctor";
import Review from "../components/Review";
import { MdAddIcCall } from "react-icons/md";
// import { BiSolidToTop } from "react-icons/bi";
import { IoLogoWhatsapp } from "react-icons/io";
import Contact from "../components/Contact";
import { FaArrowUp } from "react-icons/fa6";
// import ConditionWeTreat from "../components/ConditionWeTreat";
// import { AiFillInstagram } from "react-icons/ai";
const Home = () => {
  const [showButton, setShowButton] = useState(false);
  useEffect(() => {
    // Add scroll event listener to determine when to show the button
    const handleScroll = () => {
      const scrollY = window.scrollY;
      if (scrollY > 200) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div id="heroSection">
      <Hero />
      <WorkProcess />
      <Service />

      {/* <HeroTwo /> */}

      <Achivement />
      <About />
      <Review />

      <Facilities />
      <Doctor />
      {/* <ConditionWeTreat /> */}

      <Contact />
      {showButton && (
        <div className="fixIcon">
          <div className="icon1">
            <a href="tel:+919930805129">
              <MdAddIcCall fontSize={25} color="white" />
            </a>
          </div>

          <div className="icon2">
            <a href="https://wa.me/919930805129" target="blank">
              <IoLogoWhatsapp fontSize={35} color="green" />
            </a>
          </div>

          <div className="icon1">
            <a href="#navbarColor">
              <FaArrowUp fontSize={26} color="white" />
            </a>
          </div>
        </div>
      )}
    </div>
  );
};

export default Home;
