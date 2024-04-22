import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import loginWall from "../Images/loginWall.jpg";
import { useContext } from "react";
import { UserContext } from "../context/Mycontext";
import axios from "axios";
const Register = () => {
  const navigate = useNavigate();
  const { auth, setAuth, setIsAuthenticated, isAuthenticate } =
    useContext(UserContext);
  const [signupData, setSignUpData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleSignUpChange = (e) => {
    const { name, value } = e.target;
    setSignUpData({ ...signupData, [name]: value });
  };

  const handleSignUpSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post(
        `${process.env.REACT_APP_API_KEY}/register`,
        signupData
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
        // toast.success(res.data && res.data.message);
        navigate("/");
      } else {
        console.log("error some went wrong");
      }
    } catch (error) {
      console.log(error);
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
            <form onSubmit={handleSignUpSubmit}>
              <div className="divider d-flex align-items-center my-4">
                <h5
                  className="text-center fw-bold mx-3 mb-0"
                  onClick={() => navigate("/")}
                >
                  Maadico
                </h5>
              </div>
              <div data-mdb-input-init className="form-outline mb-4">
                <input
                  type="text"
                  id="form3Example3"
                  className="form-control form-control-lg"
                  name="name"
                  value={signupData.name}
                  onChange={handleSignUpChange}
                  placeholder="Enter a Name"
                  required
                />
                <label className="form-label" htmlFor="form3Example3">
                  Your Name
                </label>
              </div>
              <div data-mdb-input-init className="form-outline mb-4">
                <input
                  type="email"
                  id="form3Example3"
                  className="form-control form-control-lg"
                  placeholder="Enter a valid email address"
                  name="email"
                  value={signupData.email}
                  onChange={handleSignUpChange}
                  required
                />
                <label className="form-label" htmlFor="form3Example3">
                  Email address
                </label>
              </div>

              <div data-mdb-input-init className="form-outline mb-3">
                <input
                  type="password"
                  id="form3Example4"
                  className="form-control form-control-lg"
                  name="password"
                  value={signupData.password}
                  onChange={handleSignUpChange}
                  placeholder="Enter password"
                />
                <label className="form-label" htmlFor="form3Example4">
                  Password
                </label>
              </div>

              <div className="text-center text-lg-start mt-4 pt-2">
                <button
                  type="submit"
                  data-mdb-button-init
                  data-mdb-ripple-init
                  className="btn btn-primary btn-lg"
                  style={{ paddingLeft: "2.5rem", paddingRight: "2.5rem" }}
                >
                  Login
                </button>
                <p className="small fw-bold mt-2 pt-1 mb-0">
                  Already Register?{" "}
                  <Link to="/login" className="link-danger">
                    Login
                  </Link>
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Register;
