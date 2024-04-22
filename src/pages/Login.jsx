import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import loginWall from "../Images/loginWall.jpg";
import { useContext } from "react";
import { UserContext } from "../context/Mycontext";
import axios from "axios";
const Login = () => {
  const navigate = useNavigate();

  const { auth, setAuth, setIsAuthenticated, isAuthenticate } =
    useContext(UserContext);

  const [loginData, setLoginData] = useState({ email: "", password: "" });
  const [loader, setLoader] = useState(false);
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

        navigate("/profile");
      } else {
        setLoader(false);

        console.log("error some went wrong");
      }
    } catch (error) {
      setLoader(false);

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
            <form onSubmit={handleLoginSubmit}>
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
                  type="email"
                  id="form3Example3"
                  name="email"
                  value={loginData.email}
                  onChange={handleLoginChange}
                  className="form-control form-control-lg"
                  placeholder="Enter a valid email address"
                />
                <label className="form-label" htmlFor="form3Example3">
                  Email address
                </label>
              </div>

              <div data-mdb-input-init className="form-outline mb-3">
                <input
                  type="password"
                  id="form3Example4"
                  name="password"
                  value={loginData.password}
                  onChange={handleLoginChange}
                  className="form-control form-control-lg"
                  placeholder="Enter password"
                />
                <label className="form-label" htmlFor="form3Example4">
                  Password
                </label>
              </div>

              <div className="d-flex justify-content-between align-items-center">
                <Link to="#!" className="text-body">
                  Forgot password?
                </Link>
              </div>

              <div className="text-center text-lg-start mt-4 pt-2">
                <button
                  type="submit"
                  data-mdb-button-init
                  data-mdb-ripple-init
                  className="btn btn-primary btn-lg"
                  style={{ paddingLeft: "2.5rem", paddingRight: "2.5rem" }}
                  disabled={loader}
                >
                  {loader ? "Loaning..." : "Login"}
                </button>
                <p className="small fw-bold mt-2 pt-1 mb-0">
                  Don't have an account?{" "}
                  <Link to="/register" className="link-danger">
                    Register
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

export default Login;
