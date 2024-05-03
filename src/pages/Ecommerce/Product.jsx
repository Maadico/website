import React from "react";
import { Link, useNavigate } from "react-router-dom";
import EcommerceLayout from "../../components/Ecommerce/EcommerceLayout";

const Product = () => {
  const navigate = useNavigate();
  return (
    <EcommerceLayout>
      <div className="product">
        <div className="container mt-100">
          <h1 className="py-2">Our Products</h1>
          <div className="row">
            {[1, 2, 3, 4, 5, 6, 7, 8].map((p, i) => (
              <div
                className="col-md-4 col-sm-6"
                onClick={() => navigate(`/product/${i}`)}
              >
                <div className="card mb-30">
                  <Link className="card-img-tiles" to="#" data-abc="true">
                    <div className="inner">
                      <div className="main-img">
                        <img
                          src="https://i.imgur.com/O0GMYuw.jpg"
                          alt="Category"
                        />
                      </div>
                      <div className="thumblist">
                        <img
                          src="https://i.imgur.com/ILEU18M.jpg"
                          alt="Category"
                        />
                        <img
                          src="https://i.imgur.com/2kePJmX.jpg"
                          alt="Category"
                        />
                      </div>
                    </div>
                  </Link>
                  <div className="card-body text-center">
                    <h4 className="card-title">Laptops</h4>
                    <p className="text-muted">Starting from $499</p>
                    <Link
                      className="btn btn-outline-primary btn-sm"
                      to="#"
                      data-abc="true"
                    >
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
