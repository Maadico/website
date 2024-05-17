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
    <div className="product">
      {order?.length !== 0 ? (
        <div className="ordersPage">
          {order?.map((or, i) => (
            <table class="table">
              <thead>
                <tr>
                  <th scope="col">S.No</th>
                  <th scope="col">Image</th>
                  <th scope="col">Name</th>
                  <th scope="col">Quantity</th>
                  <th scope="col">Price</th>
                  <th scope="col">status</th>

                  <th scope="col">
                    <button className="btn btn-primary">View</button>
                  </th>
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
                    <td> {o?.name}</td>
                    <td> {o?.qty}</td>
                    <td>{o?.product?.price}</td>

                    <td> {or?.status}</td>
                    <td>view</td>
                  </tr>
                ))}
              </tbody>
            </table>
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
