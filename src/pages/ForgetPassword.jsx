import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import loginWall from "../Images/loginWall.jpg";
import toast from "react-hot-toast";

import axios from "axios";
const ForgetPassword = () => {
  const navigate = useNavigate();

  const [loader, setLoader] = useState(false);

  const [email, setEmail] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailRegex.test(email)) {
      console.log("Invalid email format");
      return;
    }
    setLoader(true);
    try {
      const { data } = await axios.post(
        `${process.env.REACT_APP_API_KEY}/forgetpassword`,
        { email }
      );
      if (data.success) {
        setLoader(false);

        toast(data.message, {
          style: {
            borderRadius: "10px",
            background: " rgb(24, 50, 91)",
            color: "#fff",
          },
        });
        console.log(data.message);
      }
    } catch (e) {
      setLoader(false);

      toast(e.response.data?.message, {
        style: {
          borderRadius: "10px",
          background: " rgb(24, 50, 91)",
          color: "#fff",
        },
      });
      console.log(e.response.data?.message);
    }
  };

  return (
    <section className="vh-100">
      <div className="container-fluid h-custom">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col-md-9 col-lg-6 col-xl-5">
            <img src={loginWall} className="img-fluid" alt="loginWall" />
          </div>
          <div className="col-md-8 col-lg-6 col-xl-4 offset-xl-1">
            <form onSubmit={handleSubmit}>
              <div className="divider d-flex align-items-center my-4">
                <h5
                  className="text-center fw-bold mx-3 mb-0"
                  onClick={() => navigate("/")}
                >
                  Maadico
                </h5>
              </div>

              <div data-mdb-input-init className="row  mb-1">
                <label className="form-label" htmlFor="form3Example3">
                  Email address
                </label>
                <input
                  type="email"
                  id="form3Example3"
                  name="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="form-control form-control"
                  placeholder="Enter a valid email address"
                />
              </div>

              <div className="row my-1">
                <button
                  type="submit"
                  data-mdb-button-init
                  data-mdb-ripple-init
                  className="btn globalBackColor "
                  style={{ paddingLeft: "2.5rem", paddingRight: "2.5rem" }}
                  disabled={loader}
                >
                  {loader ? "Loaning..." : "SEND"}
                </button>
              </div>
              <div className="row">
                <button
                  type="submit"
                  data-mdb-button-init
                  data-mdb-ripple-init
                  className="btn globalBackColor"
                  style={{ paddingLeft: "2.5rem", paddingRight: "2.5rem" }}
                  onClick={() => navigate("/login")}
                >
                  BACK
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ForgetPassword;
