import React from "react";
import { FaHandHoldingMedical } from "react-icons/fa6";
import { Swiper, SwiperSlide } from "swiper/react";
import profile from "../Images/doctorAbout.jpg";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Pagination, Navigation } from "swiper/modules";
const Doctor = () => {
  return (
    <div className="doctor">
      <div className="container">
        <div className="row py-5">
          <div className="row aboutHeading">
            <h5>
              <span>
                <FaHandHoldingMedical fontSize={25} />
              </span>{" "}
              <span>Our Doctors</span>
            </h5>
          </div>
          <div className="row aboutSubheading">
            <h1>Our Best Doctor</h1>
          </div>
          <div className="row slider ">
            <Swiper
              slidesPerView={5}
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
                      <h6>Dr. Neha Mehra</h6>
                    </div>
                    <div className="department row text-center ">
                      <p>Cardiology</p>
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
