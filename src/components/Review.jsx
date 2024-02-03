import React from "react";
import { FaStar } from "react-icons/fa6";
import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/pagination";
import "swiper/css/navigation";
import profile from "../Images/MaaDico Logo - Monogram_2.png";
// import required modules
import { Keyboard, Pagination, Navigation, Autoplay } from "swiper/modules";
import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa";
import { IoIosStarHalf } from "react-icons/io";
const patients = [
  {
    message:
      "I’ve had the pleasure of engaging with Maadico for Diabetes and I must say, their commitment to excellence is evident in every aspect. The team at Maadico exemplifies professionalism, delivering top-notch solutions tailored to individual needs.",
    name: "-Mukesh Bansal",
  },
  {
    message:
      "From the moment I started working with them, I felt a genuine concern for my well-being. Maadico’s expertise and innovative approaches have had a positive impact on my health journey. Their dedication to client satisfaction and the seamless integration of technology make them a standout choice in the realm of health and wellness.",
    name: "-Ranjana Arora",
  },
  {
    message:
      "I wholeheartedly recommend Maadico to anyone seeking a reliable partner on their path to better health.",
    name: "-Satish Aggarwal",
  },
  {
    message:
      "Embarking on a weight loss journey with Maadico has been a game-changer for me. The personalized approach and comprehensive programs they offer are not only effective but also sustainable.",
    name: "-Kavita Thakkar",
  },
  {
    message:
      "Experiencing improvements in my thyroid health has been a testament to the effectiveness of Maadico’s strategies. I highly recommend their services to anyone seeking a holistic and successful path to thyroid reversal.",
    name: "-Deepika Jain",
  },
  {
    message:
      "I am immensely grateful for the life-changing experience I’ve had with Maadico’s diabetes reversal programs. Their approach goes beyond managing symptoms, delving into the root causes of diabetes with precision and care.",
    name: "Vandana Goenka",
  },
];
const Review = () => {
  return (
    <div className="review">
      <div className="container">
        <div className="row m-0 g-0 p-0">
          <div className="col-md-6 pt-5 mt-5 reviewSmallPadding marginRemove">
            <Swiper
              slidesPerView={1}
              spaceBetween={30}
              loop={true}
              autoplay={{
                delay: 2500,
                disableOnInteraction: false,
              }}
              keyboard={{
                enabled: true,
              }}
              pagination={{
                clickable: true,
              }}
              navigation={true}
              modules={[Keyboard, Pagination, Navigation, Autoplay]}
              className="mySwiper reviewSection"
            >
              {patients?.map((x, i) => (
                <SwiperSlide className="testimonial" key={i}>
                  <div className="row descriptionReview">
                    <p>
                      <span className="mx-2">
                        <FaQuoteLeft fontSize={20} />
                      </span>
                      {x.message}
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
                        <h6>{x.name}</h6>
                        <p>Patients</p>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
          <div className="col-md-6  py-5 reviewSmallPadding ">
            <div className="row h-50  py-5 reviewSmallPadding gapBw">
              <div className="row aboutSubheading">
                <h1>Great Patient Stories</h1>
              </div>
              <div className="row aboutDescription atSmallScreenReview">
                <p className="mt-2">
                  I am immensely grateful for the life-changing experience I’ve
                  had with Maadico’s diabetes reversal programs. Their approach
                  goes beyond managing symptoms, delving into the root causes of
                  diabetes with precision and care.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Review;
