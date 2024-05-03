import React from "react";
import EcommerceLayout from "../../components/Ecommerce/EcommerceLayout";
import { Link } from "react-router-dom";

const Cart = () => {
  return (
    <EcommerceLayout>
      <div className="product">
        <div className="container">
          <div className="row">
            <aside className="col-lg-9">
              <div className="card">
                <div className="table-responsive">
                  <table className="table table-borderless table-shopping-cart">
                    <thead className="text-muted">
                      <tr className="small text-uppercase">
                        <th scope="col">Product</th>
                        <th scope="col" width="120">
                          Quantity
                        </th>
                        <th scope="col" width="120">
                          Price
                        </th>
                        <th
                          scope="col"
                          className="text-right d-none d-md-block"
                          width="200"
                        ></th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>
                          <figure className="itemside align-items-center">
                            <div className="aside">
                              <img
                                src="https://i.imgur.com/1eq5kmC.png"
                                className="img-sm"
                              />
                            </div>
                            <figcaption className="info">
                              <h5> Tshirt with round nect</h5>

                              <p className="text-muted small">
                                SIZE: L <br /> Brand: MAXTRA
                              </p>
                            </figcaption>
                          </figure>
                        </td>
                        <td className="incDecController">
                          <input
                            className="form-control"
                            type="number"
                            placeholder="1"
                          />
                        </td>
                        <td>
                          <div className="price-wrap">
                            {" "}
                            <var className="price">$10.00</var>{" "}
                            <small className="text-muted"> $9.20 each </small>{" "}
                          </div>
                        </td>
                        <td className="text-right d-none d-md-block ">
                          <button className="btn btn-light btn-lg">
                            {" "}
                            Remove
                          </button>{" "}
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </aside>
            <aside className="col-lg-3">
              <div className="card mb-3">
                <div className="card-body">
                  <form>
                    <div className="form-group">
                      {" "}
                      <label>Have coupon?</label>
                      <div className="input-group">
                        {" "}
                        <input
                          type="text"
                          className="form-control coupon"
                          name=""
                          placeholder="Coupon code"
                        />{" "}
                        <span className="input-group-append">
                          {" "}
                          <button className="btn btn-primary btn-apply coupon btn-lg py-3">
                            Apply
                          </button>{" "}
                        </span>{" "}
                      </div>
                    </div>
                  </form>
                </div>
              </div>
              <div className="card">
                <div className="card-body">
                  <dl className="dlist-align">
                    <dt>Total price:</dt>
                    <dd className="text-right ml-3">$69.97</dd>
                  </dl>
                  <dl className="dlist-align">
                    <dt>Discount:</dt>
                    <dd className="text-right text-danger ml-3">- $10.00</dd>
                  </dl>
                  <dl className="dlist-align">
                    <dt>Total:</dt>
                    <dd className="text-right text-dark b ml-3">
                      <strong>$59.97</strong>
                    </dd>
                  </dl>
                  <hr />{" "}
                  <button className="btn btn-out btn-primary btn-square btn-main">
                    {" "}
                    Make Purchase{" "}
                  </button>{" "}
                  <Link
                    to="/product"
                    className="btn btn-out btn-success btn-square btn-main mt-2"
                  >
                    Continue Shopping
                  </Link>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </div>
    </EcommerceLayout>
  );
};

export default Cart;
