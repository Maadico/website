import React, { useContext, useEffect, useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from "../Images/MaaDico Logo - Monogram_2.png";
import { CgProfile } from "react-icons/cg";
import { useLocation } from "react-router-dom";
import { productContext, UserContext } from "../context/Mycontext";
import { FiShoppingCart } from "react-icons/fi";
import { CiMedicalClipboard } from "react-icons/ci";
import { IoMdLogIn } from "react-icons/io";
import { TbFirstAidKitOff } from "react-icons/tb";
import { CiHome } from "react-icons/ci";
import { FaProductHunt } from "react-icons/fa6";
import { TbRibbonHealth } from "react-icons/tb";
import { CiSearch } from "react-icons/ci";
import { ImCancelCircle } from "react-icons/im";
import Product from "../pages/Ecommerce/Product";
const ShopHeader = () => {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const { auth, setAuth, setIsAuthenticated, isAuthenticate } =
    useContext(UserContext);
  //   const isVisible = ["/product"].includes(pathname);
  const isVisible = pathname.startsWith("/product");
  const { cart, products } = useContext(productContext);
  const [filteredProduct, setFilteredProduct] = useState([]);
  const [isFind, setFsFind] = useState(true);
  const [isType, setIsType] = useState(true);
  const [isSearchDiaplay, setIsSearchDisplay] = useState(false);
  const searchRef = useRef(null);
  const handleRedirect = (p) => {
    setIsSearchDisplay(false);
    navigate(`/product/${p?._id}`);
  };

  const handleSearch = (e) => {
    const value = e.target.value?.toLowerCase();
    setIsType(false);
    if (!value) {
      setFsFind(true);
      setIsType(true);

      return;
    }
    const filterProduct = products.filter((p) =>
      p?.name?.toLowerCase().startsWith(value)
    );

    if (filterProduct.length !== 0) {
      const product = filterProduct.slice(0, 8);
      console.log(product);
      setFsFind(false);
      setFilteredProduct(product);
    } else {
      setFsFind(true);
    }
  };
  const handleHideDisplay = () => {
    setFilteredProduct([]);
    setFsFind(true);
    setIsSearchDisplay(false);
  };
  const handleShowDisPlay = () => {
    setFilteredProduct([]);
    setFsFind(true);
    setIsSearchDisplay(true);
  };
  function calculateNewPrice(originalPrice, discountPercentage) {
    const dis = discountPercentage ? discountPercentage : 0;
    // console.log(originalPrice, dis);
    const discountAmount = originalPrice * (dis / 100);
    const newPrice = originalPrice - discountAmount;
    return Math.floor(newPrice);
  }

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (searchRef.current && !searchRef.current.contains(event.target)) {
        setIsSearchDisplay(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);
  return (
    <div
      className="container-fluid "
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

            <div className="cartShowing">
              <div className="nav-link active shopCartPos">
                <span
                  className="mx-1 shopCartPos"
                  onClick={() => navigate("/cart")}
                >
                  <FiShoppingCart fontSize={30} />
                </span>
                <span
                  className="mx-3 shopCartPos"
                  onClick={() => handleShowDisPlay()}
                >
                  <CiSearch fontSize={30} />
                </span>
                <div className=" shopCartRel0 bg-danger">
                  {cart?.length ? cart?.length : 0}
                </div>
              </div>
            </div>

            {/* <div className="cartShowing">
              <Link
                className="nav-link active shopCartPos"
                aria-current="page"
                to="/cart"
              >
                <span className="mx-1 shopCartPos">
                  <CiSearch fontSize={30} />
                </span>
              </Link>
            </div> */}
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
              className="collapse navbar-collapse "
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
                      <TbRibbonHealth fontSize={30} />
                    </span>
                    <span> Products</span>
                  </Link>
                </li>
                <li className="nav-item cartNav">
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

                <li
                  className="nav-item cartNav my-2"
                  onClick={() => handleShowDisPlay()}
                  style={{ cursor: "pointer" }}
                >
                  {/* <Link
                    className="nav-link active shopCartPos"
                    aria-current="page"
                    to="/cart"
                  > */}
                  <span className="mx-1 shopCartPos">
                    <CiSearch fontSize={30} />
                  </span>

                  <span>Search</span>
                  {/* </Link> */}
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

            {/* serach bar popup */}
            {isSearchDiaplay && (
              <div className="searchATopLevel" ref={searchRef}>
                <div className="child d-flex justify-content-center align-items-center">
                  <input
                    type="search"
                    placeholder="Check Products"
                    class="form-control"
                    onChange={(e) => handleSearch(e)}
                  />
                  {isType && (
                    <div className="searchInnerInput">
                      <span>
                        <CiSearch fontSize={30} />
                      </span>
                    </div>
                  )}
                </div>
                <div className="cross" onClick={() => handleHideDisplay()}>
                  <span>
                    <ImCancelCircle className="crossIcon" fontSize={30} />
                  </span>
                </div>
                <div className="borderInnerInput"></div>
                {isFind && (
                  <div className="productsSearchDetailsBeforeSearch">
                    <div className="row">
                      <h3>You Might Want To Search</h3>
                    </div>
                    <div className="productList my-2">
                      {products?.slice(0, 6)?.map((p, i) => (
                        <p key={p?._id} onClick={() => handleRedirect(p)}>
                          {p?.name}
                        </p>
                      ))}
                    </div>
                  </div>
                )}
                {!isFind && (
                  <div className="productCardSearch my-3">
                    {filteredProduct.map((p, i) => (
                      <div
                        className="dividerVertically"
                        key={p?._id}
                        onClick={() => handleRedirect(p)}
                      >
                        <div className="left">
                          <img src={p?.productPic[0]} alt={p?.name} />
                        </div>
                        <div className="right">
                          <div className="upp">
                            <b>{p?.name}</b>
                          </div>
                          <div className="lowe">
                            <div className="upper">Discount {p?.discount}%</div>
                            <div className="lower">
                              ₹{calculateNewPrice(p?.price, p?.discount)}
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            )}
          </div>
        </nav>
      </div>
    </div>
  );
};

export default ShopHeader;
