import React from "react";
import { useNavigate } from "react-router-dom";

const Order = () => {
  const navigate = useNavigate();
  return (
    <div className="product">
      {true ? (
        <div className="ordersPage">
          {[1, 2].map((or, i) => (
            <table class="table">
              <thead>
                <tr>
                  <th scope="col">S.No</th>
                  <th scope="col">Image</th>
                  <th scope="col">Name</th>
                  <th scope="col">Quantity</th>
                  <th scope="col">Price</th>
                  <th scope="col">
                    <button className="btn btn-primary">View</button>
                  </th>
                </tr>
              </thead>
              <tbody>
                {[1, 2].map((o, i) => (
                  <tr>
                    <th scope="row">{i + 1}</th>
                    <td>
                      <img
                        src="https://i.imgur.com/1eq5kmC.png"
                        alt="product"
                        height="100"
                        width="100"
                      />
                    </td>
                    <td>Otto</td>
                    <td>@mdo</td>
                    <td>@mdo</td>
                    <td>@mdo</td>
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
