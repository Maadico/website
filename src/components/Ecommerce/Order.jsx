import React, { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { orderContext, UserContext } from "../../context/Mycontext";

const Order = () => {
  const navigate = useNavigate();
  const { handleGetOrders, oLoader, order } = useContext(orderContext);
  const { auth } = useContext(UserContext);
  useEffect(() => {
    const fetchOrders = async () => {
      await handleGetOrders(auth);
    };
    fetchOrders();
  }, []);
  return (
    <div className="product mb-2">
      {order?.length !== 0 ? (
        <div className="ordersPage">
          {order?.map((or, i) => (
            <>
              <table class="table">
                <thead>
                  <tr>
                    <th scope="col">S.No</th>
                    <th scope="col">Image</th>
                    <th scope="col">Name</th>
                    <th scope="col">Quantity</th>
                    <th scope="col">Price</th>
                  </tr>
                </thead>
                <tbody>
                  {or?.products?.map((o, i) => (
                    <tr>
                      <th scope="row">{i + 1}</th>
                      <td>
                        <img
                          src={o?.product?.productPic[0]}
                          alt={o?.product?.name}
                          height="100"
                          width="100"
                        />
                      </td>
                      <td> {o?.product?.name}</td>
                      <td> {o?.quantity}</td>
                      <td>₹{o?.product?.price}</td>
                    </tr>
                  ))}
                </tbody>
              </table>

              <div className="row">
                <div>
                  <span>
                    <b>status</b> :{or?.status}
                  </span>
                  <span className="mx-3">
                    <b>totalAmount</b>: ₹{or?.totalAmount} (Including Delivery
                    Charge)
                  </span>
                  <span>
                    <b>Order Date::</b>{" "}
                    {new Date(or?.createdAt).toLocaleDateString()}
                  </span>
                  <div className="my-2">
                    <b> Address:</b> {or?.address.address1} ,
                    {or?.address.street} ,{or?.address.district},
                    {or?.address.city},{or?.address.state},{or?.address.zip}
                  </div>

                  <div>
                    <b>PaymentMethod: </b>
                    {or?.paymentMethod}
                  </div>
                  <div>
                    <b>MerchantTransactionId: </b>
                    {or?.merchantTransactionId}
                  </div>
                  <div>
                    <b>placedDate: </b>
                    {or?.placedDate
                      ? new Date(or?.placedDate).toLocaleDateString()
                      : "within 7 days"}
                  </div>
                </div>
              </div>
            </>
          ))}
        </div>
      ) : (
        <div className="row text-center py-1" style={{ minHeight: "100vh" }}>
          <h1>You have not bought any Medicine</h1>
          <div className="m-0 p-0 g-0">
            <button
              className="btn btn-primary px-3"
              onClick={() => navigate("/product")}
            >
              <b> Purchase</b>
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Order;
