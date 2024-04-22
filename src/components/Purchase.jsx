import React from "react";

const Purchase = () => {
  return (
    <section>
      <div className="container py-5">
        <div className="row d-flex justify-content-between align-items-center">
          <div className="col-md-10 col-lg-8 col-xl-6 my-1">
            <div className="card card-stepper" style={{ borderRadius: "16px" }}>
              <div className="card-header p-4">
                <div className="d-flex justify-content-between align-items-center">
                  <div>
                    <p className="text-muted mb-2">
                      {" "}
                      Order ID{" "}
                      <span className="fw-bold text-body">1222528743</span>
                    </p>
                    <p className="text-muted mb-0">
                      {" "}
                      Place On{" "}
                      <span className="fw-bold text-body">
                        12,March 2019
                      </span>{" "}
                    </p>
                  </div>
                  <div>
                    <h6 className="mb-0">
                      {" "}
                      <a href="#">View Details</a>{" "}
                    </h6>
                  </div>
                </div>
              </div>
              <div className="card-body p-4">
                <div className="d-flex flex-row mb-4 pb-2">
                  <div className="flex-fill">
                    <h5 className="bold">DIABETES REVERSAL</h5>
                    <p className="text-muted">
                      MaaDico's Diabetes Harmony: Naturopathy, personalized
                      diets, yoga fusion.
                    </p>
                    <h4 className="mb-3">
                      {" "}
                      ₹299{" "}
                      <span className="small text-muted"> via (Online) </span>
                    </h4>
                    <p className="text-muted">
                      Tracking Status on:{" "}
                      <span className="text-body">
                        {new Date().toLocaleTimeString()} Today
                      </span>
                    </p>
                  </div>
                  <div>
                    <img
                      className="align-self-center img-fluid"
                      src="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/E-commerce/Products/6.webp"
                      width="250"
                      alt=""
                    />
                  </div>
                </div>
                <div className="statusUpdate">
                  <h6>Status</h6>
                  <p>Processing</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Purchase;
