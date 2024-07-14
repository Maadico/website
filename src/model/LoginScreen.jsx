import React, { useContext, useEffect, useState } from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import loginWall from "../Images/loginWall.webp";
import { Link, useNavigate } from "react-router-dom";
import {
  orderContext,
  productContext,
  UserContext,
} from "../context/Mycontext";
import axios from "axios";
import toast from "react-hot-toast";
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "80%",
  maxHeight: 500,
  bgcolor: "white",
  border: "0",
  borderRadius: "20px",
  outline: "0",
  boxShadow: 24,
  padding: "30px",
  overflowY: "auto",
};

const LoginScreen = ({
  open,
  handleClose,
  setIsRegister,
  isRegister,
  productData,
  callBy = "BUY_NOW",
  cartId = "",
  qty = 1,
}) => {
  const {
    auth,
    setAuth,
    handleUpdateAddress,
    setIsAuthenticated,
    address,
    isAuthenticate,
    setAddress,
    addressLoader,
    setCurrentIndex,
  } = useContext(UserContext);
  const { handleOrder, handleOrderProgramPlane } = useContext(orderContext);
  const { cart, handleAdToCart } = useContext(productContext);
  const navigate = useNavigate();
  const [loginData, setLoginData] = useState({ email: "", password: "" });
  const [loader, setLoader] = useState(false);
  const [emailColor, setEmailColor] = useState("black");
  const [OtpColor, setOtpColor] = useState("black");
  const [btnLoad, setBtnLoad] = useState(false);
  const [btnLoad1, setBtnLoad1] = useState(false);
  const [otp, SetOtp] = useState("");
  const [isOtp, setIsOtp] = useState(false);
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
        address2: auth?.user?.address?.address1,
        district: auth?.user?.address?.district,
        email: auth?.user?.address?.email,
      });
    }
  }, [auth]);
  const handleLoginChange = (e) => {
    const { name, value } = e.target;
    setLoginData({ ...loginData, [name]: value });
  };

  const handleLoginSubmit = async (e) => {
    e.preventDefault();
    console.log(loginData);
    setLoader(true);
    try {
      const res = await axios.post(
        `${process.env.REACT_APP_API_KEY}/login`,
        loginData
      );
      if (res.data.success) {
        const userInfo = {
          user: res?.data?.user,
          token: res.data?.token,
        };
        setAuth({
          ...auth,
          user: res?.data?.user,
          token: res.data?.token,
        });
        setIsAuthenticated(true);
        localStorage.setItem("auth", JSON.stringify(userInfo));
        console.log(userInfo);
        setLoader(false);
      } else {
        setLoader(false);
        toast("something went", {
          style: {
            borderRadius: "10px",
            background: " rgb(24, 50, 91)",
            color: "#fff",
          },
        });
        console.log("error some went wrong");
      }
    } catch (error) {
      setLoader(false);
      toast(error.response.data.message, {
        style: {
          borderRadius: "10px",
          background: " rgb(24, 50, 91)",
          color: "#fff",
        },
      });
      console.log(error);
    }
  };

  const handleChange = (e) => {
    setAddress({
      ...address,
      [e.target.name]: e.target.value,
    });
  };
  function calculateNewPrice(originalPrice, discountPercentage) {
    const dis = discountPercentage ? discountPercentage : 0;

    const discountAmount = originalPrice * (dis / 100);
    const newPrice = originalPrice - discountAmount;
    return Math.floor(newPrice);
  }

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

    const products = [
      {
        product: productData?._id,
        quantity: callBy === "PRODUCT_DETAILS" ? qty : 1,
      },
    ];

    const productCollection = {
      products,
      totalAmount: calculateNewPrice(productData?.price, productData?.discount),
      address: auth?.user?.address,
    };
    console.log(productCollection);

    try {
      await handleOrder(productCollection, auth);
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
    }
  };
  const handleBuyProgram = async () => {
    try {
      await handleOrderProgramPlane(productData, auth);
      setCurrentIndex(2);
    } catch (e) {
      // console.log(error)
    }
  };
  const handleUpdate = async (e) => {
    e.preventDefault();
    console.log("currect path", address);
    try {
      await handleUpdateAddress(address);
      if (callBy === "BUY_NOW" || callBy === "PRODUCT_DETAILS") {
        handleClose();
        handleCheckout();
      } else if (callBy === "ADD_CART") {
        handleClose();
        handleAddCart(cartId);
      } else if (callBy === "PROGRAM_BUY") {
        handleClose();
        handleBuyProgram();
      } else if (callBy === "CART_PAGE") {
        toast("Address Updated", {
          style: {
            borderRadius: "10px",
            background: " rgb(24, 50, 91)",
            color: "#fff",
          },
        });
        handleClose();

        return;
      }

      toast("Processing", {
        style: {
          borderRadius: "10px",
          background: " rgb(24, 50, 91)",
          color: "#fff",
        },
      });
    } catch (e) {
      toast("Something went wrong", {
        style: {
          borderRadius: "10px",
          background: " rgb(24, 50, 91)",
          color: "#fff",
        },
      });
    }
  };

  const [signupData, setSignUpData] = useState({
    email: "",
    password: "",
  });

  const handleSignUpChange = (e) => {
    const { name, value } = e.target;
    setSignUpData({ ...signupData, [name]: value });
  };

  const handleSignUpSubmit = async (e) => {
    e.preventDefault();
    const { email, password } = signupData;
    // console.log(email, password);
    if (!email || !password) {
      toast("All fields are required", {
        style: {
          borderRadius: "10px",
          background: " rgb(24, 50, 91)",
          color: "#fff",
        },
      });

      return;
    }

    if (password.length <= 7) {
      toast("password length grater then 7 character", {
        style: {
          borderRadius: "10px",
          background: " rgb(24, 50, 91)",
          color: "#fff",
        },
      });
    }
    const passwordRegex =
      /^(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*(),.?":{}|<>])[A-Za-z0-9!@#$%^&*(),.?":{}|<>]{8,}$/;
    if (!passwordRegex.test(password)) {
      toast(
        "Password must contain at least one number, one symbol, one uppercase letter, and one lowercase letter",
        {
          style: {
            borderRadius: "10px",
            background: " rgb(24, 50, 91)",
            color: "#fff",
          },
        }
      );
      console.log("Invalid password format");
      return;
    }

    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailRegex.test(email)) {
      toast("Invalid email format", {
        style: {
          borderRadius: "10px",
          background: " rgb(24, 50, 91)",
          color: "#fff",
        },
      });

      return;
    }

    try {
      const res = await axios.post(
        `${process.env.REACT_APP_API_KEY}/register`,
        signupData
      );
      if (res.data.success) {
        setIsOtp(false);
        const userInfo = {
          user: res?.data?.user,
          token: res.data?.token,
        };
        setAuth({
          ...auth,
          user: res?.data?.user,
          token: res.data?.token,
        });
        setIsAuthenticated(true);
        setIsRegister(false);
        localStorage.setItem("auth", JSON.stringify(userInfo));
        console.log(userInfo);
        // toast.success(res.data && res.data.message);
      } else {
        toast("something went wrong", {
          style: {
            borderRadius: "10px",
            background: " rgb(24, 50, 91)",
            color: "#fff",
          },
        });
        console.log("error some went wrong");
      }
    } catch (error) {
      console.log(error);
      toast(error.response.data.message, {
        style: {
          borderRadius: "10px",
          background: " rgb(24, 50, 91)",
          color: "#fff",
        },
      });
      // console.log(error);
    }
  };
  const handleVeriyEmail = async () => {
    if (!signupData?.email) {
      console.log("email missing");
      return;
    }
    try {
      setBtnLoad(true);
      const { data } = await axios.post(
        `${process.env.REACT_APP_API_KEY}/emailverify`,
        {
          email: signupData.email,
        }
      );
      if (data?.success) {
        console.log(data?.message);
        setIsOtp(true);
        setEmailColor("green");
        setBtnLoad(false);
        toast("otp has been sent please check your mail", {
          style: {
            borderRadius: "10px",
            background: " rgb(24, 50, 91)",
            color: "#fff",
          },
        });
      }
    } catch (e) {
      console.log(e.response.data.message);
      toast(e.response.data.message, {
        style: {
          borderRadius: "10px",
          background: " rgb(24, 50, 91)",
          color: "#fff",
        },
      });
      setBtnLoad(false);

      setEmailColor("red");
    }
  };
  const handleVerifyOtp = async () => {
    if (!otp) {
      console.log("otp is missing");
      setOtpColor("red");

      return;
    }
    console.log(otp);
    try {
      setBtnLoad1(true);

      const { data } = await axios.post(
        `${process.env.REACT_APP_API_KEY}/otpverify`,
        {
          email: signupData.email,
          otp,
        }
      );
      if (data?.success) {
        console.log(data?.message);
        setOtpColor("green");
        setBtnLoad1(false);
        toast("otp is verified", {
          style: {
            borderRadius: "10px",
            background: " rgb(24, 50, 91)",
            color: "#fff",
          },
        });
      } else {
        console.log(data.message);
        toast(data.message, {
          style: {
            borderRadius: "10px",
            background: " rgb(24, 50, 91)",
            color: "#fff",
          },
        });
      }
    } catch (e) {
      console.log(e.response.data.message);
      setOtpColor("red");
      setBtnLoad1(false);
      toast(e.response.data.message, {
        style: {
          borderRadius: "10px",
          background: " rgb(24, 50, 91)",
          color: "#fff",
        },
      });
    }
  };

  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="child-modal-title"
        aria-describedby="child-modal-description"
      >
        <Box sx={{ ...style }}>
          {!isAuthenticate && !isRegister && (
            <div className="loginModel">
              <div className="left">
                <img
                  src={loginWall}
                  className="img-fluid h-100"
                  alt="loginWall"
                />
              </div>
              <div className="right">
                <form onSubmit={handleLoginSubmit}>
                  <div className="divider d-flex align-items-center my-4">
                    <h5 className="text-center fw-bold mx-3 mb-0">Login</h5>
                  </div>

                  <div data-mdb-input-init className="form-outline ">
                    <label className="form-label" htmlFor="form3Example3">
                      Email address
                    </label>
                    <input
                      type="email"
                      id="form3Example3"
                      name="email"
                      value={loginData.email}
                      onChange={handleLoginChange}
                      className="form-control form-control-lg"
                      placeholder="Enter a valid email address"
                    />
                  </div>

                  <div data-mdb-input-init className="form-outline ">
                    <label className="form-label" htmlFor="form3Example4">
                      Password
                    </label>
                    <input
                      type="password"
                      id="form3Example4"
                      name="password"
                      value={loginData.password}
                      onChange={handleLoginChange}
                      className="form-control form-control-lg"
                      placeholder="Enter password"
                    />
                  </div>

                  <div className="d-flex justify-content-between align-items-center my-1">
                    <Link to="/forget" className="text-body">
                      Forgot password?
                    </Link>
                  </div>

                  <div className="text-center text-lg-start mt-1 pt-1">
                    <button
                      type="submit"
                      data-mdb-button-init
                      data-mdb-ripple-init
                      className="btn globalBackColor btn-lg"
                      style={{ paddingLeft: "2.5rem", paddingRight: "2.5rem" }}
                      disabled={loader}
                    >
                      {loader ? "Loaning..." : "Login"}
                    </button>
                    <p
                      className="small fw-bold mt-1 pt-1 mb-0"
                      style={{ cursor: "pointer" }}
                      onClick={() => setIsRegister(true)}
                    >
                      Don't have an account?{" "}
                      <span className="link-danger"> Register</span>
                    </p>
                  </div>
                </form>
              </div>
            </div>
          )}

          {isRegister && (
            <div className="loginModel">
              <div className="left">
                <img
                  src={loginWall}
                  className="img-fluid h-100"
                  alt="loginWall"
                />
              </div>
              <div className="right">
                <form onSubmit={handleSignUpSubmit}>
                  <div className="divider d-flex align-items-center my-4">
                    <h5 className="text-center fw-bold mx-3 mb-0">Register</h5>
                  </div>
                  {!isOtp && (
                    <>
                      <div data-mdb-input-init className="form-outline ">
                        <label className="form-label" htmlFor="form3Example3">
                          Email address
                        </label>
                        <input
                          type="email"
                          id="form3Example3"
                          className="form-control form-control-lg"
                          placeholder="Enter a valid email address"
                          name="email"
                          value={signupData.email}
                          onChange={handleSignUpChange}
                          style={{ color: emailColor }}
                          required
                        />
                      </div>
                      <div className="text-center text-lg-start mt-1 pt-1">
                        <button
                          type="submit"
                          data-mdb-button-init
                          data-mdb-ripple-init
                          className="btn globalBackColor btn-lg"
                          onClick={handleVeriyEmail}
                          style={{
                            paddingLeft: "2.5rem",
                            paddingRight: "2.5rem",
                          }}
                          disabled={btnLoad}
                        >
                          {loader ? "Loaning..." : "Send Otp"}
                        </button>
                        <p
                          className="small fw-bold mt-1 pt-1 mb-0"
                          style={{ cursor: "pointer" }}
                          onClick={() => setIsRegister(false)}
                        >
                          Already Register?{" "}
                          <span className="link-danger">Login</span>
                        </p>
                      </div>
                    </>
                  )}
                  {isOtp && (
                    <>
                      <div data-mdb-input-init className="form-outline ">
                        <label className="form-label" htmlFor="form3Example3">
                          Otp
                        </label>
                        <div className="d-flex justify-content-between align-items-center">
                          <input
                            type="otp"
                            id="form3Example3"
                            className="form-control form-control-lg"
                            placeholder="Enter otp"
                            name="email"
                            value={otp}
                            onChange={(e) => SetOtp(e.target.value)}
                            style={{ color: OtpColor }}
                            required
                          />
                          <button
                            type="button"
                            onClick={handleVerifyOtp}
                            disabled={btnLoad1}
                            className="btn globalBackColor btn-lg mx-1"
                          >
                            {btnLoad1 ? "verifying..." : "verify"}
                          </button>
                        </div>
                      </div>
                      <div data-mdb-input-init className="form-outline mb-1">
                        <label className="form-label" htmlFor="form3Example4">
                          Password
                        </label>
                        <input
                          type="password"
                          id="form3Example4"
                          className="form-control form-control-lg"
                          name="password"
                          value={signupData.password}
                          onChange={handleSignUpChange}
                          placeholder="Enter password"
                        />
                      </div>
                      <div className="text-center text-lg-start mt-4 pt-2">
                        <button
                          type="submit"
                          data-mdb-button-init
                          data-mdb-ripple-init
                          className="btn globalBackColor btn-lg"
                          style={{
                            paddingLeft: "2.5rem",
                            paddingRight: "2.5rem",
                          }}
                        >
                          Register
                        </button>
                        <p className="small fw-bold mt-2 pt-1 mb-0">
                          Already Register?{" "}
                          <span className="link-danger">Login</span>
                        </p>
                      </div>
                    </>
                  )}
                </form>
              </div>
            </div>
          )}

          {isAuthenticate && (
            <div className="addressModel">
              <div className="divider d-flex align-items-center my-1">
                <h5 className="text-center fw-bold mx-3 mb-0">
                  Delivery Address
                </h5>
              </div>
              <div className="row">
                <div className="card-body">
                  <form onSubmit={handleUpdate}>
                    <div className="mb-3">
                      <label className="small mb-1" htmlFor="inputUsername">
                        Full Name
                      </label>
                      <input
                        className="form-control"
                        id="inputUsername"
                        type="text"
                        placeholder="Enter your username"
                        name="name"
                        value={address.name}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div className="row gx-3 mb-3">
                      <div className="col-md-6">
                        <label className="small mb-1" htmlFor="inputFirstName">
                          Landmark
                        </label>
                        <input
                          className="form-control"
                          id="inputFirstName"
                          type="text"
                          placeholder="Enter your Landmark"
                          name="street"
                          value={address.street}
                          onChange={handleChange}
                          required
                        />
                      </div>
                      <div className="col-md-6">
                        <label className="small mb-1" htmlFor="inputLastName">
                          Address1
                        </label>
                        <input
                          className="form-control"
                          id="inputLastName"
                          type="text"
                          placeholder="Enter your Address1"
                          name="address1"
                          value={address.address1}
                          onChange={handleChange}
                          required
                        />
                      </div>
                    </div>
                    <div className="row gx-3 mb-3">
                      <div className="col-md-6">
                        <label className="small mb-1" htmlFor="inputOrgName">
                          Address2
                        </label>
                        <input
                          className="form-control"
                          id="inputOrgName"
                          type="text"
                          placeholder="Enter your Address2"
                          name="address2"
                          value={address.address2}
                          onChange={handleChange}
                          required
                        />
                      </div>
                      <div className="col-md-6">
                        <label className="small mb-1" htmlFor="inputLocation">
                          State
                        </label>
                        <input
                          className="form-control"
                          id="inputLocation"
                          type="text"
                          placeholder="Enter your State"
                          name="state"
                          value={address.state}
                          onChange={handleChange}
                          required
                        />
                      </div>
                    </div>
                    <div className="mb-3">
                      <label className="small mb-1" htmlFor="inputEmailAddress">
                        District
                      </label>
                      <input
                        className="form-control"
                        id="inputEmailAddress"
                        type="text"
                        placeholder="Enter your District"
                        name="district"
                        value={address.district}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div className="row gx-3 mb-3">
                      <div className="col-md-6">
                        <label className="small mb-1" htmlFor="inputPhone">
                          City
                        </label>
                        <input
                          className="form-control"
                          id="inputPhone"
                          type="text"
                          placeholder="Enter your City"
                          name="city"
                          value={address.city}
                          onChange={handleChange}
                          required
                        />
                      </div>
                      <div className="col-md-6">
                        <label className="small mb-1" htmlFor="inputBirthday">
                          Zip
                        </label>
                        <input
                          className="form-control"
                          id="inputBirthday"
                          type="number"
                          placeholder="Enter your Zip"
                          name="zip"
                          value={address.zip}
                          onChange={handleChange}
                          required
                        />
                      </div>
                    </div>

                    <div className="row gx-3 mb-3">
                      <div className="col-md-6">
                        <label className="small mb-1" htmlFor="inputPhone">
                          Email
                        </label>
                        <input
                          className="form-control"
                          id="inputPhone"
                          type="email"
                          placeholder="Enter your Email"
                          name="email"
                          value={address.email}
                          onChange={handleChange}
                          required
                        />
                      </div>
                      <div className="col-md-6">
                        <label className="small mb-1" htmlFor="inputBirthday">
                          Phone
                        </label>
                        <input
                          className="form-control"
                          id="inputBirthday"
                          type="tel"
                          name="phone"
                          value={address.phone}
                          onChange={handleChange}
                          placeholder="Enter your Phone"
                          required
                        />
                      </div>
                    </div>
                    {(callBy === "BUY_NOW" || callBy === "PRODUCT_DETAILS") && (
                      <div className="row">
                        <div className="divider d-flex align-items-center my-1">
                          <h5 className="text-center fw-bold mx-3 mb-0">
                            Price Details
                          </h5>
                        </div>
                        <div className="col-md-6 my-2">
                          <div className="mb-1 d-flex justify-content-between align-items-center">
                            <span>Total MRP:</span>
                            <div className="d-flex justify-content-start w-50">
                              <span style={{ textDecoration: "line-through" }}>
                                ₹{productData?.price}
                              </span>

                              <span className="mx-2">
                                <b>
                                  ₹{" "}
                                  {calculateNewPrice(
                                    productData?.price,
                                    productData?.discount
                                  )}
                                </b>
                              </span>
                            </div>
                          </div>
                          <div className="mb-1 d-flex justify-content-between align-items-center">
                            <span>Discount:</span>
                            <div className="d-flex justify-content-start w-50">
                              <span>
                                <b>{productData?.discount}%</b>
                              </span>
                            </div>
                          </div>
                          <div className=" mb-1 d-flex justify-content-between align-items-center">
                            <span>Shipping charges</span>
                            <div className="d-flex justify-content-start  w-50">
                              <span>
                                <b>₹50</b>
                              </span>
                            </div>
                          </div>

                          <div className=" mb-1 d-flex justify-content-between align-items-center">
                            <span>Apply coupon:</span>
                            <div className="d-flex justify-content-start  w-50">
                              <span>
                                <input
                                  className="form-control couponForModel"
                                  type="text"
                                  placeholder="Enter coupon code"
                                />
                              </span>
                            </div>
                          </div>
                          <div className=" mb-1 d-flex justify-content-between align-items-center">
                            <span>Total Amount: </span>
                            <div className="d-flex justify-content-start  w-50">
                              <span>
                                <b>
                                  ₹
                                  {calculateNewPrice(
                                    productData?.price,
                                    productData?.discount
                                  ) + 50}
                                </b>
                              </span>
                            </div>
                          </div>

                          <div className=" mb-1 d-flex justify-content-between align-items-center">
                            <span>Total Quantity: </span>
                            <div className="d-flex justify-content-start  w-50">
                              <span>
                                <b>{callBy === "PRODUCT_DETAILS" ? qty : 1}</b>
                              </span>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-6"></div>
                      </div>
                    )}

                    <button
                      disabled={addressLoader}
                      className="btn globalBackColor my-2"
                      type="submit"
                    >
                      {addressLoader ? "Loading..." : "  Place Order"}
                    </button>
                  </form>
                </div>
              </div>
            </div>
          )}
        </Box>
      </Modal>
    </div>
  );
};

export default LoginScreen;
