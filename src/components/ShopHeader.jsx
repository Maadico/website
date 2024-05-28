import React, { useContext } from "react";
import { Link } from "react-router-dom";
import logo from "../Images/MaaDico Logo - Monogram_2.png";
import { CgProfile } from "react-icons/cg";
import { useLocation } from "react-router-dom";
import { productContext, UserContext } from "../context/Mycontext";
import { FiShoppingCart } from "react-icons/fi";
import { CiMedicalClipboard } from "react-icons/ci";
import { IoMdLogIn } from "react-icons/io";
import { TbFirstAidKitOff } from "react-icons/tb";
import { CiHome } from "react-icons/ci";
const ShopHeader = () => {
  const { pathname } = useLocation();
  const { auth, setAuth, setIsAuthenticated, isAuthenticate } =
    useContext(UserContext);
  //   const isVisible = ["/product"].includes(pathname);
  const isVisible = pathname.startsWith("/product");
  const { cart } = useContext(productContext);
  return (
    <div
      className="container-fluid"
      id="navbarColor"
      style={{ backgroundColor: isVisible ? "" : "rgb(246, 252, 252)" }}
    >
      <div className="container p-0">
        <nav className="navbar navbar-expand-lg p-0">
          <div className="container-fluid">
            <Link className="navbar-brand brandLogo logoDoctor" to="/">
              <img src={logo} alt="logo" />
              <span>MaaDico</span>

              {/* Doctor */}
            </Link>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <Link className="nav-link active" aria-current="page" to="/">
                    {/* Home */}
                    <span className="mx-1">
                      <CiHome fontSize={30} />
                    </span>
                    <span> Home</span>
                  </Link>
                </li>

                <li className="nav-item">
                  <Link
                    className="nav-link active"
                    aria-current="page"
                    to="/product"
                  >
                    <span className="mx-1">
                      <TbFirstAidKitOff fontSize={30} />
                    </span>
                    <span> Maadico Kit</span>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    className="nav-link active shopCartPos"
                    aria-current="page"
                    to="/cart"
                  >
                    <span className="mx-1 shopCartPos">
                      <FiShoppingCart fontSize={30} />
                    </span>
                    <div className="shopCartRel bg-danger">
                      {cart?.length ? cart?.length : 0}
                    </div>
                    <span>Cart</span>
                  </Link>
                </li>
                {isAuthenticate ? (
                  <li className="nav-item">
                    <Link
                      to="/profile"
                      className="nav-link"
                      aria-disabled="true"
                    >
                      <span className="mx-1">
                        <CgProfile fontSize={30} />
                      </span>
                      <span>
                        <strong>
                          {auth?.user?.name &&
                            auth.user.name.charAt(0).toUpperCase() +
                              auth.user.name.slice(1)}
                        </strong>
                      </span>
                    </Link>
                  </li>
                ) : (
                  <li className="nav-item">
                    <Link to="/login" className="nav-link" aria-disabled="true">
                      {/* <span>
                        <b> Login</b>
                      </span> */}
                      <span className="mx-1">
                        {/* <CgProfile fontSize={25} /> */}
                        Login
                      </span>
                      <span>
                        <IoMdLogIn className="mx-1" />
                      </span>
                    </Link>
                  </li>
                )}
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default ShopHeader;
