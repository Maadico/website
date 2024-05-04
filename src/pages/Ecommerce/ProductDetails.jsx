import React, { useState, useEffect } from "react";
import EcommerceLayout from "../../components/Ecommerce/EcommerceLayout";
import DetailsThumb from "../../components/Ecommerce/DetailsThumb";
import CustomersReview from "../../components/Ecommerce/CustomersReview";
import ProductsDetailsCompTwo from "../../components/Ecommerce/ProductsDetailsCompTwo";
import WhyItsAwesome from "../../components/Ecommerce/WhyItsAwesome";
import {
  MdOutlineKeyboardArrowLeft,
  MdOutlineKeyboardArrowRight,
} from "react-icons/md";
const ProductDetails = () => {
  const [thumbsSwiper, setThumbsSwiper] = useState(0);

  const imagesProducts = [
    "https://img.freepik.com/free-photo/high-angle-pill-foils-plastic-containers_23-2148533456.jpg?t=st=1714852628~exp=1714856228~hmac=07614612f36006ba9feca8031b848b464c361e4876205164c6043e5c3c47761c&w=740",
    "https://img.freepik.com/free-vector/medication_23-2148172439.jpg?t=st=1714852642~exp=1714856242~hmac=055b3c458e89a6658ba4cb41605cc505a4546e01bd52dc7de5aafabb4a38fee2&w=740",
    "https://img.freepik.com/free-photo/medical-treatment-with-pills_23-2148108993.jpg?t=st=1714852664~exp=1714856264~hmac=5a272ff4b5b3226489bdebdf010c2d1158f8ea814c7293bbe94737a9c08fd52d&w=740",
    "https://img.freepik.com/free-vector/medication_23-2148172439.jpg?t=st=1714852642~exp=1714856242~hmac=055b3c458e89a6658ba4cb41605cc505a4546e01bd52dc7de5aafabb4a38fee2&w=740",
    "https://img.freepik.com/free-photo/medical-treatment-with-pills_23-2148108993.jpg?t=st=1714852664~exp=1714856264~hmac=5a272ff4b5b3226489bdebdf010c2d1158f8ea814c7293bbe94737a9c08fd52d&w=740",
  ];
  const handleRightArrow = () => {
    if (thumbsSwiper < imagesProducts.length - 1) {
      setThumbsSwiper(thumbsSwiper + 1);
    }
  };

  const handleLeftArrow = () => {
    if (thumbsSwiper > 0) {
      setThumbsSwiper(thumbsSwiper - 1);
    }
  };
  return (
    <EcommerceLayout>
      <div className="product">
        <div className="container-fluid  p-0 g-0 m-auto">
          <div
            className="productDetailsContainerMiddle"
            style={{ backgroundColor: "rgb(246,252,252)" }}
          >
            {/* products details */}

            <div className="productsDetailsMarginWidth97">
              <div className="row ">
                <div className="col-md-5 my-2">
                  <div className="productsDetailsImage">
                    <img src={imagesProducts[thumbsSwiper]} alt="" />
                    <span
                      className="detailsLeft_arrow"
                      onClick={() => handleLeftArrow()}
                    >
                      <MdOutlineKeyboardArrowLeft fontSize={25} color="white" />
                    </span>
                    <span
                      className="detailsRight_arrow"
                      onClick={() => handleRightArrow()}
                    >
                      <MdOutlineKeyboardArrowRight
                        fontSize={25}
                        color="white"
                      />
                    </span>
                  </div>
                  <div className="productsDetailsImageChild">
                    {imagesProducts.map((p, i) => (
                      <div
                        className="productsDetailsImageChildImages"
                        onMouseEnter={() => setThumbsSwiper(i)}
                      >
                        <img src={p} alt="products" />
                      </div>
                    ))}
                  </div>
                </div>
                <div className="col-md-6 my-2">
                  <div className="row headingOfProduct">
                    <p>Most nutrient-rich & revitalising go-to-green</p>
                    <h1>Moringa Powder</h1>
                  </div>
                  <div className="row my-3">
                    <div className="d-flex justify-content-between productsDetailsMarginWidth97price">
                      <a href="#reviews">
                        <p>Sell All Reviews</p>
                      </a>
                      <div className="priceWithDiscount">
                        <div className="prices">
                          <span>₹</span>
                          <span className="mt-5">299</span>
                          <div className="discountParent">
                            <div className="discount">
                              <span>₹</span>
                              <span className="mt-5">3999</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="row productsDetailsMarginWidth97quantity">
                    <h6>NET QUANTITY</h6>
                    <button className="btn  px-4 mx-2">200gm</button>
                  </div>
                  <div className="productsDetailsMarginWidth97instruction mt-2">
                    <h1>Instructions</h1>
                    {[
                      "Take Medicine Daily",
                      "Brush Daily",
                      "Clean Your Nail",
                      "Follow Doctors Guidance",
                    ].map((ins, i) => (
                      <p className="my-2">
                        {i + 1} {ins}
                      </p>
                    ))}
                  </div>

                  <div className="row">
                    <div className="addToCartProductsDetails mt-4 d-flex justify-content-end">
                      <button className="btn px-5 mx-2">ADD TO CART</button>
                    </div>
                  </div>
                  <div className="row products_details_description mt-4">
                    <h1>DESCRIPTION</h1>
                    <p>
                      Packed with antioxidants, calcium, iron, fibre, vitamins &
                      plant protein, 1 tsp of our moringa leaves powder
                      naturally energises you throughout the day. It is
                      ready-to-use, caffeine-free and blends well with your
                      smoothies & snacks. Enjoy the sweetish-bitter flavour that
                      grows on you!
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            className="w-100"
            style={{ backgroundColor: "rgb(246,252,252)" }}
          >
            <ProductsDetailsCompTwo />
          </div>

          <div className="whyItsAwesome  d-flex justify-content-center align-items-center">
            <button className="btn bg-light ">WHY IT`S AWESOME</button>
          </div>
        </div>
        <WhyItsAwesome />
        <div
          id="reviews"
          className="customersReview   d-flex justify-content-center align-items-center"
        >
          <h1>Customer Reviews</h1>
        </div>
        <CustomersReview />
      </div>
    </EcommerceLayout>
  );
};

export default ProductDetails;
