import React, { useContext, useEffect } from "react";
import { UserContext, OrderContext } from "../context/Mycontext";
import { Link } from "react-router-dom";
import pcod from "../Images/pcod.PNG";
import thyroid from "../Images/thyroid.PNG";
import diabetes from "../Images/diabetes.PNG";
import weightLoss from "../Images/weightLoss.PNG";

const Purchase = () => {
  const { auth, setCurrentIndex } = useContext(UserContext);
  const { handleGetOrderProgramPlane, order } = useContext(OrderContext);

  const getImageSource = (id) => {
    switch (id) {
      case "6646e139ef20b15c1400a384":
        return pcod;
      case "6646e121ef20b15c1400a37f":
        return thyroid;
      case "6646e0e1ef20b15c1400a376":
        return weightLoss;
      case "6646e0d1ef20b15c1400a372":
        return diabetes;
      case "665da1844ba3fa709ec8f65e":
        return "https://img.freepik.com/free-photo/front-view-woman-working-spa_23-2150911797.jpg?t=st=1717658875~exp=1717662475~hmac=37ca7dbf808c840aa8d5826442121ad9c06baa0ea96faceefaf713f877ad2e3a&w=360";
      default:
        return "";
    }
  };
  useEffect(() => {
    const fetchProgramOrder = async () => {
      try {
        await handleGetOrderProgramPlane(auth);
      } catch (e) {
        console.log(e);
      }
    };
    fetchProgramOrder();
  }, []);

  const handleBack = () => {
    setCurrentIndex(1);
  };
  return order?.length > 0 ? (
    <section>
      <div className="container py-5">
        <div className="row d-flex justify-content-between align-items-center">
          {order.map((p) => (
            <div className="col-md-10 col-lg-8 col-xl-6 my-1">
              <div
                className="card card-stepper"
                style={{ borderRadius: "16px" }}
              >
                <div className="card-header p-4">
                  <div className="d-flex justify-content-between  atMobilePurchaseViewBelow">
                    <div>
                      <p className="text-muted mb-2">
                        {" "}
                        Order ID:
                        <span className="fw-bold text-body">{p?._id}</span>
                      </p>
                      <p className="text-muted mb-0">
                        {" "}
                        Place On:{" "}
                        <span className="fw-bold text-body">
                          {p?.DeliveredAt
                            ? new Date(p?.DeliveredAt).toLocaleDateString()
                            : "within 7 days"}
                        </span>{" "}
                      </p>
                      <p className="text-muted my-2">
                        {" "}
                        Subscription Status:
                        <span className="fw-bold text-body">
                          {p?.subscriptionType}
                        </span>
                      </p>
                    </div>
                    <div>
                      <h6 className="mb-0">
                        {" "}
                        <Link
                          to={`/program/${p?.pageNo}`}
                          className="globalColor"
                        >
                          View Details
                        </Link>{" "}
                      </h6>
                    </div>
                  </div>
                </div>
                <div className="card-body p-4">
                  <div className="d-flex justify-content-between align-items-center my-2">
                    <p className="text-muted mb-2">
                      {" "}
                      StartAt:
                      <span className="fw-bold text-body">
                        {new Date(p?.startAt).toLocaleDateString()}
                      </span>
                    </p>
                    <p className="text-muted mb-2">
                      {" "}
                      EndAt:
                      <span className="fw-bold text-body">
                        {new Date(p?.endDate).toLocaleDateString()}
                      </span>
                    </p>
                  </div>
                  <hr />
                  <div className="d-flex flex-row mb-4 pb-2">
                    <div className="flex-fill">
                      <h5 className="bold">{p?.ProgramId?.name}</h5>
                      <p className="text-muted">
                        {p?.address.address1} ,{p?.address.street} ,
                        {p?.address.district},{p?.address.city},
                        {p?.address.state},{p?.address.zip}
                      </p>
                      <h4 className="mb-3">
                        {" "}
                        ₹{p?.totalAmount}
                        <span className="small text-muted">
                          {" "}
                          via {p?.paymentMethod}{" "}
                        </span>
                      </h4>
                      <p className="text-muted">
                        Tracking Status on:{" "}
                        <span className="text-body">
                          {new Date(p?.updatedAt).toLocaleTimeString()} Today
                        </span>
                      </p>
                    </div>
                    <div>
                      <img
                        className="align-self-center img-fluid"
                        src={getImageSource(p?.ProgramId?._id)}
                        width="250"
                        alt=""
                      />
                    </div>
                  </div>
                  <div className="statusUpdate">
                    <h6>Status</h6>
                    <p>{p?.status}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  ) : (
    <div className="row text-center py-1" style={{ minHeight: "100vh" }}>
      <h1>You did not buy any plan till now</h1>
      <div className="m-0 p-0 g-0">
        <button className="btn globalBackColor px-3" onClick={handleBack}>
          <b> Plans</b>
        </button>
      </div>
    </div>
  );
};

export default Purchase;
