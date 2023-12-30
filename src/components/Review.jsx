import React from "react";
import { FaHandHoldingMedical } from "react-icons/fa6";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCards } from "swiper/modules";
import profile from "../Images/heroDoctor-hd.png";
import "swiper/css";
import "swiper/css/effect-cards";
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

          {/* <div className="col-md-6">
            <Swiper
              effect={"cards"}
              grabCursor={true}
              modules={[EffectCards]}
              className="mySwiper reviewSwiper"
            >
              {[1, 2, 3, 4, 5, 6].map((x) => (
                <SwiperSlide>
                  <div className="row px-2 reviewSwiperPaddingRemove">
                    <div className="row descriptionReview">
                      <p>
                        Lorem ipsum dolor sit, amet consectetur adipisicing
                        elit. Similique omnis dignissimos consequuntur quia cum,
                        Similique omnis dignissimos consequuntur quia cum,
                        Similique omnis dignissimos consequuntur quia cum,
                      </p>
                    </div>
                    <hr />
                    <div className="row px-2">
                      <div className="d-flex">
                        <div className=" imgREview">
                          <div className="imgPic">
                            <img src={profile} alt="" />
                          </div>
                        </div>
                        <div className="detailsPatient mx-2 text-left">
                          <h6>Shivam Gupta</h6>
                          <p>Patient</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default Review;
