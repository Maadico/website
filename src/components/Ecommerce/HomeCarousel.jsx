import React, { useState, useEffect } from "react";
import axios from "axios";
import banner1 from "../../Images/Happy Gut - Maadico - Front (1).png";
function HomeCarousel() {
  const [slider, setSlider] = useState([]);

  useEffect(() => {
    const fetchSlider = async () => {
      try {
        const { data } = await axios.get(
          `${process.env.REACT_APP_API_KEY}/sliders`,
          {
            headers: {
              Authorization: localStorage.getItem("token"),
            },
          }
        );

        if (data?.success) {
          setSlider(data?.data); // Set the fetched slider data
        }
      } catch (e) {
        console.error("Error fetching slider:", e);
      }
    };

    fetchSlider(); // Call the fetch function when the component mounts
  }, []);

  return (
    <div
      id="carouselExampleIndicators"
      className="carousel slide"
      data-ride="carousel"
    >
      <div className="carousel-inner">
        {slider?.map((s, i) => (
          <div className={`carousel-item ${i === 0 ? "active" : ""}`}>
            <img className="homeBannerCard" src={s?.image_url} alt={s?.title} />
          </div>
        ))}
        {/* <div className="carousel-item active">
          <img
            className="homeBannerCard"
            src="https://res.cloudinary.com/dhzogutcf/image/upload/v1725781201/slider/fftobcz0n9ipsjh3nkes.webp"
            alt="First slide"
          />
        </div> */}
        {/* <div className="carousel-item">
          <img
            className="d-block w-100"
            src="//www.anveshan.farm/cdn/shop/files/anveshan-oils-banner.jpg?v=1706685459&width=2400"
            alt="Second slide"
          />
        </div>
        <div className="carousel-item">
          <img
            className="d-block w-100"
            src="//www.anveshan.farm/cdn/shop/files/anveshan-popcoinsbanner.jpg?v=1705558185&width=2400"
            alt="Third slide"
          />
        </div> */}
      </div>
      {/* <a
        className="carousel-control-prev text-primary"
        href="#carouselExampleIndicators"
        role="button"
        data-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
      </a>
      <a
        className="carousel-control-next"
        href="#carouselExampleIndicators"
        role="button"
        data-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
      </a> */}
    </div>
  );
}

export default HomeCarousel;
