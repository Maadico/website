import React from "react";
import { FaHandHoldingMedical } from "react-icons/fa6";
import { Swiper, SwiperSlide } from "swiper/react";
import { useState, useEffect } from "react";
import kunal from "../Images/Dr_kunal_Vijay_Bagade.jpg";
import tanish from "../Images/Dr_Tanish_shah.jpeg";
import komal from "../Images/Komal pic.jpg";
import govind from "../Images/Dr_govind.JPG";
import joshi from "../Images/Dr_joshi.jpg";
import gaurav from "../Images/Dr Gaurav.jpg";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules

import { Pagination, Navigation } from "swiper/modules";
const doctor = [
  // {
  //   name: "Dr Govind Kumar Trivedi",
  //   imgLink: govind,
  //   dep: "BNYS , MD",
  // },
  {
    name: "Dr Komal Kumari",
    imgLink: komal,
    dep: "BNYS",
  },
  {
    name: "Dr Tanish Shah",
    imgLink: tanish,
    dep: "Physiotherapist",
  },
  {
    name: "Dr Kunal Vijay Bagade",
    imgLink: kunal,
    dep: "BNYS",
  },
  {
    name: "Dr Naimesh Joshi ",
    imgLink: joshi,
    dep: "BNYS",
  },
  {
    name: "Dr Gaurav Thakur",
    imgLink: gaurav,
    dep: "BNYS",
  },
];
const Doctor = () => {
  const [slidesPerView, setSlidesPerView] = useState(5);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 525) {
        console.log("working");
        setSlidesPerView(1);
      } else if (window.innerWidth <= 991) {
        setSlidesPerView(3);
      } else {
        setSlidesPerView(5);
      }
    };

    // Initial setup
    handleResize();

    // Add event listener for window resize
    window.addEventListener("resize", handleResize);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <div className="doctor" id="doctor">
      <div className="container ">
        <div className="row py-5 ">
          <div className="row aboutSubheading  m-0">
            <h1>Our Best Doctor</h1>
          </div>
          <div className="row slider  m-0">
            <Swiper
              slidesPerView={slidesPerView}
              centeredSlides={false}
              spaceBetween={15}
              navigation={true}
              modules={[Pagination, Navigation]}
              className="mySwiper"
            >
              {doctor.map((d, i) => (
                <SwiperSlide key={i}>
                  <img src={d.imgLink} alt={d.name} />
                  <div className="details row mx-2 py-3  text-center m-auto">
                    <div className="row name text-center ">
                      <h6 style={{ fontSize: "small" }}>{d.name}</h6>
                    </div>
                    <div className="department row text-center ">
                      <span style={{ fontSize: "small" }}>{d.dep}</span>
                    </div>
                    <div className="row social  m-0 p-0">
                      <div className="socialId m-0 p-0">
                        <span>
                          <FaHandHoldingMedical fontSize={25} />
                        </span>
                        <span>
                          <FaHandHoldingMedical fontSize={25} />
                        </span>
                        <span>
                          <FaHandHoldingMedical fontSize={25} />
                        </span>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Doctor;
