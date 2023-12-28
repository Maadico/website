import React from "react";
import Hero from "../components/Hero";
import HeroTwo from "../components/HeroTwo";
import About from "../components/About";
import Achivement from "../components/Achivement";
import Service from "../components/Service";
import WorkProcess from "../components/WorkProcess";
import Facilities from "../components/Facilities";
const Home = () => {
  return (
    <div>
      <Hero />
      <HeroTwo />

      <About />
      <Achivement />
      <Service />
      <WorkProcess />
      <Facilities />
    </div>
  );
};

export default Home;
