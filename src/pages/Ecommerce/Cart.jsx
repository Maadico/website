import React, { useContext, useEffect, useState } from "react";
import EcommerceLayout from "../../components/Ecommerce/EcommerceLayout";
import { Link, useNavigate } from "react-router-dom";
import {
  orderContext,
  productContext,
  UserContext,
} from "../../context/Mycontext";
import toast from "react-hot-toast";
import Loader from "../../components/Loader";
import { MdDeleteOutline } from "react-icons/md";
import { MdAddIcCall } from "react-icons/md";
// import { BiSolidToTop } from "react-icons/bi";
import { IoLogoWhatsapp } from "react-icons/io";
import { FaArrowUp } from "react-icons/fa6";
const Cart = () => {
  const navigate = useNavigate();
  const { auth, address, setAddress, isAddress, setisAddress } =
    useContext(UserContext);
  const { cart, setCart, handleDeleteCart, cartGet } =
    useContext(productContext);
  const { handleOrder } = useContext(orderContext);

  function calculateNewPrice(originalPrice, discountPercentage) {
    const dis = discountPercentage ? discountPercentage : 0;
    console.log(originalPrice, dis);
    const discountAmount = originalPrice * (dis / 100);
    const newPrice = originalPrice - discountAmount;
    return Math.floor(newPrice);
  }

  const totalPrice = () => {
    return cart.reduce(
      (a, { price, qty, discount }) =>
        a + calculateNewPrice(price, discount) * qty,
      0
    );
  };

  const [subtotal, setSubtotal] = useState(0);
  const [total, setTotal] = useState(0);
  const [isEditing, setIsEditing] = useState(false);
  const [cLoader, setCLoader] = useState(true);
  useEffect(() => {
    if (auth?.user?.address) {
      setAddress({
        name: auth?.user?.address?.name,
        street: auth?.user?.address?.street,
        city: auth?.user?.address?.city,
        state: auth?.user?.address?.state,
        zip: auth?.user?.address?.zip,
        country: auth?.user?.address?.country,
        phone: auth?.user?.address?.phone,
        address1: auth?.user?.address?.address1,
        address2: auth?.user?.address?.address2,
        district: auth?.user?.address?.district,
        email: auth?.user?.address?.email,
      });
    }
  }, [auth]);

  const updateQuantity = (itemId, newQuantity) => {
    setCart((prevItems) =>
      prevItems.map((item) =>
        item._id === itemId ? { ...item, qty: newQuantity } : item
      )
    );
  };

  const removeFromCart = async (itemId) => {
    try {
      await handleDeleteCart(auth, itemId);
      toast("remove from cart", {
        style: {
          borderRadius: "10px",
          background: " rgb(24, 50, 91)",
          color: "#fff",
        },
      });
    } catch (e) {
      toast("something went  wrong", {
        style: {
          borderRadius: "10px",
          background: " rgb(24, 50, 91)",
          color: "#fff",
        },
      });
    }
  };
  useEffect(() => {
    setCLoader(true);
    const fetchedProduct = async () => {
      console.log(auth);
      if (auth?.user && auth?.token) {
        try {
          await cartGet(auth);
          setCLoader(false);
        } catch (e) {
          console.log(e);
          setCLoader(false);
        }
      }
    };
    fetchedProduct();
  }, [auth]);
  const handleUpdate = async () => {
    setisAddress(true);
    setIsEditing(true);
  };
  const {
    name,
    street,
    city,
    state,
    zip,
    country,
    phone,
    address1,
    address2,
    district,
    email,
  } = auth?.user?.address || {};

  const increaseQuantity = (item) => {
    updateQuantity(item?._id, item?.qty + 1);
  };

  const decreaseQuantity = (item) => {
    if (item?.qty > 1) {
      updateQuantity(item?._id, item?.qty - 1);
    }
  };

  const handleCheckout = async () => {
    if (!auth?.user?.address) {
      toast("address is missing", {
        style: {
          borderRadius: "10px",
          background: " rgb(24, 50, 91)",
          color: "#fff",
        },
      });
      return;
    }

    const Price = totalPrice();
    const products = cart?.map((p) => {
      return { product: p?._id, quantity: p?.qty };
    });
    const productData = {
      products,
      totalAmount: Price + 0,
      address: auth?.user?.address,
    };
    console.log(productData);

    try {
      await handleOrder(productData, auth);
    } catch (e) {
      console.log(e);
      toast(e.response.data.message, {
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
  return cLoader ? (
    <Loader />
  ) : (
    <EcommerceLayout>
      {cart?.length > 0 ? (
        <div className="product">
          <div className="container">
            <div className="row">
              <div className="col-12 my-2">
                {auth?.user?.address ? (
                  <div className="row">
                    <div className="col-12">
                      {" "}
                      <div className="card p-2 rounded addressSmallDevice">
                        <p className="address">
                          {city}, {state}, {district}, {street} {zip}, {name}{" "}
                          {phone}
                        </p>
                        <div className="address-details">
                          <p>
                            <strong>Address Line 1:</strong> {address1}
                          </p>
                          <p>
                            <strong>Address Line 2:</strong> {address2}
                          </p>
                        </div>
                        <div className="d-flex justify-content-between">
                          <p>
                            <strong>Email:</strong> {email}
                          </p>
                          <button
                            className="btn viewDetails"
                            onClick={() => navigate("/profile")}
                          >
                            Edit
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                ) : (
                  <button
                    className="btn viewDetails"
                    onClick={() => navigate("/profile")}
                  >
                    Add Address
                  </button>
                )}
              </div>
            </div>
            <div className="row">
              <aside className="col-lg-9">
                <div className="card">
                  <div className="table-responsive">
                    <table className="table table-borderless table-shopping-cart">
                      <thead className="text-muted">
                        <tr className="small text-uppercase">
                          <th scope="col">Product</th>
                          <th scope="col" width="120">
                            Quantity
                          </th>
                          <th scope="col" width="120">
                            Price
                          </th>
                          <th
                            scope="col"
                            className="text-right d-none d-md-block"
                            width="200"
                          >
                            Action
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        {cart?.map((c, i) => (
                          <tr key={c?.cId}>
                            <td
                              // style={{ width: "150px" }}
                              className="cartWidthForSmallSize"
                            >
                              <figure className="itemside ">
                                <div className="aside">
                                  <img
                                    src={c?.productPic[0]}
                                    className="imgsm img-fluid rounded"
                                    alt={c?.name}
                                  />
                                </div>
                                <figcaption className="info">
                                  <h5> {c?.name}</h5>

                                  {/* <p className="text-muted text-muted1 small">
                                    Total Avilable <br />
                                    {c?.quantity}
                                  </p> */}
                                </figcaption>
                              </figure>
                            </td>
                            <td className="incDecController">
                              <div className="d-flex justify-content-center">
                                <span
                                  onClick={() => decreaseQuantity(c)}
                                  className="text-xl text-gray-600 cursor-pointer btn viewDetails"
                                >
                                  -
                                </span>
                                <span className="px-3 text-xl btn bg-light mx-2">
                                  {c?.qty}
                                </span>
                                <span
                                  onClick={() => increaseQuantity(c)}
                                  className="text-xl text-gray-600 cursor-pointer btn viewDetails"
                                >
                                  +
                                </span>
                              </div>
                            </td>
                            <td>
                              <div className="d-flex">
                                <div className="price-wrap">
                                  {" "}
                                  <var className="price">{`₹${(
                                    calculateNewPrice(c?.price, c?.discount) *
                                    c?.qty
                                  ).toFixed(2)}`}</var>{" "}
                                  <small className="text-muted">
                                    {" "}
                                    ₹{/* {c?.price}  */}
                                    {calculateNewPrice(c?.price, c?.discount)}
                                    each{" "}
                                  </small>{" "}
                                </div>
                                <div
                                  onClick={() => removeFromCart(c?.cId)}
                                  className="hideCartDeleteIcon"
                                >
                                  <MdDeleteOutline fontSize={20} />
                                </div>
                              </div>
                            </td>
                            <td className="hideRemoveBtn">
                              <button
                                className="btn btn-light btn-lg"
                                onClick={() => removeFromCart(c?.cId)}
                              >
                                {" "}
                                Remove
                              </button>{" "}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </aside>
              <aside className="col-lg-3">
                <div className="card mb-3">
                  <div className="card-body">
                    <form>
                      <div className="form-group">
                        {" "}
                        <label>Have coupon?</label>
                        <div className="input-group">
                          {" "}
                          <input
                            type="text"
                            className="form-control coupon"
                            name=""
                            placeholder="Coupon code"
                          />{" "}
                          <span className="input-group-append">
                            {" "}
                            <button className="btn globalBackColor btn-apply coupon btn-lg py-3">
                              Apply
                            </button>{" "}
                          </span>{" "}
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
                <div className="card">
                  <div className="card-body">
                    <dl className="dlist-align">
                      <dt>Delivery Charge:</dt>
                      <dd className="text-right ml-3">₹50</dd>
                    </dl>
                    <dl className="dlist-align">
                      <dt>Price:</dt>
                      <dd className="text-right text-danger ml-3">
                        ₹{totalPrice()}
                      </dd>
                    </dl>
                    <dl className="dlist-align">
                      <dt>Total:</dt>
                      <dd className="text-right text-dark b ml-3">
                        <strong>₹{totalPrice() + 50} </strong>
                      </dd>
                    </dl>
                    <hr />{" "}
                    <button
                      className="btn btn-out globalBackColor btn-square btn-main"
                      onClick={handleCheckout}
                    >
                      {" "}
                      Make Purchase{" "}
                    </button>{" "}
                    <Link
                      to="/product"
                      className="btn btn-out globalBackColor btn-square btn-main mt-2"
                    >
                      Continue Shopping
                    </Link>
                  </div>
                </div>
              </aside>
            </div>
          </div>
        </div>
      ) : (
        <div className="notAddedCart">
          <img
            src="https://assets.1mg.com/pwa-app/production/dweb/2.0.1/static/images/illustrations/empty-cart.svg"
            alt="cart"
          />
          <h6>Your cart is empty</h6>
          <p>
            We have all the medicines and healthcare products that you need.
          </p>
          <button
            className="my-2 border btn viewDetails"
            onClick={() => navigate("/product")}
          >
            Find Products
          </button>
        </div>
      )}
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

export default Cart;
