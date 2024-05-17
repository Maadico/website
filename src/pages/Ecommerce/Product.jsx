import React, { useContext, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import EcommerceLayout from "../../components/Ecommerce/EcommerceLayout";
import HomeCarousel from "../../components/Ecommerce/HomeCarousel";
import { productContext, UserContext } from "../../context/Mycontext";
import toast from "react-hot-toast";
import Loader from "../../components/Loader";
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
  } = useContext(productContext);
  const { auth } = useContext(UserContext);

  useEffect(() => {
    const fetchedProduct = async () => {
      await productGet(auth);
    };
    fetchedProduct();
  }, [cartLoad]);

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
    } else {
      toast("please first login", {
        style: {
          borderRadius: "10px",
          background: " rgb(24, 50, 91)",
          color: "#fff",
        },
      });
    }
  };
  return pLoader ? (
    <Loader />
  ) : (
    <EcommerceLayout>
      <div className="product">
        <HomeCarousel />
        <div className="container-fluid mt-100">
          <h1 className="py-2">Our Products</h1>
          <div className="row">
            {products.map((p, i) => (
              <div key={p?._id} className="col-md-4 col-sm-6">
                <div className="card mb-30">
                  <Link
                    className="card-img-tiles"
                    to={`/product/${p?._id}`}
                    data-abc="true"
                  >
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
                    <p className="text-muted">Starting from ₹{p.price}</p>
                    <Link to={`/product/${p?._id}`} className="btn viewDetails">
                      View Products
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </EcommerceLayout>
  );
};

export default Product;
