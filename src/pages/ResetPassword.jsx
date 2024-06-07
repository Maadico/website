import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import loginWall from "../Images/loginWall.jpg";
import toast from "react-hot-toast";

import axios from "axios";
const ResetPassword = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [loader, setLoader] = useState(false);

  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

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
    setLoader(true);
    try {
      const { data } = await axios.put(
        `${process.env.REACT_APP_API_KEY}/resetpassword/${id}`,
        { password }
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
          {/* <div className="col-md-9 col-lg-6 col-xl-5 noneIMAGErESETpASSWORD">
            <img src={loginWall} className="img-fluid" alt="loginWall" />
          </div> */}
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
                  password address
                </label>
                <input
                  type="password"
                  id="form3Example3"
                  name="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="form-control form-control"
                  placeholder="Enter a valid password address"
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
                  {loader ? "Loaning..." : "RESET"}
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

export default ResetPassword;
