import React from "react";
import { FaHandHoldingMedical, FaStar } from "react-icons/fa6";
import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/pagination";
import "swiper/css/navigation";
import profile from "../Images/heroDoctor-hd.png";
// import required modules
import { Keyboard, Pagination, Navigation } from "swiper/modules";
import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa";
import { IoIosStarHalf } from "react-icons/io";
const Review = () => {
  return (
    <div className="review">
      <div className="container">
        <div className="row m-0 g-0 p-0">
          <div className="col-md-6 py-5 reviewSmallPadding">
            <div className="row h-50  py-5 reviewSmallPadding">
              <div className="row aboutHeading pt-5">
                <h5>
                  <span>
                    <FaHandHoldingMedical fontSize={25} />
                  </span>{" "}
                  <span>Testimonials</span>
                </h5>
              </div>
              <div className="row aboutSubheading">
                <h1>Great Patient Stories</h1>
              </div>
              <div className="row aboutDescription atSmallScreenReview">
                <p className="mt-2">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Aliquid deserunt pariatur perspiciatis quisquam nam totam,
                  esse consectetur officiis voluptas nulla? Rem minus odit
                  blanditiis veritatis alias deserunt quaerat eum quo?
                </p>
              </div>
            </div>
          </div>

          <div className="col-md-6 pt-5 mt-5 reviewSmallPadding marginRemove">
            <Swiper
              slidesPerView={1}
              spaceBetween={30}
              keyboard={{
                enabled: true,
              }}
              pagination={{
                clickable: true,
              }}
              navigation={true}
              modules={[Keyboard, Pagination, Navigation]}
              className="mySwiper reviewSection"
            >
              {[1, 2, 3, 4, 5, 6].map((x) => (
                <SwiperSlide className="testimonial">
                  <div className="row descriptionReview">
                    <p>
                      <span className="mx-2">
                        <FaQuoteLeft fontSize={20} />
                      </span>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Ipsum amet consectetur porro quia. Nihil aperiam deserunt
                      commodi fugiat, accusantium ea delectus soluta fuga, ipsa
                      quod aut blanditiis error at ullam.{" "}
                      <span className="mx-1">
                        <FaQuoteRight fontSize={20} />
                      </span>
                    </p>
                  </div>
                  <div className="row star m-0 p-0 g-0">
                    <div className="d-flex flex-row m-0 p-0 g-0 mb-2">
                      <span>
                        <FaStar color=" rgb(255, 187, 0)" fontSize={25} />
                      </span>
                      <span>
                        <FaStar color=" rgb(255, 187, 0)" fontSize={25} />
                      </span>
                      <span>
                        <FaStar color=" rgb(255, 187, 0)" fontSize={25} />
                      </span>
                      <span>
                        <FaStar color=" rgb(255, 187, 0)" fontSize={25} />
                      </span>
                      <span>
                        <IoIosStarHalf
                          color=" rgb(255, 187, 0)"
                          fontSize={25}
                        />
                      </span>
                    </div>
                  </div>

                  <div className="row ">
                    <div className="d-flex justify-content-between align-items-center">
                      <div className="imgREview">
                        <img src={profile} alt="" />
                      </div>
                      <div className="detailsPatient p-2">
                        <h6>Neha Sharma</h6>
                        <p>Patients</p>
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

export default Review;
