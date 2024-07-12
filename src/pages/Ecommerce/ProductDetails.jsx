import React, { useState, useEffect, useContext } from "react";
import EcommerceLayout from "../../components/Ecommerce/EcommerceLayout";
import DetailsThumb from "../../components/Ecommerce/DetailsThumb";
import CustomersReview from "../../components/Ecommerce/CustomersReview";
import ProductsDetailsCompTwo from "../../components/Ecommerce/ProductsDetailsCompTwo";
import WhyItsAwesome from "../../components/Ecommerce/WhyItsAwesome";
import {
  MdOutlineKeyboardArrowLeft,
  MdOutlineKeyboardArrowRight,
} from "react-icons/md";
import { useNavigate, useParams } from "react-router-dom";
import { productContext, UserContext } from "../../context/Mycontext";
import toast from "react-hot-toast";
import Loader from "../../components/Loader";
import { MdAddIcCall } from "react-icons/md";
// import { BiSolidToTop } from "react-icons/bi";
import { IoLogoWhatsapp } from "react-icons/io";
import { FaArrowUp } from "react-icons/fa6";
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

  const navigate = useNavigate();
  const { id } = useParams();
  const {
    handleDetailsProduct,
    cartLoad,
    handleAdToCart,
    cart,
    handleFeedback,
  } = useContext(productContext);
  const { auth } = useContext(UserContext);
  const [comments, setComments] = useState([]);
  const [pDetails, setPdetails] = useState(null);
  const [currentProduct, setCurrentProduct] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [dLoader, setDLoader] = useState(true);

  useEffect(() => {
    const fetchedProduct = async () => {
      setDLoader(true);
      try {
        const data = await handleDetailsProduct(auth, id);
        console.log(data);
        setPdetails(data);
        setComments(data?.review);
        setDLoader(false);
      } catch (e) {
        setDLoader(false);

        console.log(e);
      }
    };
    fetchedProduct();
  }, [id]);

  const isPresent = (id) => {
    const isCart = cart.find((c) => c?._id === id);
    if (isCart) {
      return false;
    } else {
      return true;
    }
  };

  const handleAddCart = async (id) => {
    if (auth?.token && auth?.user) {
      if (isPresent(id)) {
        try {
          const data = await handleAdToCart(id, auth);
          toast(data, {
            style: {
              borderRadius: "10px",
              background: " rgb(24, 50, 91)",
              color: "#fff",
            },
          });
          console.log(data);
          navigate("/cart");
        } catch (e) {
          console.log(e);
          toast(e, {
            style: {
              borderRadius: "10px",
              background: " rgb(24, 50, 91)",
              color: "#fff",
            },
          });
          return;
        }
      } else {
        toast("Already present", {
          style: {
            borderRadius: "10px",
            background: " rgb(24, 50, 91)",
            color: "#fff",
          },
        });

        return;
      }
    } else {
      toast("please first login", {
        style: {
          borderRadius: "10px",
          background: " rgb(24, 50, 91)",
          color: "#fff",
        },
      });
    }
  };
  const handleSubmitComment = async (comment) => {
    if (auth?.token) {
      const newComment = {
        productId: pDetails?._id,
        reviews: comment,
      };
      try {
        const data = await handleFeedback(auth, newComment);
        console.log(data);
        setComments(data?.review);
      } catch (e) {
        console.log(e);
      }
    } else {
      alert("please login first");
    }
  };
  function calculateNewPrice(originalPrice, discountPercentage) {
    const dis = discountPercentage ? discountPercentage : 0;
    console.log(originalPrice, dis);
    const discountAmount = originalPrice * (dis / 100);
    const newPrice = originalPrice - discountAmount;
    return Math.floor(newPrice);
  }

  const [showButton, setShowButton] = useState(false);
  useEffect(() => {
    // Add scroll event listener to determine when to show the button
    const handleScroll = () => {
      const scrollY = window.scrollY;
      if (scrollY > 200) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return dLoader ? (
    <Loader />
  ) : (
    <EcommerceLayout>
      <div className="product">
        <div className="container-fluid  p-0 g-0 m-auto w-767w100">
          <div
            className="productDetailsContainerMiddle"
            style={{ backgroundColor: "rgb(246,252,252)" }}
          >
            <div className="productsDetailsMarginWidth97">
              <div className="row ">
                <div className="col-md-5 my-2">
                  <div className="productsDetailsImage">
                    <img src={pDetails?.productPic[thumbsSwiper]} alt="" />
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
                    {pDetails?.productPic?.map((p, i) => (
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
                    <p>{pDetails?.company}</p>
                    <h1> {pDetails?.name}</h1>
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
                            {calculateNewPrice(
                              pDetails?.price,
                              pDetails?.discount
                            )}
                          </span>
                          {pDetails?.price !==
                            calculateNewPrice(
                              pDetails?.price,
                              pDetails?.discount
                            ) && (
                            <div className="discountParent">
                              <div className="discount">
                                <span>₹</span>
                                <span className="mt-5">{pDetails?.price}</span>
                              </div>
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="row productsDetailsMarginWidth97quantity">
                    <h6>NET QUANTITY</h6>
                    <button className="btn  px-4 mx-2">
                      {pDetails?.totalGram}gm
                    </button>
                  </div>
                  <div className="productsDetailsMarginWidth97instruction mt-2">
                    <h1>Instructions</h1>
                    {pDetails?.instruction.map((ins, i) => (
                      <p className="my-2">
                        {i + 1} {ins?.text}
                      </p>
                    ))}
                  </div>

                  <div className="row">
                    <div className="addToCartProductsDetails mt-4 d-flex justify-content-end">
                      <button
                        className="btn px-5 mx-2"
                        onClick={() => handleAddCart(pDetails?._id)}
                      >
                        ADD TO CART
                      </button>
                    </div>
                  </div>
                  <div className="row products_details_description mt-4">
                    <h1>DESCRIPTION</h1>
                    <p>{pDetails?.description}</p>
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
        <WhyItsAwesome extraInfo={pDetails} />
        <div
          id="reviews"
          className="customersReview   d-flex justify-content-center align-items-center"
        >
          <h1>Customer Reviews</h1>
        </div>
        <CustomersReview
          comments={comments}
          onSubmitComment={handleSubmitComment}
        />
      </div>
      {showButton && (
        <div className="fixIcon">
          <div className="icon1">
            <a href="tel:+919601645426932">
              <MdAddIcCall fontSize={25} color="white" />
            </a>
          </div>

          <div className="icon2">
            <a href="https://wa.me/919930805129" target="blank">
              <IoLogoWhatsapp fontSize={35} color="green" />
            </a>
          </div>

          <div className="icon1">
            <a href="#navbarColor">
              <FaArrowUp fontSize={26} color="white" />
            </a>
          </div>
        </div>
      )}
    </EcommerceLayout>
  );
};

export default ProductDetails;
