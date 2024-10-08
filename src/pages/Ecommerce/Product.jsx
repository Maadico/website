import React, { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import EcommerceLayout from "../../components/Ecommerce/EcommerceLayout";
import HomeCarousel from "../../components/Ecommerce/HomeCarousel";
import { productContext, UserContext } from "../../context/Mycontext";
import toast from "react-hot-toast";
import Loader from "../../components/Loader";
import { MdAddIcCall } from "react-icons/md";
// import { BiSolidToTop } from "react-icons/bi";
import { IoLogoWhatsapp } from "react-icons/io";
import { FaArrowUp } from "react-icons/fa6";
import { useModel } from "../../hooks/useModel";
import LoginScreen from "../../model/LoginScreen";
const Product = () => {
  const navigate = useNavigate();

  const {
    pLoader,
    cartLoad,
    products,
    handleDelete,
    productGet,
    cart,
    handleAdToCart,
    handleAdToGuestCart,
  } = useContext(productContext);
  const { auth } = useContext(UserContext);
  const { open, handleOpen, handleClose } = useModel();
  const [action, setAction] = useState("BUY_NOW");
  const [cartId, setCartId] = useState("");
  // useEffect(() => {
  //   const fetchedProduct = async () => {
  //     await productGet(auth);
  //   };
  //   fetchedProduct();
  // }, [cartLoad]);
  const [productData, setProductData] = useState(null);
  const [isRegister, setIsRegister] = useState(false);
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
          toast("Added To Cart", {
            style: {
              borderRadius: "10px",
              background: " rgb(24, 50, 91)",
              color: "#fff",
            },
          });
          // console.log(data);
          // navigate("/cart");
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
      // setCartId(id);
      // setAction("ADD_CART");
      // handleOpen();
      let storedUuid = localStorage.getItem("app_uuid");

      const data = await handleAdToGuestCart(id, storedUuid);
      toast(data, {
        style: {
          borderRadius: "10px",
          background: " rgb(24, 50, 91)",
          color: "#fff",
        },
      });
    }
  };

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
  function calculateNewPrice(originalPrice, discountPercentage) {
    const dis = discountPercentage ? discountPercentage : 0;
    // console.log(originalPrice, dis);
    const discountAmount = originalPrice * (dis / 100);
    const newPrice = originalPrice - discountAmount;
    return Math.floor(newPrice);
  }

  const handleBuy = (p) => {
    setIsRegister(false);
    setProductData(p);
    // if ((!auth?.token && !auth?.user) || !auth?.user?.address) {
    handleOpen();
    // }
  };

  return pLoader ? (
    <Loader />
  ) : (
    <EcommerceLayout>
      <div className="product">
        <HomeCarousel />
        <div className="container-fluid mt-100">
          <h2 className="py-2 my-2 text-center">Our Products</h2>
          <div className="row">
            {products.map((p, i) => (
              <div
                key={p?._id}
                className="col-md-4 col-sm-6"
                onClick={() => navigate(`/product/${p?._id}`)}
              >
                <div className="card mb-30">
                  <Link className="card-img-tiles" to="" data-abc="true">
                    <div className="inner">
                      <div className="main-img">
                        <img src={p.productPic[0]} alt="Category" />
                      </div>
                      <div className="thumblist">
                        <img src={p.productPic[1]} alt="Category" />
                        <img src={p.productPic[2]} alt="Category" />
                      </div>
                    </div>
                  </Link>
                  <div className="card-body text-center">
                    <h4 className="card-title">{p?.name}</h4>
                    <p
                      className="text-muted"
                      style={{ color: "rgb(24,50,91)" }}
                    >
                      Starting from
                      <span style={{ textDecoration: "line-through" }}>
                        {" "}
                        ₹ {p.price}
                      </span>
                    </p>

                    <p className="text-muted" style={{ lineHeight: "2px" }}>
                      New Price
                      <span> ₹ {calculateNewPrice(p?.price, p?.discount)}</span>
                    </p>
                    <div className="d-flex justify-content-center align-items-center">
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          handleAddCart(p?._id);
                        }}
                        className="btn viewDetails"
                      >
                        Add to Cart
                      </button>
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          handleBuy(p);
                        }}
                        className="btn viewDetails mx-2"
                      >
                        Buy Now
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      {showButton && (
        <div className="fixIcon">
          <div className="icon1">
            <a href="tel:+919930805129">
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
      <LoginScreen
        open={open}
        handleClose={handleClose}
        isRegister={isRegister}
        setIsRegister={setIsRegister}
        productData={productData}
        callBy={action}
        cartId={cartId}
      />
    </EcommerceLayout>
  );
};

export default Product;
