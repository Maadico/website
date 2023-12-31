import React from "react";
import { FaHandHoldingMedical } from "react-icons/fa6";
import { Swiper, SwiperSlide } from "swiper/react";
import { useState, useEffect } from "react";
import profile from "../Images/doctorAbout.jpeg";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Pagination, Navigation } from "swiper/modules";
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
          <div className="row aboutHeading  m-0">
            <h5>
              <span>
                <FaHandHoldingMedical fontSize={25} />
              </span>{" "}
              <span>Our Doctors</span>
            </h5>
          </div>
          <div className="row aboutSubheading  m-0">
            <h1>Our Best Doctor</h1>
          </div>
          <div className="row slider  m-0">
            <Swiper
              slidesPerView={slidesPerView}
              centeredSlides={false}
              spaceBetween={10}
              navigation={true}
              modules={[Pagination, Navigation]}
              className="mySwiper"
            >
              {[1, 2, 3, 4, 5, 6].map((X) => (
                <SwiperSlide>
                  <img src={profile} alt="" />
                  <div className="details row mx-2 py-3  text-center m-auto">
                    <div className="row name text-center ">
                      <h6>Dr. Tanish Gupta</h6>
                    </div>
                    <div className="department row text-center ">
                      <p>Orthopaedist</p>
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
