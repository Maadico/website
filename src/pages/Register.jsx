import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import loginWall from "../Images/loginWall.jpg";
import { useContext } from "react";
import { UserContext } from "../context/Mycontext";
import axios from "axios";
import toast from "react-hot-toast";

const Register = () => {
  const navigate = useNavigate();
  const { auth, setAuth, setIsAuthenticated, isAuthenticate } =
    useContext(UserContext);
  const [signupData, setSignUpData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [emailColor, setEmailColor] = useState("black");
  const [OtpColor, setOtpColor] = useState("black");
  const [btnLoad, setBtnLoad] = useState(false);
  const [btnLoad1, setBtnLoad1] = useState(false);
  const [otp, SetOtp] = useState("");
  const handleSignUpChange = (e) => {
    const { name, value } = e.target;
    setSignUpData({ ...signupData, [name]: value });
  };

  const handleSignUpSubmit = async (e) => {
    e.preventDefault();
    const { name, email, password, confirmPassword } = signupData;

    if (!name || !email || !password || !confirmPassword) {
      toast("All fields are required", {
        style: {
          borderRadius: "10px",
          background: " rgb(24, 50, 91)",
          color: "#fff",
        },
      });

      return;
    }
    if (password !== confirmPassword) {
      toast("Password and confirm password do not match", {
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
              <div data-mdb-input-init className="form-outline mb-1">
                <label className="form-label" htmlFor="form3Example3">
                  Your Name
                </label>
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
              </div>
              <div data-mdb-input-init className="form-outline mb-1">
                <label className="form-label" htmlFor="form3Example3">
                  Email address
                </label>
                <div className="d-flex justify-content-between align-items-center">
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
                  <button
                    type="button"
                    onClick={handleVeriyEmail}
                    disabled={btnLoad}
                    className="btn btn-primary btn-lg mx-1"
                  >
                    {btnLoad ? "verifying..." : "verify"}
                  </button>
                </div>
              </div>

              <div data-mdb-input-init className="form-outline mb-1">
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
                    className="btn btn-primary btn-lg mx-1"
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
              <div data-mdb-input-init className="form-outline mb-1">
                <label className="form-label" htmlFor="form3Example4">
                  confirm Password
                </label>
                <input
                  type="password"
                  id="form3Example4"
                  className="form-control form-control-lg"
                  name="confirmPassword"
                  value={signupData.confirmPassword}
                  onChange={handleSignUpChange}
                  placeholder="Enter confirm Password"
                />
              </div>
              <div className="text-center text-lg-start mt-4 pt-2">
                <button
                  type="submit"
                  data-mdb-button-init
                  data-mdb-ripple-init
                  className="btn btn-primary btn-lg"
                  style={{ paddingLeft: "2.5rem", paddingRight: "2.5rem" }}
                >
                  Register
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
