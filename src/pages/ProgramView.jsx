import React, { useState, useEffect, useContext } from "react";
import programInfos from "../program.json";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import Loader from "../components/Loader";
import {
  UserContext,
  OrderContext,
  productContext,
} from "../context/Mycontext";
import toast from "react-hot-toast";
import {
  MdOutlineKeyboardArrowLeft,
  MdOutlineKeyboardArrowRight,
} from "react-icons/md";
import CustomersReview from "../components/Ecommerce/CustomersReview";
const ProgramView = () => {
  const { id } = useParams();
  const { auth, isAuthenticate } = useContext(UserContext);
  const { handleOrderProgramPlane } = useContext(OrderContext);
  const { handleFeedbackProgramm } = useContext(productContext);
  const navigate = useNavigate();
  const programInfo = programInfos[id - 1];
  const [programPrice, setProgramPrice] = useState({});
  const [currentIndex, setCurrentIndex] = useState(0);
  const [comments, setComments] = useState([]);

  const [loader, setLoader] = useState(true);
  useEffect(() => {
    const handleFetchProgramm = async () => {
      try {
        setLoader(true);
        const { data } = await axios.get(
          `${process.env.REACT_APP_API_KEY}/program/${programInfo?.id}`,

          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        );
        if (data.success) {
          console.log(data);
          setLoader(false);

          setProgramPrice(data?.program);
        }
      } catch (e) {
        setLoader(false);

        console.log(e);

        return e.message;
      }
    };
    handleFetchProgramm();
  }, [programInfo]);
  function calculateNewPrice(originalPrice, discountPercentage) {
    const dis = discountPercentage ? discountPercentage : 0;
    console.log(originalPrice, dis);
    const discountAmount = originalPrice * (dis / 100);
    const newPrice = originalPrice - discountAmount;
    return Math.floor(newPrice);
  }

  console.log(programInfo?.id);
  const handleBuyProgram = async () => {
    try {
      const orderDetails = {
        ProgramId: programInfo?.id,
        totalAmount: programPrice?.price,
        address: auth?.user?.address,
        pageNo: id,
      };
      console.log(orderDetails);
      if (auth && auth?.token) {
        if (auth?.user?.address) {
          await handleOrderProgramPlane(orderDetails, auth);
        } else {
          console.log("first filled address");
          toast("first filled address", {
            style: {
              borderRadius: "10px",
              background: " rgb(24, 50, 91)",
              color: "#fff",
            },
          });
        }
      } else {
        navigate("/login");
      }
    } catch (e) {
      console.log(e);
    }
  };

  const [thumbsSwiper, setThumbsSwiper] = useState(0);

  const imagesProducts = programInfo?.images;
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

  const handleSubmitComment = async (comment) => {
    if (auth?.token) {
      const newComment = {
        programId: programInfo?.id,
        reviews: comment,
      };
      try {
        const data = await handleFeedbackProgramm(auth, newComment);
        console.log(data);
        setComments(data?.review);
      } catch (e) {
        console.log(e);
      }
    } else {
      alert("please login first");
    }
  };

  return loader ? (
    <Loader />
  ) : (
    <div className="container-fluid">
      <div
        className="productDetailsContainerMiddle"
        style={{ backgroundColor: "rgb(246,252,252)" }}
      >
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
                  <MdOutlineKeyboardArrowRight fontSize={25} color="white" />
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
                <h1>{programPrice?.name}</h1>
              </div>
              <div className="row my-3">
                <div className="d-flex justify-content-between productsDetailsMarginWidth97price">
                  <a href="#reviews">
                    <p>Sell All Reviews</p>
                  </a>
                  <div className="priceWithDiscount">
                    <div className="prices">
                      <span>₹</span>

                      <span className="mt-5">
                        {" "}
                        {calculateNewPrice(
                          programPrice?.price,
                          programPrice?.discount
                        )}
                        {/* 979 */}
                      </span>

                      {programPrice?.price !==
                        calculateNewPrice(
                          programPrice?.price,
                          programPrice?.discount
                        ) && (
                        <div className="discountParent">
                          <div className="discount">
                            <span>₹</span>
                            <span className="mt-5">{programPrice?.price}</span>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
              {/* <div className="row productsDetailsMarginWidth97quantity">
                <h6>Programs Components</h6>
                <button className="btn  px-4 mx-2">200gm</button>
              </div> */}
              <div className="ProgramDetailsMarginWidth97instruction mt-2">
                <h1>Programs Components</h1>

                {programInfo?.Components?.map((c, i) => {
                  if (i !== 3) {
                    const index = i > 2 ? i - 1 : i;
                    return (
                      <p className="my-1" key={i}>
                        ⚫ {c}
                      </p>
                    );
                  }

                  if (i === 3) {
                    return c.Items.map((item, j) => (
                      <p key={j}>
                        {j + 1}. {item}
                      </p>
                    ));
                  }
                })}
              </div>

              <div className="row">
                <div className="addToCartProductsDetails mt-4 d-flex justify-content-end">
                  <button className="btn px-5 mx-2" onClick={handleBuyProgram}>
                    BUY NOW
                  </button>
                </div>
              </div>
              <div className="row products_details_description mt-4">
                <h1>DESCRIPTION</h1>
                <p>{programInfo?.Description}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        id="reviews"
        className="customersReview my-5  d-flex justify-content-center align-items-center"
      >
        <h1>Customer Reviews</h1>
      </div>
      <CustomersReview
        comments={comments}
        onSubmitComment={handleSubmitComment}
      />
    </div>
  );
};

export default ProgramView;
